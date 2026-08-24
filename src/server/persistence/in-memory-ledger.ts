import type { CampaignEvent, CampaignSnapshot, CommandReceipt } from "../../engine/types";

export class InMemoryCampaignLedger {
  readonly #events = new Map<string, CampaignEvent[]>();
  readonly #receipts = new Map<string, CommandReceipt>();
  readonly #snapshots = new Map<string, CampaignSnapshot>();

  events(campaignId: string, afterSequence = 0): readonly CampaignEvent[] {
    return (this.#events.get(campaignId) ?? []).filter((event) => event.sequence > afterSequence);
  }

  receipt(idempotencyKey: string): CommandReceipt | undefined { return this.#receipts.get(idempotencyKey); }

  reserve(receipt: CommandReceipt): CommandReceipt {
    const existing = this.#receipts.get(receipt.idempotencyKey);
    if (existing) return existing;
    this.#receipts.set(receipt.idempotencyKey, receipt);
    return receipt;
  }

  commit(event: CampaignEvent, receipt: CommandReceipt): CommandReceipt {
    const existing = this.#receipts.get(receipt.idempotencyKey);
    if (existing?.status === "committed" || existing?.status === "rejected") return existing;
    const events = this.#events.get(event.campaignId) ?? [];
    const expected = events.length + 1;
    if (event.sequence !== expected) throw new Error(`Append conflict: expected sequence ${expected}`);
    events.push(Object.freeze(event));
    this.#events.set(event.campaignId, events);
    this.#receipts.set(receipt.idempotencyKey, Object.freeze(receipt));
    return receipt;
  }

  saveSnapshot(snapshot: CampaignSnapshot): void {
    const current = this.#snapshots.get(snapshot.campaignId);
    if (!current || snapshot.throughSequence >= current.throughSequence) this.#snapshots.set(snapshot.campaignId, structuredClone(snapshot));
  }

  snapshot(campaignId: string): CampaignSnapshot | undefined {
    const value = this.#snapshots.get(campaignId);
    return value ? structuredClone(value) : undefined;
  }
}
