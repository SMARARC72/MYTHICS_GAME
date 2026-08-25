# Mythic 2.0 — FP-05B Tactical Combat System

**Status:** LOCKED structural design; numeric tuning remains open for prototype/playtest
**Purpose:** Ensure Mythic is a genuinely strong turn-based tactical RPG even if the AI layer is temporarily ignored. AI expands agency and systemic interaction; it does not substitute for combat design.

## 1. Combat promise

Combat must be readable, tactically deep, fast enough that ordinary encounters do not become chores, dangerous enough that positioning/equipment/injuries matter, varied enough that one dominant rotation cannot solve the game, and systemic enough that terrain and objects create solutions.

A blinded tester must be able to enjoy Mythic as a tactical RPG before appreciating its AI novelty.

## 2. Reference synthesis

Mythic adopts principles rather than copying implementations.

From 5E/SRD-style play: d20 resolution, ability modifiers, proficiency/training, Armor Class / Defense readability, saving throws, advantage/disadvantage, damage dice, conditions, initiative language, reactions/opportunity attacks, and dying/death-save tension where appropriate.

From Battle Brothers-style tactics: discrete tactical space, flexible action points, meaningful equipment tradeoffs, fatigue/exertion, morale, injuries, LOS/cover/elevation/engagement, equipment-defined tactical actions, counter-strategy enemies, and battles that can be lost, escaped, surrendered, or won without killing every enemy.

From Mythic: grounded free intent, systemic environmental actions, authoritative server resolution, persistent object destruction/change, Fate/Mantles/Stunts, actor knowledge limits, and consequences that survive the encounter.

## 3. Tactical space

Default tactical representation is a **hex grid**. Canonical actions resolve against stable cell/entity IDs, never screen pixels.

Each encounter can expose ground/terrain, elevation, movement cost, blocking, cover, LOS blockers, hazards, environmental objects, structures/destructibles, objectives, known actors, hidden server-side actors, and knowledge/fog state. Godot visualizes; the server owns legality and committed state.

## 4. Rounds and initiative

Combat proceeds in rounds with individual combatant turns on a visible initiative timeline.

Baseline initiative: `d20 + Agility/Dexterity modifier + initiative bonuses - burden/injury penalties`.

Initiative is rolled at encounter start for readability and planning. It is not randomly rerolled every round by default. Future-round position may shift from haste/slow, heavy exertion, severe injury, delay/ready actions, powers, surprise/recovery, or monster mechanics.

## 5. Action economy

Each combatant receives an AP budget each turn. Initial tuning target: **8 AP baseline** for a normal humanoid, subject to playtest.

Provisional costs: clear move 1 AP/hex; difficult terrain 2+; light/basic attack ~4; heavy attack ~5–6; simple interaction ~2; defensive posture ~3; item use ~2–4; powers content-defined.

AP is chosen over strict 5E move/action/bonus-action because it supports flexible positioning, weapon speed, move-attack-move, environmental interaction, equipment/build tradeoffs, and unusual monster patterns.

Most combatants also receive **one Reaction opportunity per round** for opportunity attacks, intercept/guard, shield reactions, counters, protective powers, and prepared responses.

A combatant may delay once per round within bounded initiative rules.

Basic movement, a basic attack, defense, item interaction, or another meaningful low-cost action should remain possible under ordinary exertion states; fatigue cannot routinely create dead turns.

## 6. Exertion

Powerful actions, heavy equipment, sprinting, certain defenses, and some Stunts generate **Exertion**. It rises within combat, restricts strenuous actions at high levels, can affect future initiative, recovers partially each round, and may be reduced by recover actions/perks/equipment/powers.

It exists to prevent optimal-skill spam and create combat rhythm, not tedious stamina micromanagement.

## 7. Attack and defense

Default attack grammar: `d20 + attack modifier + training + situational modifiers vs Defense/AC`.

Advantage/Disadvantage is the primary high-level modifier system. Small bounded modifiers may be used where clearer than advantage stacking.

On hit: roll damage; apply resistance/vulnerability/immunity and guard/shield effects; reduce HP; evaluate injury thresholds; resolve secondary effects; emit morale/pressure consequences; persist object/terrain effects.

Defense/AC is the primary hit threshold. Armor may trade higher AC/protection against lower initiative, higher exertion burden, movement/stealth penalties, or special resistances. Equipment is not a linear upgrade path.

## 8. Weapons create tactics

Weapons and powers change the tactical repertoire rather than merely damage values. Examples: spear reach/brace/zone denial; axe structure/shield damage; mace stun/disruption; dagger low AP/precision; great weapon high AP/high impact/cleave; bow ranged pressure/elevation; shield guard/intercept; powers displacement/control/terrain creation.

No weapon family should be globally superior in every meaningful context.

## 9. Positioning

Adjacent hostiles create engagement pressure. Leaving carelessly can trigger opportunity reactions unless disengaged, displaced, hidden, or exempt.

Mythic avoids facing-direction micromanagement. Multiple adjacent enemies can instead create an **Overwhelmed** state or bounded tactical penalties.

Cover derives from authoritative object/terrain geometry and may increase Defense, block LOS, be destroyed, moved if physically valid, and change during combat. Cosmetic props are not automatically systemic cover.

Elevation affects LOS, ranged attacks, movement, falls/knockback, and relevant powers using simple visible tiers.

## 10. Morale

Morale is a legitimate victory axis. Suggested states: Steady, Shaken, Breaking, Routed.

Pressure can come from ally/leader death, severe injury, terrifying enemies, being surrounded/outnumbered, major failure, environmental catastrophe, supernatural fear, or objective loss. Positive events can restore morale. Some actors use alternative psychology or immunity.

Routed enemies may flee, surrender, or act according to personality/faction logic.

## 11. Injuries, downed state, death

Large/severe hits can trigger injuries based on damage relative to max HP, damage type, physiology, equipment, and attack tags. Injuries can immediately alter movement, attacks, perception, initiative, bleeding, or exertion and persist after battle.

Player characters and appropriate major companions reaching 0 HP normally enter a **Downed/Dying** state unless an explicitly lethal effect bypasses it. Use a 5E-familiar death-save structure or close equivalent for readability. Ordinary enemies need not all use player-facing death saves. Permadeath is real.

## 12. Objectives beyond extermination

Supported encounter objectives include eliminate, survive, escape, protect, rescue, capture, steal/recover, interrupt ritual/project, hold, reach, delay, break morale, negotiate/surrender, destroy/preserve an object, or pursue before escape. Objectives may transform during battle through canonical events.

## 13. Environmental interaction — core differentiator

Encounters should contain a curated density of systemic objects appropriate to location: doors, shelves, chains, braziers, carts, pillars, bridges, chandeliers, loose stone, water, oil, machinery, corpses, vehicles, magical devices, etc.

Standard UI exposes obvious interactions; free intent can express non-preauthored combinations.

Example: `I kick the brazier into the oil and use the smoke to break line of sight.`

Pipeline: ground entities/space -> validate reach/capability -> construct AP/check/difficulty/consequence proposal -> commit -> deterministic server resolution -> canonical fire/smoke/object-movement events -> Godot animation -> subsequent turns use modified battlefield.

The AI never invents that oil was present.

## 14. Stunts

A **Stunt** is a mechanically unusual but grounded action not represented by a dedicated standard button. It may use checks, attacks, saves, object properties, AP, Exertion, Fate, environmental state, and target state.

Stunts are not automatically stronger than standard abilities. Their value is contextual creativity/systemic leverage. Repeating one natural-language exploit must not become a dominant strategy.

## 15. Fate and optional Momentum

Fate remains a scarce hero-level resource for bounded rerolls, initiative manipulation, resisting death/injury, Mantle features, or exceptional Stunts. It does not replace tactical planning.

An encounter-level **Momentum** mechanic may be prototyped to reward coordination, morale breaks, objective progress, and contextual Stunts, but it is explicitly not shipping-locked until playtesting proves it adds value without duplicating Fate/morale or adding UI burden.

## 16. Enemy tactical design

Routine enemy turns must **not** require an LLM call. Use deterministic/seeded utility AI, behavior trees, or equivalent authored systems based on goal, role, tactics/personality tags, visibility/knowledge, threat, morale, allies, terrain, available skills, and retreat/surrender thresholds.

Language models may help author plans outside the hot loop or interpret unusual social/free-form actions, but turn-to-turn combat competence must remain low-latency and testable.

The existing 800+ internal monster library should be normalized into reusable tactical role tags such as skirmisher, bruiser, tank, artillery, controller, support, ambusher, swarm, summoner, disruptor, assassin, morale predator, environmental threat, boss/elite. Creatures combine role + physiology + movement + damage + signature mechanics rather than requiring 800 bespoke AI systems.

## 17. Anti-dominant-strategy design

Every strong strategy needs contextual counters somewhere in the ecosystem: heavy armor faces fatigue/armor-piercing/control; ranged dominance faces concealment/rushers/cover/weather; chokepoints face displacement/AoE/alternate paths; kiting faces fast enemies/zones/objectives; repeated fire tactics face resistance/rain/no fuel/collateral consequences.

Do not hard-counter every build in every fight. Counters exist across the world so adaptation remains meaningful.

## 18. Pacing targets

Initial playtest targets: trivial 2–4 rounds / ~2–5 min; normal 4–8 rounds / ~5–15 min; major 6–12 rounds / ~10–25 min; bosses only as long as mechanics keep evolving.

If normal encounters regularly exceed ~15 minutes without interesting decisions, that is a design failure. Animation speed controls and fast-forward/skip for repetitive enemy animation are required.

## 19. Information design

The player should usually know AP cost, target/range, hit chance or appropriately bounded odds, Advantage/Disadvantage, known damage range, cover/LOS, reaction risk, conditions, initiative order, and objective state. Hidden information stays hidden when the character does not know it. Advanced breakdown is inspectable, not mandatory.

## 20. Rewards, retreat, defeat

Combat may reward XP, equipment, resources, relationships, faction standing, territory/control, knowledge, objectives, reputation/fear, injuries/scars, and world events. Combat XP must not make indiscriminate killing universally optimal; exploration, discovery, objectives, social outcomes, and morality-aligned behavior remain valid advancement.

Retreat and surrender are real tactical choices. Defeat can create imprisonment, lost territory, stolen equipment, dead companions, reputation damage, or changed faction balance rather than always forcing reload.

## 21. Difficulty philosophy

No universal level scaling. Danger exists independently of the player. Difficulty comes from composition, terrain, objectives, resources, information, tactical counters, consequences, and world state—not merely inflated HP/damage.

## 22. Required prototype matrix

Before content breadth, the vertical slice must prove: melee positioning; ranged LOS/cover; difficult terrain/elevation; opportunity/reactions; Exertion limiting spam; morale shift/break; injury with post-combat consequence; retreat; one non-kill objective; three systemic environmental objects; one free-text Stunt with no dedicated button; persistent terrain/object change; competent non-LLM enemy AI; genuine death; deterministic replay.

## 23. Fun gates

Combat fails even if technically functional when optimal turns are obvious/repetitive, moving rarely matters, terrain rarely matters, weapon choice is mostly damage ranking, enemies behave identically, environmental actions are weak novelty buttons, fights are all kill-everything attrition, AI latency harms pacing, meaningful actions vanish, normal battles drag, outcomes feel arbitrary, or death/injury tuning makes save-scumming mandatory.

## 24. Lock status

**LOCKED:** hex tactical space; individual initiative; AP economy; separate Reaction; d20/Defense/Advantage readability; Exertion; morale victory axis; injuries/persistent consequences; equipment-defined tactical actions; LOS/cover/elevation/engagement; objective variety; grounded environmental Stunts; deterministic non-LLM hot-loop enemy tactics; permadeath/retreat/surrender; no universal level scaling.

**OPEN FOR TUNING:** exact AP/costs; Exertion formulas; injury/morale thresholds; Momentum inclusion; weapon balance; encounter size/pacing; exact bounded-modifier interactions.

## 25. Acceptance statement

A blinded tester should be able to play a combat encounter with all free-text/AI features disabled and still describe it as fun, readable, and tactically meaningful. Re-enabling free intent must expand the solution space without invalidating the underlying tactical game.
