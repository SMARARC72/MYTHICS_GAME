# Mythic Superhero RPG Platform
## Checkpoint C4 — Traceability, Backlog and Implementation Gate v0.1

**Status:** Approved and locked — 2026-08-23  
**Date:** 2026-08-23  
**Phase:** 6 — Engine/UI implementation contracts  
**Approved dependencies:** C1, C2 and C3 — approved and locked 2026-08-23  
**Primary target:** Desktop browser · Adaptive Living World Stage · Ledger Time  
**High-fidelity boundary:** Figma excluded; final library, screens and visual assets will be code-native/directly generated  
**Implementation authorization:** **CLOSED**

---

## 1. C4 Result

C4 closes the planning trace from the approved UX/UI constitution and B4 high-fidelity reference into executable contracts, a sequenced cross-engine/frontend backlog, dependency boundaries and release gates.

| Evidence | Result |
|---|---:|
| Approved contract fixture expectations | 127 / 127 |
| Required scenarios traced | 17 / 17 |
| Component obligations traced | 40 / 40 |
| Sequenced backlog items | 24 |
| CI and release gates | 15 |
| Unresolved contract-trace rows | 0 |
| Production implementation authorized | No |

Traceability closure means every required scenario and component has an approved contract path, engine prerequisite, frontend slice and downstream validation boundary. It does not claim that the live engine, browser implementation, usability, assistive-technology compatibility, media providers or deployment are complete.

---

## 2. Binding Product and Experience Decisions

1. Campaign time is Ledger Time, never wall-clock time by default.
2. The desktop browser is the reference device and density target.
3. The Adaptive Living World Stage is the primary workspace.
4. Free language is a game control inside an interactive RPG loop, not a chatbot transcript.
5. Progressive disclosure changes emphasis and explanation, never legal permission.
6. The UI reads viewpoint-safe projections and emits immutable commands; reducers and validators alone mutate canon.
7. High-fidelity production remains Figma-free.

---

## 3. Scenario Traceability Closure

| Scenario | Required experience | Approved contract IDs | Fixture / contract evidence | Release validation |
|---|---|---|---|---|
| SCN-01 | First-time player reaches meaningful choice in 90 seconds | RM-002, RM-003, RM-005, C3-A11Y-004, C3-A11Y-002 | world-strip-current; stage-frame-current; intent-capability; issue-zero-skip | Timed first-choice usability; keyboard-only path; no lore gate |
| SCN-02 | Expert creates custom legal build and audits every BP | C2-CHAR-001, C2-CHAR-002, C2-CHAR-004, C2-CHAR-005, COMMON-003 | advancement-draft; draft/commit advancement; silent-bp-spend rejected | Expert build audit; stale draft conflict; zero silent spend |
| SCN-03 | Ordinary survivor begins without Awakening | C2-CHAR-001, C2-CHAR-003, C3-A11Y-004 | character-ordinary-survivor; continuation-afterlife; issue-zero-skip | Ordinary-entry fixture; no Awakening dependency or penalty |
| SCN-04 | Absurd but causally possible action | RM-C1-001, RM-C1-002, CMD-001, CMD-003, CMD-004, C2-HOLD-001 | interpreted-proposal; proposal-forecast; commit-action-command; committed-receipt | Goal fidelity, causal legality and receipt trace E2E |
| SCN-05 | Impossible action revised by method | COMMON-003, COMMON-004, RM-C1-001, CMD-002, CMD-004 | rejected-impossible-receipt; replan-state-changed-receipt; stale-conflict-receipt | No hidden diagnostic; goal preserved; no rejected-action spend |
| SCN-06 | Character overloaded with injuries, survival, equipment and law | RM-003, EVF-003, C2-CHAR-001, C2-CHAR-003, C2-HOLD-001, C2-WORLD-005 | stage-frame-current; character and continuation fixtures; front-legal-record | High-density usability; legal, harm and equipment state remain distinct |
| SCN-07 | Companion refuses an order | RM-004, COMMON-004, C2-COMP-001, C2-COMP-002, C2-COMP-004, C2-COMP-005 | autonomous-actor-refusal; actor-private-motive and obedience-score rejected | Refusal/counteroffer E2E; no motive or obedience leakage |
| SCN-08 | Sapient Relic lies, negotiates or rejects access | COMMON-002, RM-004, C2-COMP-002, C2-COMP-003, C2-COMP-004, C2-COMP-005 | relic record; relic exact-Bond rejected; refusal event | Personhood/access test; no lie classification or exact hidden Bond |
| SCN-09 | Player becomes lost while engine retains exact location | COMMON-002, C2-WORLD-001, C2-WORLD-002, C2-WORLD-006, C2-WORLD-007 | journey-lost; canonical-coordinates-while-lost rejected | Hidden-coordinate canary; last-known/evidence navigation |
| SCN-10 | Investigation without hidden-canon leakage | COMMON-002, C2-WORLD-003, C2-WORLD-004, C2-WORLD-006 | case-record; site-hidden-feature-count rejected | Mystery leakage canary; evidence and inference remain distinct |
| SCN-11 | Player destroys site or kills faction leader | COMMON-004, RM-C1-003, C2-WORLD-003, C2-WORLD-005, C2-WORLD-007, C2-CHRON-001, C2-CHRON-002 | site breach; front/legal; chronicle consequence and routed event | Destructive persistence; no protected NPC or silent reset |
| SCN-12 | Protagonist dies and play continues | C2-CHAR-001, C2-CHAR-003, C2-COMP-003, C2-CHRON-001 | continuation-afterlife; zero-vitality-declared-dead rejected | Dying/death/afterlife/successor route matrix |
| SCN-13 | Player leaves BREAKWATER while Fronts continue | C2-HOLD-002, C2-HOLD-003, C2-WORLD-002, C2-WORLD-005, C2-WORLD-007, C3-ASY-003 | journey and project interval events; front secret clock rejected; attention digest | Offscreen simulation; no secret clock; accessible consequence digest |
| SCN-14 | Comic production runs for extended period | C3-MED-001, C3-MED-002, C3-MED-003, C3-MED-004, C3-MED-005, C3-MED-006, C3-MED-007, C3-MED-008, C3-CMD-003, C3-CMD-004, C3-CMD-005, C3-CMD-006, C3-EVT-003, C3-EVT-004 | comic capture, Source Lock, job, reader, provenance, publication fixtures plus 12 negative media gates | Long-running recovery; honest stages; play never blocks |
| SCN-15 | Issue #0 skipped entirely | C3-A11Y-002, C3-A11Y-004, C3-MED-005, C3-CMD-002 | issue-zero-skip; issue-zero-blocks-play rejected | Skip/defer/read/summarize parity; no gameplay penalty |
| SCN-16 | Screen-reader and reduced-input core loop | COMMON-005, RM-005, EVF-010, C3-A11Y-001, C3-A11Y-003, C3-MED-008, C3-CMD-002 | accessibility profile; accessible publication; drag-only and localization-meaning-change rejected | Keyboard, screen reader, switch, voice and reduced-motion matrix |
| SCN-17 | Mobile presentation under constrained space | COMMON-003, COMMON-005, RM-002, RM-003, C3-ASY-001, C3-ASY-002, C3-A11Y-001 | degraded connectivity; save recovery; stage freshness and semantic fixtures | Real-device reflow; agency/state parity; desktop remains primary |

All seventeen traces are complete at the planning/contract level. Their implementation status remains pending until the implementation gate opens and the named release validation passes.

---

## 4. Component Traceability Closure

| Component | Name | Approved contract IDs | Primary payload / boundary | Fixture / test evidence |
|---|---|---|---|---|
| CMP-01 | World Strip | COMMON-001, RM-002, C3-ASY-001 | WorldStripStatus + ConnectivityState | world-strip-current; degraded connectivity |
| CMP-02 | Campaign Rail | RM-003, C3-A11Y-004, C3-ASY-002 | StageFrame + IssueZeroAvailability + SaveRecoveryState | stage frame; issue-zero skip; save recovery |
| CMP-03 | Active Surface Header | COMMON-002, COMMON-003, RM-003 | StageFrame + KnowledgeFact + Freshness | stage current/hidden-truth gate |
| CMP-04 | Context Lens | RM-004, C2-COMP-002, C2-WORLD-004 | EntityContextLens + actor/case projections | context-lens-disputed; actor refusal; case record |
| CMP-05 | Intent Dock | RM-005, CMD-001, CMD-002, C3-A11Y-001 | IntentCapability + immutable intent commands | intent capability; interpret/revise commands |
| CMP-06 | Chronicle Ribbon | EVF-001, C2-CHRON-001, C2-CHRON-002 | Committed events + ChronicleConsequenceBundle | canonical commit + chronicle routed event |
| CMP-07 | Attention Notice | C3-ASY-003, C3-API-001, COMMON-005 | AttentionDigest | attention digest; undelivered-fact rejected |
| CMP-08 | Draft Preservation Bar | COMMON-003, CMD-002, C3-ASY-002 | Freshness + SaveRecoveryState | stale conflict; save recovery |
| CMP-09 | Scene Frame | RM-003, C2-WORLD-003, COMMON-002 | StageFrame + SiteRecord | stage frame; site record; hidden truth gates |
| CMP-10 | Exact Speech Block | RM-004, C2-COMP-002, COMMON-002 | EntityContextLens + actor status | actor refusal; private motive rejected |
| CMP-11 | Meaningful Marker | RM-003, COMMON-002, C2-WORLD-003, C2-WORLD-004 | Projected facts and permissions | stage/site/case fixtures |
| CMP-12 | Contextual Possibility | RM-004, COMMON-003, C2-WORLD-006 | Entity action availability | context lens; world commands |
| CMP-13 | Interpreted Action Packet | RM-C1-001, CMD-001, CMD-002 | InterpretedProposal | interpreted proposal; interpret/revise commands |
| CMP-14 | Knowable Forecast | COMMON-002, RM-C1-002, CMD-003 | ProposalForecast | proposal forecast |
| CMP-15 | Adaptive Commit | COMMON-003, COMMON-004, CMD-004 | CommitAction + permissions | commit and all outcome fixtures |
| CMP-16 | Resolution Beat | RM-C1-003, COMMON-005, EVF-001 | ResolutionBeat | resolution mixed + committed events |
| CMP-17 | Outcome Receipt | COMMON-004, CMD-004, CMD-013, EVF-004 | PublicOutcome + command receipt | success/branch/unknown fixtures |
| CMP-18 | Decision Window | EVF-003, RM-003, COMMON-005 | Decision window event + StageFrame | decision-window event schema |
| CMP-19 | Interrupt Queue | EVF-003, C3-ASY-002, C3-ASY-003 | Decision events + recovery + attention | recovery and attention fixtures |
| CMP-20 | Tactical Emphasis Strip | RM-003, C2-CHAR-001, C2-WORLD-003 | StageFrame + character/site pressure | stage/character/site fixtures |
| CMP-21 | BP Ledger | C2-CHAR-002, C2-CHAR-004, C2-CHAR-005 | AdvancementDraft + progression events | advancement; silent spend rejected |
| CMP-22 | Condition / Wound Card | C2-CHAR-001, C2-CHAR-003 | CharacterRecord + ContinuationState | ordinary survivor; continuation; false death rejected |
| CMP-23 | Relationship Card | C2-COMP-001, C2-COMP-002, C2-COMP-005 | CompanyRecord + actor status | company + actor refusal negatives |
| CMP-24 | Relic Bond Card | C2-COMP-003, C2-COMP-005, COMMON-002 | RelicRecord + relic events | relic + exact-Bond rejected |
| CMP-25 | Custody and Access Row | C2-HOLD-001, C2-HOLD-004, C2-HOLD-005 | HoldingsRecord + transfer command/event | holdings; transfer; no-authority rejected |
| CMP-26 | Item Comparison | C2-HOLD-001, COMMON-002 | HoldingsRecord + projected task facts | holdings fixture |
| CMP-27 | Craft / Repair Plan | C2-HOLD-002, C2-HOLD-003, C2-HOLD-005 | ProjectRecord + interval commands/events | project draft/commit/checkpoint |
| CMP-28 | Route / Journey Card | C2-WORLD-002, C2-WORLD-006, C2-WORLD-007 | JourneyState + journey command/event | journey lost/resolved; coordinate gate |
| CMP-29 | Knowledge-Safe Map | COMMON-002, C2-WORLD-001, C2-WORLD-002 | KnownWorldMap + JourneyState | known world; lost journey; coordinate gate |
| CMP-30 | Evidence Claim | COMMON-002, C2-WORLD-004 | CaseRecord | case record |
| CMP-31 | Front Pressure Card | C2-WORLD-005, C2-WORLD-007, C3-ASY-003 | FactionFrontLegalRecord + AttentionDigest | front legal; secret clock rejected; attention |
| CMP-32 | Legal Process Card | C2-WORLD-005, C2-WORLD-006, C2-WORLD-007 | FactionFrontLegalRecord + world commands/events | front legal and world event fixtures |
| CMP-33 | Comic Job Card | C3-MED-004, C3-CMD-005, C3-EVT-004 | ComicJobRecord | job stages; percentage/ETA/queue-loss rejected |
| CMP-34 | Comic Reader Controls | C3-MED-005, C3-MED-008, C3-CMD-006 | ComicReaderRecord + AccessiblePublicationPackage | reader/published/accessibility/WIP gates |
| CMP-35 | Visible Focus | COMMON-005, C3-A11Y-001 | AccessibilitySemantic + AccessibilityProfile | accessibility profile; drag-only rejected |
| CMP-36 | Semantic Regions | COMMON-005, C3-A11Y-001, C3-A11Y-003 | AccessibilitySemantic + localization direction | accessibility/localization fixtures |
| CMP-37 | Noncolor State Cue | COMMON-005, C3-A11Y-001 | AccessibilitySemantic | accessibility fixture |
| CMP-38 | Live-Region Message | COMMON-005, EVF-010, C3-EVT-001, C3-EVT-004 | Accessibility announcement + recovery/media events | recovery and media event fixtures |
| CMP-39 | Alternate Input Tray | RM-005, C3-A11Y-001, C3-CMD-002 | IntentCapability + AccessibilityProfile | intent/accessibility/update fixtures |
| CMP-40 | Motion Substitute | COMMON-005, C3-A11Y-001, C3-ASY-003 | AccessibilitySemantic + AttentionDigest | accessibility + attention fixtures |

Every component is subordinate to contract authority. Components may own presentation, focus, local reversible draft state and view composition; they may not invent canonical state, hidden truth, permissions, actor motives, media approval or receipt outcomes.

---

## 5. Production Backlog and Vertical Slices

| Seq. | ID | Phase | Capability | Dependencies | Scenario trace |
|---:|---|---|---|---|---|
| 1 | PRE-01 | Engine prerequisite | Schema generation and runtime validation | None | SCN-01–17 |
| 2 | PRE-02 | Engine prerequisite | Viewpoint-safe projection gateway | PRE-01 | SCN-01, SCN-07–10, SCN-13 |
| 3 | PRE-03 | Engine prerequisite | Idempotent command gateway and receipt lookup | PRE-01, PRE-02 | SCN-04–05, SCN-11, SCN-17 |
| 4 | PRE-04 | Engine prerequisite | Ordered event stream, durable save and reconnect | PRE-01, PRE-03 | SCN-01, SCN-13–14, SCN-17 |
| 5 | PRE-05 | Engine prerequisite | Accessibility, content-control and localization services | PRE-01, PRE-02 | SCN-01, SCN-15–17 |
| 6 | PRE-06 | Engine prerequisite | Durable media queue, provenance and publication store | PRE-01, PRE-04, PRE-05 | SCN-14–16 |
| 7 | UI-01 | Figma-free UI finalization | Code-native tokens, primitives and component API | PRE-01, PRE-05 | SCN-01–17 |
| 8 | UI-02 | Figma-free UI finalization | Final high-fidelity screen and flow set | UI-01 | SCN-01–17 |
| 9 | UI-03 | Figma-free UI finalization | Image, icon and illustration asset pipeline | UI-01, UI-02 | SCN-01, SCN-06, SCN-09–10, SCN-14, SCN-16 |
| 10 | UI-04 | Figma-free UI finalization | Frontend architecture and execution specification | UI-01, UI-02, UI-03, PRE-01–06 | SCN-01–17 |
| 11 | VS-01 | Production vertical slice | Campaign Entry → recovery → exact Stage | PRE-01–05, UI-04, Implementation authorization | SCN-01, SCN-03, SCN-15, SCN-17 |
| 12 | VS-02 | Production vertical slice | Adaptive Living World Stage and Context Lens | VS-01, PRE-02, UI-01 | SCN-06–10 |
| 13 | VS-03 | Production vertical slice | Intent → interpretation → forecast → commit → outcome → Chronicle | VS-02, PRE-03, UI-04 | SCN-04, SCN-05, SCN-11, SCN-16 |
| 14 | VS-04 | Production vertical slice | Character, BP, harm and continuation | VS-03 | SCN-02, SCN-03, SCN-06, SCN-12 |
| 15 | VS-05 | Production vertical slice | Company, autonomous actors and Relics | VS-02, VS-03 | SCN-07, SCN-08 |
| 16 | VS-06 | Production vertical slice | Holdings, custody and projects | VS-03, PRE-04 | SCN-04, SCN-06, SCN-13 |
| 17 | VS-07 | Production vertical slice | World, travel, Sites, evidence, Fronts and law | VS-02, VS-03, PRE-02, PRE-04 | SCN-09, SCN-10, SCN-11, SCN-13 |
| 18 | VS-08 | Production vertical slice | Async attention and return context | PRE-04, VS-07 | SCN-13, SCN-16 |
| 19 | VS-09 | Production vertical slice | Comic capture, Inflection, Source Lock and job queue | PRE-06, VS-03, UI-03 | SCN-14 |
| 20 | VS-10 | Production vertical slice | Comic QA, reader, editions and corrections | VS-09, PRE-05, PRE-06 | SCN-14–16 |
| 21 | VS-11 | Production vertical slice | Settings, accessibility, content controls and localization | PRE-05, UI-01, VS-01 | SCN-15, SCN-16, SCN-17 |
| 22 | QA-01 | Validation | Contract and 17-scenario end-to-end suite | VS-01–11 | SCN-01–17 |
| 23 | QA-02 | Validation | Accessibility, localization, device and visual validation | UI-02, UI-03, VS-11 | SCN-01, SCN-06, SCN-14–17 |
| 24 | REL-01 | Release and handoff | Production readiness gate and new-session Codex execution package | PRE-01–06, UI-01–04, QA-01–02, C4 approval, Implementation authorization | SCN-01–17 |

The first usable production slice is deliberately end-to-end: **Campaign Entry → Stage → Intent → Commit → Outcome → Chronicle**. Breadth work follows only after that slice proves generated contracts, projection safety, command idempotency, event recovery and accessible presentation together. Engine and frontend work are paired within player capabilities rather than split into drifting “engine later” and “frontend first” epics.

Each machine-readable backlog row includes contract/read/command/event IDs, owners, dependencies, state assumptions, knowledge boundaries, success and exception branches, loading/empty/stale/conflict/recovery behavior, accessibility, analytics scope, fixtures/tests, requirement/scenario/component traces and a definition of done.

---

## 6. Engine Prerequisites and Frontend Boundary

The six engine/platform prerequisites are:

1. generated consumers and runtime validation;
2. viewpoint-safe projection gateway;
3. idempotent command gateway and receipt lookup;
4. ordered event stream, durable save and reconnect;
5. accessibility/content/localization services; and
6. durable media queue, provenance and publication storage.

Frontend presentation may optimistically change only reversible local UI state. Ledger Time, resources, harm, position, custody, consent, relationships, world topology, publication and any other canonical effect wait for authoritative receipts or projections.

---

## 7. CI and Release Gates

| Gate | Name | Stage | Blocks when |
|---|---|---|---|
| CI-01 | Contract reference integrity | Pull request | Any unresolved reference, duplicate ID or count drift |
| CI-02 | Generated consumer drift | Pull request | Generated output differs or handwritten duplicate model appears |
| CI-03 | Deterministic fixture suite | Pull request | Any expectation fails or a negative payload is accepted |
| CI-04 | Knowledge leakage canaries | Pull request + nightly | Any hidden truth, private motive, secret clock, exact lost coordinates or protected media audit data reaches a public surface |
| CI-05 | Command authority and idempotency | Pull request + integration | Duplicate mutation, optimistic canonical state or retry-before-lookup |
| CI-06 | Projection freshness and conflict | Integration | Silent merge, stale commit or inaccessible recovery |
| CI-07 | Reconnect and durable persistence | Integration + nightly | Lost work, duplicate event/page or restarted completed checkpoint |
| CI-08 | Accessibility semantics | Pull request | Missing accessible name/role/state, focus loss, drag/hover-only action or color-only meaning |
| CI-09 | Human assistive-technology matrix | Release candidate | Any core capability lacks parity or material update is inaccessible |
| CI-10 | Localization and content fidelity | Pull request + release candidate | Clipped critical state, broken reading order or changed promise/fact/outcome meaning |
| CI-11 | Media publication hard gates | Integration + release | WIP without opt-in, knowledge-ceiling breach, failed asset, mutable edition or missing lineage |
| CI-12 | Privacy-safe analytics | Pull request + production canary | Any prohibited content or analytics-driven play mutation |
| CI-13 | Visual and responsive regression | Pull request + release candidate | Critical clipping, hierarchy loss, asset-truth dependency or capability loss |
| CI-14 | 17-scenario release suite | Release candidate | Any scenario lacks evidence or violates its canon/knowledge guardrail |
| CI-15 | Performance and long-session resilience | Nightly + release candidate | Budget breach, unreadable accumulation, lost state or blocked play |

No visual-only pass can satisfy a contract, accessibility, knowledge, persistence, media or privacy gate.

---

## 8. Separate Implementation-Authorization Decision

**Approved decision: C4 planning is locked and production implementation remains CLOSED.**

| Gate | Status | Evidence |
|---|---|---|
| C1 common/core contracts | PASS | Approved; 24/24 fixture expectations |
| C2 system-breadth contracts | PASS | Approved; 43/43 fixture expectations |
| C3 async/accessibility/media contracts | PASS | Approved; 60/60 fixture expectations |
| C4 scenario/component traceability | PASS | Approved; 17/17 scenarios and 40/40 components traced |
| C4 sequenced backlog and CI gates | PASS | Approved; 24 backlog items and 15 CI/release gates defined |
| Figma-free code-native component library | OPEN | UI-01 not yet authored/accepted |
| Final high-fidelity screens and state variants | OPEN | UI-02 not yet authored/accepted |
| Image/icon/illustration asset manifest | OPEN | UI-03 not yet authored/accepted |
| Frontend architecture/execution specification | OPEN | UI-04 not yet authored/accepted |
| New-session Codex execution package | OPEN | REL-01 follows all prior approvals |

The remaining work is not contract invention. It is the final Figma-free product-definition layer needed to make implementation executable without design improvisation: the code-native component library, final screen/state set, asset manifest and frontend architecture/execution specification.

---

## 9. C4 Acceptance Checks

The approved checkpoint passes its planning-level checks because:

1. C1, C2 and C3 are approved dependencies and all 127 fixture expectations pass;
2. every SCN-01 through SCN-17 record has contracts, fixtures/tests, engine prerequisites, a frontend slice and release validation;
3. every CMP-01 through CMP-40 record has contract IDs, payload boundaries, authority/frontend owners, tests and accessibility semantics;
4. all 24 backlog items contain the required C4 planning fields and an explicit definition of done;
5. the backlog begins with an end-to-end player capability rather than disconnected layers;
6. all 15 CI/release gates define evidence, ownership, stage and a blocking condition;
7. hidden truth, optimistic canon mutation, duplicate commit, inaccessible recovery, false media progress, mutable publication and analytics content exposure remain hard failures; and
8. the authorization record is explicitly closed until the Figma-free UI finalization artifacts are accepted.

This evidence does not prove production readiness, browser performance, human usability, assistive-technology interoperability, provider quality, storage durability, security or deployment readiness.

---

## 10. Approved Boundary

Product-owner approval on 2026-08-23 locks:

- the 17-scenario contract/test closure;
- the 40-component contract/test closure;
- the 24-item sequenced pre-engineering and production backlog;
- the engine prerequisite and frontend ownership boundaries;
- the 15 CI/release gates; and
- the decision to keep production implementation closed until UI-01 through UI-04 are complete and approved.

This approval authorizes the next planning stage: **Figma-free high-fidelity UI finalization**. It does not authorize production frontend construction, connect a live engine, select media providers, deploy the game, release a public build or begin the clean-session Codex execution run.
