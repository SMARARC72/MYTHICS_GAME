# Mythic Game-First v2 — Codex Execution Plan

**Status:** Ready for implementation handoff after this packet is read in full  
**Scope:** Rebuild the existing Drowned Archive vertical slice into a game-first playable RPG proof  
**Do not broaden scope until the slice passes the game-feel acceptance gates.**

## 1. Delivery objective

Turn the current high-fidelity application shell into a 10–20 minute experience that visibly combines:

- Battle Brothers-style readable game world and tactical state;
- Vagrus-style illustrated event presentation and optional lore depth;
- familiar d20/5E player grammar;
- unrestricted natural-language action attempts;
- deterministic, persistent Mythic world authority.

The implementation is not complete because screens render. It is complete when a first-time player can learn the game by playing, enjoy rolling dice, manage a recognizable RPG hero, move through a visible world, complete a small encounter and see a persistent consequence.

## 2. Implementation order

### GFR-00 — Legacy scope reconciliation

**Goal:** prevent old comic/dashboard direction from leaking back into implementation.

Tasks:

- add this Game-First v2 packet to source precedence;
- mark comic-only route/workflow/component requirements as historical/deprecated;
- remove comic-only player navigation and fixtures from the active build path;
- inventory dashboard/admin vocabulary in current player UI;
- create migration list rather than deleting useful generic infrastructure blindly.

Exit:

- one current source-of-truth chain exists;
- no active player flow depends on comic production;
- tests/fixtures no longer force removed comic product surfaces.

### GFR-01 — Game shell and visual-language reset

**Goal:** make the application read as a game before deeper feature work.

Tasks:

- preserve Play / Hero / World top-level IA;
- redesign global shell around an RPG HUD rather than equal-weight cards;
- establish game typography, frames, materials, spacing and status treatment;
- replace administrative labels with player vocabulary from `00_SOURCE_OF_TRUTH.md`;
- add persistent compact HUD for relevant Hero status, location, time and danger without turning it into a dashboard;
- create Story/Scene visual hierarchy where scene art receives dominant area.

Exit:

- screenshot test: UI no longer resembles a CRM/admin app;
- keyboard and 200% zoom remain usable;
- shell works with artwork missing/failing.

### GFR-02 — Asset pipeline and manifests

**Goal:** allow rapid prototype assets without losing licensing traceability.

Tasks:

- create `content/assets/asset-manifest.json`;
- create `content/rules/rules-source-manifest.json`;
- create prototype asset directories separate from production-ready assets;
- add validation script for required manifest fields and duplicate IDs;
- add Credits/Attributions data projection even if final UI remains minimal;
- ingest only the minimum assets needed for Drowned Archive after manifest entries are created.

Suggested paths:

```text
public/game-assets/
  prototype/
    tiles/
    portraits/
    icons/
    dice/
  production/
    tiles/
    portraits/
    icons/
    effects/
content/assets/
  asset-manifest.json
content/rules/
  rules-source-manifest.json
  SRD_ATTRIBUTION.md
```

Exit:

- no third-party asset in `public/game-assets` is missing provenance/license metadata;
- prototype vs production readiness is explicit.

### GFR-03 — 2D renderer integration spike

**Goal:** prove Phaser can coexist cleanly with Next.js/React and authoritative projections.

Tasks:

- add pinned Phaser 4 dependency;
- create client-only `GameCanvasHost` adapter;
- prove mount/update/destroy lifecycle without hot-reload leaks;
- render a small test tilemap from server-safe projection data;
- handle resize and desktop responsive bounds;
- provide semantic HTML summary/controls adjacent to canvas;
- prove Phaser cannot directly mutate canonical application state.

Exit:

- React route loads server shell first;
- Phaser canvas attaches client-side;
- refresh/re-navigation does not leak renderer instances;
- automated component integration test uses renderer fake/port;
- browser test verifies real canvas path.

### GFR-04 — World Map vertical slice

**Goal:** replace static/world-dashboard presentation with a playable spatial world layer.

Drowned Archive map scope:

- one small regional/local map;
- player position;
- Drowned Archive location;
- at least 2 additional discovered/locked landmarks for context;
- roads/water/terrain;
- fog/discovery state;
- travel/enter interaction;
- Ledger Time display/update;
- one visible state mutation after the slice consequence.

Do not build procedural world generation yet.

Exit:

- player can navigate/inspect map without a database list;
- map changes after a committed world consequence;
- map state is projection-driven and persists after refresh.

### GFR-05 — Scene presentation rebuild

**Goal:** make narrative interaction feel like an illustrated RPG event rather than chat.

Tasks:

- dominant Drowned Archive scene artwork/background;
- Ilya portrait and speaker treatment;
- concise narration blocks;
- world/pressure indicators integrated into scene composition;
- free-form `What do you do?` input remains primary;
- maximum three contextual suggestions;
- optional `Why this roll?` / rules disclosure;
- hide raw engine/audit data from default view;
- add discoverable Journal/Codex updates rather than exposition dumps.

Exit:

- routine action resolution does not become a chat transcript;
- scene is understandable within 30 seconds;
- free input is visually primary or co-primary with suggested examples.

### GFR-06 — Dice theater and mechanic feedback

**Goal:** make rules fun and legible without overwhelming the scene.

Tasks:

- create `DiceTheaterPort`;
- spike predetermined d20 animation;
- server result always precedes visual animation;
- implement instant/reduced-motion fallback;
- small presentation for routine rolls;
- center-stage treatment for critical/high-stakes rolls;
- reveal base die, modifier(s), DC/defense and outcome using plain RPG language;
- add crit/fumble audiovisual cues subject to settings;
- never allow animation timing to change canonical result.

Minimum displayed examples:

- skill check;
- saving throw;
- attack vs defense/AC;
- damage roll;
- natural 20 or scripted critical demonstration in tutorial fixture.

Exit:

- testers can explain why a showcased roll succeeded or failed;
- rules audit remains optional rather than constantly visible.

### GFR-07 — 5E-familiar rules presentation layer

**Goal:** lower learning cost while preserving Mythic's deterministic system.

Tasks:

- create explicit mapping document from current abilities/mastery/Edge/Setback to adopted d20/5E-facing concepts;
- decide whether the six familiar ability names are canonical or a compatibility presentation layer;
- expose HP, AC/defense, initiative, checks, saves, advantage/disadvantage, proficiency/training and conditions where applicable;
- keep Fate/Mantle/Stunts/Ledger Time as Mythic systems;
- record every SRD-derived rule/data element in rules-source manifest;
- implement attribution file before any release claim.

Important: do not rewrite the entire rules kernel merely to rename UI concepts. Prefer adapters/mappings until gameplay demonstrates where rules genuinely need change.

Exit:

- a player with 5E experience can understand the basic check/combat grammar with minimal tutorial explanation;
- non-5E players can learn it through play.

### GFR-08 — Hero screen rebuild

**Goal:** create character-sheet dopamine and recognizable progression.

Minimum vertical-slice Hero surface:

- hero portrait/name/title;
- level and XP progress;
- HP and AC/defense;
- core abilities and key skills;
- powers/actions;
- equipped gear and inventory subset;
- current conditions;
- Fate/Mythic resource;
- one relationship/reputation signal;
- progression preview.

Tasks:

- remove record/detail-page layout patterns;
- support item inspection/equip where authoritative mechanics exist;
- contextual tutorial callout after first modifier/gear reward;
- animate/highlight changed stats after reward without fabricating optimistic canon.

Exit:

- unbranded screenshot is recognizable as an RPG character screen;
- player can answer: how tough am I, what am I good at, what can I do, what am I carrying, how close am I to progressing?

### GFR-09 — Tactical encounter prototype

**Goal:** prove that spatial combat plus unrestricted intent is feasible and fun.

Scope intentionally small:

- one Drowned Archive encounter;
- 1 hero + optional ally;
- 2–4 enemies/hazards;
- small hex arena if hex spike succeeds;
- movement range;
- targeting;
- initiative;
- attack, damage, condition/cover concept;
- one power;
- one environmental object suitable for creative use;
- free-form unusual action path.

If hex combat is selected:

- add pinned `honeycomb-grid`;
- domain/server owns legal geometry and final movement/targeting;
- canvas previews but never authoritatively resolves path/range.

Creative-action proof example:

> Player attempts to collapse/throw/use an environmental object instead of selecting a fixed attack.

Pipeline:

`natural language -> interpretation -> legal proposal -> player correction if material -> deterministic rule resolution -> encounter events -> Phaser reconciliation -> concise narration`

Exit:

- standard actions work without text entry;
- free-form tactical action can affect real encounter state;
- combat remains deterministic/replayable;
- encounter can be completed by a new player after tutorial guidance.

### GFR-10 — Game audio and feedback

**Goal:** add game presence without making audio required.

Minimum cues:

- UI confirm/back;
- dice roll/land;
- hit/damage;
- critical;
- discovery;
- loot/reward;
- level/progression;
- environmental Drowned Archive loop.

Add Howler only behind `GameAudioPort`.

Exit:

- mute and volume settings work;
- no information is sound-only;
- browser autoplay restrictions handled gracefully.

### GFR-11 — Playable tutorial rewrite

**Goal:** teach the game without a manual.

Tutorial sequence:

1. establish place/person/pressure in concise copy;
2. invite inspect action;
3. show first d20 roll;
4. optional `Why +X?` explanation;
5. contextual Hero visit;
6. unrestricted conversation with Ilya;
7. persistent relationship consequence;
8. simple map/travel/enter action if not already taught;
9. encounter begins;
10. teach movement and one standard attack;
11. explicitly encourage one creative action;
12. award XP/loot/progression;
13. return to map/scene and visibly show consequence;
14. tutorial guidance fades away.

Exit:

- no modal wall-of-text onboarding;
- first consequential choice < 90 seconds;
- tester discovers free intent without being told a list of engine capabilities.

### GFR-12 — Drowned Archive content pass

**Goal:** replace verbose system prose with game writing and actual world engagement.

Tasks:

- rewrite opening scene;
- rewrite Ilya dialogue into character voice;
- create environmental details that communicate lore without exposition;
- create concise descriptions for map landmarks;
- write tutorial prompts in plain language;
- create Codex/Journal entries for optional depth;
- ensure every key scene has person + pressure + distinctive place + player reason to care;
- keep factual outcomes derived from authoritative events.

Exit:

- player-facing prose follows `00_SOURCE_OF_TRUTH.md` length/voice limits;
- engine terms removed from narration;
- lore is discoverable rather than dumped.

### GFR-13 — Persistence and world consequence proof

**Goal:** make the living-world claim visible.

Minimum consequence chain:

- one player decision changes Ilya relationship and/or Archive state;
- World Map location marker/state changes;
- Journal records player-knowable consequence;
- Hero/World surfaces remain consistent if affected;
- refresh/restart produces same state;
- second scene acknowledges the earlier choice naturally.

Exit:

- player can point to a visible thing in the world that changed because of their action.

### GFR-14 — Verification and comparative playtest

Run existing contract/rules/persistence/recovery tests plus game-first UX checks.

Required automated gates:

- generation clean;
- typecheck;
- lint;
- unit/contract tests;
- rules replay tests;
- build;
- Playwright core journey;
- refresh/persistence journey;
- free-form unusual action journey;
- encounter journey;
- reduced-motion dice path;
- keyboard path;
- 200% reflow outside canvas and accessible canvas alternative;
- missing-asset fallback;
- asset-manifest/license validation.

Required human playtest questions:

1. What kind of product did this feel like?
2. What did you think you were allowed to do?
3. Did the dice/mechanics add excitement or friction?
4. Did you understand why important rolls succeeded/failed?
5. Could you tell what your character was good at?
6. Did you understand where you were in the world?
7. What changed because of your decisions?
8. Did any screen feel like software/admin rather than a game?
9. Was any prose confusing or too long?
10. Would you want to keep playing after the slice?

Compare the actual experience—not feature lists—against:

- AI Dungeon: freedom/friction;
- Friends & Fables: mechanical legibility;
- Questwright: rules + tactical integration;
- Battle Brothers: world/tactical game feel;
- Vagrus: narrative/world presentation.

## 3. Parallelization guidance

Safe parallel workstreams after GFR-00/GFR-01 contracts are established:

- **Game surface agent:** Phaser host, map, encounter renderer;
- **RPG UI agent:** Hero, HUD, mechanic presentation;
- **Content/tutorial agent:** Drowned Archive prose and onboarding fixtures;
- **Asset/legal agent:** manifest, prototype assets, attribution and provenance;
- **Engine integration agent:** 5E-facing mapping, dice display payloads, encounter authority;
- **Primary integrator:** contracts, adapters, cross-surface state, accessibility, final merge.

Do not allow parallel agents to invent overlapping canonical types. Shared contracts are owned by primary integrator / existing contract-generation boundary.

## 4. Dependency policy

Do not install every candidate library up front.

Install a dependency only when its packet begins and its spike passes the acceptance gate. This limits rollback cost and prevents speculative architecture.

Suggested install order:

1. Phaser;
2. dice theater library;
3. honeycomb-grid only if tactical hex prototype is selected;
4. Howler when audio packet begins.

## 5. Definition of done

Game-First v2 vertical slice is done only when:

- the application is unmistakably a game at first glance;
- Play, Hero and World each feel like RPG surfaces;
- scene art/2D assets materially establish place and mood;
- player moves through a visible map;
- dice are visible and fun but rules are not overwhelming;
- d20/5E-familiar concepts reduce explanation burden;
- free natural-language intent works in exploration/social and at least one tactical creative-action case;
- a tactical encounter can be completed;
- XP/loot/progression feedback exists;
- tutorial teaches by play;
- prose is concise and world-building is engaging;
- persistent consequence is visibly reflected across surfaces;
- refresh/reconnect preserves authoritative state;
- accessibility/recovery/determinism invariants remain intact;
- comparative playtest identifies Mythic as a game rather than an AI chat or dashboard.

Only after this passes should the team generalize the world map, broaden combat content, add more locations/classes/powers, or pursue full autonomous-world simulation breadth.
