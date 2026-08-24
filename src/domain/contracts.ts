/** Application-facing aliases for generated, approved contract payloads.
 * Runtime code must admit these values through contracts/generated/validators. */
import type {
  C1ContractsSchemasCommandsCoreLoop as C1Commands,
  C1ContractsSchemasEventsCoreLoop as C1Events,
  C1ContractsSchemasReadModelsCoreLoop as C1ReadModels,
} from "../../contracts/generated/types";

export type InterpretIntentCommand = C1Commands.InterpretIntentCommand;
export type ReviseProposalCommand = C1Commands.ReviseProposalCommand;
export type ForecastProposalCommand = C1Commands.ForecastProposalCommand;
export type CommitActionCommand = C1Commands.CommitActionCommand;
export type ResolveCommitStatusCommand = C1Commands.ResolveCommitStatusCommand;
export type CommandReceipt = C1Commands.CommandReceipt;
export type WorldStripStatus = C1ReadModels.WorldStripStatus;
export type StageFrame = C1ReadModels.StageFrame;
export type EntityContextLens = C1ReadModels.EntityContextLens;
export type IntentCapability = C1ReadModels.IntentCapability;
export type InterpretedProposal = C1ReadModels.InterpretedProposal;
export type ProposalForecast = C1ReadModels.ProposalForecast;
export type ResolutionBeat = C1ReadModels.ResolutionBeat;
export type CoreLoopEvent = C1Events.MythicRPGC1CoreLoopEvents;

export interface ProjectionOperationMap {
  getStageFrame: { input: undefined; output: StageFrame };
  getWorldStripStatus: { input: undefined; output: WorldStripStatus };
  getEntityContextLens: { input: Readonly<{ entityId: string }>; output: EntityContextLens };
  getIntentCapability: { input: undefined; output: IntentCapability };
}
export interface CommandOperationMap {
  interpretIntent: { input: InterpretIntentCommand; output: InterpretedProposal };
  reviseProposal: { input: ReviseProposalCommand; output: InterpretedProposal };
  forecastProposal: { input: ForecastProposalCommand; output: ProposalForecast };
  commitAction: { input: CommitActionCommand; output: CommandReceipt };
  resolveCommitStatus: { input: ResolveCommitStatusCommand; output: CommandReceipt };
}
export type ProjectionOperationId = keyof ProjectionOperationMap;
export type CommandOperationId = keyof CommandOperationMap;
