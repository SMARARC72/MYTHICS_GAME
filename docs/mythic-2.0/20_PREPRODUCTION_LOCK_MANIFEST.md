# Mythic 2.0 — Preproduction Lock Manifest

**Status:** FIRST-PRINCIPLES BASELINE LOCKED
**Date:** 2026-08-24/25

## Product lock

Mythic 2.0 is a Steam/native desktop-first 2D tactical living-world RPG built in Godot with an authoritative server-side world simulation.

Core promise:

> **Attempt anything plausible. The world decides what happens. The world remembers.**

## Locked packets

- FP-02 Core Game Loop and Progression
- FP-03 World Ontology
- FP-04 Causal Simulation Architecture
- FP-05 RPG Rules and Character System
- FP-05B Tactical Combat System
- FP-05C Progression, Buildcraft and Loot
- FP-06 AI Orchestration and Model Routing
- FP-07 Godot Native Client Architecture
- FP-08 Asset System and Content Grammar
- FP-09 Server, Data and Persistence Architecture
- FP-10 AI Unit Economics and Operating Model
- FP-11 Vertical Slice Product Proof
- FP-12 Implementation Readiness and Handoff

## Non-negotiable gates

1. Combat must be fun with AI/free-text disabled.
2. Progression/buildcraft must be motivating without AI novelty.
3. AI may interpret/propose/plan/narrate but cannot directly commit reality.
4. Free intent must ground to real world entities/capabilities.
5. World causality persists across characters and generations.
6. Godot is a client, never authoritative truth.
7. Server simulation uses deterministic systems for hot loops and routine causality.
8. No universal level scaling.
9. Existing 800+ internal monster assets are audited/normalized before purchasing replacement creature breadth.
10. Runtime AI unit economics are measured before monetization is locked.
11. No broad content expansion before a fun 30–45 minute native vertical slice passes external playtest.
12. Old browser/comic implementation is archive/reference material, not the target product.

## Core mechanics lock

Mythic 2.0 uses six familiar abilities (STR/DEX/CON/INT/WIS/CHA), d20 + modifier + proficiency vs DC/Defense, Advantage/Disadvantage, Levels 1–20, Power Tier milestones, Fate/Mantles/Stunts, persistent injuries and real death.

Tactical combat uses a hex grid, individual initiative, AP-based actions, a separate Reaction resource, Exertion, morale, LOS/cover/elevation/engagement, equipment-defined techniques, varied objectives, retreat/surrender, persistent battlefield state and grounded environmental Stunts.

The older seven-attribute, Edge/Setback, and Major/Move/Quick universal tactical model is superseded for Mythic 2.0.

## Technical lock

- Native client: Godot 4 .NET/C#.
- Authoritative backend: C#/ASP.NET Core modular monolith + background worker.
- Persistence: existing Supabase Pro Postgres.
- World storage: append-only canonical event ledger + current authoritative state + checkpoints/projections.
- Client transport: HTTPS commands/queries + ordered live event channel.
- Tactical path preview: explicit logical hex graph; server validates canonical movement.
- AI providers: routed behind provider-neutral capability contracts.
- Routine enemy combat never requires an LLM call.
- Structured canonical truth is not stored/retrieved only through RAG.

## Asset lock

Use a semantic modular 2D asset library with provenance and stable IDs. Separate cosmetic imagery from systemic interactable entities. Preserve stable visual identity for persistent people across age/equipment/injury/state changes. Settlements, buildings and businesses transform over time rather than being regenerated as unrelated visuals.

## Commercial/economic lock

Development subscriptions (ChatGPT/Codex 20X planned, Claude 5x, GitHub Team, Supabase Pro) are separate from production model API COGS. Initial runtime AI target is approximately $0.05–$0.15 per active player-hour; sustained >$0.25/hour triggers economic redesign/review. Do not assume one-time Steam purchase can fund unlimited lifetime cloud inference.

## Vertical-slice lock

Working proof: Glass Harbor / Drowned Archive, 30–45 minutes.

It must demonstrate world/local/tactical modes, RPG progression, a fully playable tactical encounter, at least three systemic environmental objects, positive/negative/ambiguous grounded free intent, one visible causal world cascade, persistence/reconnect, succession integration proof, native Windows build, cost/latency telemetry and external human playtesting.

A blinded build with AI/free-text disabled must still be judged as a fun tactical RPG.

## Next step

**Repository packaging and W0 migration/authority audit.**

Before new game construction:
1. package the full Mythic 2.0 locked documents into this repository;
2. inspect every existing module/schema/test/asset;
3. classify preserve / migrate / rewrite / archive;
4. preserve unique user work and Git history;
5. establish the new Godot/server repository structure;
6. only then begin W1 contracts/domain implementation.

Do not continue expanding the legacy browser implementation.
