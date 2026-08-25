# Mythic 2.0 Contract Schemas v0.1.1

**Status:** VALIDATED PREIMPLEMENTATION SCHEMA BASELINE — expanded W1 contract set

This directory is the language-neutral contract authority index for Mythic 2.0. The complete validated v0.1.1 schema bundle is retained in the Mythic 2.0 Library workspace until the Effect Primitive Catalog v0.1 is locked and the exploded GitHub mirror is generated for C# DTO/validator production.

## Design rules

- JSON Schema 2020-12.
- Stable prefixed ULID identity families.
- Canonical Ledger Time is integer minutes from campaign epoch/calendar.
- Commands carry idempotency + expected state basis.
- Events are ordered, append-only, provenance-aware.
- Player projections are viewpoint/knowledge scoped and fail closed.
- AI outputs are proposals only.
- Canonical encounter state and player-safe tactical projection are separate contracts.
- Model telemetry persists structured metadata, never private chain-of-thought.

## v0.1.1 coverage

Foundation: IDs, Ledger Time, EntityReference, Money, KnowledgeBasis, CommandEnvelope, CanonicalEvent, ProjectionEnvelope.

Action transaction: ActionProposal, CommitActionCommand, ActionCommittedEvent, ActionReceipt, ResolveCommitStatusCommand.

Tactical: canonical EncounterState and player-safe TacticalProjection.

Persistent world: PersonRecord, RelationshipRecord, MemoryBeliefRecord, SettlementRecord, RouteRecord, BusinessRecord, OwnershipClaimRecord.

AI/agentic: EntityGrounding, IntentInterpretation, TacticalIntentPacket, TacticalReplanProposal, CommandDoctrine, NPCPlanProposal, EconomicIntentPacket, LifePlanProposal, StrategicPlanProposal, RelationshipInterpretationProposal, MemorySalienceProposal, WorldGenerationProposal, UniqueItemProposal, ImprintCandidateProposal, RumorSeed, NarrationResponse and ModelActivity.

Visual: Semantic AssetRecipe.

## Validation

40 JSON Schema 2020-12 documents meta-validate. Nine targeted fixtures pass expected positive/negative behavior, including unknown-commit recovery, unavailable-object grounding, false-but-valid NPC belief, blocked-route state, and rejection of private diagnostics/private narration fields.

## Version policy

- `0.1.x`: additive/clarifying changes while preimplementation is open.
- Breaking field/semantic changes require a new minor contract line and migration fixtures.
- Once implementation begins, every persisted event/proposal includes its schema/version lineage.
- Never reuse a version identifier for changed semantics.

## Next dependency

Effect Primitive Catalog v0.1: define approved `fx_*` primitives, typed parameters, budget weights, compatibility rules, triggers and Power Tier ceilings, then tighten ActionProposal and UniqueItemProposal validation before C# DTO generation.
