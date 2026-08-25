# Mythic 2.0 — FP-12 Implementation Readiness and Handoff

**Status:** PREPRODUCTION BASELINE LOCKED; implementation remains intentionally unauthorized until repository packaging/audit completes.

## Product definition

Mythic 2.0 is a native desktop/Steam-first persistent living-world tactical RPG.

> **Attempt anything plausible. The world decides what happens. The world remembers.**

The game must remain fun without AI novelty; AI expands agency, interpretation, actor behavior and world generation while authoritative rules/simulation own reality. One campaign can outlive multiple protagonists and generations.

## Authority

1. `docs/mythic-2.0/` locked first-principles package.
2. World Constitution for setting/lore/canon where not explicitly superseded.
3. Migrated deterministic contracts/engine concepts that pass Mythic 2.0 audit.
4. Legacy browser/Game-First-v2/UX documents as historical evidence only.

## Preserve from legacy

- alternate-Earth mythic-superhero canon and Veilbreak;
- Greek/Roman/Norse starting cosmology;
- open-world/player-freedom contract;
- consequence-over-prohibition and no plot armor;
- actor knowledge boundaries;
- death/soul/resurrection canon;
- Levels 1–20, Power Tier, Mantle, Name, Epithet and Legacy concepts;
- deterministic event ledger/replay/versioning principles;
- Fate concept, world adaptation without universal level scaling;
- asset provenance/invariant discipline.

## Supersede

- text/browser-first product definition;
- React/Phaser player client;
- comic production/reader/publication systems;
- dashboard-like player UX;
- seven-attribute universal player stat model;
- Edge/Setback as universal dice system;
- Major/Move/Quick tactical economy;
- universal Composure/Momentum requirements;
- browser-specific accessibility implementation assumptions.

## Locked systems

- FP-02 core player/game/generational loops;
- FP-03 stable world identity/ontology;
- FP-04 causal simulation and fidelity tiers;
- FP-05 six-ability d20/5E-familiar rules baseline;
- FP-05B hex/AP/Reaction tactical combat;
- FP-05C progression/buildcraft/loot;
- FP-06 AI orchestration/model routing;
- FP-07 Godot .NET/C# native client;
- FP-08 semantic asset/content grammar;
- FP-09 C# authoritative server + Supabase Postgres;
- FP-10 AI economics/telemetry;
- FP-11 30–45 minute Glass Harbor/Drowned Archive product proof.

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

## Implementation workstreams

- **W0 Migration/authority audit:** inventory repo and classify preserve/migrate/rewrite/archive.
- **W1 Contracts/domain skeleton:** IDs, Ledger Time, commands/events, projections, spatial/grounding contracts.
- **W2 Rules/tactical kernel:** d20, AP/Reaction, LOS/cover/pathing, Exertion, morale, injuries/death, Stunts, replay.
- **W3 Persistence/event ledger:** Supabase migrations, receipts, snapshots, entity graph, transactional commit.
- **W4 Simulation:** consequences, tiers/catch-up, family/business/ownership/aging/routes/projects/economy/factions.
- **W5 AI orchestration:** routing, knowledge projector, grounding, structured proposals, actor/world plans, telemetry.
- **W6 Godot foundation:** .NET project, networking, projections, input/settings/accessibility, World/Local/Encounter.
- **W7 Asset pipeline:** audit 800+ monsters, semantic registry, Drowned Archive family, people/props/UI/VFX/audio.
- **W8 Vertical slice:** tutorial, exploration, Hero, tactical encounter, Stunts, consequence, progression, persistence.
- **W9 QA/playtest/economics:** blind non-AI fun test, AI value test, replay, human playtest, cost/hour.

## Gates

A. Repository audit before construction.
B. Headless rules/simulation proof before polished client work.
C. Godot graybox proof.
D. Combat/exploration fun without AI.
E. AI demonstrably expands solution space.
F. Coherent visual slice.
G. Measured commercial AI economics.

No broad content expansion until these pass.

## Codex first-run mandate

When implementation is authorized, Codex starts with W0, not Godot scaffolding: read Mythic 2.0 docs, inspect the full repo, run existing tests, produce a migration matrix, identify reusable deterministic/server work, classify browser-only code, preserve unique work/history, and only then begin W1.

## Final decision

**GO — greenfield Mythic 2.0 implementation after repository packaging and audit.** Do not continue the legacy browser implementation and do not destructively erase its history.