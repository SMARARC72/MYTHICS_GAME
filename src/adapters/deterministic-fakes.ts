import committedReceiptJson from "@/contracts/source/c1_contracts/fixtures/positive/committed-receipt.json";
import contextLensJson from "@/contracts/source/c1_contracts/fixtures/positive/context-lens-disputed.json";
import interpretedProposalJson from "@/contracts/source/c1_contracts/fixtures/positive/interpreted-proposal.json";
import proposalForecastJson from "@/contracts/source/c1_contracts/fixtures/positive/proposal-forecast.json";
import intentCapabilityJson from "@/contracts/source/c1_contracts/fixtures/positive/intent-capability.json";
import stageFrameJson from "@/contracts/source/c1_contracts/fixtures/positive/stage-frame-current.json";
import unknownReceiptJson from "@/contracts/source/c1_contracts/fixtures/positive/unknown-commit-receipt.json";
import worldStripJson from "@/contracts/source/c1_contracts/fixtures/positive/world-strip-current.json";
import { validateContract } from "@/contracts/generated/validators";
import type { CommandOperationId, CommandOperationMap, CommandReceipt, ProjectionOperationId, ProjectionOperationMap } from "@/src/domain/contracts";
import type { CommandPort, DraftPersistencePort, ProjectionBasis, ProjectionQueryPort, ReceiptLookupPort } from "@/src/ports/frontend-ports";

function admitted<T>(schemaRef: string, input: unknown): T {
  const result = validateContract<T>(schemaRef, input);
  if (!result.ok) throw new Error(`Invalid approved deterministic fixture: ${schemaRef}`);
  return result.value;
}

const projectionFixtures: { [Id in ProjectionOperationId]: ProjectionOperationMap[Id]["output"] } = {
  getStageFrame: admitted("https://contracts.mythic-rpg.local/c1/schemas/read-models/core-loop.schema.json#/$defs/StageFrame", stageFrameJson),
  getWorldStripStatus: admitted("https://contracts.mythic-rpg.local/c1/schemas/read-models/core-loop.schema.json#/$defs/WorldStripStatus", worldStripJson),
  getEntityContextLens: admitted("https://contracts.mythic-rpg.local/c1/schemas/read-models/core-loop.schema.json#/$defs/EntityContextLens", contextLensJson),
  getIntentCapability: admitted("https://contracts.mythic-rpg.local/c1/schemas/read-models/core-loop.schema.json#/$defs/IntentCapability", intentCapabilityJson),
};
const receiptRef = "https://contracts.mythic-rpg.local/c1/schemas/commands/core-loop.schema.json#/$defs/CommandReceipt";

export class MemoryDrafts implements DraftPersistencePort {
  private values = new Map<string, { version: string; draft: unknown }>();
  async put<T>(scope: string, version: string, draft: T) { this.values.set(scope, { version, draft }); }
  async get<T>(scope: string) { return this.values.get(scope)?.draft as T | undefined; }
  async remove(scope: string) { this.values.delete(scope); }
}

export class DeterministicServiceFake implements ProjectionQueryPort, CommandPort, ReceiptLookupPort {
  private receipts = new Map<string, CommandReceipt>();
  async query<Id extends ProjectionOperationId>(operationId: Id, _basis: ProjectionBasis, _input?: ProjectionOperationMap[Id]["input"]): Promise<ProjectionOperationMap[Id]["output"]> {
    return projectionFixtures[operationId];
  }
  async send<Id extends CommandOperationId>(operationId: Id, _command: CommandOperationMap[Id]["input"], idempotencyKey: string): Promise<CommandOperationMap[Id]["output"]> {
    if (operationId === "interpretIntent" || operationId === "reviseProposal") {
      return admitted("https://contracts.mythic-rpg.local/c1/schemas/read-models/core-loop.schema.json#/$defs/InterpretedProposal", interpretedProposalJson) as CommandOperationMap[Id]["output"];
    }
    if (operationId === "forecastProposal") {
      return admitted("https://contracts.mythic-rpg.local/c1/schemas/read-models/core-loop.schema.json#/$defs/ProposalForecast", proposalForecastJson) as CommandOperationMap[Id]["output"];
    }
    const existing = this.receipts.get(idempotencyKey);
    if (existing) return existing as CommandOperationMap[Id]["output"];
    const receipt = admitted<CommandReceipt>(receiptRef, committedReceiptJson);
    this.receipts.set(idempotencyKey, receipt);
    return receipt as CommandOperationMap[Id]["output"];
  }
  async resolve(idempotencyKey: string): Promise<CommandReceipt> {
    return this.receipts.get(idempotencyKey) ?? admitted<CommandReceipt>(receiptRef, unknownReceiptJson);
  }
}
