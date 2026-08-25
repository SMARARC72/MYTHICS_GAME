# Mythic Game-First v2 — Source of Truth

**Status:** Approved direction, implementation-planning authority  
**Date:** 2026-08-24  
**Product references:** Battle Brothers + Vagrus: The Riven Realms + familiar d20/5E game grammar  
**Implementation target:** Desktop-first browser RPG  

## 1. Authority

This packet supersedes older UX/UI, comic-production, and player-product decisions wherever they conflict with the 2026-08-24 `GAME_FIRST_REBASELINE.md` and this Game-First v2 direction.

The following remain authoritative and are not weakened by the redesign:

- deterministic rules authority;
- server-owned canonical campaign state;
- append-only event ledger, snapshots, replay and idempotency;
- Ledger Time;
- viewpoint-safe player knowledge and hidden NPC/world truth;
- autonomous actors and persistent consequences;
- free-form player intent;
- impossible/refused actions as legitimate outcomes;
- accessibility and recovery requirements;
- Drowned Archive as the first proof slice.

## 2. Removed player-product scope

Do not implement or expose any of the following as part of the game product:

- comic generation or comic capture;
- comic production status/queues;
- issue library/reader/editor;
- comic publication workflows;
- comic onboarding;
- provider/media-production admin surfaces;
- Source Lock / Inflection / production-provider terminology when its sole purpose was comic generation.

Old implementation documents may contain these systems. Treat those references as historical unless another current authoritative gameplay requirement explicitly reuses the underlying infrastructure.

## 3. Product identity

Mythic is a **living-world RPG**, not an AI chat application and not an AI tabletop utility.

The experience should combine:

- **Battle Brothers:** playable world, strong tactical readability, map/game-state clarity, equipment and character-management game feel;
- **Vagrus:** illustrated narrative events, atmospheric world UI, optional deep lore, layered campaign presentation;
- **5E/d20 familiarity:** recognizable attributes, d20 checks, saves, AC, HP, advantage/disadvantage, initiative, damage dice, conditions and progression where those conventions improve immediate adoption;
- **AI-native agency:** unrestricted natural-language attempts instead of fixed dialogue/action trees;
- **Mythic simulation:** persistent causal world, autonomous NPCs/factions, Ledger Time, viewpoint knowledge, morality/reputation and supernatural progression.

### Product thesis

> **Attempt anything. The world decides what happens.**

The AI interprets intent and performs characters. It does not own game truth.

## 4. Primary information architecture

Keep primary navigation to:

1. **Play**
2. **Hero**
3. **World**

Everything else is contextual or nested.

### Play modes

`Play` is context-sensitive and may present three distinct game modes:

- **World Map** — travel, exploration, locations, fog of war, events, threats, world state;
- **Scene** — illustrated location, NPC interaction, investigation, narrative choices and free intent;
- **Encounter** — tactical combat/positioning when combat benefits from explicit spatial representation.

These are modes of play, not top-level SaaS tabs.

### Hero

A recognizable RPG character surface with portrait, level, XP, HP, AC/defense, abilities, skills, powers, equipment, conditions, progression, relationships/reputation and Mythic-specific advancement.

### World

A game-world surface containing the map plus player-knowable Journal, quests/leads, factions and Codex. Lore is optional depth, not mandatory exposition.

## 5. Game UX doctrine

1. **Scene before chrome.** World/scene art and immediate situation receive dominant visual attention.
2. **Game feedback before engine vocabulary.** Show rolls, HP, damage, XP, loot, conditions and consequences; hide projections, receipts, command IDs and state versions.
3. **Progressive disclosure.** Ordinary play shows concise mechanics; advanced rules/audit remains available on demand.
4. **Free intent is always legal to submit.** Suggested actions are examples, never the complete action space.
5. **Mechanics create theater.** Important dice, criticals, failures, damage, level-ups and discoveries receive visual/audio feedback.
6. **The world can say no.** Impossible, refused and failed attempts make unrestricted agency meaningful.
7. **Short, evocative prose.** The engine may be complex; player copy must be simple.
8. **Worldbuilding happens through play.** Environment, NPC behavior, discoveries, objects and consequences precede lore dumps.
9. **Every management screen must feel like an RPG screen.** No CRM cards, analytics dashboards or admin-table visual language in ordinary play.
10. **The AI should become invisible.** Do not foreground prompts, models, context windows, memory systems or AI configuration during normal play.

## 6. Player vocabulary

Do not expose internal engineering terms where a normal RPG term exists.

| Internal term | Player-facing expression |
|---|---|
| projection | current state / what you see |
| viewpoint projection | what you know |
| command | action |
| intent proposal | your attempt / interpreted action |
| resolution receipt | roll/result |
| knowledge grant | learned/discovered |
| pressure projection | danger / threat / urgency |
| condition mutation | condition gained/lost |
| Ledger event | Journal event / consequence |
| canonical state | hidden implementation detail |
| state version | hidden implementation detail |
| idempotency | hidden implementation detail |
| rules version | advanced audit only |

## 7. Content voice

### Default lengths

- Exploration beat: 1–4 short paragraphs.
- Routine action outcome: 1–3 sentences.
- Combat outcome: 1–3 sentences plus visual/mechanical feedback.
- Dialogue: conversational and character-specific.
- Major revelation: may expand when the moment earns it.
- Lore: optional Codex/Journal depth rather than compulsory exposition.

### Writing principles

- Prefer concrete sensory language over abstractions.
- Use normal words before technical or mythological jargon.
- Never explain a system the player can learn by seeing it happen.
- Introduce one new concept at a time during onboarding.
- Worldbuilding should answer: Where am I? Who is here? What do they want? What is dangerous? Why should I care?

### Example transformation

Avoid:

> The saline residue provides a disputed evidentiary relationship to the floodgate sigil while environmental pressure continues to escalate.

Prefer:

> Salt crusts the broken seal. It is the same mark you saw on the floodgate.
>
> Water is rising behind you.

## 8. Mechanics direction

Use the current deterministic engine as authority, but align player-facing game grammar more closely with familiar d20/5E conventions where doing so reduces learning cost.

Candidate familiar conventions:

- six core abilities or a direct, explicitly mapped equivalent;
- d20 + modifier vs DC;
- ability checks and saving throws;
- Armor Class/defense target;
- Hit Points;
- initiative;
- advantage/disadvantage;
- proficiency-style training/mastery;
- damage dice;
- critical hits;
- conditions;
- unconsciousness/death-save-style stakes where appropriate.

Mythic-specific systems remain first-class where they create identity: Fate, Mantles, morality, mythic ascension, reputation, supernatural scale, persistent injury/consequence, Stunts and Ledger Time.

Any SRD-derived implementation must be traced to the currently licensed SRD source and include required attribution before release.

## 9. Tutorial doctrine

The tutorial is a playable adventure, not documentation.

Drowned Archive onboarding should teach through increasingly meaningful actions:

1. observe / inspect;
2. make a d20 check and see the die;
3. understand a modifier through an optional `Why?` disclosure;
4. open Hero in context;
5. talk to an NPC using unrestricted language;
6. experience a persistent relationship/world consequence;
7. enter a simple encounter;
8. learn movement, attack, defense and powers contextually;
9. attempt one creative/unusual action;
10. receive XP/loot/progression feedback;
11. return to the map and see a changed world state.

Tutorial prompts disappear as competence is demonstrated. Never permanently constrain free input to tutorial choices.

## 10. Vertical-slice acceptance test

The first revised Drowned Archive slice is successful when a new player can:

- understand where they are and what is happening within 30 seconds;
- make a meaningful action within 90 seconds;
- understand that they may type an action not shown in suggestions;
- see at least one real d20 roll and understand why the result succeeded/failed;
- open a Hero screen that unmistakably resembles an RPG character sheet;
- navigate a small playable map;
- experience one social interaction, one exploration check and one tactical encounter;
- perform one unusual free-form action interpreted into legal mechanics;
- gain XP, loot, progression or another explicit RPG reward;
- cause one persistent world/NPC consequence;
- refresh/reconnect and return to the same authoritative world;
- describe the experience primarily as an RPG/video game, not a chatbot, dashboard or AI tool.

## 11. Visual acceptance test

Show a representative Play, Hero, World Map and Encounter screenshot with Mythic branding removed.

**Pass:** an unfamiliar viewer asks what RPG/game it is.  
**Fail:** they describe it as a dashboard, CRM, admin panel, AI chat interface, productivity app or tabletop database.
