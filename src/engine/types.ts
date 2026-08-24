export type SliceOutcome =
  | "success"
  | "mixed"
  | "failure"
  | "impossible"
  | "refusal"
  | "interruption"
  | "stale-conflict";

export interface CampaignState {
  campaignId: string;
  stateVersion: number;
  ledgerMinute: number;
  location: "drowned-archive-threshold" | "drowned-archive-vault";
  tidePressure: number;
  vitality: number;
  evidence: readonly string[];
  relationshipEvidence: readonly string[];
  chronicle: readonly string[];
}

export interface ActionCommand {
  commandId: string;
  campaignId: string;
  idempotencyKey: string;
  expectedStateVersion: number;
  goal: string;
  method: string;
  actorModifier: number;
  difficulty: number;
}

export interface RollRecord {
  seed: number;
  die: "d20";
  natural: number;
  modifier: number;
  total: number;
  difficulty: number;
  margin: number;
  rulesVersion: "drowned-archive-rules/1";
  tuningVersion: "drowned-archive-tuning/1";
}

export interface CampaignEvent {
  eventId: string;
  campaignId: string;
  sequence: number;
  commandId: string;
  idempotencyKey: string;
  ledgerMinute: number;
  type: "slice.action-resolved";
  outcome: Exclude<SliceOutcome, "stale-conflict">;
  summary: string;
  roll?: RollRecord;
  effects: Readonly<{
    ledgerMinutes: number;
    tidePressure: number;
    vitality: number;
    location?: CampaignState["location"];
    evidence?: string;
    relationshipEvidence?: string;
  }>;
}

export type CommandReceipt = Readonly<{
  commandId: string;
  idempotencyKey: string;
  campaignId: string;
  status: "committed" | "unknown" | "rejected";
  outcome?: SliceOutcome;
  eventSequence?: number;
  stateVersion: number;
  message: string;
}>;

export interface CampaignSnapshot {
  campaignId: string;
  throughSequence: number;
  state: CampaignState;
}
