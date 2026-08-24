# Mythic Superhero RPG Platform
## Checkpoint C3 — Async, Accessibility and Media Contract Acceptance Package v0.1

**Status:** Approved and locked — 2026-08-23  
**Date:** 2026-08-23  
**Phase:** 6 — Engine/UI implementation contracts  
**Approved dependencies:** Checkpoints C1 and C2 — approved and locked 2026-08-23  
**Controlled workbook:** *Mythic RPG UX/UI Contract Traceability Matrix v0.1*  
**Contract package:** `c3_contracts/` with approved sibling dependencies `c1_contracts/` and `c2_contracts/`  
**Implementation boundary:** Contract authoring and deterministic validation only. No production frontend, media provider, storage topology, transport choice, deployment platform or live campaign integration is authorized.

---

## 1. C3 Result

Checkpoint C3 converts asynchronous play support, accessibility, content controls, localization, comic production and privacy-safe analytics into enforceable engine/UI boundaries.

The package makes five product promises machine-verifiable:

1. comic capture is lightweight and never blocks ordinary play;
2. save, recovery, background queues and Source Locks survive interruption and provider failure;
3. accessibility meaning, alternate input and localization fidelity travel with state and media;
4. WIP, published issues and attention summaries cannot exceed the player’s permitted knowledge; and
5. media provenance, hard QA and immutable edition history cannot be bypassed by presentation code.

| Evidence | Result |
|---|---:|
| New C3 JSON Schema documents | 8 |
| Approved dependency schemas | 11 |
| OpenAPI operations | 26 |
| AsyncAPI messages | 13 |
| Deterministic fixtures | 60 |
| Positive fixtures accepted | 43 / 43 |
| Deliberately invalid fixtures rejected | 17 / 17 |
| Schema-reference failures | 0 |
| Failed fixture gates | 0 |

The dependency-free validation harness resolves references across C1, C2 and C3; checks every fixture against its controlled definition; verifies API and event schema targets; confirms operation and message counts; and scans positive public fixtures for forbidden private or hidden-state keys.

---

## 2. Delivered Contract Artifacts

| Artifact | Purpose |
|---|---|
| `contract-manifest.json` | C3 package identity, approved dependencies, standards and authority boundaries |
| `generation-policy.json` | C1–C3 schema-owned TypeScript/runtime-validation policy; generator selection remains C4-gated |
| `schemas/read-models/async-attention-recovery.schema.json` | Connectivity, durable save/recovery and knowledge-safe attention aggregation |
| `schemas/read-models/accessibility-content-localization.schema.json` | Accessibility preferences, content boundaries, localization fidelity and Issue #0 alternatives |
| `schemas/read-models/comic-capture-source-lock.schema.json` | Lightweight capture, Inflection review and immutable Source Lock |
| `schemas/read-models/comic-production-reader.schema.json` | Resumable production stages, WIP policy, reader packages and edition history |
| `schemas/media/media-provenance.schema.json` | Protected media lineage, rights, accepted bytes, QA and accessible publication packages |
| `schemas/commands/async-media.schema.json` | Twelve explicit recovery, preference, Source Lock, WIP, QA, publication and correction commands |
| `schemas/events/async-media.schema.json` | Thirteen ordered recovery, accessibility and media events |
| `schemas/telemetry/privacy-safe-analytics.schema.json` | Coarse analytics that contain no player content, private canon, prompts, dialogue or asset bytes |
| `openapi/mythic-ui-c3.yaml` | Fourteen viewpoint-safe reads and twelve idempotent command boundaries |
| `asyncapi/mythic-events-c3.yaml` | Thirteen campaign-and-viewpoint-scoped event messages |
| `fixtures/` | Forty-three positive and seventeen deliberately invalid deterministic payloads |
| `tests/validate_contracts.py` | C1–C3 reference, fixture, API, event and knowledge-boundary validator |
| `validation_report.json` | Current executable evidence: 60/60 gates passed |

JSON Schema remains the payload source of truth. OpenAPI and AsyncAPI reference controlled definitions rather than creating competing domain models.

---

## 3. Connectivity, Save and Recovery

The connectivity projection separates network state from play capability. A degraded or offline connection may still permit safe local drafting or other noncanonical work; a canonical conflict may require commit pause without making the whole product unusable.

Every recovery projection records:

- the last durable state version and checkpoint;
- whether gameplay is full, offline-safe, read-only or paused for a canonical conflict;
- explicit recovery actions;
- a viewpoint-safe explanation;
- preservation of comic capture, background work and Source Locks; and
- checkpoint-based resume rather than restart.

Lost responses do not imply failed canonical mutation. The approved C1 unknown-commit lookup contract remains authoritative.

Provider failure is a dependency state, not permission to discard media work, fabricate an outcome or freeze Ledger Time.

---

## 4. Attention Aggregation

The attention digest groups off-screen consequences by causal and temporal windows. Each item carries a category, urgency, action-needed flag, target surface, delivered source events and a knowledge-classified summary.

Only delivered information may enter a player-facing digest. The digest cannot become an omniscient faction feed, secret Front clock, future-consequence preview or private actor report.

Aggregation is also an accessibility requirement: screen-reader and reduced-attention modes can receive essential or grouped updates instead of a flood of live announcements.

---

## 5. Accessibility, Content Controls and Localization

### 5.1 Accessibility profile

The contract supports keyboard, pointer, controller, voice, switch and touch input; text scaling; contrast; reduced motion; screen-reader behavior; and essential, grouped or detailed live updates.

The following are fixed gates:

- color cannot be the only carrier of meaning;
- drag interactions require a non-drag alternative;
- hover cannot be the only path to information or action; and
- confirmed preferences survive across sessions.

### 5.2 Content controls

Lines, Veils and presentation intensity are explicit confirmed preferences. They apply to both gameplay and comic presentation and are never inferred from character prose.

### 5.3 Localization

Localization uses separate lettering layers, approved terminology and explicit reading direction. Translation must preserve dialogue source traceability and cannot change promises, insults, facts or outcome meaning.

### 5.4 Issue #0

Issue #0 exposes read, summarize, defer and skip modes. If its media is unavailable or corrupt, an accessible summary remains available and play begins normally. Skipping has no gameplay penalty.

---

## 6. Comic Capture and Inflection Review

During active play, comic work is limited to lightweight records already justified by committed events:

- source Event IDs and exact intervals;
- dialogue references;
- viewpoint and Reader Knowledge Ceiling;
- visible appearance, position, blocking, equipment, injury and environment state; and
- candidate Comic Beat markers.

Capture is explicitly noncanonical and cannot change outcomes, grant XP or reinterpret discarded model proposals as history.

Inflection review presents the eligible event range, mandatory beats, optional beats, viewpoint choices and selected knowledge ceiling. Players may review, defer or decline an optional checkpoint while play continues.

---

## 7. Source Lock

Source Lock is an immutable adaptation boundary containing:

- source-event range;
- Canon Snapshot identifier and exact state version;
- selected viewpoint and Reader Knowledge Ceiling;
- included mandatory/selected beats and excluded optional beats;
- rights-manifest references; and
- the first event of the next adaptation window.

Source Lock freezes only adaptation input. It cannot freeze gameplay, Ledger Time, world simulation, relationships or later canonical events.

Later events belong to a later adaptation window and cannot rewrite the issue already in production.

---

## 8. Durable Comic Production

The player-facing job lifecycle is:

**Capturing → Waiting for Inflection → Preparing → Source Locked → Outlined → Scripted → Storyboarded → Generating → Art QA → Lettered → Page QA → Exporting → Approved → Published**

`Blocked` is an honest recoverable state for a missing provider, reference, right, font, export profile or required review.

The job exposes durable completed checkpoints and the current checkpoint. It does not expose an invented percentage or promised completion date. Retry resumes at the nearest valid checkpoint, preserves accepted assets and does not duplicate pages or restart completed work.

Gameplay continues through every media stage.

---

## 9. WIP, Reader and Editions

WIP access is disabled by default and requires explicit opt-in. Every WIP surface remains clearly labeled and must pass the selected Reader Knowledge Ceiling.

Reader pages require:

- passed hard QA;
- source-lock linkage;
- provenance-manifest linkage;
- deterministic reading order; and
- knowledge-safe alt text.

Published editions and their accepted assets are immutable. A correction creates a new edition that explicitly supersedes the prior edition while preserving its history. Presentation code cannot overwrite a published issue in place.

---

## 10. Media Provenance and Publication Accessibility

The protected asset manifest records source events, Source Lock, content hash, provider and model profile, generation settings, prompt/reference manifests, seed, attempt, edits, rights and QA.

Accepted bytes are retained. Exact regeneration from a nondeterministic provider is never assumed.

Every published accessibility package includes:

- deterministic reading order;
- page/panel alt text;
- dialogue, speaker, caption and SFX transcripts;
- color-independent identification;
- navigable structure;
- event-derived content warnings; and
- localization profile linkage.

All accessible descriptions remain under the Reader Knowledge Ceiling.

---

## 11. Privacy-Safe Analytics

Analytics may record only coarse categories, surfaces, outcomes and contract references. The schema forbids:

- player-entered prose;
- private or hidden canon;
- prompt text;
- raw dialogue;
- image or other asset bytes; and
- any use of analytics to alter play.

Retention and consent scope remain explicit.

---

## 12. Synchronous Operation Contract

The OpenAPI candidate defines fourteen reads:

1. `getConnectivityState`
2. `getSaveRecoveryState`
3. `getAttentionDigest`
4. `getAccessibilityProfile`
5. `getContentControlProfile`
6. `getLocalizationProfile`
7. `getIssueZeroAvailability`
8. `getComicCaptureRecord`
9. `getComicInflectionReview`
10. `getComicSourceLockRecord`
11. `getComicJobRecord`
12. `getComicReaderRecord`
13. `getComicEditionHistory`
14. `getMediaAssetManifest`

It also defines twelve commands:

1. `acknowledgeRecovery`
2. `retryRecovery`
3. `updateAccessibilityProfile`
4. `updateContentControlProfile`
5. `updateLocalizationProfile`
6. `reviewComicInflection`
7. `createComicSourceLock`
8. `setComicWipPolicy`
9. `requestComicJobRecovery`
10. `submitComicQaDisposition`
11. `publishComicEdition`
12. `requestComicCorrection`

All commands use the approved immutable, idempotent C1 envelope. Acceptance remains a receipt state, not proof that a canonical or publication mutation occurred.

---

## 13. Event Contract

The AsyncAPI candidate defines:

- `connectivity_state_changed`
- `save_checkpoint_committed`
- `recovery_state_changed`
- `attention_digest_updated`
- `accessibility_profile_changed`
- `content_controls_changed`
- `comic_capture_updated`
- `comic_inflection_ready`
- `comic_source_locked`
- `comic_job_status_changed`
- `comic_review_required`
- `comic_edition_published`
- `comic_edition_superseded`

Events report durable ordered state. They do not grant transport, media providers or the UI authority to change canon.

---

## 14. Deliberate Invalid Gates

The following payloads must remain invalid:

1. a comic job with an invented progress percentage;
2. a comic job with a promised completion timestamp;
3. WIP shown without explicit opt-in;
4. WIP above the Reader Knowledge Ceiling;
5. a published page whose asset failed QA;
6. a Source Lock without a Canon Snapshot;
7. a Source Lock that blocks gameplay;
8. a published job labeled as WIP;
9. a correction that overwrites an existing edition;
10. an attention item built from information not delivered to the viewpoint;
11. provider recovery that discards the queue;
12. comic capture that mutates canon;
13. Issue #0 blocking play;
14. analytics containing player content;
15. localization that changes meaning;
16. a drag-only accessibility profile; and
17. an accepted media asset whose bytes were not retained.

These are product-trust and continuity gates, not presentation preferences.

---

## 15. C3 Acceptance Checks

The candidate passes its artifact-level checks because:

1. all eight C3 schema documents declare JSON Schema Draft 2020-12;
2. every schema reference resolves against C3 or the approved C1/C2 vocabulary;
3. all forty-three expected-valid fixtures validate;
4. all seventeen expected-invalid fixtures are rejected;
5. public fixtures contain none of the forbidden hidden/private keys;
6. OpenAPI contains twenty-six unique operations and twelve idempotent command boundaries;
7. AsyncAPI contains thirteen required messages;
8. save, queue, capture and Source Lock durability survive interruption and provider failure;
9. attention aggregation is delivered-information and viewpoint safe;
10. accessibility, content controls and localization have structural contract gates;
11. Issue #0 cannot block play;
12. capture and Source Lock cannot mutate or pause the campaign;
13. player-facing comic progress is honest and stage based;
14. WIP is opt-in and knowledge constrained;
15. publication requires QA, provenance, accessibility and rights linkage;
16. correction preserves immutable edition history; and
17. analytics contains no player prose, prompt text, raw dialogue, private canon or asset bytes.

This evidence does not prove browser usability, assistive-technology interoperability, provider quality, storage durability, security, live reducer compatibility, localization quality or production readiness.

---

## 16. Approved Boundary

Product-owner approval on 2026-08-23 locks:

- the three async/recovery read-model boundaries;
- the four accessibility/content/localization boundaries;
- the six comic capture, Source Lock, job, reader and edition boundaries;
- the media provenance and accessible-publication boundaries;
- the privacy-safe analytics boundary;
- the twenty-six synchronous operations;
- the thirteen event-message boundaries;
- the seventeen prohibited-payload gates;
- the sixty fixture expectations; and
- the C3 rows in the controlled traceability workbook.

This approval authorizes Checkpoint C4 traceability closure, implementation backlog and the separate implementation-authorization decision.

This approval does **not** authorize production frontend construction, choose an API or queue technology, select media providers, connect a live campaign, choose storage/service topology, deploy the game, or waive the C4 gate.

The later high-fidelity component library, mock screens and visual assets remain Figma-free. They will be finalized before the separate new-session Codex implementation handoff is prepared.
