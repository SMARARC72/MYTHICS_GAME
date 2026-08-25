# Mythic 2.0 — Schema Baseline v0.1

**Status:** VALIDATED PREIMPLEMENTATION CONTRACT BASELINE
**Date:** 2026-08-25

## Validation result

- JSON Schema draft: 2020-12.
- 17 schema documents meta-validated successfully.
- Positive free-text environmental Stunt fixture validates.
- Negative extra-field/hidden-truth-style fixture is rejected by fail-closed `additionalProperties: false`.

## Locked v0.1 decisions

- Stable opaque IDs use typed prefixes plus Crockford ULID payloads.
- Canonical Ledger Time is integer minutes (`tick`) plus a versionable `calendar_id`; UI date strings are projections, not authority.
- Mutating commands carry idempotency, expected state version, correlation and viewpoint/knowledge basis where relevant.
- Canonical events are ordered, append-only, causation/correlation aware and may record structured AI proposal provenance without chain-of-thought.
- Player projections carry viewpoint + knowledge snapshot and are distinct from canonical internal state.
- Canonical tactical state is explicitly separate from player-safe tactical projection.
- `ActionProposal` is the common seam for buttons, authored abilities, developer fixtures and AI-grounded free intent.
- Economic, life and faction strategic model outputs are typed proposals, never state mutations.
- Unique-item AI output requests approved effect primitives within a server-owned budget and Power Tier ceiling.
- Rumors retain source-event provenance and can encode uncertainty/distortion without becoming canonical truth.
- Every model activity has a reason code, tier, context basis, timeout/token/cost budget and telemetry fields.

## Schemas included

Common: IDs, Ledger Time, KnowledgeBasis, CommandEnvelope, CanonicalEvent, ProjectionEnvelope.

Tactical: ActionProposal, CommitActionCommand, ActionCommittedEvent, EncounterState, TacticalProjection.

Agentic AI: EconomicIntentPacket, LifePlanProposal, StrategicPlanProposal, UniqueItemProposal, RumorSeed, ModelActivity.

## Next schema tranche

1. Effect Primitive Catalog v0.1 and per-primitive parameter schemas.
2. Action receipt / unknown-commit status schemas.
3. World entity/business/ownership/route schemas.
4. Memory/belief/relationship interpretation schemas.
5. World-generation proposal and asset recipe schemas.
6. Full positive/negative golden fixture migration from C1/C2.

This baseline is deliberately narrow enough to evolve before production code, but concrete enough that C# DTO generation and headless-kernel implementation can begin once the implementation authorization gate is crossed.
