import campaignSeed from "@/content/drowned-archive/v1.0.0/campaign.json";

export const KNOWLEDGE_CLASSES = ["perceived", "reported", "inferred", "private", "hidden"] as const;
export const PUBLIC_KNOWLEDGE_CLASSES = ["perceived", "reported", "inferred"] as const;
export const BRANCH_KINDS = ["success", "mixed", "failure", "impossible", "refusal", "interruption", "stale-conflict", "unknown-commit"] as const;

export type KnowledgeClass = (typeof KNOWLEDGE_CLASSES)[number];
export type PublicKnowledgeClass = (typeof PUBLIC_KNOWLEDGE_CLASSES)[number];
export type BranchKind = (typeof BRANCH_KINDS)[number];

export interface CanonicalFact {
  id: string;
  classification: KnowledgeClass;
  summary: string;
  knownBy: string[];
  revealCondition?: string;
}

export interface CanonicalCampaignContent {
  contentVersion: string;
  campaignId: string;
  title: string;
  ledgerTime: string;
  entrySceneId: string;
  viewpoints: string[];
  facts: CanonicalFact[];
  actors: Array<{
    id: string;
    name: string;
    role: "player-character" | "autonomous-npc";
    publicDescription: string;
    privatePolicy?: { driveFactId: string; refusedMethods: string[] };
  }>;
  scenes: Array<{
    id: string;
    title: string;
    description: string;
    visibleFactIds: string[];
    suggestedActions: Array<{ id: string; label: string }>;
    pressure: { label: string; value: number; maximum: number };
  }>;
  branches: Array<{ id: string; kind: BranchKind; summary: string; ledgerMinutes: number }>;
}

export function validateCampaignContent(value: CanonicalCampaignContent): readonly string[] {
  const errors: string[] = [];
  const factIds = new Set(value.facts.map((fact) => fact.id));
  const actorIds = new Set(value.actors.map((actor) => actor.id));
  const sceneIds = new Set(value.scenes.map((scene) => scene.id));
  if (!value.contentVersion.match(/^drowned-archive@\d+\.\d+\.\d+$/)) errors.push("contentVersion must be versioned");
  if (!sceneIds.has(value.entrySceneId)) errors.push("entrySceneId must reference a scene");
  for (const viewpoint of value.viewpoints) if (!actorIds.has(viewpoint)) errors.push(`unknown viewpoint: ${viewpoint}`);
  for (const fact of value.facts) {
    for (const holder of fact.knownBy) if (!actorIds.has(holder)) errors.push(`fact ${fact.id} has unknown knowledge holder ${holder}`);
    if ((fact.classification === "hidden" || fact.classification === "private") && !fact.revealCondition) errors.push(`protected fact ${fact.id} requires a reveal condition`);
  }
  for (const scene of value.scenes) {
    for (const factId of scene.visibleFactIds) {
      const fact = value.facts.find((candidate) => candidate.id === factId);
      if (!factIds.has(factId)) errors.push(`scene ${scene.id} references unknown fact ${factId}`);
      if (fact && !PUBLIC_KNOWLEDGE_CLASSES.includes(fact.classification as PublicKnowledgeClass)) errors.push(`scene ${scene.id} exposes protected fact ${factId}`);
    }
  }
  const actualBranches = new Set(value.branches.map((branch) => branch.kind));
  for (const kind of BRANCH_KINDS) if (!actualBranches.has(kind)) errors.push(`missing required branch: ${kind}`);
  return errors;
}

export const drownedArchiveContent = campaignSeed as CanonicalCampaignContent;

const seedErrors = validateCampaignContent(drownedArchiveContent);
if (seedErrors.length > 0) throw new Error(`Invalid Drowned Archive content: ${seedErrors.join("; ")}`);
