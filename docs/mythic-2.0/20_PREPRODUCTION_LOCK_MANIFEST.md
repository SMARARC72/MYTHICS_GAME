# Mythic 2.0 — Preproduction Lock Manifest

**Status:** FIRST-PRINCIPLES + PREIMPLEMENTATION BASELINE LOCKED
**Date:** 2026-08-24/25

## Product lock

Mythic 2.0 is a Steam/native desktop-first 2D tactical living-world RPG built in Godot with an authoritative server-side world simulation.

> **Attempt anything plausible. The world decides what happens. The world remembers.**

## Locked first-principles packets

- FP-02 Core Game Loop and Progression
- FP-03 World Ontology
- FP-04 Causal Simulation Architecture
- FP-05 RPG Rules and Character System
- FP-05B Tactical Combat System
- FP-05C Progression, Buildcraft and Loot
- FP-05D Event-Driven Combat AI and Dynamic Loot
- FP-06 AI Orchestration and Model Routing
- FP-07 Godot Native Client Architecture
- FP-08 Asset System and Content Grammar
- FP-09 Server, Data and Persistence Architecture
- FP-10 AI Unit Economics and Operating Model
- FP-11 Vertical Slice Product Proof
- FP-12 Implementation Readiness and Handoff

## Locked preimplementation packets

- W0 Migration/Authority Audit
- W1 Contracts and Domain Blueprint
- W2 Headless Tactical Kernel Blueprint
- W3 Grounded Intent and Dynamic Reward Blueprint
- W4 Balance Tooling and Content Pipeline
- W5 Effect Primitive and Item Grammar
- W6 World Simulation Scheduler
- W7 Godot Scene and Data Pipeline
- W8 Vertical Slice QA and Balance Matrix

## Non-negotiable gates

1. Combat must be fun with AI/free-text disabled.
2. Progression/buildcraft must be motivating without AI novelty.
3. Routine enemy turns never require an LLM.
4. AI combat use is sparse/event-driven; planner/replanner calls are bounded.
5. AI may interpret/propose/plan/narrate but cannot directly commit reality.
6. Free intent must ground to real world entities/capabilities.
7. Creative play can improve loot only through a traceable causal reward channel.
8. AI-generated unique items compile from approved deterministic effect primitives and a server-owned budget.
9. World causality persists across characters and generations.
10. Godot is a client, never authoritative truth.
11. Server simulation uses deterministic systems for hot loops and routine causality.
12. No universal level scaling.
13. Existing 800+ internal monster assets are audited/normalized before purchasing replacement creature breadth.
14. Runtime AI unit economics are measured before monetization is locked.
15. No broad content expansion before a fun 30–45 minute native vertical slice passes external playtest.
16. Old browser/comic implementation is archive/reference material, not the target product.

## Core mechanics lock

Mythic 2.0 uses six familiar abilities (STR/DEX/CON/INT/WIS/CHA), d20 + modifier + proficiency vs DC/Defense, Advantage/Disadvantage, Levels 1–20, Power Tier milestones, Fate/Mantles/Stunts, persistent injuries and real death.

Tactical combat uses a hex grid, individual initiative, AP-based actions, a separate Reaction resource, Exertion, morale, LOS/cover/elevation/engagement, equipment-defined techniques, varied objectives, retreat/surrender, persistent battlefield state and grounded environmental Stunts.

The older seven-attribute, Edge/Setback and Major/Move/Quick universal tactical model is superseded.

## Tactical AI lock

Normal combatants use deterministic utility/behavior systems. Optional LLM use is limited to encounter-level intent packets, bounded material replanning, free-text semantic grounding, natural-language doctrine parsing, rare high-value narration and causal reward generation. Provider outage must not stop ordinary combat.

## Reward/loot lock

Existing physical loot resolves from world state. Creative play can improve preservation, salvage, patron/faction response, information, crafting opportunities, artifact imprinting and future unique rewards only where causality supports it.

AI may author UniqueItemProposal identity/provenance/trait composition, but the server owns item ID, reward budget, numeric coefficients, Power Tier, legality, ownership and canonical creation.

Generated mechanical effects use versioned typed primitives; models never generate executable game code.

## Technical lock

- Native client: Godot 4 .NET/C#.
- Authoritative backend: C#/ASP.NET Core modular monolith + background worker.
- Persistence: Supabase Pro Postgres.
- World storage: append-only canonical event ledger + current authoritative state + checkpoints/projections.
- Client transport: HTTPS commands/queries + ordered live event channel.
- Tactical path preview: logical hex graph; server validates canonical movement.
- AI providers: routed behind provider-neutral capability contracts.
- Structured canonical truth is not stored/retrieved only through RAG.
- Headless battle simulation precedes polished combat presentation.

## Asset lock

Use a semantic modular 2D asset library with provenance and stable IDs. Separate cosmetic imagery from systemic interactable entities. Preserve stable visual identity for persistent people across age/equipment/injury/state changes. Settlements, buildings and businesses transform over time rather than being regenerated as unrelated visuals.

## Commercial/economic lock

Development subscriptions are separate from production API COGS. Combat should permit $0 inference encounters when no semantic AI is needed; typical AI-assisted encounters target low-cent/sub-cent spend, and major encounters target well under $0.10 under standard routing. Broader active-player-hour targets remain governed by FP-10 and telemetry.

## Vertical-slice lock

Working proof: Glass Harbor / Drowned Archive, 30–45 minutes.

It must demonstrate world/local/tactical modes, RPG progression, a fully playable tactical encounter, at least three systemic environmental objects, grounded positive/negative/ambiguous free intent, natural-language squad doctrine, causal reward improvement, one generated unique item or imprint proof, visible causal world cascade, persistence/reconnect, succession integration proof, native Windows build, cost/latency telemetry and external human playtesting.

A blinded build with AI/free-text disabled must still be judged as a fun tactical RPG.

## Next step

The design authority is now sufficient for production implementation **only after explicit authorization**. Once authorized, use the I-series implementation sequence defined in FP-12 rather than resurrecting older web/GFR/GN execution packets.
