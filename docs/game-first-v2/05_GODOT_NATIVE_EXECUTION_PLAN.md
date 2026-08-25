# Mythic Game-First v2 — Godot Native Execution Plan

**Target:** Steam / native desktop-first 2D RPG vertical slice in Godot 4 with server-authoritative simulation.

This plan supersedes Phaser/web-player execution packets wherever they conflict.

## GN-00 — Authority and migration audit

- inventory existing web-client work;
- classify reuse vs retire vs server-only;
- identify contracts that must support Godot client projections;
- remove Phaser from production target;
- preserve all authoritative server/rules/event/knowledge assets.

**Exit:** one documented authority map; no ambiguity about client vs server ownership.

## GN-01 — Godot project bootstrap

Create a production-grade Godot 4 project structure with:

- autoload/service boundaries;
- scene conventions;
- input map;
- asset directories;
- test strategy;
- dev/prod configuration;
- API client boundary;
- ordered-event reconciliation boundary;
- local settings and recoverable-draft persistence only.

**Exit:** native desktop build launches and connects to a deterministic development server fixture.

## GN-02 — Contract/client SDK bridge

Generate or maintain a typed/versioned contract layer consumable by Godot.

Requirements:

- no handwritten duplicate authority models where generation is practical;
- runtime payload validation;
- correlation/idempotency support;
- projection basis/version tracking;
- reconnect/status lookup;
- ordered event sequencing.

**Exit:** Godot can start/resume a fixture campaign and render a validated projection.

## GN-03 — Authoritative world-object model

Extend contracts/domain where necessary so rendered interactables have stable IDs and rules-relevant public descriptors.

Support at minimum:

- actor;
- item;
- container;
- structure;
- obstacle;
- door/barrier;
- movable object;
- destructible object;
- hazard;
- cover object;
- terrain feature.

**Exit:** every Drowned Archive environmental interaction used in the slice grounds to a real entity/feature.

## GN-04 — Native game shell and visual language

Build the actual game shell inspired by Battle Brothers/Vagrus without cloning either:

- illustrated/game-material UI;
- world/game HUD;
- Hero;
- Journal/World;
- concise narrative pane;
- contextual free-intent field;
- readable mechanics feedback;
- gamepad-aware focus.

**Exit:** screenshot without branding is perceived as a 2D RPG, not software/dashboard/chat.

## GN-05 — Drowned Archive map and scene system

Use `TileMapLayer` / `TileSet` for the environment and scene-object anchors.

Layers should include visual ground/structures plus logical collision, occlusion, hazards, knowledge/fog, and authoritative entity anchors.

**Exit:** player can navigate/inspect the Archive and visible objects correspond to projected world state.

## GN-06 — Grounded intent interpreter integration

Implement the full pipeline:

free text -> entity grounding -> capability/rules proposal -> optional correction -> commit -> receipt/events -> animation.

Required negative case:

- player references an object that does not exist;
- system refuses/clarifies instead of inventing it.

**Exit:** automated tests prove grounding behavior.

## GN-07 — 5E-familiar mechanics presentation

Expose familiar grammar where useful:

- d20 checks;
- ability modifiers;
- DC;
- advantage/disadvantage or mapped equivalent;
- HP;
- defense/AC;
- initiative;
- saves;
- damage dice;
- conditions;
- proficiency/training.

Preserve Mythic-specific Fate, Mantles, Stunts, morality/reputation, Ledger Time and persistent consequences.

**Exit:** a tabletop/CRPG player can understand basic resolution without reading a manual.

## GN-08 — Dice and mechanical theater

Build native dice presentation driven by predetermined authoritative results.

Support:

- routine compact roll;
- important center-stage roll;
- natural 20/1 presentation where rules permit;
- attack/damage/save sequences;
- reduced-motion setting;
- optional detailed breakdown.

**Exit:** dice are fun and legible but never generate canonical randomness client-side.

## GN-09 — Hero, inventory and progression

Build a true game character interface:

- portrait;
- level/XP;
- HP/defense;
- abilities/skills;
- powers;
- equipment;
- conditions;
- inventory;
- relationships/reputation where contextually useful;
- Mantle/progression preview.

**Exit:** character changes come only from authoritative projections and feel immediately RPG-like.

## GN-10 — Tactical combat foundation

Build a Battle Brothers-depth foundation sized to the slice:

- discrete grid/hex positioning;
- movement points/cost;
- turn/initiative order;
- LOS;
- cover;
- engagement;
- range;
- terrain costs;
- hazards;
- area targets;
- object interaction;
- basic enemy AI presentation;
- server validation of all canonical moves/actions.

Client-side path previews are advisory only.

**Exit:** one Drowned Archive encounter is fully playable and deterministic.

## GN-11 — Environmental Stunts

Prove Mythic's differentiator with at least three map objects that support systemic creative use, for example:

- push/lift a heavy table;
- break a support;
- tip/ignite a brazier;
- close/barricade a door;
- move behind destructible cover.

At least one free-text action must produce a mechanically valid action not exposed as a dedicated UI button.

**Exit:** creative action is grounded, resolved and spatially animated.

## GN-12 — Tutorial and content rewrite

Rewrite the Drowned Archive as a true first-play tutorial:

- worldbuilding through action;
- concise prose;
- teach movement, inspection, checks, Hero, dialogue freedom, combat, environmental creativity, persistence and progression in context;
- avoid terminology dumps.

**Exit:** first-time player makes a consequential choice quickly and learns mechanics by using them.

## GN-13 — Persistent consequence and world return

After the encounter/action:

- return to exploration/world presentation;
- show at least one spatial or relational change;
- persist it server-side;
- reconnect/restart and verify it remains changed.

**Exit:** architecture visibly becomes gameplay.

## GN-14 — Audio/VFX/game feel pass

Add coherent native feedback for:

- hover/select;
- movement;
- dice;
- attacks;
- impacts;
- conditions;
- discovery;
- XP/progression;
- environmental changes;
- music/ambience transitions.

**Exit:** scene feels like a finished game slice rather than a systems prototype.

## GN-15 — Native packaging and Steam readiness foundation

Do not publicly ship yet, but verify:

- Windows native export;
- clean build pipeline;
- save/account expectations;
- controller baseline;
- display modes/resolutions;
- crash/error logging strategy;
- future Steamworks integration seam;
- licensing/attribution bundle.

**Exit:** protected native candidate can be distributed for QA.

## GN-16 — Full validation

Required proof:

- deterministic replay;
- server authority;
- world-object grounding;
- no hallucinated affordances;
- hidden knowledge isolation;
- persistence/reconnect;
- tactical legality;
- native performance;
- keyboard/mouse play;
- controller viability;
- tutorial usability;
- game-feel review against Battle Brothers/Vagrus references;
- accessibility options appropriate to the native client.

## Definition of done

The slice is complete when a new player can:

1. launch a native build;
2. understand where they are and what is happening;
3. move through a real 2D environment;
4. inspect a real object;
5. talk naturally to an NPC;
6. make a d20-based check;
7. enter a tactical fight;
8. use standard RPG actions;
9. type a creative action involving an actual visible object;
10. see the server ground and resolve that action without inventing reality;
11. receive XP/progression/consequence feedback;
12. quit and resume with the consequence preserved.

Only after this is fun and robust should breadth expansion begin.
