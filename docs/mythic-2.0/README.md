# Mythic 2.0 — Preproduction Workspace

**Status:** First-principles + W0–W12 preimplementation baseline locked; schema v0.1 validated  
**Date:** 2026-08-24/25  
**Target:** Native Steam/desktop tactical RPG built in Godot with an authoritative persistent server-side world simulation.

## Why this workspace exists

Mythic crossed a product boundary. The original browser-first implementation and dashboard-oriented UX are no longer the implementation target. The active product is a native 2D RPG with deep turn-based tactics, unrestricted **grounded** player intent, persistent causal world simulation, generational continuity and a distributed AI layer for interpretation, planning, authored identity and bounded world generation.

This workspace does not discard the World Constitution/canon, Ledger Time, deterministic authority, event-ledger/replay/idempotency principles, viewpoint-safe knowledge, RAG/content research, morality/progression concepts or valid prior asset work. It supersedes old player-client, browser, dashboard and comic-product assumptions.

## Product promise

> **Attempt anything plausible. The world decides what happens. The world remembers.**

## AI doctrine

AI is not the canonical simulation and is not one monolithic GM. Mythic uses models as sparse semantic/agentic services attached to authoritative systems. Models may interpret, plan, negotiate, characterize, summarize and propose future world changes; deterministic systems own facts, legality, accounting, mechanics, state mutation and event ordering.

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
16. `30_FP06B_AGENTIC_ECONOMY_AND_MYTHIC_MODEL_ROLES.md`
17. `14_FP07_GODOT_NATIVE_CLIENT_ARCHITECTURE.md`
18. `15_FP08_ASSET_SYSTEM_AND_CONTENT_GRAMMAR.md`
19. `16_FP09_SERVER_DATA_AND_PERSISTENCE_ARCHITECTURE.md`
20. `17_FP10_AI_UNIT_ECONOMICS_AND_OPERATING_MODEL.md`
21. `18_FP11_VERTICAL_SLICE_PRODUCT_PROOF.md`
22. `19_FP12_IMPLEMENTATION_READINESS_AND_HANDOFF.md`
23. `20_PREPRODUCTION_LOCK_MANIFEST.md`
24. `21_W0_MIGRATION_AUTHORITY_AUDIT.md`
25. `22_W1_PREIMPLEMENTATION_CONTRACTS_AND_DOMAIN_BLUEPRINT.md`
26. `23_W2_PREIMPLEMENTATION_HEADLESS_TACTICAL_KERNEL_BLUEPRINT.md`
27. `24_W3_PREIMPLEMENTATION_GROUNDED_INTENT_AND_DYNAMIC_REWARD_BLUEPRINT.md`
28. `25_W4_PREIMPLEMENTATION_BALANCE_TOOLING_AND_CONTENT_PIPELINE.md`
29. `26_W5_PREIMPLEMENTATION_EFFECT_PRIMITIVE_AND_ITEM_GRAMMAR.md`
30. `27_W6_PREIMPLEMENTATION_WORLD_SIMULATION_SCHEDULER.md`
31. `28_W7_PREIMPLEMENTATION_GODOT_SCENE_AND_DATA_PIPELINE.md`
32. `29_W8_PREIMPLEMENTATION_VERTICAL_SLICE_QA_AND_BALANCE_MATRIX.md`
33. `31_W9_PREIMPLEMENTATION_AGENTIC_ECONOMY_BLUEPRINT.md`
34. `32_W10_PREIMPLEMENTATION_MODEL_ACTIVITY_SCHEDULER.md`
35. `33_W11_PREIMPLEMENTATION_NPC_LIFE_RELATIONSHIP_AND_FACTION_AGENCY.md`
36. `34_W12_PREIMPLEMENTATION_EMERGENT_OPPORTUNITY_RUMOR_AND_HISTORY.md`
37. `35_NEXT_OPTIMAL_STEPS_AND_SCHEMA_EXECUTION.md`
38. `36_SCHEMA_BASELINE_V0_1.md`
39. `../contracts/source/mythic2_v0_1/contract-manifest.json` and `../contracts/source/mythic2_v0_1/README.md` as the language-neutral schema authority index.

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
- Economy accounting/transactions/prices/inventory are authoritative deterministic systems; models provide sparse economic intent and negotiation.
- No model call exists without a trigger/reason code, schema, validator, fallback, cost ceiling and telemetry.
- AI cannot directly commit reality.
- Free intent grounds to actual world state and cannot invent present-tense affordances.
- Creative play may improve rewards only through causal reward channels.
- AI-generated unique items must compile from deterministic effect primitives and fit a server-owned budget.
- The world persists across death and generations.
- Godot is presentation/input, not canonical authority.
- Routine combat and ordinary world math do not require LLM calls.
- No universal level scaling.
- No broad content expansion before the 30–45 minute native vertical slice passes external playtest, replay, balance and cost gates.

## Contract state

Mythic 2.0 contract schema v0.1 is validated using JSON Schema 2020-12. It currently defines stable identities, Ledger Time, knowledge basis, command/event/projection envelopes, ActionProposal, commit/action event contracts, canonical encounter state, player-safe tactical projection, economic/life/faction planning proposals, unique-item proposals, rumor provenance and model-activity budget/telemetry.

The exploded validated schema package is retained in the Mythic 2.0 Library workspace. GitHub currently records the schema authority index/manifest and locked semantic decisions; the exploded files are to be mirrored before C# DTO generation begins.

## Implementation state

First-principles preproduction, W0 migration audit, W1–W12 **preimplementation blueprints**, and schema v0.1 are complete. Production code is still intentionally gated.

The next dependency is **Effect Primitive Catalog v0.1**, followed by the remaining schema tranche, monster normalization, tactical content matrix, canonical Drowned Archive dataset, permanent benchmarks, AI routing policy and visual style bible.

Once explicitly authorized, implementation should proceed from the locked blueprints in dependency order: contract/domain schemas -> headless deterministic tactical/economy kernels -> persistence/simulation -> grounded AI/reward/economic-agent integration -> Godot native presentation -> asset normalization/content -> vertical slice -> QA/economics.
