# Mythic 2.0 — FP-02 Core Game Loop and Progression

**Status:** First-principles draft  
**Purpose:** Define what the player repeatedly does, why it remains fun without AI novelty, how time advances, how characters grow, and how the campaign continues through death/retirement.

## 1. First principle: Mythic must be a game before it is a simulation

The simulation exists to generate meaningful situations and durable consequences. It is not the primary player task.

The player-facing loop must repeatedly produce a legible situation, meaningful agency, mechanical uncertainty/risk, visible resolution, material consequences, new information/opportunity and character/world progression.

If a simulation feature does not eventually change a decision the player can make, it is background infrastructure rather than a priority gameplay system.

## 2. Core action loop

1. **Perceive** — show what the character can currently perceive/know.
2. **Form intent** — choose a standard action or express a free-form goal/method.
3. **Ground** — identify real referenced entities, capabilities, targets and constraints.
4. **Forecast when appropriate** — expose knowable risk/cost without leaking hidden truth.
5. **Commit** — commit the action.
6. **Resolve** — deterministic mechanics establish legality, rolls/results, resource/time cost and canonical effects.
7. **Present** — Godot shows dice, movement, impact, dialogue, VFX and concise narration.
8. **React** — environment and actors respond according to state, goals, knowledge and rules.
9. **Persist** — committed effects become campaign history.
10. **Reopen agency** — the changed world becomes the next decision state.

The same architecture must handle attacking, lying, buying a shop, training for six months, building a road or asking an ally to betray a faction.

## 3. Short-loop gameplay

Exploration/local scenes cover movement, inspection, search, dialogue, tools/powers, stealth, climbing, environmental manipulation and information gathering. The environment is a field of systemic opportunities rather than a painted backdrop.

Tactical combat targets Battle Brothers-level direction adapted to Mythic: discrete positioning; initiative/turn order; movement/action economy; melee/ranged/power ranges; LOS; cover; elevation where valuable; engagement; terrain costs; hazards; conditions/injuries; destructible/movable systemic objects; standard actions plus unrestricted grounded Stunts.

The tactical UI provides efficient conventional actions. Free intent extends the action vocabulary; it does not replace tactical controls.

## 4. Session loop

A normal session should naturally cycle through:

**World travel/exploration → local scene → information/social decision → risk/encounter → reward/consequence → Hero/world update → new destination/problem.**

Not every session requires combat. A strong session should usually change at least two of character state, relationships, knowledge, inventory/resources, faction standing, location state or world opportunities/threats.

## 5. Adventure loop

An adventure is a pressure/problem/opportunity with actors, stakes and state—not necessarily an authored quest chain.

Typical flow: pressure becomes visible; player gathers context; chooses a method or ignores it; factions/NPCs continue acting; player intervenes or pursues another goal; world state resolves/transforms; consequences become new conditions rather than resetting to baseline.

Quests/leads are views into world problems, not the exclusive source of legal content.

## 6. Long-loop gameplay and time

Long-horizon play must be intentionally supported.

Downtime can include training, injury recovery, study, crafting, running/improving a business, building property, relationships, raising/training children, mentoring, political campaigns, governing, recruiting organizations, long travel, projects, imprisonment/exile, lying low or temporary retirement.

A time skip is never a blank fast-forward. Active projects progress; relationships may change; actors pursue goals; businesses/economy update; children/characters age; factions act; world events occur; and material interruptions may end the skip early for player agency.

## 7. Progression model

Progression is multidimensional.

### Character advancement

Use a familiar level/XP or equivalently legible spine. XP may come from meaningful combat, exploration/discovery, solving problems, social/political accomplishments, difficult survival, major projects and archetype-appropriate achievements. Avoid trivial-repeat grinding as an optimal strategy.

### Abilities and skills

Growth can improve attributes where allowed, proficiency/training, skills, feats/talents, tactical options, utility options and social/exploration capabilities.

### Powers / Mantle

Mythic-specific supernatural progression should create new systemic verbs rather than only larger numbers: manipulating elements, traversing impossible terrain, commanding entities, reshaping matter within limits, influencing dreams or temporarily altering physical constraints.

### Equipment and wealth

Weapons, armor, tools, artifacts, property and wealth remain mechanically/socially meaningful.

### Relationships and reputation

Trust, fear, loyalty, obligation, notoriety and faction standing unlock and close opportunities. There is no universal karma interpretation.

### Domain/legacy

Long-lived characters may gain homes, businesses, organizations, followers, political office, territory, family lines, apprentices and cultural/religious influence.

## 8. Difficulty and adaptation

The world reacts to player power without universal level scaling. Weak enemies remain weak; powerful entities can exist before the player is ready; intelligent enemies adapt after learning; factions may escalate proportionally; new threats may emerge because of player influence; not every fight is fair.

## 9. Failure and death

Failure may produce no progress, partial progress, injury, resource loss, exposure, relationship damage, capture, displacement, enemy advantage, missed opportunity or death. The engine cannot convert failure into success to preserve a story beat.

Death is canonical. Possessions remain where causality puts them; factions/NPCs react; inheritance/succession executes; the world continues; then the player chooses a valid continuation path. No automatic resurrection unless the actual world/rules provide it.

## 10. Continuation after character exit

Possible next characters include a child, relative, spouse/partner where appropriate, protégé/apprentice, companion, existing known NPC, faction successor or unrelated new person.

Level, XP, memories, private knowledge, relationships, reputation, powers, equipment, wealth, titles and property do not automatically transfer. Transfers require inheritance, teaching, possession, public reputation, law, culture, supernatural rule or another causal path.

New-character creation uses the **current evolved world**, including its settlements, factions, wars, religions, laws, economies, occupations, family histories and prior consequences. The new character does not receive omniscient campaign knowledge.

## 11. Generational play

Generational play is supported but not mandatory. Children and protégés can mature; businesses can change hands; settlements can expand/decline; allies/enemies age and create successors; institutions remember past heroes; myths and misinformation can develop around history.

Identity, aging and inheritance are architectural requirements from the beginning even if deep multi-generation content is staged after the first vertical slice.

## 12. Rewards hierarchy

**Immediate:** satisfying roll/impact, damage/control, item/resource, clue, tactical advantage.

**Session:** XP, equipment, relationship shift, discovered location, resolved pressure, new lead.

**Campaign:** powers/build options, property/business, faction influence, world transformation, lineage/legacy, historical reputation.

## 13. Anti-patterns

Do not build an AI chat window with stats attached; tactical combat where free intent is cosmetic; universal level scaling; consequence text without world mutation; invisible simulation with no player-decision effect; generational mechanics that clone the prior hero; grind for its own sake; or lore dumps as primary worldbuilding.

## 14. FP-02 acceptance tests

FP-02 is ready to lock when:

1. minute-to-minute play is fun without generative novelty;
2. free intent extends rather than replaces conventional controls;
3. one action architecture handles combat/social/environmental/long-horizon actions;
4. progression rewards are legible at immediate/session/campaign scales;
5. years can advance without thousands of trivial turns;
6. death creates continuation rather than world reset;
7. successors do not inherit unjustified knowledge/power;
8. power growth works without universal scaling;
9. long-horizon systems eventually affect player decisions;
10. the vertical slice can prove the loop without full generational breadth.

## 15. Requirements carried into FP-03

World ontology must support stable actor identity through age/status change, families/households, ownership/property, items/custody, businesses/organizations, locations/topology, knowledge/memory provenance, projects/time commitments, reputation/relationships, succession/inheritance, event provenance and systemic environmental objects.
