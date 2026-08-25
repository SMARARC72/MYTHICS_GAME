# Mythic Game-First v2 — Toolchain, Assets and Licensing Plan

**Status:** Implementation recommendation for Codex handoff  
**Date:** 2026-08-24  
**Baseline application:** Next.js 16 / React 19 / TypeScript 6  

## 1. Architecture decision

Use a **hybrid React application + embedded 2D game surfaces**.

Do not replace the existing Next.js application with a monolithic game framework.

### React / Next.js owns

- application shell and routing;
- Play/Scene surrounding HUD;
- Hero;
- World subviews outside the live map canvas;
- Journal / quests / factions / Codex;
- forms and free-intent input;
- accessible dialogs, menus, tooltips and disclosures;
- tutorial callouts and semantic alternatives;
- server-loaded viewpoint projections;
- authoritative workflow orchestration, recovery and audit views.

### Phaser owns

Only interactive canvas spaces that benefit from a real game renderer:

- tile-based / illustrated world map;
- local exploration maps if used;
- tactical encounter board;
- sprites/tokens, tile layers, selection, camera, particles and environmental effects in those spaces.

React remains authoritative for workflow and accessibility. Phaser is a renderer/input adapter and never becomes a second rules engine or canonical state store.

## 2. Recommended runtime dependencies

### 2.1 Phaser 4 — 2D game rendering

**Package:** `phaser`  
**Recommended line:** Phaser 4.x, pin exact version after integration spike  
**License:** MIT  
**Purpose:** world map, tactical encounter rendering, camera, sprites, tilemaps, effects, pointer interaction.

Official repository/site:
- https://github.com/phaserjs/phaser
- https://phaser.io/

Why:

- mature browser-first 2D game framework;
- Canvas/WebGL support;
- TypeScript support;
- React and Next.js integration supported by official project templates;
- strong tilemap, camera, sprite, animation and input systems;
- commercially usable MIT license;
- avoids forcing game-space concerns into DOM component code.

Integration rules:

- dynamically import Phaser only in client-side game-surface components;
- no SSR assumption for Phaser canvases;
- instantiate/destroy the game instance with React lifecycle;
- communicate through typed adapter events/commands, never direct campaign mutation;
- treat canvas as a projection of server-authoritative state;
- maintain semantic HTML alternatives for critical map/encounter information and controls.

### 2.2 honeycomb-grid — tactical hex geometry

**Package:** `honeycomb-grid`  
**License:** MIT  
**Purpose:** hex coordinate conversion, grid traversal and deterministic tactical geometry.

Repository:
- https://github.com/flauwekeul/honeycomb

Use if the encounter prototype adopts Battle Brothers-style hex combat.

Rules:

- geometry/model only; Phaser renders the grid;
- server/domain layer owns legal movement, range and authoritative path result;
- client may preview reachable cells but must not be authoritative;
- implement or reuse a deterministic A* traversal over the same grid model with explicit movement costs.

### 2.3 @3d-dice/dice-box-threejs — deterministic dice theater spike

**Package:** `@3d-dice/dice-box-threejs`  
**License:** MIT  
**Purpose:** visually animate already-authoritative dice results.

Repository:
- https://github.com/3d-dice/dice-box-threejs

Key reason: this implementation supports **predetermined outcomes**, allowing the rules kernel to determine the result first and the visual roller to land on that value. The animation may never create game truth.

Implementation sequence:

1. server/rules kernel produces roll result and resolution record;
2. client receives safe roll display payload;
3. dice renderer is instructed to animate the predetermined faces;
4. UI reveals modifiers / DC / degree after or during animation;
5. skip/reduced-motion path reveals the same result instantly.

Do not block game resolution on completion of dice physics animation.

Alternative: `@3d-dice/dice-box` is also MIT and actively packaged, but the ThreeJS fork is preferred for the first spike specifically because predetermined outcomes are documented as a first-class use case.

### 2.4 @dice-roller/rpg-dice-roller — notation/parser utility (optional)

**Package:** `@dice-roller/rpg-dice-roller`  
**License:** MIT  
**Purpose:** parse/display standard dice expressions if the existing deterministic rules kernel does not already cover all needed notation.

Repository:
- https://github.com/dice-roller/rpg-dice-roller

Do not substitute this library's random rolling for the existing seeded deterministic rules authority. Use parsing/evaluation only if it can be controlled by our deterministic RNG contract; otherwise keep existing engine implementation.

### 2.5 howler.js — game audio

**Package:** `howler`  
**License:** MIT  
**Purpose:** UI feedback, dice impacts, critical stings, environmental loops and encounter audio.

Repository:
- https://github.com/goldfire/howler.js

Why:

- browser audio abstraction;
- Web Audio with HTML5 fallback;
- sound sprites;
- tiny runtime;
- mature and widely used.

Audio must respect user settings, autoplay restrictions and reduced-sensory preferences. No gameplay information may be audio-only.

## 3. Authoring tools

### 3.1 Tiled Map Editor

**Tool:** Tiled  
**Purpose:** author world/local/encounter tilemaps and object layers.  
**Output:** JSON maps and tilesets checked into the repository.  
**Website:** https://www.mapeditor.org/

Tiled supports JSON map export, including hex-map metadata. It is an authoring tool, not a runtime dependency. Exported map data must be validated by Mythic before use.

Recommended layer conventions:

- `terrain`
- `decoration_back`
- `collision`
- `navigation_cost`
- `cover`
- `elevation`
- `interactable`
- `spawn_public`
- `spawn_hidden_server` (never shipped as a public map layer)
- `decoration_front`
- `lighting_mask`

Hidden encounter participants/hazards remain server content and must not be embedded in client-delivered Tiled JSON.

### 3.2 Aseprite or compatible sprite editor

Use for custom pixel/2D sprite cleanup and animation if available in the production workflow. Do not make proprietary editor formats necessary at runtime; export PNG/WebP sprite sheets plus machine-readable metadata.

### 3.3 Inkscape

Recommended open-source SVG editor for icons, crests and scalable UI ornaments.

## 4. Prototype/open asset sources

Open assets are intended to accelerate the vertical slice and establish size/style/interaction requirements. They are not automatically the final visual identity.

### 4.1 Kenney — preferred prototype source

Kenney assets are especially useful because many packs are **CC0**, minimizing attribution and commercial-use friction.

Candidate packs:

#### Roguelike/RPG Pack
- 1,700+ 2D assets;
- tiles, furniture, UI and RPG objects;
- 16x16 base scale;
- CC0.
- https://kenney.nl/assets/roguelike-rpg-pack

Use for:
- prototype map tiles;
- item/environment placeholders;
- interaction proofing.

#### Tiny Town
- overworld/town tile set;
- CC0;
- https://kenney.nl/assets/tiny-town

Use for:
- world-map visual spike;
- settlements/roads/terrain placeholder language.

#### Tiny Dungeon
- dungeon/sewer/RPG tiles;
- CC0;
- https://kenney.nl/assets/tiny-dungeon

Use for:
- Drowned Archive local/encounter layout prototype.

#### UI Pack: RPG Expansion
- RPG panels/buttons/sliders;
- CC0;
- https://kenney.nl/assets/ui-pack-rpg-expansion

Use only as a rapid functional prototype. Final Mythic UI should have a bespoke illustrated/material visual system inspired by Battle Brothers/Vagrus rather than shipping as generic Kenney UI.

#### Scribble Dungeons
- top-down dungeon/tabletop tiles;
- characters, weapons/items, vectors and Tiled sample;
- CC0.

Useful for testing a more hand-drawn tactical-map direction than pixel art.

### 4.2 OpenGameArt — selective CC0 prototype source

Only ingest assets after recording the exact asset URL, author, license and any attribution notice.

Prefer **CC0** for prototype packs. Avoid mixing many incompatible art styles into the final slice.

Candidate categories/packs:

- Tiny RPG Forest — CC0, complete top-down RPG pack;
- Tiny RPG Mountain — CC0;
- RPG Tileset by russpuppy — CC0;
- Top-down dungeon/character packs explicitly marked CC0;
- curated CC0 top-down fantasy collections.

OpenGameArt license metadata is per asset. Never assume the site itself implies a uniform license.

### 4.3 Game-icons.net — functional game icon library

**License:** primarily CC BY 3.0; some individual contributors/icons are CC0.  
**Repository:** https://github.com/game-icons/icons  
**Website:** https://game-icons.net/

Potential use:

- ability/skill prototypes;
- condition symbols;
- damage types;
- inventory categories;
- faction/quest/status pictograms.

Requirements:

- maintain icon-level author/license metadata;
- provide an in-game Credits/Attributions surface before release;
- if avoiding attribution complexity is preferred, use only explicitly CC0 entries or replace with bespoke production icons before shipping.

## 5. Final asset direction

Open packs should prove interaction but **must not define final art direction by accident**.

Final Mythic target:

- illustrated, dark mythic-superhero fantasy;
- tactile materials and game-world ornament rather than SaaS cards;
- painterly/inked scene backgrounds and portraits;
- readable stylized tactical tokens/sprites;
- coherent tile set with world-state variants;
- faction crests and iconography;
- strong die/result feedback;
- restrained motion and atmospheric effects.

### Asset classes

#### World map

- base terrain tiles;
- coast/water/river/road overlays;
- settlements and landmarks;
- mythic/anomalous zones;
- fog-of-war mask;
- faction control overlay;
- damaged/rebuilt/occupied location variants;
- party marker and event markers;
- weather/time overlays.

#### Scene

- location background plate;
- optional foreground/midground layers for parallax;
- NPC portraits;
- condition/relationship callouts;
- environmental overlays (rain, ash, water, light, smoke).

#### Encounter

- hex/terrain tiles;
- cover/obstacle props;
- hero/ally/enemy tokens or sprites;
- selection, range and AoE overlays;
- projectiles and impact effects;
- conditions/status rings;
- environmental states (fire, water, rubble, hazard).

#### Hero

- portrait;
- equipment slot silhouettes;
- ability/power icons;
- condition icons;
- class/Mantle crest;
- XP/progression ornament.

#### UI/game feedback

- dice models/textures;
- success/mixed/failure/critical treatments;
- HP/resource bars;
- loot cards;
- level-up/reward treatment;
- tutorial pointer/callout treatment;
- map/Journal/Codex book/map materials.

## 6. Asset manifest requirement

Create a machine-readable manifest before importing prototype assets:

`content/assets/asset-manifest.json`

Minimum schema per asset or pack:

```json
{
  "id": "prototype.kenney.tiny-dungeon",
  "kind": "tileset",
  "status": "prototype",
  "sourceUrl": "https://kenney.nl/assets/tiny-dungeon",
  "author": "Kenney",
  "license": "CC0-1.0",
  "attributionRequired": false,
  "allowedUse": ["prototype", "commercial"],
  "styleFamily": "prototype-pixel-16",
  "sourceVersion": "1.0",
  "localRoot": "public/game-assets/prototype/tiny-dungeon",
  "notes": "Replace or art-direct before production if visual style changes."
}
```

No unmanifested third-party art enters `public/`.

## 7. 5E/SRD rules source

Use **Wizards of the Coast SRD v5.2.1** only where its rules/content are deliberately adopted.

Official source:
- https://www.dndbeyond.com/srd

SRD v5.2.1 is published under **CC-BY-4.0**. Maintain a rules-source manifest identifying which concepts/text/data are SRD-derived versus original Mythic rules.

Do not import Forgotten Realms, proprietary monsters/spells/classes not present in the SRD, logos, trade dress or other D&D product identity merely because the base rules are familiar.

Recommended repository file:

`content/rules/SRD_ATTRIBUTION.md`

and machine-readable:

`content/rules/rules-source-manifest.json`

## 8. Prototype dependency acceptance gates

Before a new runtime dependency is accepted:

1. exact version pinned in lockfile;
2. license recorded;
3. dependency is browser-compatible with Next.js 16 / React 19;
4. SSR boundary is explicit;
5. reduced-motion / keyboard / semantic fallback path defined where relevant;
6. bundle impact measured;
7. no library owns canonical gameplay state;
8. deterministic replay remains possible;
9. tests can run without GPU/WebGL where practical through adapters/fakes;
10. dependency can be removed/replaced behind an internal port.

## 9. Proposed internal adapters

Keep external libraries behind narrow Mythic interfaces:

```ts
interface GameMapRendererPort {
  mount(target: HTMLElement, projection: PublicMapProjection): Promise<void>
  update(projection: PublicMapProjection): void
  setInteractionMode(mode: 'travel' | 'inspect' | 'target'): void
  destroy(): void
}

interface EncounterRendererPort {
  mount(target: HTMLElement, projection: PublicEncounterProjection): Promise<void>
  previewAction(preview: PublicActionPreview): void
  reconcile(events: PublicEncounterEvent[]): void
  destroy(): void
}

interface DiceTheaterPort {
  play(result: PublicDiceDisplay): Promise<void>
  skip(): void
  destroy(): void
}

interface GameAudioPort {
  playCue(cue: GameAudioCue): void
  setMix(settings: AudioSettings): void
  stopScene(): void
}
```

The domain/rules layers never import Phaser, Three.js dice or Howler.

## 10. Recommendation summary

### Adopt for the vertical slice

- Phaser 4 — world/encounter rendering;
- honeycomb-grid — if hex encounter board is approved in the slice;
- Tiled — map authoring/export;
- deterministic dice-theater spike using dice-box-threejs;
- Howler — small game-feedback/audio layer;
- Kenney CC0 assets — rapid map/UI interaction prototype;
- selective CC0 OpenGameArt — gaps only;
- Game-icons.net — prototype icons with attribution manifest or replace before production;
- SRD 5.2.1 — familiar mechanics source where deliberately adopted.

### Do not adopt yet

- a second frontend SPA framework;
- a full ECS framework;
- a multiplayer server/game-state framework;
- a physics engine beyond what dice visualization requires;
- procedural world-generation framework;
- a generic VTT platform;
- a large UI component/dashboard library;
- an AI-agent framework inside the browser.

The vertical slice should prove fun before architecture breadth.
