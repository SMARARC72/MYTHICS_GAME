import { replay } from "../engine/reducer";
import { resolveAction } from "../engine/rules";
import type { ActionCommand, CampaignEvent, CampaignState, CommandReceipt } from "../engine/types";
import { InMemoryCampaignLedger } from "./persistence/in-memory-ledger";

export class CampaignService {
  readonly #initial = new Map<string, CampaignState>();
  constructor(readonly ledger = new InMemoryCampaignLedger()) {}

  create(initial: CampaignState): void {
    if (this.#initial.has(initial.campaignId)) throw new Error(`Campaign already exists: ${initial.campaignId}`);
    this.#initial.set(initial.campaignId, structuredClone(initial));
    this.ledger.saveSnapshot({ campaignId: initial.campaignId, throughSequence: initial.stateVersion, state: initial });
  }

  state(campaignId: string): CampaignState {
    const initial = this.#initial.get(campaignId);
    const snapshot = this.ledger.snapshot(campaignId);
    const basis = initial ?? snapshot?.state;
    if (!basis) throw new Error(`Unknown campaign: ${campaignId}`);
    return replay(structuredClone(basis), this.ledger.events(campaignId, basis.stateVersion));
  }

  commit(command: ActionCommand, options: { returnUnknownAfterCommit?: boolean } = {}): CommandReceipt {
    const duplicate = this.ledger.receipt(command.idempotencyKey);
    if (duplicate && (duplicate.campaignId !== command.campaignId || duplicate.commandId !== command.commandId)) {
      throw new Error("Idempotency key was already used for a different command");
    }
    if (duplicate && duplicate.status !== "unknown") return duplicate;
    const current = this.state(command.campaignId);
    if (command.expectedStateVersion !== current.stateVersion) {
      const stale: CommandReceipt = { commandId: command.commandId, idempotencyKey: command.idempotencyKey, campaignId: command.campaignId, status: "rejected", outcome: "stale-conflict", stateVersion: current.stateVersion, message: "The reviewed state is stale; reinterpret before retrying." };
      this.ledger.reserve(stale);
      return stale;
    }
    this.ledger.reserve({ commandId: command.commandId, idempotencyKey: command.idempotencyKey, campaignId: command.campaignId, status: "unknown", stateVersion: current.stateVersion, message: "Commit status is not yet known." });
    const resolution = resolveAction(current, command);
    const sequence = current.stateVersion + 1;
    const event: CampaignEvent = { eventId: `${command.campaignId}:${sequence}`, campaignId: command.campaignId, sequence, commandId: command.commandId, idempotencyKey: command.idempotencyKey, ledgerMinute: current.ledgerMinute + resolution.effects.ledgerMinutes, type: "slice.action-resolved", ...resolution };
    const committed: CommandReceipt = { commandId: command.commandId, idempotencyKey: command.idempotencyKey, campaignId: command.campaignId, status: "committed", outcome: resolution.outcome, eventSequence: sequence, stateVersion: sequence, message: resolution.summary };
    this.ledger.commit(event, committed);
    this.ledger.saveSnapshot({ campaignId: command.campaignId, throughSequence: sequence, state: this.state(command.campaignId) });
    return options.returnUnknownAfterCommit ? { ...committed, status: "unknown", message: "Connection ended after send; resolve status before retrying." } : committed;
  }

  resolveStatus(idempotencyKey: string): CommandReceipt | undefined { return this.ledger.receipt(idempotencyKey); }
}
