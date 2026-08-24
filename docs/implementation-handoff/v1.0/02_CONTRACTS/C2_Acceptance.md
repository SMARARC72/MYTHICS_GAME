# Mythic Superhero RPG Platform
## Checkpoint C2 — System-Breadth Contract Acceptance Package v0.1

**Status:** Approved and locked  
**Date:** 2026-08-23  
**Phase:** 6 — Engine/UI implementation contracts  
**Approved dependency:** Checkpoint C1 — approved and locked 2026-08-23  
**Controlled workbook:** *Mythic RPG UX/UI Contract Traceability Matrix v0.1*  
**Contract package:** `c2_contracts/` with approved sibling dependency `c1_contracts/`  
**Implementation boundary:** Contract authoring and deterministic validation only. No production frontend, live engine, storage topology, transport choice or deployment platform is authorized.

---

## 1. C2 Result

Checkpoint C2 translates the approved system-specific flow atlas into enforceable engine/UI boundaries for Character, Company, Relics, Holdings, Projects, World and Chronicle.

All covered systems use one interaction grammar:

**Inspect → Configure Draft → Preview → Commit / Validate → Resolve → Persist → Continue**

Drafting never mutates Ledger Time, Build Points, money, Charge, materials, ammunition, custody, consent or authority. The UI may show a noncanonical preview; only an idempotent, validated commit may request canonical mutation.

| Evidence | Result |
|---|---:|
| Controlled C2 contract-matrix rows | 29 |
| Approved C1 dependency schemas | 4 |
| New C2 JSON Schema documents | 7 |
| OpenAPI operations | 25 |
| AsyncAPI messages | 9 |
| Deterministic fixtures | 43 |
| Positive fixtures accepted | 34 / 34 |
| Deliberately invalid fixtures rejected | 9 / 9 |
| Schema-reference failures | 0 |
| Failed fixture gates | 0 |

The validation harness resolves references across C1 and C2, checks every fixture against its controlled definition, verifies API/event versions and schema targets, confirms operation and message counts, and scans every positive public fixture for forbidden private or hidden-state keys.

---

## 2. Delivered Contract Artifacts

| Artifact | Purpose |
|---|---|
| `contract-manifest.json` | Package identity, approved C1 dependency, standards, scope and implementation boundary |
| `generation-policy.json` | C1 + C2 schema-owned TypeScript/runtime-validation policy; generator selection remains a C4 decision |
| `schemas/read-models/character-continuation.schema.json` | Character, XP/BP provenance, Wounds, defeat and playable continuation |
| `schemas/read-models/company-relics.schema.json` | Company governance, autonomous actors and Relic identity/access boundaries |
| `schemas/read-models/holdings-projects.schema.json` | Holdings, custody/ownership, facilities, funds, materials and project checkpoints |
| `schemas/read-models/world-investigation.schema.json` | Known-world map, travel, Sites, Cases, Fronts, response tracks, jurisdiction and legal process |
| `schemas/read-models/chronicle-routing.schema.json` | Cross-surface consequence bundles tied to one committed event lineage |
| `schemas/commands/system-breadth.schema.json` | Eleven explicit draft, request, commit, transfer, claim and continuation commands |
| `schemas/events/system-breadth.schema.json` | Nine ordered system-breadth events |
| `openapi/mythic-ui-c2.yaml` | Twenty-five synchronous viewpoint-safe reads and commands |
| `asyncapi/mythic-events-c2.yaml` | Nine campaign-and-viewpoint-scoped event messages |
| `fixtures/` | Thirty-four positive and nine deliberately invalid deterministic payloads |
| `tests/validate_contracts.py` | Dependency-free C1 + C2 validation and knowledge-leakage gate |
| `validation_report.json` | Current executable evidence: 43/43 gates passed |

JSON Schema remains the payload source of truth. OpenAPI and AsyncAPI reference controlled definitions rather than creating competing domain models.

---

## 3. Character, Progression, Harm and Continuation

### 3.1 Progression provenance

The Character contract makes XP and Build Points auditable rather than presenting only totals:

- every XP entry identifies its source event, activity family, amount, Ledger Time and accessible provenance;
- BP is separated into earned, spent and banked totals with ledger entries;
- unspent BP remains banked;
- an advancement draft is explicitly noncanonical;
- commit requires the open checkpoint, reviewed draft and exact reviewed allocation identifiers; and
- leveling cannot silently remove Wounds or other consequences.

The ordinary-survivor fixture proves that the Character model does not require an Awakening, heroic identity or special-power track.

### 3.2 Defeat is not automatic death

Zero Vitality is compatible with Downed, unconscious, incapacitated, captured, surrendering, fleeing, dying or destroyed states. A serialized `dead` state requires a death event record and a continuation reference. The deliberate false-death fixture is rejected.

### 3.3 Playable continuation

The continuation model preserves constrained but meaningful agency across defeat, dying, Threshold play, Echo, Ghost, Shade, Returned, Replica, possession, Hollow, Composite, successor, Legacy and optional permadeath routes.

Self, Memory, Name and Shadow are separate knowledge-classified soul components. The UI does not certify continuity that the viewpoint cannot know.

---

## 4. Company, Companions and Relics

### 4.1 Recruitment and governance

A recruitment offer must state purpose, role, duration, compensation, authority, equipment ownership, boundaries, exit rights and known risks. Acceptance applies only to the committed terms.

Company membership does not create ownership of a person. Governance, delegated authority and operational mode remain explicit.

### 4.2 Autonomous actors

Companions and person-like Relics may accept, refuse, counteroffer, depart, return, withhold information or revoke delegation according to their actual knowledge, Drives, authority and boundaries.

The public actor model provides evidence-backed qualitative relationship state and an accessible reason when known. Exact private Trust, Affinity, Respect, Loyalty, Fear, Obligation, Bond, motives and betrayal plans remain omitted. The deliberate private-motive and obedience-score fixtures are rejected.

### 4.3 Relic distinctions

The Relic model keeps these facts mechanically separate:

- physical custody;
- legal ownership;
- mythic Claims;
- Recognition;
- evidence-backed qualitative relationship state;
- Attunement;
- function access; and
- continuity, reformation and succession.

Possession grants none of the others automatically. Exact private Bond is rejected from the public payload.

---

## 5. Holdings, Custody and Projects

Every item projection preserves physical location, custody, ownership, condition, access state, legal status and provenance. Theft, seizure, loan, installation, loss and destruction remain distinct.

A custody-transfer command requires:

- item and both holder identifiers;
- an explicit authority reference;
- exact transfer terms; and
- final confirmation.

Changing custody does not silently change ownership, Relic Claim, Recognition, relationship, Attunement or function access. The unauthorized-transfer fixture is rejected.

Projects expose declared requirements, workers, interval status, Progress, reserved/installed/wasted/recoverable/consumed material states, known hazards, next checkpoint and provenance. A draft interval spends nothing. Commit requires reviewed interval, worker authority, material authority and confirmation.

---

## 6. World, Travel, Sites and Investigation

### 6.1 Canonical map versus known world

The client receives a Knowledge Map, never the Canonical Map. Place and route entries carry discovery state, knowledge classification, source and verification time.

When the party is uncertain, lost or displaced, the UI may show current senses and valid deductions. It may not serialize the engine's exact canonical coordinates. The lost-coordinate fixture is rejected.

### 6.2 Travel as play

A Journey records method, Pace, roles and authority, current leg, known route state, resource forecast and compression eligibility. A draft leg spends no time or fuel. Compression requires consent and pauses for a material event, shortage, route change, autonomy conflict, discovery, danger or arrival.

### 6.3 Persistent Sites

The Site projection contains only known Zones, known Connections, persistent changes, current assessments and last verification time. It never exposes:

- hidden Feature or Zone counts;
- canonical secret geometry;
- undiscovered contents; or
- a universal completion percentage.

Wall destruction can create a permanent Connection, expose or destroy evidence, alter water or structural state, and route consequences into Holdings, Cases, Fronts and Chronicle. Leaving or reloading does not reset it.

### 6.4 Evidence before conclusion

Case records contain Questions, player-authored Claims, Evidence, Leads, contradictions and deadlines. Classification describes the character's evidentiary basis; it never certifies engine truth.

Evidence retains observable content, custody, integrity and provenance. A claim command records a viewpoint hypothesis with supporting and contradicting evidence references.

---

## 7. Fronts, Response Tracks and Law

Front pressure is player-facing only as an evidence-backed qualitative state: Latent, Emerging, Escalating, Crisis, Transition, Unknown or Disputed. Private clock values remain server-side. The deliberate private-clock fixture is rejected.

The contract keeps separate:

- proposition-specific Case Strength;
- institution-specific Heat;
- secret-specific Exposure;
- observer-specific Threat Assessment;
- audience-specific Notoriety, Infamy and Reputation; and
- exact jurisdiction records.

There is no universal wanted meter.

Legal process progresses through incident, report, jurisdiction assessment, Case creation, suspect identification, evidence collection, authorization, enforcement, adjudication and sanction or resolution. A warrant conveys recorded procedural authority; it does not establish guilt, teleport officers or disable otherwise legal player action.

Confinement remains a persistent Site and continuation of play, not a forced cutscene.

---

## 8. Chronicle Consequence Routing

A `ChronicleConsequenceBundle` ties one or more committed source events to coherent projections on the Character, Company, Holdings, World and Chronicle surfaces.

The archive-breach fixture demonstrates one event lineage producing all of the following without contradiction:

- a serious Character Wound and defeat state;
- a companion refusal grounded in an observable boundary;
- custody of a Relic while ownership remains disputed;
- a new persistent Site Connection;
- recovered evidence and a Case lead;
- Front escalation and a jurisdiction-specific search authorization; and
- one Chronicle entry with navigable consequence links back into play.

The Chronicle is therefore a causal memory and navigation surface—not an endless chat transcript.

---

## 9. Synchronous Operation Contract

The OpenAPI candidate defines fourteen reads:

1. `getCharacterRecord`
2. `getAdvancementDraft`
3. `getContinuationState`
4. `getCompanyRecord`
5. `getAutonomousActorStatus`
6. `getRelicRecord`
7. `getHoldingsRecord`
8. `getProjectRecord`
9. `getKnownWorldMap`
10. `getJourneyState`
11. `getSiteRecord`
12. `getCaseRecord`
13. `getFactionFrontLegalRecord`
14. `getChronicleConsequenceBundle`

It also defines eleven commands:

1. `draftAdvancement`
2. `commitAdvancement`
3. `submitRecruitmentOffer`
4. `requestAutonomousActorAction`
5. `draftJourney`
6. `commitJourneyLeg`
7. `draftProjectInterval`
8. `commitProjectInterval`
9. `transferCustody`
10. `recordCaseClaim`
11. `chooseContinuation`

All commands use the approved C1 immutable, idempotent command envelope. Draft and request operations remain noncanonical. Commit acceptance is not proof of mutation; the approved C1 durable receipt and unknown-commit recovery contract remains authoritative.

---

## 10. Event Contract

The AsyncAPI candidate defines:

- `progression_committed`
- `defeat_continuation_changed`
- `autonomous_actor_status_changed`
- `relic_status_changed`
- `custody_transferred`
- `project_checkpoint_reached`
- `journey_interval_resolved`
- `world_record_updated`
- `chronicle_consequence_routed`

Events report ordered results and projection impact. They never give the transport authority to alter rules or canon.

---

## 11. Deliberate Invalid Gates

The following payloads must remain invalid:

1. zero Vitality serialized as death without a death event record;
2. an autonomous-actor projection containing a private motive;
3. an autonomous-actor projection containing an obedience score;
4. a public Relic projection containing exact Bond;
5. a lost Journey containing canonical coordinates;
6. a public Front containing a secret clock value;
7. a Site projection containing a hidden Feature count;
8. a custody transfer without an authority reference; and
9. an advancement commit without its reviewed draft.

These are contract-level trust gates, not presentation preferences.

---

## 12. C2 Acceptance Checks

The candidate passes its artifact-level checks because:

1. all seven C2 schema documents declare Draft 2020-12;
2. every C2 reference resolves against C2 or the approved C1 common vocabulary;
3. all thirty-four expected-valid fixtures validate;
4. all nine expected-invalid fixtures are rejected;
5. public fixtures contain none of the forbidden hidden/private keys;
6. OpenAPI contains twenty-five unique operations and eleven idempotent command boundaries;
7. AsyncAPI contains the nine required system-breadth messages;
8. Character progression preserves provenance and banked BP;
9. defeat, death and continuation remain mechanically distinct;
10. companion and Relic autonomy cannot collapse into obedience;
11. custody cannot collapse into ownership, Claim, relationship or Attunement;
12. known-world, Site, Case, Front and law projections respect viewpoint knowledge;
13. one committed event can route coherent consequences to all five product surfaces; and
14. the controlled workbook contains C2 overview, matrix, fixture and system-boundary sheets with zero formula errors and all sixteen sheets visually inspected.

This evidence does not prove live reducer compatibility, browser usability, assistive-technology behavior, latency, persistence, security or production readiness.

---

## 13. Approval Record and Boundary

Product-owner approval on 2026-08-23 locks:

- the inspect/draft/preview/commit/resolve/persist system grammar;
- the fourteen C2 read-model boundaries;
- the eleven system-breadth command boundaries;
- the twenty-five synchronous operations;
- the nine event-message boundaries;
- the cross-surface Chronicle consequence bundle;
- the nine prohibited-payload gates;
- the forty-three fixture expectations; and
- the C2 rows in the controlled traceability workbook.

This approval authorizes Checkpoint C3 asynchronous, accessibility and media contract authoring.

This approval does **not** authorize production frontend construction, select the final API transport, connect a live campaign, choose storage or service topology, deploy a player-facing game, or waive the C4 implementation-authorization gate.

When high-fidelity screens, the component library and visual assets are authorized later, they will be produced without Figma. The implementation path will use a code-native component library and generated or directly prepared image assets while retaining the approved contract boundaries.
