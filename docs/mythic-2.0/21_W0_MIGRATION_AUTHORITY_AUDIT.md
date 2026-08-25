# Mythic 2.0 — W0 Migration and Authority Audit

**Status:** LOCKED W0 migration classification baseline

## Governing rule

The migration unit is **behavior, invariant, content, fixture, or design knowledge** — not source language or file path. Mythic 2.0 does not port TypeScript merely because it exists, and it does not discard proven behavior merely because the behavior was first implemented in a browser prototype.

Classifications: **PRESERVE**, **PORT**, **REWRITE**, **ARCHIVE**. W0 performs no destructive deletion.

## Executive decision

The existing repository is not a production game implementation worth converting in place. It is a valuable prototype/preproduction corpus with strong contract, event, recovery and knowledge-safety work.

Migration policy:

1. preserve setting/canon and non-conflicting product decisions;
2. port event-sourcing, idempotency, replay, ordered-event, knowledge-boundary, contract-first and recovery semantics;
3. rewrite rules, world model, simulation, AI orchestration and persistence for Mythic 2.0;
4. archive React/Next.js player implementation after migration proof;
5. generate new C# contracts and Godot .NET client interfaces from Mythic 2.0 schemas.

## Area classification

| Existing area | Classification | Mythic 2.0 treatment |
|---|---|---|
| `app/`, `src/components/`, browser CSS/routes | ARCHIVE | Historical UX evidence only; do not translate 1:1 into Godot. |
| `src/engine/` | REWRITE + selective PORT | Preserve deterministic RNG/replay principles; rewrite rules kernel. |
| `src/server/` | PORT semantics / REWRITE implementation | Preserve campaign transaction, receipt, replay and projector invariants; rewrite C#/Postgres. |
| `src/domain/` | PORT pattern / REGENERATE | Contract-first boundary survives; replace TS aliases with generated C# DTOs. |
| `src/ports/` | PORT pattern / REWRITE interfaces | Projection/command/receipt/event abstractions survive; browser media/focus ports do not. |
| `src/projections/` | PORT invariants | Preserve projection basis identity and knowledge-safe projection behavior. |
| `src/workflows/` | PORT behavior / REWRITE runtime | Preserve persist-before-send, draft preservation and unknown-status lookup. |
| `src/content/` | PRESERVE pattern / REWRITE ontology | Preserve knowledge classification/reference validation; migrate content into Mythic 2.0 ontology. |
| `content/` | AUDIT/PRESERVE | Canon and useful content/assets migrate after schema/provenance audit. |
| `contracts/source/` | HIGH-VALUE PORT | Preserve schemas/fixtures as migration evidence; split reusable gameplay/safety from retired comic/browser domain. |
| `contracts/generated/` | ARCHIVE/REGENERATE | TS output is not the new authority; regenerate C# target contracts. |
| `tests/engine/` | HIGH-VALUE PORT | Recreate the behavioral cases in C#/integration tests. |
| `tests/content/`, `tests/scenarios/`, `tests/unit/` | CASE-BY-CASE PORT | Keep continuity/security/recovery cases; archive browser-only cases. |
| Next.js/Playwright/npm configuration | ARCHIVE | New active solution is .NET/Godot. |
| old UI/Game-First/comic docs | ARCHIVE REFERENCE | Mythic 2.0 supersedes implementation authority; World Constitution remains canon where not mechanically superseded. |

## Rules kernel

Current `src/engine/rules.ts` is a Drowned Archive-specific resolver using regex branches and one d20 threshold. It is **not** a reusable RPG/tactical engine.

**Decision: REWRITE.** Preserve only these invariants:

- deterministic server resolution;
- pre-roll difficulty and inputs;
- recorded roll/modifier/total/difficulty/rules+tuning version;
- distinct success/mixed/failure/impossible/refusal/interruption classes;
- rules emit events rather than mutating client truth.

Replace with the locked Mythic 2.0 six-ability/d20 system, AP+Reaction tactical kernel, saves/AC, Advantage/Disadvantage, Exertion, Morale, injuries/death, spatial rules and grounded Stunts.

## RNG/replay

Current RNG uses explicit deterministic seed derivation and no ambient randomness.

**Decision: PORT THE CONTRACT, not necessarily the exact algorithm.** Mythic 2.0 requires named/versioned deterministic RNG streams, explicit seed provenance, replay and server-owned canonical randomness. Record algorithm/version so future RNG changes do not rewrite history.

## Campaign transaction behavior

Current campaign service already proves behaviors that remain binding:

- idempotency-key deduplication;
- collision rejection when a key is reused for a different command;
- stale expected-state rejection;
- pending/unknown reservation before mutation;
- one committed event + receipt;
- unknown transport status resolved before retry;
- monotonically ordered events;
- snapshot/replay recovery.

**Decision: PORT AS W1/W3 ACCEPTANCE TESTS.** Rewrite implementation in ASP.NET Core/Postgres transactions.

## Knowledge/projector behavior

The current Drowned Archive projector verifies the requested viewpoint, validates that facts are known to that viewpoint and refuses private/hidden facts in public projections.

**Decision: PRESERVE AND EXPAND.** The new projector must also cover visibility, reported/inferred/remembered information, misinformation/disputed facts, geographic fog/discovery, hidden tactical actors/hazards, secret faction/project state, lineage knowledge without magical memory inheritance, and player-safe AI context. Failure stays fail-closed.

## Contract fixture migration

### C1 — core action/recovery

Current validation: **24/24 passing**. Port/adapt cases for intent capability, interpretation/proposal/forecast, idempotent commit, mixed/impossible/refusal/interruption/stale/unknown states, hidden-truth rejection, mandatory idempotency and public-error privacy.

### C2 — character/world continuity

Current validation: **43/43 passing**. High-value cases include character/advancement records, continuation, actor refusal, holdings/projects/custody, known world map/lost journey, persistent site breach, world/case/front records, hidden motives, secret clocks, hidden coordinates while lost and authority-required transfers.

**Decision: HIGH-VALUE PORT**, mechanically reshaped to Mythic 2.0 rules.

### C3 — platform/comic layer

Current validation: **60/60 passing**. Keep connectivity/recovery, accessibility intent, content controls, localization meaning preservation and privacy-safe analytics. Archive comic capture/source-lock/job/reader/publication/edition workflows.

## Workflow behavior

The existing intent orchestrator saves draft state, persists pending/idempotency metadata before transport and resolves unknown commit status through lookup.

**Decision: PORT BEHAVIOR.** New flow is: free intent -> grounding -> optional clarification/proposal -> material stakes preview -> persist idempotency -> authoritative resolution -> ordered events -> reconcile. Godot stores only drafts/pending metadata/settings, not canon.

## Content behavior

Current Drowned Archive content already separates `perceived/reported/inferred` from `private/hidden`, checks knowledge holders/reveal conditions and validates branch/reference integrity.

**Decision: PRESERVE THE SAFETY PATTERN; REWRITE THE ONTOLOGY.** Add spatial cells/entities, systemic physical properties, tactical encounter definitions, people/property relationships, tutorial beats, concise copy, causal world result and semantic asset descriptors.

## Priority-A migrated tests — before feature breadth

- deterministic seed/replay;
- duplicate command/idempotency and collision;
- stale conflict;
- unknown-status lookup;
- event-gap detection;
- snapshot/replay parity;
- hidden-knowledge/private-motive/coordinate/secret-clock leakage;
- authority/custody invariants;
- permanent death/continuation invariants.

## New Mythic 2.0 tests with no adequate legacy equivalent

- grounded object positive/ambiguous/nonexistent references;
- no invented environmental affordance;
- hex path legality and server/client preview parity;
- LOS/cover/elevation;
- AP/Reaction/Exertion sequencing;
- Morale/retreat;
- injury/downed/permadeath;
- environmental Stunts that mutate battlefield state;
- deterministic competent non-LLM enemy AI;
- business owner death/succession;
- household/kinship aging;
- business continuity independent of owner;
- road/bridge topology cascades;
- simulation catch-up equivalence;
- population materialization invariants;
- successor control without inherited private knowledge;
- stable visual identity across aging/state changes;
- AI provider/router can never directly commit canonical state;
- provider failure cannot mutate canon;
- per-call token/cost/latency telemetry.

## Archive strategy

Before removing browser implementation from the active tree:

1. tag the final legacy browser baseline;
2. create/verify archive branch or snapshot plan;
3. migrate selected golden fixtures;
4. prove C# equivalents for Priority-A invariants;
5. only then remove browser code from the active production path.

## W0 exit decision

**W0 classification baseline PASSES.** There is enough valuable invariant/test/canon work to migrate, but not enough production game code to justify in-place conversion.

Once implementation is explicitly authorized, the next workstream is **W1 Contracts and Domain Skeleton**, followed by a headless W2 tactical/rules proof before polished Godot client construction.
