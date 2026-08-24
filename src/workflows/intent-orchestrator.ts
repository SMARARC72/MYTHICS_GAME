import { transition, type ActionState } from "@/src/workflows/action-machine";
import type { DurableWorkflowStore } from "@/src/workflows/durable-store";
export type IntentDraft = Readonly<{ goal: string; method: string; stateVersion: string }>;
export type IntentProposal = Readonly<{ proposalId: string; goal: string; method: string; difficulty: number; accessibleStakes: string[]; stateVersion: string }>;
export interface IntentGateway { interpret(draft: IntentDraft): Promise<IntentProposal>; commit(proposal: IntentProposal, idempotencyKey: string): Promise<unknown>; lookup(idempotencyKey: string): Promise<unknown>; }
export class IntentOrchestrator {
  state: ActionState = "drafting";
  constructor(private store: DurableWorkflowStore, private gateway: IntentGateway, private scope: string) {}
  async saveDraft(draft: IntentDraft) { await this.store.putDraft(this.scope, draft); }
  loadDraft() { return this.store.getDraft<IntentDraft>(this.scope); }
  async interpret(draft: IntentDraft) { await this.saveDraft(draft); this.state=transition(this.state,"INTERPRET"); const proposal=await this.gateway.interpret(draft); this.state=transition(this.state,"INTERPRETED"); return proposal; }
  async commit(proposal: IntentProposal, idempotencyKey: string) { this.state=transition(this.state,"CONFIRM"); await this.store.putPending({idempotencyKey,commandHash:JSON.stringify(proposal),operationId:"commitAction",createdAt:new Date(0).toISOString()}); this.state=transition(this.state,"KEY_PERSISTED"); try { const receipt=await this.gateway.commit(proposal,idempotencyKey); this.state=transition(this.state,"RECEIPT"); return receipt; } catch { this.state=transition(this.state,"UNKNOWN_STATUS"); const receipt=await this.gateway.lookup(idempotencyKey); this.state=transition(this.state,"LOOKUP_CONFIRMED"); return receipt; } }
}
