import type { ProjectionBasis } from "@/src/ports/frontend-ports";
export function projectionKey(basis: ProjectionBasis, resource: string): string {
  const required = [basis.contractVersion, resource];
  if (required.some(value => !value)) throw new Error("Projection keys require contract version and resource");
  return [basis.campaignId ?? "global", basis.viewpointId ?? "anonymous", basis.contractVersion, basis.stateVersion ?? "initial", basis.knowledgeSnapshotId ?? "none", resource].join("::");
}
