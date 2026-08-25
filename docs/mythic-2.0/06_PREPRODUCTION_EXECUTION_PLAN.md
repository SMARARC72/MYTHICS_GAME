# Mythic 2.0 — First-Principles Preproduction Execution Plan

## FP-00 — Rebaseline and evidence freeze

**Status: STARTED**

Deliver: master product rebaseline, carry-forward/supersede matrix, current resource baseline, legacy-document register and implementation freeze on browser-first expansion.

Exit: one authority hierarchy for Mythic 2.0.

## FP-01 — Product thesis and player promise

**Status: DRAFTED**

Lock player promise, product pillars, grounded freedom, authoritative reality, AI agency, game-first acceptance criteria and vertical-slice non-goals.

Exit: every feature can be accepted/rejected against one thesis.

## FP-02 — Core game loop and progression

Define minute-to-minute, combat, exploration, social, progression/build, downtime/time-skip, death/succession and long-term campaign loops.

Exit: the game remains compelling without generative novelty.

## FP-03 — World ontology

Define canonical schemas/relationships for characters, households/families, businesses, property, organizations/factions, settlements/districts, routes/infrastructure, inventories/resources, objects, knowledge/memory, jobs/roles, laws/claims/obligations, projects and events.

Exit: cascading world change has structured entities to act upon.

## FP-04 — Simulation design

Define adaptive tiers, causal propagation, aging/birth/death, succession/inheritance, economy/business ownership, faction autonomy, migration, infrastructure, settlement generation/evolution, catch-up simulation and invariants/budgets.

Exit: a deterministic simulator can advance a test region through years without nonsense.

## FP-05 — RPG mechanical system

Map current mechanics against 5E/SRD familiarity and lock attributes, checks/DCs, skills/proficiency, HP/defense, initiative/action economy, damage/conditions, powers/resources, equipment, Stunts, Fate/Mantle/morality only where justified, XP/advancement and death/recovery.

Exit: stable rules-kernel specification.

## FP-06 — AI responsibility architecture

Define exact tasks for intent interpretation, entity grounding, clarification, NPC dialogue, NPC planning, world-generation proposals, narration, memory summarization, safety, model routing and provider failover.

Exit: no system depends on `ask the LLM what happens`.

## FP-07 — Godot client architecture

Define scene-tree architecture, world map, scene/local map, tactical grid, Hero UI, free-intent UX, dice theater, animation/VFX/audio, networking, projection cache, accessibility and save/reconnect behavior.

Exit: Codex-ready native-client architecture.

## FP-08 — Asset grammar and content pipeline

First action: inventory the 800+ existing monster assets. Then define canonical art direction, sizes/anchors, modular characters, age/state variants, environment families, object taxonomy, world/tactical tiles, construction/destruction variants, faction overlays, audio/VFX taxonomy, provenance registry and procedural-composition constraints.

Exit: generation can visually represent new/changed places consistently.

## FP-09 — Server/data architecture

Audit current server work; reuse only what survives the new ontology. Define Postgres/Supabase schema, event store/snapshots, projections, simulation workers, authoritative command API, Godot contract generation, RAG/canon store, AI gateway and observability/cost telemetry.

Exit: server technical design complete.

## FP-10 — Unit economics and operating model

Measure model calls/action, tokens/player-hour, simulation compute/player-hour, Supabase utilization, storage/world growth and projected COGS at 1K/10K/100K players.

Exit: monetization can be chosen from evidence.

## FP-11 — Vertical slice specification

One contained region/location must demonstrate world map, locality, NPC/business persistence, social interaction, free grounded action, tactical combat, environmental Stunt, progression, consequence cascade, character death/world persistence path, world catch-up/time advancement and native game feel.

Exit: bounded build backlog.

## FP-12 — Codex implementation handoff

Only after FP-00–11 are locked. Generate repo structure, schemas, API contracts, Godot architecture, tests, asset manifests, execution packets, stop conditions and acceptance criteria. Then authorize implementation.

## Immediate next work

Continue with **FP-02: Core Game Loop and Progression**, then **FP-03: World Ontology**. These constrain nearly every later mechanic and must precede detailed database or Godot implementation planning.
