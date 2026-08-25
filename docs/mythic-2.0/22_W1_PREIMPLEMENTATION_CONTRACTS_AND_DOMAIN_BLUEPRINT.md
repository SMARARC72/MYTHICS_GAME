# Mythic 2.0 — W1 Preimplementation Contracts and Domain Blueprint

**Status:** LOCKED implementation blueprint; no production code authorized by this document

## Goal

Define the language-neutral contracts and C# domain boundaries required before scaffolding the Godot client or authoritative server.

## Domain modules

1. Campaign / Ledger Time
2. Identity / Persons / Households
3. Knowledge / Memory / Belief
4. Geography / Sites / Spatial topology
5. Objects / Items / Property / Custody
6. Businesses / Jobs / Claims / Obligations
7. Factions / Organizations / Projects
8. RPG characters / progression / equipment
9. Tactical encounters
10. Causal simulation
11. AI interpretation / planning / generation proposals
12. Asset-semantic projection

Each module owns invariants and emits versioned domain events. Modules cannot mutate another module's state by database side effect; they request/emit explicit commands/events.

## Identity requirements

Every durable entity uses stable opaque IDs. Human-readable names are mutable attributes, never keys.

Required identity families include campaign, actor/person, household, relationship, organization, office/job, settlement/site/tile, route/infrastructure, object/item, business/property, project, encounter, tactical cell/feature, event, knowledge claim, memory, generated proposal and asset recipe.

## Command envelope

All mutating requests carry: command_id, campaign_id, actor/viewpoint where relevant, idempotency_key, expected_state_version/basis, command_type/version, payload, requested_at, correlation ID and causation ID.

Server validates authorization, knowledge basis, state freshness and invariant legality before committing.

## Event envelope

Every canonical event carries: event_id, campaign_id, ordered sequence, Ledger Time, event_type/version, causation_command_id, correlation_id, actor/source IDs, affected entity IDs, deterministic seed when randomness was used, rules/tuning versions when mechanics were used, canonical payload, and provenance metadata for AI-generated proposals that contributed.

Committed events are append-only.

## Projection envelope

Player-facing projections include campaign/viewpoint, projection type/version, canonical state basis, knowledge snapshot basis, generated_at, and only allowlisted player-knowable fields.

Projection code is fail-closed. Unknown/private fields are omitted, never exposed with hidden flags.

## AI proposal contracts

Initial typed proposal families:
- IntentInterpretation
- EntityGrounding
- TacticalIntentPacket
- TacticalReplanProposal
- CommandDoctrine
- NPCPlanProposal
- MemorySalienceProposal
- WorldGenerationProposal
- UniqueItemProposal
- ImprintCandidateProposal
- NarrationResponse

No proposal contract contains authority to directly set canonical state.

## Tactical contracts

Required tactical models: EncounterState, CombatantState, HexCell/topology, TerrainFeature, SystemicObject, TacticalObjective, InitiativeEntry, ActionDefinition, ActionProposal, ReactionWindow, EffectBundle, MoraleState, InjuryState, Visibility/knowledge state, and TacticalReceipt.

All canonical coordinates use logical hex IDs/axial coordinates rather than screen pixels.

## Generated item contracts

UniqueItemProposal separates authored identity/lore suggestions, requested mechanic primitives, required source-event provenance, and proposed visual recipe from server-owned item ID, reward budget, exact coefficients, legality, ownership/custody and uniqueness commit.

## Golden migration fixtures

Carry forward as behavior tests, not source-code ports:
- stale-state rejection;
- idempotent duplicate handling;
- unknown-commit lookup before retry;
- ordered-event gap detection;
- deterministic replay;
- hidden-truth rejection;
- private actor motive exclusion;
- lost-character canonical-coordinate exclusion;
- custody transfer requires authority;
- advancement requires reviewed/valid basis;
- continuation after death;
- persistent site/world change.

## Schema strategy

Use one canonical schema source and generate C# server DTOs, C# Godot client DTOs where appropriate, JSON Schema/OpenAPI artifacts, fixture validators and contract documentation. Avoid parallel handwritten network models.

## Exit criteria before W1 implementation

- module ownership map approved;
- command/event/projection envelopes fixed;
- first tactical schema set written;
- first AI proposal schema set written;
- unique-item/imprint schema set written;
- legacy golden fixture mapping complete;
- hidden-knowledge negative-fixture set defined;
- versioning/evolution policy defined.
