# Mythic 2.0 Contract Schemas v0.1

**Status:** PREIMPLEMENTATION SCHEMA BASELINE

This directory is the first language-neutral contract source for Mythic 2.0. It is intended to generate C# DTOs/validators for the authoritative server and Godot client, plus API/event documentation and permanent fixtures.

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

## v0.1 schema set

Common: IDs, Ledger Time, knowledge basis, command envelope, canonical event, projection envelope.

Tactical: ActionProposal, canonical EncounterState, player-safe TacticalProjection, CommitActionCommand, ActionCommittedEvent.

AI/agentic: EconomicIntentPacket, LifePlanProposal, StrategicPlanProposal, UniqueItemProposal, RumorSeed, ModelActivity.

## Version policy

- `0.1.x`: additive/clarifying changes while preimplementation is open.
- Breaking field/semantic changes require a new minor contract line and migration fixtures.
- Once implementation begins, every persisted event/proposal includes its schema/version lineage.
- Never reuse a version identifier for changed semantics.

## Next schema work

Add effect-primitive catalog v0.1 and compile its primitive IDs/parameter schemas into ActionProposal and UniqueItemProposal validation; add business/world-state schemas; add explicit action receipt/status lookup; add memory/belief and world-generation proposal schemas; generate positive/negative fixture suite.
