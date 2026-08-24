# Mythic Superhero RPG Platform
## UX/UI Foundation v0.1A

**Status:** Approved and locked  
**Date:** 2026-08-22  
**Approved by:** Product owner on 2026-08-22  
**Governing source:** *Mythic Superhero RPG Platform — World Constitution and Approved Design Register v1.27*  
**Sequence authority:** *Mythic Superhero RPG UX/UI Implementation Handoff*  
**Scope:** Experience principles, device strategy, product-shell hypothesis, core gameplay interaction hypothesis, knowledge-disclosure model, initial surface inventory, and visual-direction territories  
**Implementation authority:** None. Mockups, prototypes, and production front-end work begin only after their preceding design gates are approved.

---

## 1. Decision Register

The following decisions were explicitly selected by the product owner on 2026-08-22 and are binding unless later amended.

| ID | Decision | Approved direction | Consequence |
|---|---|---|---|
| UX-001 | World-time model | **Ledger Time** | Campaign time advances through committed actions, validated simulation steps, and player-authorized compression—not by mapping closed-browser time directly to campaign time. |
| UX-002 | Primary workspace | **Adaptive Living World Stage** | The product uses a responsive, context-changing play stage rather than a chatbot transcript, fixed dashboard, or collection of disconnected system screens. |
| UX-003 | Primary device | **Desktop-browser first** | Desktop browser is the reference experience and primary density target. Tablet and mobile remain supported later without forcing desktop capability into identical layouts. |
| UX-004 | Experience character | **Enjoyable living RPG, not a chatbot skin** | Free-form language is a core control, but play must also be carried by interactive state, discovery, dice, geography, relationships, equipment, progression, world reactions, and changing presentation. |
| UX-005 | Learning model | **Progressive disclosure without progressive permission** | The interface introduces setting and mechanics over time without restricting what a new player may attempt or silently simplifying approved rules. |

No visual direction is selected in v0.1A. This document establishes three territories for later evaluation.

---

## 2. Foundation Outcome

The product must make the player feel that they are inhabiting and affecting a persistent mythic world.

The player should be able to:

1. understand the immediate situation without reading a lore dump;
2. attempt an original action in their own words;
3. see how the engine understood any material ambiguity;
4. understand relevant known costs, risks, and uncertainty;
5. commit the action intentionally;
6. experience a satisfying rules-and-dice resolution;
7. see the world, characters, relationships, and available state respond;
8. inspect the result at their preferred depth; and
9. continue meaningfully after success, failure, capture, transformation, death, or departure.

The product is not merely an interface for entering prompts. It is the player's instrument for perceiving, acting within, understanding, and remembering a living world.

---

## 3. Experience Principles

### 3.1 Intent is the primary control

The player may always declare free-form intent. Displayed possibilities are conveniences and examples, never the boundary of legal action.

The interface must not teach the player that they are selecting the author's preferred route. Its default language is:

- **Declare intent**
- **Review interpretation**
- **Revise method**
- **Commit action**

It does not use “send prompt” or treat play as messaging a game master.

### 3.2 Interpretation is visible before material commitment

When ambiguity, meaningful cost, destructive impact, identity change, resource expenditure, legal exposure, or irreversible consequence matters, the interface exposes the engine's proposed interpretation before commitment.

The player can review:

- intended outcome;
- method;
- target or scope;
- relevant positioning;
- governing capability or procedure;
- known costs;
- known risks;
- uncertainty and assumptions; and
- consequences that must be accepted regardless of success.

Routine, unambiguous, reversible actions may resolve through a faster path.

### 3.3 No silent substitution

The engine cannot replace the player's goal with a legal but materially different action.

If an attempt is impossible, the interface identifies the concrete causal obstacle, preserves the underlying goal, and helps the player revise the method. It may expose known forms of leverage but cannot fabricate an available solution or reveal hidden canon.

### 3.4 State must earn trust

Every surfaced state-bearing claim must either derive from validated state or be classified as perspective-dependent information.

Time, location, resource totals, injuries, custody, ownership, relationships, Heat, evidence, route state, party presence, and comic status cannot be improvised for presentation convenience.

### 3.5 Consequences remain navigable

The interface cannot visually reset what the world has not reset.

Persistent consequences include:

- Wounds, costume damage, and transformations;
- depleted ammunition, supplies, money, Charge, and Reserve;
- damaged or destroyed equipment and locations;
- item custody, theft, seizure, and loss;
- evidence, witnesses, law, Heat, Exposure, and reputation;
- grievances, refusals, betrayals, departures, and deaths;
- Front and faction developments; and
- changed routes, maps, and procedural-site geometry.

### 3.6 Complexity is revealed by relevance

The player receives the minimum information needed to understand the current decision, with direct paths to greater depth.

Progressive disclosure may change presentation density. It cannot:

- change a formula;
- hide a cost that must be accepted;
- rig an introductory outcome;
- eliminate a legal action;
- protect an onboarding character;
- remove a system from world simulation; or
- prevent an expert from auditing the complete resolution.

### 3.7 Autonomy is legible

Companions and sapient Relics remain people rather than equipment slots.

The interface may communicate their:

- observable intention;
- stated priorities;
- accepted role or delegation;
- boundaries and red lines;
- consent or refusal;
- grievances;
- current availability; and
- pending decision state.

It cannot expose private numerical relationships, hidden motives, undisclosed Drives, or engine-only reasoning.

### 3.8 Failure changes play instead of ending usability

Defeat, capture, imprisonment, loss, failed investigations, transformed locations, death, afterlife, succession, abandoned missions, and leaving BREAKWATER must remain comprehensible and playable interface states.

### 3.9 The world remains one experience

Combat, travel, survival, investigation, crafting, politics, law, relationships, progression, death, and comic production are different operating conditions within the same world.

The interface may change density and tools when exact order matters, but it should not make those systems feel like unrelated applications.

### 3.10 Accessibility preserves capability

Keyboard, screen-reader, controller, voice, reduced-input, reduced-motion, large-text, high-contrast, color-independent, transcript, and low-bandwidth modes must preserve the ability to complete the core play loop.

Accessibility can change how information is presented. It cannot reduce the player's legal action space.

### 3.11 Enjoyment is a structural requirement

Usability alone is insufficient. The experience must create anticipation, discovery, surprise, mastery, expression, and satisfying consequence.

### 3.12 The comic records play without taking it hostage

Gameplay shows honest capture and production states. Comic work continues asynchronously and never becomes a loading dependency for ordinary play.

---

## 4. Enjoyment Framework

The interface should support several complementary kinds of pleasure so the game is not dependent only on the quality of generated prose.

| Pleasure | Player experience | UX responsibility |
|---|---|---|
| Agency | “The game understood the unusual thing I wanted to try.” | Free intent, faithful interpretation, correction before commitment |
| Anticipation | “I understand what is at stake before the dice resolve.” | Clear stakes, risk, costs, uncertainty, deliberate commit moment |
| Resolution | “The result feels earned and consequential.” | Legible dice, modifiers, degree, damage, resources, and aftermath |
| Discovery | “I learned something because of where I went and what I did.” | Knowledge Map, evidence, mapping, clues, sources, uncertainty |
| Mastery | “I understand how to use this world's systems more creatively.” | Contextual teaching, comparison, forecasts, audit depth |
| Relationship | “These characters remember, react, surprise, and challenge me.” | Autonomous intentions, boundaries, history, grievances, bonds |
| Expression | “My strange character and tactics are mechanically and visually real.” | Freeform compilation, Stunts, improvised items, visual continuity |
| Progression | “My capabilities and identity changed because of play.” | Levels, BP, techniques, Relics, Names, Epithets, Mantles, team growth |
| Consequence | “The world is different because I acted—or refused to.” | Persistent state, faction response, routes, law, reputation, Fronts |
| Legacy | “My campaign accumulated a history worth revisiting.” | Chronicle, provenance, visual continuity, comic queue and issues |

No single pleasure must dominate every scene. The Adaptive Stage should emphasize whichever combination is currently relevant.

---

## 5. Ledger Time UX Contract

### 5.1 Approved behavior

Campaign time advances only through:

- committed player actions with recorded duration;
- validated NPC, faction, Front, environmental, survival, travel, and project events;
- structured-time rounds;
- exploration turns, Watches, days, and other canonical intervals;
- player-authorized journey or downtime compression; and
- deterministic catch-up processing to an already established campaign timestamp.

Closing the browser does not automatically convert real-world absence into campaign time.

### 5.2 Off-screen simulation

“The world continues off-screen” means that actors, projects, schedules, Fronts, weather, law, information, and other processes continue when campaign time advances—even when the protagonist is elsewhere or the events are not displayed in the foreground.

It does not mean that three real-world days away from the browser automatically become three in-world days.

### 5.3 Player-facing time behavior

Before a time-consuming commitment, the interface should expose:

- current known campaign time;
- action or interval duration;
- known deadlines or scheduled events;
- survival and resource projections;
- known opportunities that may expire;
- party availability implications; and
- whether compression may stop for new input.

During compression, the interface resolves events sequentially and pauses when a meaningful player decision becomes due.

### 5.4 Separate background production

Comic preparation, art generation, lettering, QA, export, indexing, and other non-world production jobs may continue while the browser is closed. Their processing time does not advance campaign time.

---

## 6. Desktop-Browser-First Strategy

### 6.1 Reference experience

Desktop browser is the primary design target because the game may simultaneously require:

- scene and sensory context;
- free-form intent;
- action interpretation;
- character resources and conditions;
- party and autonomous-character state;
- geography, routes, evidence, or spatial positioning;
- result explanation; and
- event history.

The reference layout should be designed and tested first at common desktop-browser densities. Exact viewport breakpoints remain a later responsive-design decision.

### 6.2 Desktop priorities

- Strong typographic comfort for long sessions
- Multiple concurrent information regions without dashboard clutter
- Persistent access to the Intent Dock
- Keyboard-first efficiency without excluding pointer or controller use
- Contextual side-by-side inspection
- Expandable rather than permanently exposed audit detail
- Browser-safe save, reconnect, stale-state, and conflict behavior
- Full-screen and windowed usability

### 6.3 Secondary devices

Tablet and mobile are not co-primary design constraints for the initial shell. They remain required responsive variants later.

Their goal is capability parity through focused, sequential layers—not identical simultaneous density.

No desktop interaction may depend solely on hover, precise dragging, color, motion, or a pointer.

### 6.4 Low-bandwidth operation

The core loop must remain usable with text, semantic icons, simplified maps, and deferred media. Portraits, rich map tiles, animation, and comic assets may load progressively without blocking action declaration or state access.

---

## 7. Adaptive Living World Stage

### 7.1 Shell hypothesis

The primary play surface is the **Adaptive Living World Stage**: one continuous workspace whose composition changes according to the current world state and player focus.

It is neither a permanent equal-width dashboard nor a single scrolling transcript.

The reference desktop shell contains five coordinated regions.

| Region | Purpose | Persistence |
|---|---|---|
| World Strip | Active viewpoint, campaign time, location or location uncertainty, danger, save/sync, and unobtrusive comic-capture state | Always available |
| Living Stage | Current sensory scene, dialogue, meaningful changes, spatial context, immediate reactions, and selected focus | Primary region |
| Context Lens | Relevant person, object, power, route, evidence, condition, relationship, rule, or comparison | Contextual and dismissible |
| Intent Dock | Free-form declaration, interpretation, correction, known forecast, commitment, and follow-up | Always reachable |
| Chronicle Ribbon | Timestamped event history, dialogue, provenance, state changes, and deeper audit access | Collapsed by default, expandable |

### 7.2 Adaptive behavior

The Living Stage changes emphasis without replacing the world:

- social scenes emphasize characters, dialogue, relationships, and observable intent;
- investigation emphasizes evidence, Claims, sources, contradictions, and the Case Graph;
- travel emphasizes routes, time, weather, supplies, roles, and forecasts;
- exploration emphasizes sensory scope, discovered topology, searches, hazards, and location uncertainty;
- combat emphasizes initiative, position, reactions, intent, threats, and conditions;
- crafting emphasizes the project, materials, facility, progress, risks, and resulting object;
- law emphasizes jurisdiction, evidence, authority, Heat, warrants, and available responses;
- defeat emphasizes injury, immediate danger, surrender, capture, Dying, afterlife, or succession choices; and
- comic review emphasizes adaptation provenance without interrupting gameplay.

### 7.3 Continuity across stage changes

Changing emphasis cannot:

- reset location or positions;
- hide a critical Wound or imminent deadline;
- refill resources;
- remove an active hazard;
- discard an interrupted action;
- end a conversation;
- erase a pending autonomous decision; or
- change the state version under review.

### 7.4 Anti-chatbot boundary

The design fails if:

- the Living Stage resembles alternating chat bubbles;
- narration and dialogue share indistinguishable message treatment;
- “Send” is the primary action language;
- the player's only meaningful interaction is text entry;
- every system is mediated by another conversational assistant;
- characters appear dormant until messaged;
- maps, evidence, inventory, and combat are only prose summaries;
- mechanical outcomes are buried inside paragraphs; or
- the stage is merely decorative framing around a transcript.

The interface may preserve exact dialogue and event history without visually imitating a messaging application.

---

## 8. Core Gameplay Interaction Hypothesis

The core loop is:

1. **Perceive** permitted sensory and contextual information.
2. **Inspect** relevant state without being forced into a complete rules view.
3. **Declare** free-form intent.
4. **Interpret** the intended outcome, method, target, and scope.
5. **Clarify or revise** only material ambiguity.
6. **Forecast** known costs, risks, time, collateral, and uncertainty when appropriate.
7. **Commit** intentionally.
8. **Validate and resolve** rules, dice, resources, and consequences.
9. **Present** the outcome at the selected explanation depth.
10. **Continue** with surfaced opportunities and unrestricted intent.

### 8.1 Action states

| State | Meaning |
|---|---|
| Drafting | Player is expressing intent; nothing is committed |
| Interpreting | Engine proposes a structured action |
| Needs clarification | One material ambiguity prevents faithful validation |
| Ready to commit | Interpretation and known stakes are sufficient |
| Committed | Required costs and action become canonical inputs |
| Validating | Capability, knowledge, agency, state version, resources, law, and causality are checked |
| Resolving | Deterministic procedure and dice are executing |
| Outcome | Committed effects and consequences are presented |
| Conflict | State changed materially before commitment or resolution |
| Rejected | Action is invalid or impossible for an exposed concrete reason |

### 8.2 Confirmation policy

Confirmation is required when an action is materially ambiguous or involves a known irreversible or difficult-to-reverse effect, including:

- lethal or indiscriminate intent;
- permanent destruction;
- rare resource expenditure;
- accepted Overdraw or sacrifice;
- oath, bargain, Claim, or identity commitment;
- companion coercion;
- potentially permanent transformation;
- abandonment of an actor in immediate danger;
- destructive evidence handling; or
- world-time compression through a known decision window.

Repeated low-risk actions should not acquire unnecessary confirmation friction.

### 8.3 Suggested possibilities

Suggested possibilities are contextual examples, not a menu of permitted actions.

They should:

- explain why they are relevant;
- derive only from the active viewpoint's information;
- avoid presenting one moral answer as default;
- never include a secretly impossible option as fake drama;
- remain visually subordinate to free intent; and
- end with an explicit path to attempt something else.

### 8.4 Result depth

Every qualifying resolution supports:

- **Concise:** what happened and the most immediate consequences;
- **Guided:** major modifiers, costs, new state, and relevant follow-up possibilities; and
- **Audit:** formula, inputs, rolls, seed reference, costs, validator decisions, provenance, and state version.

Changing depth never changes the event.

### 8.5 Impossible actions

An impossible-action response contains:

1. the preserved player goal;
2. the interpreted method;
3. the concrete missing prerequisite or causal conflict;
4. any portion that remains possible;
5. legally knowable categories of leverage that could change the situation; and
6. an immediate path to revise the action.

The engine does not roll and does not spend uncommitted resources for a fundamentally impossible action.

### 8.6 Combat and immediate danger

Combat adds structured time, initiative, precise or banded position, actions, reactions, targets, threats, hazards, and pending decisions to the Living Stage.

It does not replace the underlying scene, geography, inventory, evidence, dialogue, or escape routes.

### 8.7 Autonomous decisions

When a companion, Relic, or other agent must choose, the player may see an honest pending state such as:

- deciding;
- awaiting a valid communication channel;
- considering a request;
- refusing;
- counterproposing;
- acting under accepted doctrine;
- replanning after changed state; or
- unavailable.

The interface cannot expose private chain-of-thought or hidden decision variables.

---

## 9. Progressive Introduction and Learning Model

### 9.1 Learning contract

The product introduces world and system depth when each concept becomes relevant. It does not front-load the World Constitution or require mastery before play.

At every stage, the player can voluntarily open deeper rules, glossary, history, provenance, and mathematical views.

### 9.2 Experience arc

| Player stage | Experience priority | Introduced concepts |
|---|---|---|
| First 90 seconds | Establish freedom and a meaningful decision | Immediate situation, viewpoint, free intent, several nonbinding opportunities |
| First committed action | Demonstrate faithful interpretation | Intent review, relevant known risk, commit, dice or deterministic resolution |
| First scene | Establish persistence | Time, immediate resources, witnesses, injury, custody, and consequence |
| First hour | Establish the living world | Relationships, autonomous actors, Knowledge Map, travel or evidence as encountered |
| Early campaign | Build system fluency | Survival, law, factions, Front indicators, crafting, recovery, and progression when relevant |
| Developing character | Build ownership | BP, techniques, equipment mastery, Relics, team abilities, and Breakthrough preparation |
| Established campaign | Expose strategic influence | Claims, Names, Mantles, succession, institutions, realm routes, and complex Fronts |
| Expert play | Enable complete mastery | Full audit, formulas, provenance, versioning, validator history, and advanced planning |

### 9.3 Teaching methods

Use:

- short contextual explanations;
- first-use callouts;
- optional “why this matters” expansion;
- previews that teach through the current decision;
- concrete examples from the player's actual state;
- inspectable glossary terms;
- replayable explanations in the Chronicle;
- clear before-and-after state changes; and
- Practice Sandbox exercises using real rules but noncanonical state.

Avoid:

- mandatory encyclopedic onboarding;
- repeated interruptions for already understood concepts;
- fake tutorial choices;
- tutorial-only rules;
- hidden assists;
- forced Issue #0 consumption;
- withholding free-form intent until a tutorial ends; and
- revealing a system before it has player relevance merely to advertise complexity.

### 9.4 Setting introduction

The world should be learned through three separate channels:

- **Player Primer:** enough public context to understand the genre and Veilbreak;
- **Character Knowledge:** what the active character actually knows; and
- **World Encounter:** sensory evidence, people, institutions, consequences, and discoveries during play.

Issue #0 may orient the player but cannot populate the character's Knowledge Map automatically.

### 9.5 Fun during learning

Each introduced system should arrive with an immediate player benefit or compelling problem. A tutorial moment should enable a rescue, reveal, escape, negotiation, unusual tactic, discovery, or meaningful consequence—not merely explain a menu.

---

## 10. Knowledge-Disclosure Model

### 10.1 Player-facing classifications

| Classification | Meaning |
|---|---|
| Perceived | Directly available through the active viewpoint's current valid senses |
| Recorded | Present in a record the active character can access |
| Reported | Communicated by another source without automatic verification |
| Inferred | A supported hypothesis or analytical conclusion |
| Forecast | Projected from stated assumptions and currently accessible information |
| Disputed | Conflicting sources or interpretations are known |
| Last known | Previously valid information whose present accuracy is uncertain |
| Out-of-character | Player knowledge unavailable to the active character |

Engine-only canonical truth is not a player-facing category. It remains hidden.

### 10.2 Provenance presentation

When material, a claim may expose:

- observer or knowledge owner;
- source;
- observation, event, and receipt times;
- confidence;
- last verification;
- contradictions;
- derivative or copied status;
- viewpoint restriction; and
- whether it may legally inform the current action.

### 10.3 Knowledge safety rules

- The map shows believed geography, not hidden canonical topology.
- A lost character never receives their exact engine location.
- Dynamic actors use current sensed or timestamped last-known positions.
- Front progress appears only through accessible observations, reports, and consequences.
- Relationship presentation uses behavior, disclosures, and valid Insight—not hidden values.
- Search results never reveal how many hidden Features remain.
- Failed analysis provides no false conclusion unless deceptive evidence actually exists.
- Full Audit mode cannot reveal hidden participants, identities, motives, or inaccessible inputs.
- Out-of-character knowledge is visually quarantined from character-action support.

### 10.4 Forecasts

A forecast must identify its assumptions and knowledge timestamp. Changes to party composition, route, weather, supplies, faction control, equipment, or other inputs visibly invalidate or revise it.

A forecast is never presented as a promise.

---

## 11. Initial Surface Inventory

This inventory establishes coverage. It is not the approved information architecture or final navigation.

| Product area | Required initial surfaces |
|---|---|
| Entry and recovery | Home, campaign selection, save recovery, import or duplicate, settings, accessibility, content controls |
| Onboarding | Issue #0 options, onboarding-mode selection, character creation, BP ledger, review, Campaign Commit, Practice Sandbox |
| Active play | Living Stage, Intent Dock, interpretation, forecast, commit, resolution, contextual inspection, Chronicle |
| Character | Attributes, resources, progression, powers, techniques, skills, Talents, conditions, Wounds, recovery, Drives, Complications |
| Party and relationships | Roster, memberships, roles, companion intentions, autonomy, relationships, Grievances, Cohesion, Integration, team abilities |
| Relics and mythic identity | Relic state, custody, Attunement, Bond, Claims, Charge, corruption, Names, Epithets, Mantles, succession, Legacy |
| Holdings | Inventory, load, access state, custody, ownership, equipment, ammunition, vehicles, economy, crafting, repair, modification, projects |
| World and movement | World map, Knowledge Map, routes, travel, pursuit, survival, camps, exploration, procedural-site mapping, realm thresholds |
| Investigation | Case Graph, Questions, Claims, evidence, witnesses, Leads, contradictions, collection, custody, analysis |
| Society and consequence | Factions, accessible Front indicators, law, jurisdiction, warrants, Heat, Exposure, threat, reputation, projects, information packets |
| Immediate danger | Initiative, position, range, actions, reactions, hazards, conditions, surrender, defeat, Dying, capture, escape |
| Death and continuation | Threshold, afterlife jurisdiction, soul state, recovery efforts, successor selection, protagonist transition |
| Campaign record | Event history, audit, provenance, notifications, comic capture, queue, issue library, reader, optional editor |
| Support | Glossary, rules reference, tutorial history, help, connection state, stale-state recovery, version conflicts, accessibility |

---

## 12. Visual-Direction Territories

These are comparative territories, not final visual systems.

### Territory A — Harbor Civic Myth

Near-future municipal wayfinding, harbor charts, flood elevations, legal notation, deliberate editorial typography, and restrained mythic marks.

**Character:** Credible, legible, institutional, maritime, quietly supernatural.  
**BREAKWATER expression:** Tide lines, route geometry, civic signage, fluorescent municipal orange, warning patterns, port identifiers, classical legal stamps, and precise craft details.  
**Platform extensibility:** Regional map, authority, material, and campaign accents can change while the core editorial and semantic system remains.  
**Strengths:** Trust, readability, originality, geographic identity, information hierarchy.  
**Risk:** If executed too cleanly, it could lose danger, tragedy, bodily consequence, and mythic scale.  
**Foundation recommendation:** Strongest starting territory.

### Territory B — Industrial Reliquary

Salt-stained steel, shipyard paint, oxidized metal, stamped custody records, repair markings, ritual scars, heavy shadow, and Norse construction precision.

**Character:** Physical, scarred, dangerous, tactile, consequential.  
**BREAKWATER expression:** Drydock surfaces, rivets, salvage tags, worn tools, flood damage, runic incisions, containment markings.  
**Platform extensibility:** Each campaign substitutes its own material and craft culture.  
**Strengths:** Atmosphere, Relics, crafting, damage continuity, survival, horror.  
**Risk:** Texture and darkness may impair long-session reading, emotional range, and accessibility.

### Territory C — Sequential Atlas

Editorial comic composition fused with cartography: panel-like regions, bold captions, controlled halftone, map geometry, cinematic transitions, and issue-inspired typographic rhythm.

**Character:** Expressive, kinetic, authored, visual, memorable.  
**BREAKWATER expression:** Navigation diagrams, scene framing, impact panels, route montages, dramatic state transitions, and archival issue language.  
**Platform extensibility:** Campaign theme changes illustration, cartography, and editorial accents while retaining interaction semantics.  
**Strengths:** Strong connection between lived play and eventual comic; dramatic pacing and visual pleasure.  
**Risk:** It may over-direct routine play, reduce sustained readability, or imply that finished comic generation is occurring in real time.

### Shared visual boundary

Whichever direction is later selected:

- global product tokens remain separate from campaign-theme tokens;
- semantic state never relies on color alone;
- Buoy Nine's fluorescent-orange silhouette remains protected canon;
- tragedy, myth, civic realism, and absurdity may coexist;
- player-created ridiculous items are not redesigned into respectable fantasy objects;
- the product avoids fantasy parchment, neon-purple AI dashboards, mobile-game clutter, and chat-application framing; and
- WCAG 2.2 AA is the minimum accessibility target.

---

## 13. Foundation Scenario Checks

The foundation must be capable of supporting these checks before later prototypes can pass:

1. A first-time player understands the immediate situation and makes a meaningful choice within ninety seconds.
2. The player can declare an absurd but causally possible action without searching for a matching button.
3. The interface faithfully interprets the action and allows correction before commitment.
4. An impossible action explains the causal obstacle without discarding the player's goal.
5. A Concise player resolves an action without reading formulas.
6. An expert audits every relevant input, roll, cost, validator result, and provenance reference.
7. A player recognizes whether information is perceived, reported, inferred, forecast, stale, disputed, or out-of-character.
8. An Issue #0 reader cannot accidentally use reader-only facts through character-facing action assistance.
9. A lost character sees uncertainty while the engine retains exact position.
10. A companion refuses, explains an observable boundary, and remains usable as an autonomous person.
11. A sapient Relic lies, negotiates, or rejects access without the UI exposing its hidden truth record.
12. Combat enters structured time without replacing scene geography or removing escape, speech, surrender, and free intent.
13. Defeat, capture, death, afterlife, and succession remain navigable.
14. The player closes the browser and returns without unapproved real-time campaign advancement.
15. Comic production continues asynchronously without creating a gameplay dependency or presenting incomplete work as finished.
16. Keyboard and screen-reader users can complete the intent, review, commit, resolution, and follow-up loop.
17. User testing does not primarily describe the product as “a chatbot with an RPG skin.”

---

## 14. Explicitly Deferred Decisions

Foundation v0.1A does not approve:

- final navigation or information architecture;
- a selected visual direction;
- typography, color, spacing, motion, or component tokens;
- exact viewport breakpoints;
- final scene composition;
- dice animation or sound treatment;
- onboarding screen sequence;
- character-creation interaction details;
- combat layout;
- map presentation;
- companion, Relic, investigation, inventory, or crafting flows;
- mobile interface composition;
- wireframes, mockups, or prototypes;
- production front-end architecture; or
- engine/UI contracts.

Those decisions proceed through the approval-gated handoff sequence.

---

## 15. Locked Approval Boundary

Approval of UX/UI Foundation v0.1A locks:

- the experience principles;
- Ledger Time as the UX time model;
- desktop browser as the reference target;
- the Adaptive Living World Stage as the shell hypothesis;
- the core intent-to-resolution interaction hypothesis;
- progressive disclosure without progressive permission;
- the knowledge-disclosure model;
- initial surface coverage; and
- the three visual territories as candidates, without selecting one.

After approval, the next deliverable is the **Constitution-to-Interface Traceability Matrix**, beginning with the core gameplay loop and the highest-risk knowledge, agency, time, consequence, and autonomy boundaries.

This approval was recorded on 2026-08-22. Later changes require an explicit amendment and a new version; they may not silently overwrite this foundation.
