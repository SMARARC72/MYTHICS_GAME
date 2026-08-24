import {
  PUBLIC_KNOWLEDGE_CLASSES,
  type CanonicalCampaignContent,
  type PublicKnowledgeClass,
} from "@/src/content/drowned-archive";

export interface StageProjection {
  campaignId: string;
  viewpointId: string;
  contractVersion: "C1";
  contentVersion: string;
  stateBasis: string;
  ledgerTime: string;
  scene: {
    id: string;
    title: string;
    description: string;
    facts: Array<{ id: string; classification: PublicKnowledgeClass; summary: string }>;
    suggestedActions: Array<{ id: string; label: string }>;
    pressure: { label: string; value: number; maximum: number };
  };
  actors: Array<{ id: string; name: string; role: string; publicDescription: string }>;
}

export function projectDrownedArchiveStage(
  content: CanonicalCampaignContent,
  viewpointId: string,
  stateBasis = "event:0",
): StageProjection {
  if (!content.viewpoints.includes(viewpointId)) throw new Error("Viewpoint is not authorized for this campaign");
  const scene = content.scenes.find((candidate) => candidate.id === content.entrySceneId);
  if (!scene) throw new Error("Entry scene is unavailable");

  const facts = scene.visibleFactIds.map((factId) => {
    const fact = content.facts.find((candidate) => candidate.id === factId);
    if (!fact || !fact.knownBy.includes(viewpointId) || !PUBLIC_KNOWLEDGE_CLASSES.includes(fact.classification as PublicKnowledgeClass)) {
      throw new Error(`Scene requested a fact unavailable to viewpoint: ${factId}`);
    }
    return { id: fact.id, classification: fact.classification as PublicKnowledgeClass, summary: fact.summary };
  });

  return {
    campaignId: content.campaignId,
    viewpointId,
    contractVersion: "C1",
    contentVersion: content.contentVersion,
    stateBasis,
    ledgerTime: content.ledgerTime,
    scene: {
      id: scene.id,
      title: scene.title,
      description: scene.description,
      facts,
      suggestedActions: scene.suggestedActions.map((action) => ({ ...action })),
      pressure: { ...scene.pressure },
    },
    actors: content.actors.map(({ id, name, role, publicDescription }) => ({ id, name, role, publicDescription })),
  };
}
