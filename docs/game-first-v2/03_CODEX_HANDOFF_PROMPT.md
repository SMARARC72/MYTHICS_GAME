# Codex Handoff — Mythic Game-First v2

Use this document as the clean-session execution prompt for the next implementation phase.

---

## Mission

Rebuild the existing Mythic Drowned Archive vertical slice into an unmistakable **desktop-browser RPG**, using the current deterministic/persistent engine architecture while replacing dashboard/chatbot presentation with game-first Play, Hero and World experiences.

The target experience combines:

- Battle Brothers-style game-world/tactical readability;
- Vagrus-style illustrated narrative/world presentation;
- familiar d20/5E mechanical grammar where useful;
- unrestricted natural-language action attempts;
- Mythic's authoritative persistent simulation, Ledger Time, viewpoint-safe knowledge and autonomous consequences.

The product thesis is:

> **Attempt anything. The world decides what happens.**

Do not turn this into a generic VTT, AI chatbot, CRM/dashboard, or a direct clone of any reference game.

## Mandatory read order

Before writing code, read completely:

1. `AGENTS.md`
2. `docs/product/GAME_FIRST_REBASELINE.md`
3. `docs/game-first-v2/00_SOURCE_OF_TRUTH.md`
4. `docs/game-first-v2/01_TOOLCHAIN_ASSETS_AND_LICENSES.md`
5. `docs/game-first-v2/02_EXECUTION_PLAN.md`
6. `docs/engineering/PLAYABLE_VERTICAL_SLICE_PLAN.md`
7. `docs/implementation-handoff/v1.0/SOURCE_PRECEDENCE.md`
8. World Constitution and C1–C4 contract acceptance packages referenced by `AGENTS.md`
9. Existing UI-01–UI-04 packages only as historical implementation evidence where they do not conflict with Game-First v2
10. current `package.json`, source tree, test tree and any nested `AGENTS.md`
11. Next.js 16 documentation shipped in `node_modules/next/dist/docs/` before changing Next.js-specific implementation.

Where Game-First v2 conflicts with older UI/comic player-product requirements, Game-First v2 wins. Engine authority, contract safety, Ledger Time, hidden-truth protections, idempotency, replay, accessibility and recovery remain binding.

## Authorization boundary

Follow the repository implementation authorization gate exactly.

Before the required exact authorization phrase is present, you may inspect, compare, plan, run non-mutating diagnostics and report conflicts. Do not begin construction.

Once authorization is valid, execute the Game-First v2 work continuously in dependency order. Do not stop for approval between packets unless a documented blocking decision or safety/legal issue prevents a responsible default.

## Primary implementation plan

Execute `docs/game-first-v2/02_EXECUTION_PLAN.md` GFR-00 through GFR-14.

The first priority is **not feature breadth**. It is one polished, fun, authoritative Drowned Archive slice.

Do not begin generalized world generation, multiplayer, full campaign breadth, large content libraries or production release until the slice passes its game-feel acceptance gates.

## Required architecture

### Application shell

Keep Next.js/React as the application shell and authoritative player UI.

React owns:

- routing and server-loaded projections;
- scene HUD and narrative DOM;
- Hero;
- Journal/quests/factions/Codex;
- free-intent input;
- accessible dialogs/menus/settings;
- workflow state, recovery and audit presentation.

### 2D game spaces

Use Phaser 4 behind an internal renderer port for interactive map/encounter canvas surfaces if the GFR-03 spike passes.

Phaser must not:

- own canonical campaign state;
- roll authoritative dice;
- resolve movement/combat rules;
- reconstruct hidden truth;
- bypass generated contracts;
- become required for semantic/accessibility information.

Use a client-only/dynamic boundary appropriate for Next.js. Destroy renderer instances correctly on unmount/navigation/HMR.

### Tactical hex geometry

Use `honeycomb-grid` only if the hex encounter prototype is selected and passes the spike.

Server/domain code remains authoritative for legal movement, targeting, range and path cost. Client geometry may preview only.

### Dice

Authoritative rules resolve first.

Visual dice receive predetermined outcomes and render theater only. Prefer the documented predetermined-result capability of `@3d-dice/dice-box-threejs` for the spike, behind `DiceTheaterPort`.

Provide reduced-motion/skip path with identical result.

### Audio

Use Howler behind `GameAudioPort` only when GFR-10 begins. Audio may reinforce but never be the sole carrier of gameplay information.

## Mechanics direction

Do not blindly rewrite the engine into D&D.

Create a deliberate **5E-familiar presentation/compatibility layer** first.

Prefer familiar concepts where they reduce learning cost:

- d20 + modifier vs DC/defense;
- ability checks;
- saving throws;
- HP;
- AC/defense;
- initiative;
- advantage/disadvantage;
- training/proficiency;
- damage dice;
- conditions;
- critical hits.

Preserve Mythic systems that differentiate the game, including Ledger Time, Fate, Mantles, morality/reputation, Stunts, mythic progression and persistent consequence.

Any SRD-derived content must be recorded in the rules-source manifest and attributed under the current SRD license. Do not import non-SRD D&D setting/product identity.

## Visual/game-feel requirements

### Play

Play must be a game scene, not a dashboard containing a scene card.

The player should move naturally among context-sensitive modes:

- World Map;
- Scene;
- Encounter.

Scene/world art receives dominant visual weight. Status information is compact and contextual.

### Hero

Must look like an RPG character screen at first glance.

Minimum visible grammar:

- portrait;
- level and XP;
- HP and AC/defense;
- abilities/skills;
- powers/actions;
- equipment/inventory;
- conditions;
- Fate/Mythic resource;
- progression.

### World

Must feel spatial and alive.

The map should visibly represent player-knowable state and at least one consequence in the vertical slice. Journal, quests/leads, factions and Codex are supporting world views rather than SaaS modules.

### Encounter

Build one small tactical proof encounter, not a complete combat platform.

It must support:

- movement/position;
- initiative;
- standard attack/action;
- damage/condition feedback;
- one power;
- one environmental object/hazard;
- one free-form creative action that changes real encounter state.

### Dice

Expose enough mechanics to create excitement.

Routine rolls: compact.  
High-stakes rolls/criticals: theatrical.  
Advanced engine detail: optional disclosure/audit.

## Content requirements

Rewrite Drowned Archive player-facing content using `00_SOURCE_OF_TRUTH.md`.

Do not preserve verbose copy merely because it is already in fixtures.

Target:

- short concrete narration;
- characterful dialogue;
- visible pressure;
- environmental worldbuilding;
- optional Codex depth;
- little or no implementation terminology;
- no lore dump before the player has reason to care.

The first minute should establish place, person, pressure and agency.

## Tutorial requirements

Teach by play.

No manual-like modal sequence.

Tutorial should progressively demonstrate:

- inspect;
- first d20 check;
- optional modifier explanation;
- Hero screen;
- unrestricted conversation;
- persistent consequence;
- map interaction;
- tactical encounter;
- creative free-form action;
- XP/loot/progression;
- changed world state.

Guidance fades as the player demonstrates competence.

## Asset requirements

Before importing third-party assets:

- create/activate `content/assets/asset-manifest.json` from the example;
- record source URL, author, license, status and local root;
- keep prototype assets separate from production assets;
- do not ingest random untracked web images;
- prefer CC0 prototype packs for the first slice;
- use Game-icons only with per-item attribution metadata unless explicitly CC0.

Prototype asset candidates and licensing are listed in `01_TOOLCHAIN_ASSETS_AND_LICENSES.md`.

Do not allow prototype pixel art to silently become the final art direction. Use it to prove layout/gameplay, then replace/art-direct intentionally.

## Testing requirements

Preserve all existing authoritative tests and add the GFR-14 gates.

Critical proof journeys:

1. new player starts Drowned Archive and acts within 90 seconds;
2. player submits free intent not present in suggestions;
3. visible deterministic d20 result matches authoritative resolution;
4. Hero reflects real stats/equipment/condition state;
5. player navigates/inspects map;
6. player completes tactical encounter;
7. player performs creative free-form tactical action;
8. player gains explicit reward/progression feedback;
9. world/NPC consequence becomes visible;
10. refresh/reconnect preserves state;
11. reduced-motion and keyboard paths remain playable;
12. missing art does not make the game unusable;
13. no hidden truth leaks into public projections or canvas data.

## Stop conditions

Stop and report instead of guessing only if:

- implementing a requested rule would require unlicensed/proprietary content outside approved sources;
- a contract/Constitution invariant truly conflicts with the new game-first product direction and cannot be satisfied by presentation/adapters;
- a dependency cannot meet deterministic/accessibility/security boundaries;
- a required migration would destroy unrelated user work;
- a production/public-release authorization would be required.

Otherwise choose the most conservative implementation consistent with this packet and continue.

## Completion report

At the end, provide:

- commits/branch and changed-file summary;
- dependencies added with exact versions/licenses;
- asset packs/items imported with manifest status;
- before/after route/surface summary;
- implemented 5E-familiar mappings vs unchanged Mythic mechanics;
- test results;
- screenshots/evidence for Play, Hero, World Map, Encounter and dice theater;
- unresolved human art/usability/canon/licensing gates;
- explicit statement whether the slice passes the unbranded **"looks like an RPG"** test;
- remaining work intentionally deferred until after playtest.

Do not claim production readiness merely because automated tests pass.
