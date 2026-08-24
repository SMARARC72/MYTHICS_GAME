# Mythic Superhero RPG Platform
## UI-04 — Frontend Architecture and Execution Specification v0.1

**Status:** Approved and locked  
**Date:** 2026-08-23  
**Approved:** 2026-08-23  
**Approved dependencies:** UI-01, UI-02 and UI-03 — approved and locked 2026-08-23  
**Target:** Desktop browser first · Adaptive Living World Stage · Ledger Time  
**Workflow:** Figma-free  
**Clean-session implementation authorization:** **AWAITING EXPLICIT USER AUTHORIZATION**  
**Production deployment and public release:** **CLOSED**

---

## 1. Result

UI-04 converts the finalized product experience into a self-contained, stack-neutral frontend execution architecture. It specifies what the browser may know, which layer owns every route/component/workflow, how all approved operations enter the UI, how state survives interruption, and how accessibility, privacy, assets and verification remain structural. It does not construct the product.

| Evidence | Result |
|---|---:|
| Approved architecture decisions | 28 |
| Dependency layers | 8 |
| UI-02 routes composed | 14/14 |
| Explicit workflow state machines | 10 |
| External/platform ports | 16 |
| Approved OpenAPI operations assigned | 60/60 |
| Client stores with boundaries | 8 |
| UI-01 components owned | 40/40 |
| Scenarios architecture-traced | 17/17 |
| CI/release gates mapped | 15/15 |
| Contract fixtures in harness | 127 |
| Ordered execution packets | 16 |
| Unresolved product decisions | 0 |
| Clean-session implementation authorized | No |

## 2. Architectural Center

The frontend is a projection renderer and workflow coordinator, not a second game engine. It receives only viewpoint-safe, versioned public projections; validates every payload; keeps caches separated by campaign and viewpoint; holds drafts apart from authoritative state; and sends typed commands with durable idempotency. Canonical change appears only after an authoritative receipt and ordered event. A lost response enters commit-status lookup before retry.

The Adaptive Living World Stage remains the center of play. The shell keeps Ledger Time, viewpoint, pressure, navigation, connectivity and recovery legible. Context, legal actions and consequences appear at the moment they matter; audit and deeper mechanics remain available through labeled lenses. This introduces the world and systems over time without turning play into a tutorial dump or a chat transcript.

## 3. Route and State Composition

All 14 UI-02 route families own a validated initial loader, live adapter inputs, UI-01 component composition, state machines, focus entry, error boundary, draft ownership and UI-03 fallback. Campaign routes are parameterized by campaign identity rather than fixture names. Server-capable initial rendering provides a meaningful shell and projection before client activation; live ordered events then reconcile the same projection basis.

Ten explicit machines cover app readiness; intent-to-resolution; ordered events; connectivity/save/recovery; comic production; character advancement; projects/custody; journey; Issue Zero; and accessibility/content/localization profiles. Each names legal and exceptional states. No component invents asynchronous legality locally.

## 4. Data, Authority and Recovery

Generated types and validators are the only network model source. Projection stores hold delivered public envelopes, freshness and version basis. Durable draft storage holds only scoped player drafts and the mutation envelope/idempotency key recorded before transport. It never becomes canonical state. Protected prompts, rights evidence, hidden rejection notes, accepted media bytes and private audit records remain server-side.

Loading, empty, stale, conflict, offline, schema drift, unknown commit and provider failure are explicit architectural states. Error boundaries preserve the shell, the last allowed projection, drafts, idempotency and public recovery references. Event gaps pause mutation and resync; provider failure resumes comic work at the nearest valid durable checkpoint.

## 5. Accessibility, Localization and Input

Accessibility is platform infrastructure. Route composition declares landmarks, focus entry/restoration, stable status regions and deduplicated announcements. Every core action has keyboard, pointer, voice-label, switch/linear and non-drag paths. Reduced motion, reduced data, forced colors, text scaling, long strings and reading direction preserve legal play and meaning. Semantic maps have table parity; comic publication requires structure, reading order, alt text, transcripts and warnings.

## 6. Assets and Media

UI-03's 60 slots, five approved visual-direction references, 49 code-native icons and 14 screen-placement policies enter through an asset-delivery port. Raster art is optional to core play; semantic HTML/CSS/SVG owns live truth. Forecast never shows an uncommitted consequence plate. Chronicle art derives only from public media projections after Inflection, Source Lock, Canon Snapshot, Reader Knowledge Ceiling, rights/consent, QA and accessibility gates. Figma is not used.

## 7. Verification and Execution Order

The harness layers contract, port, machine, component, route, scenario and human validation. It maps all 127 contract fixtures, 40 components, 14 screens, 17 scenarios and 15 CI/release gates. Automated green status cannot waive human assistive-technology, usability, knowledge-ceiling or rights/consent review.

Sixteen execution packets begin only after the exact clean-session implementation authorization. Production deployment and public release remain separate later gates. They move from pinned contracts and deterministic fakes through shell, Stage, action/recovery and breadth surfaces, then Chronicle/media, assets and full release evidence. Each packet has dependency, entry, exit and blocking CI gates.

## 8. Approved Acceptance Checks

The approved architecture passes its checks because:

1. UI-01, UI-02 and UI-03 are approved and fully traced;
2. PRE-01–06 each own ports, stores, machines, tests and failure behavior;
3. all 60 approved OpenAPI operations are assigned to exactly one frontend port;
4. all 14 routes, 40 components and 17 scenarios have architecture ownership;
5. schema drift, loading, empty, stale, conflict, offline and provider failure are explicit;
6. no optimistic canonical state, cross-viewpoint merge or hidden-truth reconstruction is permitted;
7. accessibility, localization, content control, privacy, performance and asset failure are architectural;
8. the execution plan is ordered and gate-bound; and
9. there is no unresolved product decision, clean-session implementation authorization is pending and production release remains closed.

These checks do not prove production performance, assistive-technology compatibility, security, rights clearance, provider recovery or release readiness. Those require implementation and recorded QA evidence.

## 9. Approval Boundary

Product-owner approval on 2026-08-23 locked the architecture decisions; layer and import boundaries; 14 route compositions; 10 workflow machines; ports and operation assignments; store ownership; error/recovery behavior; component/scenario ownership; accessibility, privacy, asset, performance and observability rules; verification harness; repository responsibilities; and 16-packet build order.

This approval authorizes assembly of the final pre-implementation readiness audit and clean-session Codex execution handoff. It does not itself authorize production construction, live provider/engine integration, asset shipping clearance, deployment, publication, public release or execution in a new Codex session. Those require the final explicit implementation authorization gate.
