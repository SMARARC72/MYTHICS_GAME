# Mythic 2.0 — FP-11 Vertical Slice Product Proof

**Status:** LOCKED target definition; content specifics remain tunable

## 1. Purpose

The vertical slice is not a tech demo. It must prove Mythic is a **fun native RPG** with AI adding agency/value rather than substituting for gameplay.

Working proof: **Glass Harbor / Drowned Archive**, approximately **30–45 minutes**.

## 2. What the slice must prove

- Native Godot presentation that reads immediately as a game.
- World map / local scene / tactical encounter modes.
- A readable Hero/equipment/progression surface.
- Core d20 mechanics and visible dice feedback.
- FP-05B turn-based tactical combat that remains fun with AI/free text disabled.
- Grounded free intent that expands legal solution space.
- At least one real causal world consequence outside combat.
- Server persistence/reconnect/replay.
- AI latency/cost telemetry.
- External human playtesting.

## 3. First-play expectations

Within the opening minutes a first-time player should understand place, pressure, the controlled character and at least one meaningful affordance. They should make a meaningful choice within roughly 90 seconds.

No lore dump.

## 4. Tutorial-through-play sequence

1. **World/local navigation:** teach that map/environment is a game space.
2. **NPC interaction:** meet Ilya/equivalent; show concise dialogue and that natural intent is available.
3. **Grounded check:** investigation/perception/social action produces visible d20 result and concise modifier breakdown.
4. **Hero/equipment:** prompt a single contextual Hero inspection showing HP, Defense, abilities/skills/equipment/Fate/progression without system dumping.
5. **World pressure:** tide/structural instability or equivalent advances through Ledger Time.
6. **Free noncombat intent:** resolve an action not offered as a fixed button.
7. **Tactical encounter:** enter real FP-05B battle.
8. **Environmental Stunt:** show map objects can be tools without forcing one solution.
9. **Reward/consequence:** XP/item/knowledge/relationship/world state changes clearly.
10. **Return:** go back to a visibly changed local/world state.

## 5. Character scope

A polished pregenerated protagonist is acceptable for the proof if it protects quality/pacing. Full character creation is not required, but the data model must already treat any eligible persistent Person as potentially player-controlled.

Include at least one meaningful equipment/build choice during or immediately after the slice.

## 6. Tactical encounter proof

Required:

- hex positioning;
- individual initiative timeline;
- AP economy;
- Reaction/opportunity mechanics;
- melee and ranged roles;
- LOS/cover;
- elevation or difficult terrain;
- Exertion consequence;
- Morale movement;
- injury possibility;
- retreat/surrender possibility;
- non-kill objective component;
- at least three systemic environment objects;
- one free-text Stunt with no dedicated button;
- at least three enemy tactical roles using internal monster assets;
- deterministic non-LLM enemy turns.

Combat must remain enjoyable when free-text/AI is disabled.

Initial tuning target: player + 1–2 allies vs roughly 4–7 opponents across 3 tactical roles, one environmental threat/objective and 4–8 expected rounds. Exact composition is tuning.

## 7. Systemic object proof

Use at least three objects such as heavy table/shelf, brazier/fire, oil/water, support, door/barricade, chain/hanging object, destructible cover or flood-control mechanism. Each is canonical with stable properties/state.

## 8. Grounded intent tests

### Positive
Player references a real visible object creatively -> grounding succeeds -> legal action/check/cost constructed -> server resolves -> Godot visualizes/persists change.

### Negative
Player references nonexistent/unavailable resource -> clarify/reject -> narrator does not invent it.

### Ambiguous
Multiple grounded matches -> concise clarification/candidate selection rather than silent guess.

## 9. World-simulation proof

The slice includes a small real cascade beyond battle. Example: player damages/floods a route -> Archive access/topology changes -> Ilya/organization reacts -> repair/closure project is created -> local/world projection changes -> reload preserves it.

Do not fake this as disconnected flavor text.

## 10. Social/economic ontology proof

At least one persistent noncombat relation—business/service owner, custody/ownership, employment/office or faction relationship—uses the same ontology intended for long-running campaigns.

## 11. Succession integration proof

Not part of the tutorial path, but automated integration must prove:

1. controlled Person dies permanently;
2. world remains;
3. control can transfer to an existing eligible or newly created plausible Person;
4. knowledge/inventory/reputation do not magically transfer;
5. same campaign resumes.

## 12. Native presentation

Required: Windows native executable, coherent art direction, world/local/tactical transitions, animated dice/mechanics, combat audio/VFX baseline, readable desktop UI, full mouse/keyboard path and controller viability for core menus/tactics. Text input remains naturally keyboard-first.

## 13. Writing standard

Routine prose is concise/concrete. Every scene should establish place, pressure, people, distinctive detail and agency. Lore is learned through environment/action/dialogue/optional Codex rather than exposition walls.

## 14. AI proof

Measure grounding accuracy, ambiguity behavior, typed-proposal validity, NPC dialogue, narration, latency and cost separately.

AI may not determine dice, canonical legality, enemy turn math, inventory or world truth.

## 15. Performance/latency targets

Initial goals to validate, not promises:

- stable 60 FPS on target desktop test hardware;
- deterministic actions feel immediate;
- server deterministic command path p95 under ~500 ms where network permits;
- lightweight grounding roughly p50 <1.5s / p95 <3s where feasible;
- larger reasoning/narration streamed/presented without blocking routine play, roughly p95 <6–8s target;
- zero LLM wait between routine enemy turns.

## 16. AI COGS gate

Normalize exact AI spend to active player-hour.

- preferred <=$0.15/hour;
- review >$0.15;
- redesign/economic gate >$0.25 sustained unless measured value/business model justifies it.

## 17. Persistence/reconnect

Test quit/restart/resume after committed actions. Ledger Time, injuries, objects, relationships/topology and event sequence must match. Unknown status cannot duplicate mutation; event gaps force resync.

## 18. Blind game-fun test

Provide a mode/build where free-text AI actions are disabled and fixed fixtures cover dialogue. External testers must still rate combat enjoyable, controls understandable, progression motivating and world interesting enough to explore.

If not, fix the game before increasing AI sophistication.

## 19. AI value-add test

Then enable AI/free intent. Testers should identify concrete added value: actions not possible in normal menu RPGs, more reactive dialogue, environmental creativity, consequence continuity and personalized world response. If AI mostly produces extra prose, it fails.

## 20. Deliberately excluded breadth

Not required for proof: full continent, hundreds of towns, all 800 monsters in game, full decades-long playable lineage, multiplayer, full crafting/economy, every mythology, mod workshop, Steam achievements/cloud or procedural everything.

## 21. External playtest gate

Before breadth:

- at least 10 complete internal runs with logs;
- at least 10–20 first-time external players across RPG familiarity;
- measure completion, confusion, combat enjoyment, agency, narrative engagement, AI novelty vs value, latency, bugs and desire to continue.

Do not expand world breadth unless the median tester wants to continue and core-game ratings stand independently of AI fascination.

## 22. Automated proofs

Required: deterministic encounter replay, grounded intent positive/negative/ambiguous, no hidden-knowledge leaks, persistent object/relationship/topology changes, ledger recovery, death/succession continuity, catch-up simulation, asset semantic resolution, native build and AI cost telemetry.

## 23. Definition of done

A new player can launch Mythic natively, understand the situation, move through 2D space, inspect/talk/interact, roll visible d20 checks, manage Hero/equipment, fight a tactically meaningful battle, use environmental systems, type an un-preauthored action, have it grounded without invented reality, experience persistent consequence/progression, quit/resume the same world—and want to continue.

## 24. Lock

LOCKED: 30–45 minute target; Glass Harbor/Drowned Archive working slice; World+Local+Encounter modes; non-AI fun gate; full FP-05B proof; grounded positive/negative/ambiguous tests; visible causal cascade; succession integration test; exact AI cost/hour; external playtesting before breadth.

OPEN: final protagonist/script, encounter roster, precise art direction, reward/build choice and latency thresholds after real measurements.
