# Mythic 2.0 — Preproduction Workspace

**Status:** First-principles baseline locked; W0 migration audit complete  
**Date:** 2026-08-24/25  
**Target:** Native Steam/desktop tactical RPG built in Godot with an authoritative persistent server-side world simulation.

## Why this workspace exists

Mythic crossed a product boundary. The original browser-first implementation and dashboard-oriented UX are no longer the implementation target. The active product is a native 2D RPG with deep turn-based tactics, unrestricted **grounded** player intent, persistent causal world simulation, generational continuity and AI-mediated character/world agency.

This workspace does not discard the World Constitution/canon, Ledger Time, deterministic authority, event-ledger/replay/idempotency principles, viewpoint-safe knowledge, RAG/content research, morality/progression concepts or valid prior asset work. It supersedes old player-client, browser, dashboard and comic-product assumptions.

## Product promise

> **Attempt anything plausible. The world decides what happens. The world remembers.**

## Mandatory read order

1. `00_MASTER_REBASELINE.md`
2. `01_PRODUCT_THESIS_AND_NONNEGOTIABLES.md`
3. `02_PLAYER_LOOP_AND_GAME_MODES.md`
4. `03_WORLD_SIMULATION_FIRST_PRINCIPLES.md`
5. `04_TECHNICAL_ARCHITECTURE_AND_STACK.md`
6. `05_COST_RISK_AND_VIABILITY_BASELINE.md`
7. `06_PREPRODUCTION_EXECUTION_PLAN.md`
8. `07_FP02_CORE_GAME_LOOP_AND_PROGRESSION.md`
9. `09_FP03_WORLD_ONTOLOGY_LOCKED.md`
10. `10_FP04_CAUSAL_SIMULATION_ARCHITECTURE.md`
11. `11_FP05_RPG_RULES_AND_CHARACTER_SYSTEM.md`
12. `13_FP05B_TACTICAL_COMBAT_SYSTEM.md`
13. `13A_FP05C_PROGRESSION_BUILDCRAFT_AND_LOOT.md`
14. `12_FP06_AI_ORCHESTRATION_AND_MODEL_ROUTING.md`
15. `14_FP07_GODOT_NATIVE_CLIENT_ARCHITECTURE.md`
16. `15_FP08_ASSET_SYSTEM_AND_CONTENT_GRAMMAR.md`
17. `16_FP09_SERVER_DATA_AND_PERSISTENCE_ARCHITECTURE.md`
18. `17_FP10_AI_UNIT_ECONOMICS_AND_OPERATING_MODEL.md`
19. `18_FP11_VERTICAL_SLICE_PRODUCT_PROOF.md`
20. `19_FP12_IMPLEMENTATION_READINESS_AND_HANDOFF.md`
21. `20_PREPRODUCTION_LOCK_MANIFEST.md`
22. `21_W0_MIGRATION_AUTHORITY_AUDIT.md`

`08_FP03_WORLD_ONTOLOGY_DRAFT.md` remains design history; `09_...LOCKED.md` is authoritative.

## Current resources

Already available/planned:

- 800+ internally created monster assets;
- Supabase Pro;
- GitHub Team;
- high-capacity/20X ChatGPT/Codex access planned;
- Claude 5x development access planned;
- World Constitution, contract fixtures, prior engine research and asset/provenance work.

These materially reduce development cost but do not eliminate runtime AI COGS or the need for coherent environment, human-character, systemic-prop, world-map, UI, audio and VFX libraries.

## Hard product gates

- Combat is fun with AI/free text disabled.
- Progression/buildcraft is motivating without AI novelty.
- AI cannot directly commit reality.
- Free intent grounds to actual world state and cannot invent present-tense affordances.
- The world persists across death and generations.
- Godot is presentation/input, not canonical authority.
- Routine combat and ordinary world math do not require LLM calls.
- No universal level scaling.
- No broad content expansion before the 30–45 minute native vertical slice passes external playtest and cost gates.

## Implementation state

Preproduction and W0 are complete. Production construction still requires the repository's explicit implementation authorization gate. Once authorized, Codex begins with **W1 Contracts and Domain Skeleton**, migrates Priority-A regression invariants, then proves the headless tactical/rules kernel before polished Godot client work.
