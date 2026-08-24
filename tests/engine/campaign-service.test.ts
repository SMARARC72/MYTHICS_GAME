import { describe, expect, it } from "vitest";
import { rollD20, seedFrom } from "../../src/engine/rng";
import { replay } from "../../src/engine/reducer";
import type { ActionCommand, CampaignState } from "../../src/engine/types";
import { CampaignService } from "../../src/server/campaign-service";

const initial = (campaignId = "drowned-archive"): CampaignState => ({
  campaignId, stateVersion: 0, ledgerMinute: 720, location: "drowned-archive-threshold",
  tidePressure: 0, vitality: 4, evidence: [], relationshipEvidence: [], chronicle: [],
});

function command(overrides: Partial<ActionCommand> = {}): ActionCommand {
  return { commandId: "action-1", campaignId: "drowned-archive", idempotencyKey: "key-1", expectedStateVersion: 0, goal: "Open the threshold", method: "Trace the sigil", actorModifier: 30, difficulty: 10, ...overrides };
}

describe("Drowned Archive campaign engine", () => {
  it("resolves seeded rolls into success, mixed, and failure branches", () => {
    const success = new CampaignService(); success.create(initial());
    expect(success.commit(command()).outcome).toBe("success");
    expect(success.state("drowned-archive")).toMatchObject({ location: "drowned-archive-vault", stateVersion: 1 });

    const mixedId = "mixed-action";
    const natural = rollD20(seedFrom("mixed-campaign", mixedId, "0"));
    const mixed = new CampaignService(); mixed.create(initial("mixed-campaign"));
    expect(mixed.commit(command({ campaignId: "mixed-campaign", commandId: mixedId, idempotencyKey: "mixed-key", actorModifier: 10 - natural })).outcome).toBe("mixed");

    const failure = new CampaignService(); failure.create(initial("failure-campaign"));
    expect(failure.commit(command({ campaignId: "failure-campaign", idempotencyKey: "failure-key", actorModifier: -30 })).outcome).toBe("failure");
  });

  it.each([
    ["impossible", { goal: "Reverse Ledger Time", method: "Undo history" }],
    ["refusal", { goal: "Enter", method: "Make Ilya betray their oath" }],
    ["interruption", { goal: "Learn more", method: "Wait and listen for movement" }],
  ] as const)("resolves the %s non-roll branch", (outcome, intent) => {
    const service = new CampaignService(); service.create(initial());
    expect(service.commit(command(intent)).outcome).toBe(outcome);
  });

  it("rejects stale reviewed state without appending an event", () => {
    const service = new CampaignService(); service.create(initial());
    service.commit(command());
    const receipt = service.commit(command({ commandId: "action-2", idempotencyKey: "key-2", expectedStateVersion: 0 }));
    expect(receipt).toMatchObject({ status: "rejected", outcome: "stale-conflict", stateVersion: 1 });
    expect(service.ledger.events("drowned-archive")).toHaveLength(1);
  });

  it("deduplicates idempotency keys and resolves unknown transport status", () => {
    const service = new CampaignService(); service.create(initial());
    const unknown = service.commit(command(), { returnUnknownAfterCommit: true });
    expect(unknown.status).toBe("unknown");
    expect(service.resolveStatus("key-1")?.status).toBe("committed");
    expect(service.commit(command()).eventSequence).toBe(1);
    expect(service.ledger.events("drowned-archive")).toHaveLength(1);
  });

  it("rejects reuse of an idempotency key for a different command", () => {
    const service = new CampaignService(); service.create(initial());
    service.commit(command());
    expect(() => service.commit(command({ commandId: "different-action" }))).toThrow("different command");
  });

  it("replays the append-only ledger and restores from an in-process snapshot", () => {
    const service = new CampaignService(); service.create(initial());
    service.commit(command());
    const events = service.ledger.events("drowned-archive");
    expect(replay(initial(), events)).toEqual(service.state("drowned-archive"));
    const restarted = new CampaignService(service.ledger);
    expect(restarted.state("drowned-archive")).toEqual(service.state("drowned-archive"));
  });

  it("detects ordered event gaps during replay", () => {
    const service = new CampaignService(); service.create(initial()); service.commit(command());
    const event = service.ledger.events("drowned-archive")[0];
    expect(() => replay(initial(), [{ ...event, sequence: 2 }])).toThrow("Event gap");
  });
});
