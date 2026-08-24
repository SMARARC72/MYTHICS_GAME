# Mythic Superhero RPG Platform
## UI-02 — Final High-Fidelity Screen Atlas v0.1

**Status:** Approved and locked — 2026-08-23  
**Date:** 2026-08-23  
**Approved dependency:** UI-01 — approved and locked 2026-08-23  
**Primary target:** Desktop browser · Adaptive Living World Stage · Ledger Time  
**Browser reference:** https://mythic-rpg-screen-atlas.krz111111.chatgpt.site  
**Production implementation authorization:** **CLOSED**

---

## 1. UI-02 Result

UI-02 turns the approved code-native library into 14 final screen families rather than a skinned chat transcript. The atlas demonstrates the complete journey from Campaign Library and Issue #0 through character creation, living play, action resolution, danger, persistent systems, recovery, accessibility and Chronicle media. Every story value is a deterministic noncanonical fixture.

| Evidence | Result |
|---|---:|
| Final screen families | 14 |
| Public state variants | 13 |
| Access presentations | 6 |
| Scenario walkthroughs covered | 17/17 |
| UI-01 components traced | 40/40 |
| Unresolved UX decisions | 0 |
| Browser build/deployment | succeeded |
| Production implementation authorized | No |

## 2. Final Screen Families

- **SCR-01 · Campaign Library & Resume:** Where was I, and can I safely continue? (Out-of-campaign; 7 baseline states; SCN-01, SCN-13, SCN-17).
- **SCR-02 · New Campaign & Issue #0:** What kind of story am I entering, and what may I control? (Out-of-campaign; 5 baseline states; SCN-01, SCN-15, SCN-16, SCN-17).
- **SCR-03 · Character Creation & BP Review:** Who can I be, and is this build legal without hiding tradeoffs? (Character; 5 baseline states; SCN-02, SCN-03, SCN-16, SCN-17).
- **SCR-04 · Living Stage · Exploration & Social:** What is happening, what matters, and what can I try? (Stage; 6 baseline states; SCN-01, SCN-04, SCN-09, SCN-16, SCN-17).
- **SCR-05 · Interpretation, Forecast & Resolution:** Did the game understand me, what can I know, and what changed? (Stage; 9 baseline states; SCN-04, SCN-05, SCN-16, SCN-17).
- **SCR-06 · Immediate Danger, Interrupt & Defeat:** What changed under pressure, what can I still do, and how does play continue? (Stage; 7 baseline states; SCN-06, SCN-12, SCN-16, SCN-17).
- **SCR-07 · Character, Condition & Progression:** What can I do now, what is affecting me, and how may I grow? (Character; 6 baseline states; SCN-03, SCN-06, SCN-12, SCN-17).
- **SCR-08 · Company, Relationships & Relic Agency:** Who is with me, what do we know about each other, and who may say no? (Company; 6 baseline states; SCN-07, SCN-08, SCN-16, SCN-17).
- **SCR-09 · Holdings, Custody & Projects:** What do I have, who controls it, and what will this project really require? (Holdings; 6 baseline states; SCN-06, SCN-16, SCN-17).
- **SCR-10 · World Atlas, Travel & Exploration:** Where do I believe I am, what route can I attempt, and what remains unknown? (World; 7 baseline states; SCN-09, SCN-11, SCN-13, SCN-16, SCN-17).
- **SCR-11 · Cases, Evidence, Fronts & Law:** What can I support, what is disputed, and what pressure is actually visible? (World; 7 baseline states; SCN-06, SCN-10, SCN-11, SCN-13, SCN-16, SCN-17).
- **SCR-12 · Chronicle, Audit & Comic Reader:** What became canon, why did it change, and is the comic safe to read? (Chronicle; 8 baseline states; SCN-11, SCN-12, SCN-13, SCN-14, SCN-16, SCN-17).
- **SCR-13 · Save Recovery, Offline & Conflict:** What was saved, what is uncertain, and how do I return without losing work? (System layer; 7 baseline states; SCN-14, SCN-16, SCN-17).
- **SCR-14 · Settings, Accessibility & Content Controls:** Can I shape how the game communicates without losing capability? (Out-of-campaign; 6 baseline states; SCN-16, SCN-17).

The six stable in-campaign destinations remain Stage, Character, Company, Holdings, World and Chronicle. Campaign Library, onboarding, recovery and settings stay in the out-of-campaign or system layer. Combat is an intensified Stage, not a separate game board.

## 3. State and Access Coverage

The screen set visibly distinguishes ready, loading, empty, stale, conflict, recovery, unavailable, offline, success, mixed, failure, refusal and interruption. Each variant pairs a word with a shape or structural cue, states what remains trustworthy and offers a safe next action.

Desktop 1440×900+ is the reference. Compact desktop 1280×720, high contrast, large text/200% reflow, reduced motion and screen-reader/alternate-input presentations retain the same core capability. Recomposition may change emphasis; it may not remove legal intent, recovery or inspection.

## 4. Progressive World Introduction

The opening experience begins with current world, Ledger Time, viewpoint, pressure, an explorable scene and one meaningful choice. Rules appear when they explain a material decision. Contextual possibilities remain examples, not permissions. Free Goal and Method remain the primary control, and interpretation is always reviewable before commitment.

The core loop remains **Perceive → Inspect → Declare → Review → Commit → Resolve → Continue**. The Chronicle records consequences; it does not replace play.

## 5. Contract and Canon Boundary

Every screen family names its viewpoint-safe knowledge boundary, deterministic fixture label, keyboard order, live-region behavior, compact rule, components and scenarios. Presentation may preserve reversible drafts and focus state. It may not invent hidden truth, actor motives, permissions, receipt outcomes, canonical events or media approval.

The two generated images in the reference are explicitly noncanonical. They are UI-02 composition evidence only and require a UI-03 asset-manifest disposition before any production use.

## 6. Acceptance Checks

The approved atlas passes its UI-02 checks because:

1. SCR-01 through SCR-14 are present exactly once with no unresolved UX decision;
2. every screen names a player question, fixture boundary, knowledge ceiling, states, components, scenarios, keyboard order, live-region rule, compact rule and interaction notes;
3. SCN-01 through SCN-17 and CMP-01 through CMP-40 are each covered;
4. all 13 public state variants and six access presentations are specified;
5. the browser-native atlas can switch screen families, subviews, state variants and access presentations;
6. the production Site build and owner-scoped deployment succeeded; and
7. production implementation authorization remains explicitly closed.

These checks do not prove human usability, assistive-technology interoperability, browser performance, live-engine behavior, provider reliability, security, storage durability, production art readiness or public-release readiness. Those remain downstream validation obligations.

## 7. Approval Boundary

Product-owner approval on 2026-08-23 locks:

- the 14 final screen families and their player questions;
- screen routes, subviews, deterministic fixture and knowledge boundaries;
- baseline public states and access presentations;
- keyboard order, live-region, compact and interaction notes;
- the 17/17 scenario and 40/40 component coverage; and
- the browser-native final screen reference behavior.

This approval authorizes **UI-03 image, icon and illustration asset-manifest work**. It does not authorize production frontend construction, connect a live engine, select providers, deploy the game, release a public game build or begin the clean-session Codex execution run.
