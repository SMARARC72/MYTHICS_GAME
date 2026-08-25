# Mythic 2.0 — FP-12 Implementation Readiness and Handoff

**Status:** PREIMPLEMENTATION BASELINE LOCKED; production implementation remains intentionally unauthorized.

## Product definition

Mythic 2.0 is a native desktop/Steam-first persistent living-world tactical RPG.

> **Attempt anything plausible. The world decides what happens. The world remembers.**

The game must remain fun without AI novelty. AI expands agency, semantic interpretation, character/world planning and generative identity/rewards while authoritative rules/simulation own reality. One campaign can outlive multiple protagonists and generations.

## Authority

1. `docs/mythic-2.0/README.md` mandatory read order and all locked Mythic 2.0 packets.
2. World Constitution for setting/lore/canon where not explicitly superseded.
3. Migrated deterministic contracts/engine concepts that pass Mythic 2.0 audit.
4. Legacy browser/Game-First-v2/UX documents as historical evidence only.

## Preserved legacy invariants

Preserve alternate-Earth mythic-superhero canon and Veilbreak, open-world/player-freedom contract, consequence-over-prohibition/no plot armor, actor knowledge boundaries, death/soul/resurrection canon, Levels 1–20/Power Tier/Mantle/Name/Epithet/Legacy concepts, deterministic event ledger/replay/versioning, Fate, non-universal world adaptation and asset provenance discipline.

## Superseded legacy assumptions

Supersede text/browser-first product definition, React/Phaser player client, comic systems, dashboard UX, seven-attribute model, Edge/Setback universal dice model, Major/Move/Quick tactical economy, universal Composure/Momentum requirements and browser-specific client assumptions.

## Locked preimplementation stack

- FP-02 core game/generational loops;
- FP-03 world ontology;
- FP-04 causal simulation;
- FP-05 rules/character baseline;
- FP-05B tactical combat;
- FP-05C progression/buildcraft/loot;
- FP-05D event-driven combat AI/dynamic loot;
- FP-06 AI orchestration/model routing;
- FP-07 Godot native client;
- FP-08 semantic asset system;
- FP-09 server/data/persistence;
- FP-10 AI economics;
- FP-11 product proof;
- W0 migration audit;
- W1 contract/domain blueprint;
- W2 headless tactical kernel blueprint;
- W3 grounded intent/dynamic reward blueprint;
- W4 balance/content tooling;
- W5 effect primitive/item grammar;
- W6 world simulation scheduler;
- W7 Godot scene/data pipeline;
- W8 vertical-slice QA/balance matrix.

## Target repository structure

```text
MYTHICS_GAME/
  client/godot/
  server/
    Mythic.Api/
    Mythic.Worker/
    Mythic.Domain/
    Mythic.Rules/
    Mythic.Simulation/
    Mythic.AI/
    Mythic.Persistence/
  shared/Mythic.Contracts/
  content/
    canon/
    rules/
    world/
    generation/
    assets/
  database/migrations/
  tools/
  tests/
  archive/web-v1/
  docs/mythic-2.0/
```

## Production implementation sequence after explicit authorization

To avoid collision with the W0–W8 preimplementation packet names, production work uses **I-series** workstreams:

- **I0 — Repository restructuring:** preserve Git history, isolate legacy web reference, establish new solution boundaries.
- **I1 — Contracts/domain skeleton:** canonical IDs, Ledger Time, command/event/projection schemas, tactical and AI proposal DTO generation, Priority-A golden regression fixtures.
- **I2 — Headless rules/tactical kernel:** d20, AP/Reaction, hex topology, LOS/cover, Exertion, morale, injuries/death, effect primitives, utility AI, deterministic replay and simulation harness.
- **I3 — Persistence/event ledger:** Supabase migrations, receipts, idempotency, current state, snapshots, entity graph and transactional commit.
- **I4 — Causal world simulation:** scheduler/fidelity tiers, projects, aging/family, business/ownership, infrastructure, economy, factions and catch-up simulation.
- **I5 — Grounded AI/reward orchestration:** local parser, R1/R2 routing, knowledge-safe context, Stunt grounding, doctrines, planner/replanner, Ingenuity, unique-item forge, artifact imprinting and telemetry.
- **I6 — Godot native foundation:** C# project, networking, projections/reconnect, World/Local/Encounter scenes, UI/input/accessibility and authoritative presentation mapping.
- **I7 — Asset/content pipeline:** normalize 800+ monsters, semantic registries, environmental/systemic props, people/equipment/UI/VFX/audio and validators.
- **I8 — Native vertical slice:** Glass Harbor/Drowned Archive 30–45 minute proof with exploration, social play, combat, free intent, causal rewards, progression and persistent consequence.
- **I9 — QA/playtest/economics:** blind non-AI fun test, balance simulation, AI-value test, hidden-knowledge/replay/reconnect proof, runtime cost and external playtesting.

## Gates

A. Preimplementation authority complete — **PASSED**.  
B. Headless rules/simulation proof before polished combat presentation.  
C. Godot graybox proof.  
D. Combat/exploration fun without AI.  
E. AI demonstrably expands solution space without controlling reality.  
F. Causal reward/unique-item generation feels earned and balanced.  
G. Coherent visual native slice.  
H. Measured commercial AI economics.

No broad content expansion until B–H pass.

## Codex first-run mandate

When implementation is explicitly authorized, Codex reads the entire Mythic 2.0 authority chain and W0 audit, runs existing tests, preserves all golden behavioral fixtures, then begins I0/I1. It must not begin by polishing Godot screens or porting legacy React code.

## Final decision

**GO — greenfield Mythic 2.0 implementation once explicitly authorized.** Do not continue the legacy browser implementation and do not destructively erase its history.
