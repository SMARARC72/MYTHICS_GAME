# Mythic Superhero RPG Platform
## Checkpoint C1 — Common Contract and Core Loop Acceptance Package v0.1

**Status:** Approved and locked — product-owner approval recorded 2026-08-23  
**Date:** 2026-08-23  
**Phase:** 6 — Engine/UI implementation contracts  
**Approved foundation:** *Engine/UI Contract Foundation v0.1A* — approved and locked 2026-08-23  
**Controlled workbook:** *Mythic RPG UX/UI Contract Traceability Matrix v0.1*  
**Contract package:** `c1_contracts/`  
**Implementation boundary:** Contract authoring and deterministic validation only. No production frontend, live engine, storage topology, transport selection or deployment platform is authorized.

---

## 1. C1 Result

Checkpoint C1 translates the approved Stage-centered player experience into enforceable engine/UI boundaries for the first complete player action loop:

**Stage → Intent → Interpretation → Forecast → Commit → Resolution → Receipt**

The approved package delivers:

| Evidence | Result |
|---|---:|
| Controlled contract-matrix rows | 26 |
| JSON Schema documents | 4 |
| OpenAPI operations | 9 |
| AsyncAPI messages | 6 |
| Deterministic fixtures | 24 |
| Positive fixtures accepted | 21 / 21 |
| Deliberately invalid fixtures rejected | 3 / 3 |
| Schema-reference failures | 0 |
| Failed fixture gates | 0 |

The validation harness covers every JSON Schema keyword used by this C1 package, resolves every schema reference, checks the API/event document versions and external schema targets, verifies all expected-valid and expected-invalid fixtures, and scans every public positive fixture for forbidden hidden-truth and private-diagnostic keys. A separate ecosystem validator and generated-consumer drift gate remain C4 CI/tooling decisions.

---

## 2. Delivered Contract Artifacts

| Artifact | Purpose |
|---|---|
| `contract-manifest.json` | Package identity, versions, scope and implementation boundary |
| `generation-policy.json` | Schema-owned TypeScript/runtime-validation policy without prematurely selecting a generator |
| `schemas/common/common.schema.json` | Opaque identifiers, Ledger Time, versions, knowledge, provenance, freshness, permissions, accessibility, public outcomes, recovery and shared envelopes |
| `schemas/read-models/core-loop.schema.json` | World Strip, Stage Frame, Entity Context Lens, Intent Capability, Interpreted Proposal, Forecast and Resolution Beat |
| `schemas/commands/core-loop.schema.json` | Interpret, revise, forecast, commit, status lookup and durable receipt contracts |
| `schemas/events/core-loop.schema.json` | Committed state, accessible projection, decision-window, command-status, recovery and accessibility events |
| `openapi/mythic-ui-c1.yaml` | Nine synchronous viewpoint-safe read and command operations |
| `asyncapi/mythic-events-c1.yaml` | Six ordered, campaign-and-viewpoint-scoped event messages |
| `fixtures/` | Twenty-one positive and three deliberately invalid deterministic payloads |
| `tests/validate_contracts.py` | Dependency-free validation harness and knowledge-leakage gate |
| `validation_report.json` | Current executable evidence: 24/24 gates passed |

JSON Schema remains the payload source of truth. OpenAPI and AsyncAPI reference those schemas rather than redefining the same domain model. Generated TypeScript types and runtime validators must derive from the controlled sources; handwritten frontend domain interfaces may not compete with them.

---

## 3. Common Vocabulary Locked by Approval

### 3.1 Authority and identity

- Campaign, actor, viewpoint, proposal, command, receipt, event and fact identifiers are opaque.
- `state_version` identifies the exact canonical state basis.
- `knowledge_snapshot_id` identifies the exact projection basis.
- Ledger Time remains structured campaign time; `generated_at` is only a real-world transport timestamp.
- Correlation and causation identifiers describe lineage but do not create rules priority.

### 3.2 Knowledge safety

The player-visible classes are `perceived`, `recorded`, `reported`, `inferred`, `forecast`, `disputed`, `last_known` and `out_of_character`. Hidden canonical truth has no public class and no nullable placeholder. It must be removed before serialization.

Material facts carry accessible provenance, as-of Ledger Time, classification, visibility scope and—when rules permit—confidence or contradiction references. The negative Stage fixture proves that an added canonical-coordinate field is rejected.

### 3.3 Command safety

Every canonical command carries:

- a unique `command_id`;
- an idempotency key;
- campaign, actor and viewpoint identity;
- reviewed state and knowledge versions;
- proposal identity when committing interpreted intent;
- confirmation class and input provenance; and
- immutable command-specific payload.

The negative commit fixture proves that a canonical commit without an idempotency key is rejected.

### 3.4 Accessibility semantics

Material updates can carry a semantic role, announcement priority and text, deduplication key, focus recommendation, text alternative, structured choices and timing semantics. These fields convey meaning; the eventual browser implementation still owns standards-compliant DOM, keyboard, screen-reader, voice and switch behavior.

---

## 4. Core Read Models

| Contract | Player-facing obligation | Canon/knowledge guardrail |
|---|---|---|
| `WorldStripStatus` | Keep viewpoint, place, Ledger Time, danger, save and comic status continuously legible | Place is a projected fact, never hidden coordinates |
| `StageFrame` | Present the living world, active pressure and context-relevant modules | All people, objects, place and pressure entries are knowledge-classified facts |
| `EntityContextLens` | Inspect people, Relics, objects, places, evidence, routes and conditions without leaving play | Unavailable authority returns actor-safe reasons; no obedience or hidden-truth meter |
| `IntentCapability` | Preserve free intent and alternate input while offering a few optional examples | Examples are explicitly not permissions or an action boundary |
| `InterpretedProposal` | Expose preserved goal, interpreted method, targets, scope, assumptions, ambiguity and known costs | Creates noncanonical proposal versions; revision supersedes rather than edits history |
| `ProposalForecast` | Provide banded risk and possible outcomes from accessible assumptions | `noncanonical` is always true and invalidation conditions are explicit |
| `ResolutionBeat` | Present committed result, spend, world deltas and continuation choices | World deltas are knowledge-safe projections of committed events |

---

## 5. Synchronous Operation Contract

The approved OpenAPI contract defines:

1. `getStageFrame`
2. `getWorldStripStatus`
3. `getEntityContextLens`
4. `getIntentCapability`
5. `interpretIntent`
6. `reviseProposal`
7. `forecastProposal`
8. `commitAction`
9. `resolveCommitStatus`

No chatbot endpoint exists. Free language is an input control inside the game loop. Only `commitAction` may request a canonical mutation, and it remains subordinate to validator and reducer acceptance. A successful HTTP submission is not itself proof of a committed action; the durable receipt is authoritative.

---

## 6. Event Contract

The approved AsyncAPI contract defines:

- `canonical_state_committed`
- `accessible_projection_updated`
- `decision_window_changed`
- `command_status_changed`
- `recovery_required`
- `accessibility_announcement`

The event channel is scoped by campaign and viewpoint. It allows the Stage to react to world change without becoming an endless transcript or depending on continuous polling. Event delivery reports state; it does not give the event transport authority to change rules or canon.

---

## 7. Public Outcome and Receipt Taxonomy

| Family | Public code | Typical receipt status | Canonical effect |
|---|---|---|---|
| Success | `success.committed` | `committed` | Committed event lineage returned |
| Mixed / failure | `mixed.failure` | `committed` | Committed cost, failure or complication returned |
| Causal rejection | `rejected.causal_impossible` | `rejected` | No rejected-action spend |
| Rules rejection | `rejected.rule_invalid` | `rejected` | No rejected-action spend |
| Actor refusal | `refused.actor_boundary` | `rejected` | No obedience override |
| Interruption | `interrupted.window` | `committed` | Committed interruption/consequence events |
| Access unavailable | `unavailable.access` | `rejected` | No rejected-action spend |
| Timing unavailable | `unavailable.window_closed` | `rejected` | No rejected-action spend |
| Provider unavailable | `unavailable.provider` | `retryable_failure` | Campaign canon unchanged |
| Destructive consequence | `destructive.consequence` | `committed` | Persistent destructive events returned |
| Replan | `replan.state_changed` | `replan_required` | No duplicate action mutation |
| Stale conflict | `conflict.state_version` | `conflict` | No unsafe merge or duplicate mutation |
| Unknown commit | `recovery.unknown_commit` | `unknown_commit` | Status remains unknown until durable lookup |

The outcome family and public code are schema-coupled; they cannot be arbitrarily mixed. Public outcome payloads retain the goal, interpreted method, accessible obstacle, possible portion, revisable fields, spend truth, retry eligibility and safe references. The negative diagnostic fixture proves that a private validator diagnostic is rejected.

---

## 8. Unknown-Commit Recovery

The approved contract makes the dangerous transport-failure sequence explicit:

1. the client submits one idempotent commit;
2. the response is lost;
3. the UI receives or reconstructs `unknown_commit` without declaring success or failure;
4. retry remains prohibited;
5. `resolveCommitStatus` looks up the original command and original idempotency key;
6. the engine returns pending, committed, rejected or still-unknown status; and
7. only a confirmed noncommit may permit another action attempt.

The UI may preserve the player's draft and reviewed proposal locally, but it may not optimistically decrement resources, advance Ledger Time, move the actor, apply harm or narrate a committed consequence.

---

## 9. Fixture Coverage

The positive fixtures cover:

- current World Strip and Stage projections;
- disputed Lens information;
- free-intent capability;
- interpretation and proposal review;
- noncanonical forecast;
- idempotent commit;
- success and mixed failure;
- causal impossibility;
- autonomous refusal;
- access unavailability;
- interruption;
- destructive consequence;
- material replan;
- stale conflict;
- unknown commit and status lookup;
- mixed resolution presentation; and
- recovery event accessibility semantics.

The negative fixtures must remain invalid:

1. Stage payload containing exact canonical coordinates;
2. commit command missing its idempotency key; and
3. public rejection containing a private validator diagnostic.

---

## 10. C1 Acceptance Checks

The approved package passes its artifact-level checks because:

1. all four schema documents declare Draft 2020-12 and all references resolve;
2. all twenty-one expected-valid fixtures validate;
3. all three expected-invalid fixtures are rejected;
4. all public positive fixtures are free of the forbidden hidden-truth and private-diagnostic keys;
5. OpenAPI contains nine unique operation identifiers and a required idempotency header for commit;
6. AsyncAPI contains the six required C1 messages and viewpoint-scoped channel;
7. the receipt taxonomy distinguishes outcome meaning from receipt transport/commit status;
8. the full action loop never lets interpretation, forecast or UI rendering mutate canon;
9. the traceability workbook maps every C1 contract to authority, knowledge, versioning, exceptions, accessibility, requirements, scenarios, components and fixtures; and
10. the controlled workbook exports with zero formula errors and all twelve sheets visually inspected.

This is contract acceptance evidence. It does not prove provider implementation, live reducer compatibility, browser usability, assistive-technology behavior, latency, persistence, security or production readiness.

---

## 11. Approval Boundary

Product-owner approval of Checkpoint C1 on 2026-08-23 locks:

- the shared C1 contract vocabulary and envelope semantics;
- the seven core read models;
- the five core command/request definitions and durable receipt;
- the nine synchronous operation boundaries;
- the six event-message boundaries;
- the public outcome/code mapping and unknown-commit sequence;
- the twenty-four deterministic fixture expectations;
- the schema-owned generated-consumer policy; and
- the C1 rows in the controlled traceability workbook.

Approval authorizes Checkpoint C2 system-breadth contract authoring for Character/BP/Wounds/continuation, Company/companions/Relics, Holdings/projects, World/maps/travel/sites/evidence/Fronts/law/reputation and Chronicle consequence routing.

Approval does **not** authorize production frontend construction, select the final API transport, connect a live campaign, choose storage or service topology, deploy a player-facing game, or waive the C4 implementation-authorization gate.
