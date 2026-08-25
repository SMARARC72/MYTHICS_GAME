# Mythic 2.0 — Preproduction Workspace

**Status:** First-principles + W0–W8 preimplementation baseline locked  
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
14. `13B_FP05D_EVENT_DRIVEN_COMBAT_AI_AND_DYNAMIC_LOOT.md`
15. `12_FP06_AI_ORCHESTRATION_AND_MODEL_ROUTING.md`
16. `14_FP07_GODOT_NATIVE_CLIENT_ARCHITECTURE.md`
17. `15_FP08_ASSET_SYSTEM_AND_CONTENT_GRAMMAR.md`
18. `16_FP09_SERVER_DATA_AND_PERSISTENCE_ARCHITECTURE.md`
19. `17_FP10_AI_UNIT_ECONOMICS_AND_OPERATING_MODEL.md`
20. `18_FP11_VERTICAL_SLICE_PRODUCT_PROOF.md`
21. `19_FP12_IMPLEMENTATION_READINESS_AND_HANDOFF.md`
22. `20_PREPRODUCTION_LOCK_MANIFEST.md`
23. `21_W0_MIGRATION_AUTHORITY_AUDIT.md`
24. `22_W1_PREIMPLEMENTATION_CONTRACTS_AND_DOMAIN_BLUEPRINT.md`
25. `23_W2_PREIMPLEMENTATION_HEADLESS_TACTICAL_KERNEL_BLUEPRINT.md`
26. `24_W3_PREIMPLEMENTATION_GROUNDED_INTENT_AND_DYNAMIC_REWARD_BLUEPRINT.md`
27. `25_W4_PREIMPLEMENTATION_BALANCE_TOOLING_AND_CONTENT_PIPELINE.md`
28. `26_W5_PREIMPLEMENTATION_EFFECT_PRIMITIVE_AND_ITEM_GRAMMAR.md`
29. `27_W6_PREIMPLEMENTATION_WORLD_SIMULATION_SCHEDULER.md`
30. `28_W7_PREIMPLEMENTATION_GODOT_SCENE_AND_DATA_PIPELINE.md`
31. `29_W8_PREIMPLEMENTATION_VERTICAL_SLICE_QA_AND_BALANCE_MATRIX.md`

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
- Routine enemy turns never require an LLM.
- AI combat use is event-driven and bounded.
- AI cannot directly commit reality.
- Free intent grounds to actual world state and cannot invent present-tense affordances.
- Creative play may improve rewards only through causal reward channels.
- AI-generated unique items must compile from deterministic effect primitives and fit a server-owned budget.
- The world persists across death and generations.
- Godot is presentation/input, not canonical authority.
- Routine combat and ordinary world math do not require LLM calls.
- No universal level scaling.
- No broad content expansion before the 30–45 minute native vertical slice passes external playtest, replay, balance and cost gates.

## Implementation state

First-principles preproduction, W0 migration audit, and W1–W8 **preimplementation blueprints** are complete. Production code is still intentionally gated.

Once explicitly authorized, implementation should proceed from the locked blueprints in dependency order: contract/domain schemas -> headless deterministic tactical kernel -> persistence/simulation -> grounded AI/reward integration -> Godot native presentation -> asset normalization/content -> vertical slice -> QA/economics.
