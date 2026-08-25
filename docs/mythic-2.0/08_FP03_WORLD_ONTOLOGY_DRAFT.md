# Mythic 2.0 — FP-03 World Ontology Draft

**Status:** First-principles draft  
**Purpose:** Define the minimum canonical entity/relationship model required for grounded actions, causal simulation, persistent society, changing geography and generational continuity.

## Ontology principles

1. **Stable identity over mutable state.** A person, shop, road or sword can change without becoming a new entity.
2. **Events create change; prose does not.** Canonical mutation comes from validated commands/events.
3. **Relationships are first-class.** Ownership, kinship, employment, allegiance, debt and knowledge cannot be hidden inside descriptive text.
4. **Place is structured.** World, region, settlement, district, site, room/tile and route topology must be machine-addressable.
5. **Knowledge is actor-relative.** World truth and what an actor knows are separate.
6. **Materialize detail when needed.** Not every background citizen/object needs full fidelity until relevance requires it.
7. **Provenance is mandatory for generated future reality.** New entities/state changes record why/how they became canonical.
8. **No orphan consequences.** Significant state changes must connect to affected entities.

## Universal entity envelope

Every durable canonical entity should have a globally stable ID, entity type, creation Ledger Time, optional end time, status, origin event, current version, simulation tier, classification/tags, optional generation provenance and projection/privacy rules. State history belongs in events/snapshots rather than destructive untracked overwrite.

## Core entity families

### Actor/person

Identity/aliases; birth/age basis; death/cause; family/household links; appearance seed; lineage/species where needed; abilities/skills; powers; health/injuries; inventory/equipment; wealth; occupations; memberships; titles/claims; home/location; relationships; goals; reputation; knowledge/memories; social/legal status; AI-agent profile only at the required simulation tier.

An actor remains the same entity as they age, scar, marry, switch jobs/factions, retire or become player-controlled.

### Household/family

Members/roles, residences, dependents, shared property/resources, inheritance rules, lineage/family name where relevant, obligations/debts and social status.

### Relationship edge

Typed relationships rather than one affinity number: kinship, friendship, romance, trust, fear, respect, resentment, loyalty, obligation, rivalry, mentorship, command, employment, ownership/tenancy and political allegiance. Directionality and provenance are supported.

### Knowledge and memory

Separate world fact from actor/group knowledge claims. Claims retain source, confidence, time, perceived/reported/inferred/rumored status and contradictions. Episodic memory stores selected actor-relevant history. This prevents omniscient NPCs and supports misinformation.

### Item/object

Identity, archetype, material, mass/size, condition, location/custody/ownership, container membership, mechanical properties, value/status and systemic verbs/tags such as movable, liftable, pushable, flammable, breakable, climbable, cover, container, lockable, conductive, throwable, wearable or consumable. A visual prop is not automatically canonical.

### Property/structure

Spatial footprint, ownership/claims, occupants, type/use, condition, construction/damage stages, attached businesses/households, access/control, value/legal status and materialized structural components.

### Business/economic institution

Business identity is separate from owner. Track premises, ownership shares, operator, employees, suppliers, market/customers at appropriate fidelity, inventory/resource categories, cash/debt at appropriate fidelity, prices/availability, reputation, faction/legal relationships and succession/acquisition history.

### Organization/faction

Purpose/doctrine, leadership/governance, membership/strength, resources, holdings, territory/influence, external relationships, goals/projects, military/security assets, laws where governing, knowledge/reputation and succession rules.

### Place hierarchy

Conceptual hierarchy: `world -> region -> subregion/territory -> settlement -> district -> site/property -> interior/scene -> cell/tile` with optional layers. Places track topology, coordinates/adjacency, environment, control, population aggregates, resources, hazards, laws/influence, viewpoint discovery, active events/projects and visual-generation grammar.

### Settlement/district

Population aggregate plus materialized residents, districts, government/control, properties/businesses, infrastructure, economy/resources, security, culture/religion, faction influence, construction/decline state, routes, generation grammar and history. Districts permit partial change instead of replacing whole cities.

### Route/infrastructure

Roads, bridges, ferries, tunnels and gates are canonical graph edges/entities with endpoints/path, travel modes, capacity/quality, condition, controller, toll/cost, hazard/security, seasonal sensitivity and trade/military relevance. Changing infrastructure changes actual pathfinding/trade topology.

### Resource/commodity

Use a hybrid model: named artifacts as individual entities; bulk food, timber, iron, medicine, fuel, reagents, currency and labor as quantities/categories.

### Job/role/office

Separate the role from the holder: mayor, shopkeeper, guard captain, priest, blacksmith, guildmaster, teacher, heir, governor, etc. This allows institutional succession.

### Claim/right/obligation

Property claims, inheritance claims, debt, contracts, oaths, bounties, tenancy, taxes, titles/offices and faction duties become canonical social/legal edges.

### Project

Long-running action with sponsor/actors, goal, target/location, progress, time, costs/resources, prerequisites, risks/interruptions and resulting events. Projects bridge intent with months/years of world change.

### Event

Event ID/type/version, Ledger Time, actor/causation, affected entities, location, command/project/source, deterministic resolution where applicable, canonical payload, knowledge consequences, downstream-cascade metadata and correlation chain.

## Aggregate vs materialized entities

Background populations can exist statistically until identity matters. Materialization triggers include player interaction, important ownership/office, named causal event, family relation, project participation or repeated relevance. Once historically meaningful, an entity cannot later be replaced by a different convenient person.

## Canonical generation

AI/world generation produces proposals containing proposed entities, causal reason, parent/location relationships, resource/time requirements, semantic templates/grammars, checked constraints and provenance. The server validates before emitting creation events.

Example: refugees establishing a town requires actual migrants, viable location/access/resources, elapsed time and a valid causal chain. AI can name/characterize the town but cannot place it in an impossible location or fabricate missing resources.

## Player-character status

`player_character` is a control/role relationship, not a unique person type. A valid existing NPC can become player-controlled after succession; a retired player character remains a normal world actor.

## FP-03 acceptance tests

The ontology must represent without prose-only hacks:

1. shop owner death + ownership transfer while shop persists;
2. child aging into adulthood and later becoming player-controlled;
3. road destruction changing travel/trade topology;
4. NPC false belief separate from world truth;
5. faction completing a multi-month project;
6. tactical object moved/destroyed and persistently changed;
7. heir receiving property without private memories/skills;
8. background citizen materializing as persistent named NPC without contradiction;
9. AI proposal founding a settlement through validated prerequisites;
10. unrelated new player character whose background derives from the current world.

## Next FP-03 work

Specify canonical ID strategy, relationship-edge schema, location/topology model, knowledge boundaries, ownership/custody model, event taxonomy, materialization rules, simulation-tier promotion/demotion and minimum Godot projections before database design begins.
