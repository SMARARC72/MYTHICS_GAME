import type { CommandOperationId, CommandOperationMap, CommandReceipt, CoreLoopEvent, ProjectionOperationId, ProjectionOperationMap } from "../domain/contracts";

/** Vendor-neutral UI-04 ports. Payloads cross the generated, runtime-validated
 * contract boundary before they reach these orchestration interfaces. */
export type ProjectionBasis = Readonly<{ campaignId?: string; viewpointId?: string; contractVersion: string; stateVersion?: string; knowledgeSnapshotId?: string }>;
export interface ProjectionQueryPort {
  query<Id extends ProjectionOperationId>(operationId: Id, basis: ProjectionBasis, input?: ProjectionOperationMap[Id]["input"]): Promise<ProjectionOperationMap[Id]["output"]>;
}
export interface CommandPort {
  send<Id extends CommandOperationId>(operationId: Id, command: CommandOperationMap[Id]["input"], idempotencyKey: string): Promise<CommandOperationMap[Id]["output"]>;
}
export interface ReceiptLookupPort { resolve(idempotencyKey: string, commandId?: string): Promise<CommandReceipt>; }
export interface OrderedEventPort { connect(basis: ProjectionBasis, cursor?: string): AsyncIterable<CoreLoopEvent>; }
export interface DraftPersistencePort { put<T>(scope: string, version: string, draft: T): Promise<void>; get<T>(scope: string): Promise<T | undefined>; remove(scope: string): Promise<void>; }
export interface PreferencePort { read<T>(profile: "accessibility" | "content" | "localization"): Promise<T>; update<Command, Result>(profile: string, command: Command): Promise<Result>; }
export interface MediaPort { query<Input, Output>(operationId: string, input: Input): Promise<Output>; command<Input, Output>(operationId: string, input: Input): Promise<Output>; }
export interface FocusAnnouncementPort { focus(target: string, fallback: string): void; announce(eventId: string, message: string, priority: "polite" | "assertive"): void; }
