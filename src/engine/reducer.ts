import type { CampaignEvent, CampaignState } from "./types";

export function applyEvent(state: CampaignState, event: CampaignEvent): CampaignState {
  if (event.sequence !== state.stateVersion + 1) throw new Error(`Event gap: expected ${state.stateVersion + 1}, received ${event.sequence}`);
  const effects = event.effects;
  return {
    ...state,
    stateVersion: event.sequence,
    ledgerMinute: state.ledgerMinute + effects.ledgerMinutes,
    location: effects.location ?? state.location,
    tidePressure: Math.max(0, state.tidePressure + effects.tidePressure),
    vitality: Math.max(0, state.vitality + effects.vitality),
    evidence: effects.evidence ? [...state.evidence, effects.evidence] : state.evidence,
    relationshipEvidence: effects.relationshipEvidence ? [...state.relationshipEvidence, effects.relationshipEvidence] : state.relationshipEvidence,
    chronicle: [...state.chronicle, event.summary],
  };
}

export function replay(initial: CampaignState, events: readonly CampaignEvent[]): CampaignState {
  return events.reduce(applyEvent, initial);
}
