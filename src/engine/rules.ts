import { rollD20, seedFrom } from "./rng";
import type { ActionCommand, CampaignEvent, CampaignState, RollRecord } from "./types";

type Resolution = Pick<CampaignEvent, "outcome" | "summary" | "effects" | "roll">;

function normalized(command: ActionCommand): string {
  return `${command.goal} ${command.method}`.toLocaleLowerCase("en");
}

export function resolveAction(state: CampaignState, command: ActionCommand): Resolution {
  const intent = normalized(command);
  if (/reverse (ledger )?time|undo history|resurrect/.test(intent)) {
    return { outcome: "impossible", summary: "Ledger Time cannot be reversed by this action.", effects: { ledgerMinutes: 0, tidePressure: 0, vitality: 0 } };
  }
  if (/force ilya|make ilya betray|compel ilya|break (her|their) oath/.test(intent)) {
    return { outcome: "refusal", summary: "Ilya refuses to violate the archive oath.", effects: { ledgerMinutes: 1, tidePressure: 0, vitality: 0, relationshipEvidence: "Ilya openly upheld the archive oath." } };
  }
  if (/wait|listen for|hold position/.test(intent)) {
    return { outcome: "interruption", summary: "The collapsing stacks interrupt the action and demand an immediate choice.", effects: { ledgerMinutes: 1, tidePressure: 1, vitality: 0 } };
  }

  const seed = seedFrom(command.campaignId, command.commandId, String(state.stateVersion));
  const natural = rollD20(seed);
  const total = natural + command.actorModifier;
  const margin = total - command.difficulty;
  const roll: RollRecord = { seed, die: "d20", natural, modifier: command.actorModifier, total, difficulty: command.difficulty, margin, rulesVersion: "drowned-archive-rules/1", tuningVersion: "drowned-archive-tuning/1" };
  if (margin >= 5) return { outcome: "success", summary: "The threshold yields and the way into the archive is secured.", roll, effects: { ledgerMinutes: 3, tidePressure: 0, vitality: 0, location: "drowned-archive-vault", evidence: "threshold-sigil-rubbing" } };
  if (margin >= 0) return { outcome: "mixed", summary: "The threshold opens, but the rising tide exacts a cost.", roll, effects: { ledgerMinutes: 5, tidePressure: 1, vitality: -1, location: "drowned-archive-vault", evidence: "damaged-threshold-sigil-rubbing" } };
  return { outcome: "failure", summary: "The threshold remains sealed while the tide rises.", roll, effects: { ledgerMinutes: 4, tidePressure: 1, vitality: 0 } };
}
