# Mythic 2.0 — W1 Schema Package Complete v0.1.1

**Status:** LOCKED PREIMPLEMENTATION CONTRACT PACKAGE
**Date:** 2026-08-25

## Result

The first language-neutral Mythic 2.0 contract package is complete enough to serve as the input to Effect Primitive Catalog v0.1 and, once implementation is authorized, C# DTO/validator generation.

Validation: 40 JSON Schema 2020-12 documents meta-validate successfully. Nine targeted fixtures were executed and produced the expected pass/fail behavior.

## Contract coverage

### Foundation
Stable typed IDs; Ledger Time; entity references; fixed-point money; viewpoint/knowledge basis; command envelope; canonical event envelope; projection envelope.

### Action transaction
ActionProposal; CommitActionCommand; ActionCommittedEvent; ActionReceipt; ResolveCommitStatusCommand. This preserves stale-state/idempotency/unknown-commit/replay architecture and keeps private diagnostics outside player receipts.

### Tactical state
Canonical EncounterState is separate from player-safe TacticalProjection. The action seam is source-agnostic: standard UI, authored ability, scripted action, developer fixture or AI-grounded free text all compile to ActionProposal.

### Persistent world
PersonRecord; RelationshipRecord; MemoryBeliefRecord; SettlementRecord; RouteRecord; BusinessRecord; OwnershipClaimRecord.

### AI / semantic agency
EntityGrounding; IntentInterpretation; TacticalIntentPacket; TacticalReplanProposal; CommandDoctrine; NPCPlanProposal; EconomicIntentPacket; LifePlanProposal; StrategicPlanProposal; RelationshipInterpretationProposal; MemorySalienceProposal; WorldGenerationProposal; UniqueItemProposal; ImprintCandidateProposal; RumorSeed; NarrationResponse; ModelActivity.

### Visual projection
Semantic AssetRecipe ties persistent entities to reusable visual composition without making visuals canonical truth.

## Key invariants now represented structurally

- AI proposals do not directly mutate canonical state.
- Present-tense entity grounding can return unavailable/not-perceivable/not-known instead of inventing objects.
- False NPC beliefs can exist as beliefs while canonical truth remains separate.
- Rumors/narration carry source provenance and allowlisted fields.
- Player tactical projections cannot simply serialize canonical EncounterState.
- Unknown commit has a first-class receipt/status recovery path.
- Ownership/custody is represented through claims rather than mutable owner-name strings.
- Businesses, routes, people and settlements have stable identities independent of current owner/status/name.
- Model calls are budgeted, reason-coded and telemetered.

## Validation fixtures currently proven

Positive: free-text Stunt ActionProposal; committed receipt; unknown receipt; unavailable-object grounding; wrong-but-valid NPC belief; blocked route.

Negative: extra-field ActionProposal; private validator diagnostic in receipt; private fact injected into narration.

## Next dependency

**Effect Primitive Catalog v0.1.**

The schema package deliberately references `fx_*` primitive IDs without allowing arbitrary executable code. The next phase must define the initial approved primitive IDs, typed parameter schemas, budget weights, compatibility rules, trigger rules and Power Tier limits. Once that catalog exists, ActionProposal and UniqueItemProposal can be tightened from generic primitive parameter objects to fully validated mechanical compositions.
