# Mythic RPG Playable Vertical Slice — Engineering and Build Plan

**Plan ID:** MVS-1  
**Target:** QA-ready, locally and protected-preview playable Drowned Archive slice  
**Status:** Authorized for implementation  
**Release boundary:** No production promotion, public release, comic publication, or rights/canon clearance

## 1. Outcome

Transform the existing UI-complete preview shell into one authoritative, persistent, deterministic gameplay loop. A player starts or resumes Glass Harbor, inspects the Drowned Archive, declares unrestricted intent, corrects an interpretation, reviews knowable stakes, commits once, receives a deterministic receipt and ordered events, sees all affected projections update, and can refresh or reconnect without duplication or hidden-truth leakage.

The slice is complete only when it supports success, mixed, failure, impossible, refusal, interruption, stale-conflict, event-gap, offline, and unknown-commit recovery branches. Suggested actions aid discovery but never limit free text.

## 2. Current baseline and correction

The current application is a high-fidelity fixture renderer. Static screen specifications, hard-coded Stage facts, inert controls, `unknown` port payloads, and a schema catalogue are not an engine or a playable loop. Existing EP completion means UI composition coverage only. MVS packets below supersede any interpretation that the current shell is gameplay-complete.

## 3. Architectural boundaries

```text
Next.js server route loader
  -> viewpoint-safe application facade
      -> projection query / command / receipt / ordered-event ports
          -> authoritative campaign service
              -> deterministic rules kernel
              -> event ledger + idempotency + snapshots
              -> content repository + knowledge projector
  -> small client workflow islands
      -> durable drafts/idempotency/cursor storage
      -> SSE reconciliation and focus/announcement services
```

- Canonical truth exists only in the server campaign service and append-only event ledger.
- The browser receives runtime-validated viewpoint projections and coordinates workflows.
- Contract sources remain pinned and read-only; generated outputs are reproducible.
- A single deployable Next.js application is preferred for the slice; module boundaries, not premature microservices, enforce separation.
- Server Components load initial projections. Client Components own only interaction, browser persistence, and live reconciliation.

## 4. Slice content contract

### 4.1 Seed state

- Campaign: `glass-harbor-slice`
- Viewpoint: Mara Vale
- Site: Drowned Archive threshold
- Actor: Curator Ilya
- Pressures: tide rise and unstable north stacks
- Evidence: Salt Ledger resin mark and floodgate sigil
- Relevant capabilities/resources: Mara's observation, traversal, strain, Fate, and carried tools
- Ledger Time: fixed seed basis followed only by committed advances

### 4.2 Core journey

1. Create/reset or resume the slice campaign.
2. Load World Strip and Stage Frame from server projections.
3. Inspect perceived, reported, inferred, and disputed facts.
4. Enter a free-form goal and method.
5. Persist the draft locally.
6. Interpret into a structured, correctable proposal.
7. Forecast accessible cost, pressure, and uncertainty without hidden odds.
8. Confirm; persist idempotency before transport.
9. Resolve with recorded rules/tuning/content versions and deterministic seed.
10. Atomically append events and receipt.
11. Reconcile ordered events into Stage, character, company, case, world, and Chronicle projections.
12. Refresh/restart and resume from the same state.
13. Make a second choice or reach a recorded slice endpoint.

### 4.3 Branch matrix

| Branch | Trigger | Required response |
|---|---|---|
| Success | margin meets full outcome | archive access changes; cost and unchanged facts explicit |
| Mixed | partial margin | access/progress plus tide, exposure, evidence, or condition cost |
| Failure | failed legal attempt | no invented success; pressure/cost only if declared |
| Impossible | invalid physics/metaphysics/capability | reject before roll and offer revision |
| Refusal | Ilya boundary conflicts with request | accessible reason and counteroffer; no obedience score |
| Interruption | collapse/tide decision window | preserve draft and expose legal responses |
| Stale conflict | proposal state basis is behind | no commit; show difference and replan |
| Unknown commit | connection lost after send | lookup receipt before any retry |
| Event gap | cursor skips | pause mutation, retain draft, resync projection |
| Offline | no transport before send | keep projection/draft distinct and resume safely |

## 5. Workstreams and packets

### MVS-00 — Execution profile and evidence ledger

**Deliver:** version matrix, environment schema, architecture decision record, revised execution ledger, CI commands, human-gate register.  
**Exit:** one command runs generation, type, unit, contract, integration, build, and browser suites; human gates remain visibly open.

### MVS-01 — Generated contract boundary

**Deliver:**
- Deterministic JSON Schema bundle with resolved `$ref`s.
- Generated strict TypeScript types for the slice operations.
- Runtime validator registry keyed by schema/operation/event IDs.
- Typed operation maps for projections, commands, receipts, and events.
- Normalized validation errors safe for UI/logging.
- Clean-generation test and all 127 approved fixture expectations.

**Exit:** no `OpaqueContractValue` or handwritten duplicate network models at the application boundary; every inbound/outbound payload validates before admission.

### MVS-02 — Versioned content package

**Deliver:**
- Server-only canonical seed with characters, NPC truth, site state, facts, knowledge grants, evidence, pressure, objects, and rules references.
- Public descriptor layer with localization keys, content tags, asset fallbacks, and canon/rights state.
- Deterministic branch and follow-up definitions.
- Content validator for IDs, references, knowledge provenance, branches, and fallbacks.

**Exit:** no gameplay truth is hard-coded in React; all public facts derive from canonical content plus viewpoint knowledge.

### MVS-03 — Deterministic rules kernel

**Deliver:**
- Seeded PRNG and dice expression support.
- Attribute/mastery, Edge/Setback, difficulty, margin/degree, declared costs, and Stunt procedure needed by the slice.
- Ledger Time advancement, resource/condition/pressure effects, impossible-action checks, and Ilya refusal policy.
- Resolution record containing seed, rolls, formula inputs/intermediates/output, rules version, tuning version, and content version.
- Replay tests and simulation matrix for every branch.

**Exit:** identical snapshot + command + seed reproduces identical events and state hash; difficulty cannot change after roll.

### MVS-04 — Authoritative ledger and campaign service

**Deliver:**
- Append-only event store abstraction and local durable implementation.
- Atomic idempotency record, receipt, and event append.
- Campaign snapshots/checkpoints and deterministic rehydration.
- Command hash collision protection and duplicate-send behavior.
- Receipt lookup for pending, committed, rejected, and not-found states.
- Reset/seed tools restricted to local/test scope.

**Exit:** cold process restart preserves state; concurrency cannot duplicate mutation; replay equals snapshot.

### MVS-05 — Knowledge-safe projectors

**Deliver:** World Strip, Stage Frame, Intent Capability, proposal, forecast, receipt, Resolution Beat, character condition, company relationship, case evidence, world map, Chronicle, connectivity, and recovery projections.  
**Exit:** leakage canaries fail closed; every envelope includes campaign/viewpoint/contract/state/knowledge/freshness basis and permitted actions.

### MVS-06 — Application facade and transport

**Deliver:** typed projection, command, receipt lookup, campaign lifecycle, and ordered-event APIs; SSE with cursors, heartbeat, dedupe, gap detection, and resync; structured privacy-safe errors and correlation IDs.  
**Exit:** API integration tests prove validation, authority, idempotency, ordered delivery, gap recovery, and no payload logging.

### MVS-07 — Durable browser orchestration

**Deliver:** IndexedDB-compatible draft/idempotency/cursor store with memory test adapter; connected action state machine; explicit offline, unknown, stale, blocked, and recovery states; announcement dedupe and focus restoration.  
**Exit:** draft and key survive reload; unknown status always looks up; gaps block mutation until resync.

### MVS-08 — Server-loaded playable frontend

**Deliver:**
- Route server loader for initial Stage and related projections.
- Small client action workflow for goal/method, interpretation correction, forecast, confirmation, receipt, and event reconciliation.
- Functional or accessibly unavailable controls; QA-only state injection separated from player UI.
- Causal Resolution Beat before audit detail.
- Compact capability parity and semantic map table.

**Exit:** the primary journey is playable without fixture selectors or inert legal actions.

### MVS-09 — Cross-surface consequences

**Deliver:** authoritative updates to character, company, holdings when relevant, world/case, Chronicle, recovery, and campaign resume.  
**Exit:** a committed Stage result appears consistently on every affected surface after refresh.

### MVS-10 — Verification and protected preview evidence

**Deliver:**
- Contract generation and all approved fixture tests.
- Rules simulation/replay tests.
- Store concurrency/restart tests.
- API integration tests.
- End-to-end journeys for every branch.
- Axe, keyboard, focus, reduced-motion, forced-color, 200% reflow, responsive, privacy, and long-session checks.
- Performance budgets and screenshot evidence.
- Human review checklist kept open.

**Exit:** no failed automated gate; no claim that automated results waive human review.

## 6. Data and API minimum

### Persistence records

- `campaign`: identity, owner/viewpoint, versions, head sequence, state hash.
- `event`: sequence, ID/type/version, causation/correlation, command/key, Ledger Time, deterministic resolution, canonical payload.
- `command_receipt`: idempotency key, command hash, status, receipt, event range.
- `snapshot`: event sequence, rules/tuning/content versions, state, integrity hash.
- `projection_checkpoint`: full cache basis, source sequence, safe payload.
- Browser-only `draft`, `pending_command`, and `cursor`; never canonical truth.

### Required operations

- create/reset/resume fixture campaign
- query route projection bundle
- interpret intent
- forecast proposal
- commit action
- resolve command status
- subscribe to ordered events
- resync after cursor gap
- read Chronicle consequence bundle

## 7. Safety invariants

1. Validate at every trust boundary.
2. Store idempotency before first send.
3. Never render proposed changes as committed canon.
4. Append receipt/events atomically.
5. Resolve unknown status before retry.
6. Pause mutation on ordered-event gaps.
7. Preserve drafts through conflicts and recovery.
8. Separate cache by campaign, viewpoint, contract, state, knowledge, and resource.
9. Never serialize private NPC motives, hidden coordinates/clocks, prompt material, protected audit data, or free text into telemetry.
10. Commit hidden encounter participants/hazards before player action while keeping them absent from public projections.

## 8. Testing matrix

| Layer | Required proof |
|---|---|
| Generation | deterministic output; no dirty diff; positive/negative fixtures |
| Content | referential integrity, knowledge paths, fallbacks, branch reachability |
| Rules | seeded replay, boundary/property cases, no post-roll mutation |
| Ledger | atomicity, duplicate key, concurrent key, restart, snapshot parity |
| Projection | viewpoint isolation, leakage canaries, freshness/actions |
| Transport | runtime rejection, cursor ordering, disconnect, gap, resync |
| Workflow | legal transition table, durable key/draft, unknown lookup |
| Browser | full journey plus ten exception branches across desktop/compact |
| A11y | axe, keyboard, focus, announcements, forced color, reflow, reduced motion |
| Privacy | log/analytics allowlist and forbidden-key scans |
| Performance | initial Stage, action response, event reconciliation, long session |

## 9. Parallel ownership

- **Contracts agent:** MVS-01, generated operation maps and validators.
- **Engine agent:** MVS-03 and MVS-04, deterministic state/ledger/replay.
- **Content agent:** MVS-02 and projector fixture knowledge model.
- **Primary integrator:** MVS-05–MVS-10, API/Next boundaries, frontend workflow, integration, evidence.

Agents must avoid editing another workstream's owned files without coordination. Shared integration points are `src/domain/contracts.ts`, `src/server/campaign-service.ts`, and `src/components/playable-stage.tsx`, created or finalized by the primary integrator after agent outputs land.

## 10. Definition of done

- A new local user can start, play two consequential choices, refresh, and resume.
- Free intent is interpreted and correctable; rules/dice determine outcome.
- Ten named outcome/recovery branches are executable and tested.
- Every canonical mutation has a receipt and ordered events.
- Replay reproduces state and deterministic resolution records.
- Hidden truth stays server-only and leakage tests fail closed.
- All visible controls work or give an accessible authoritative reason.
- All affected surfaces agree after commit and restart.
- Automated gates pass; human AT/usability/rights/canon/knowledge-ceiling gates remain recorded and open.

## 11. Explicit non-goals

Production deployment, public release, paid providers, generalized full-world simulation, complete Constitution mechanic coverage, multiplayer, comic publication, production data migration, and art-rights/canon clearance are outside this vertical slice.
