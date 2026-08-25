# Mythic Causal Social World Simulation

## Core principle

Mythic is not a map generator with persistent landmarks. It is a persistent causal society simulation whose visible maps, settlements, businesses, roads, households, factions, characters, inventories and institutions are projections of authoritative world state evolving over Ledger Time.

The AI may create new canonical reality only through valid causal world operations. It may not contradict current reality, bypass simulation preconditions, or invent convenient state in narration.

## Scope of persistence

The durable world graph may include, at appropriate fidelity:

- people, ages, traits, health, injuries, powers, wealth, skills, reputation, beliefs and memories;
- households, kinship, guardianship, inheritance and dependents;
- employment, occupations, apprenticeships, guilds and professional relationships;
- businesses, owners, managers, employees, inventories, suppliers, customers and property leases;
- buildings, parcels, districts, settlements, roads, bridges, ports and utilities;
- factions, offices, leadership, membership, resources, rivalries and obligations;
- organizations, temples, schools, gangs, companies, militias and governments;
- markets, prices, scarcity, production, trade routes and demand;
- quests, promises, debts, contracts, crimes, warrants and favors;
- births, aging, coming of age, marriage/partnership, migration, succession, retirement and death;
- environmental state, disasters, reconstruction, land use and territorial control.

Not every entity must be simulated at maximum detail at all times. Fidelity is adaptive and can be promoted when the entity becomes relevant to the player, a causal chain or a major world process.

## Causal propagation rule

Every committed action may produce direct and downstream effects to the extent they are materially plausible, computationally bounded and narratively relevant.

Example:

1. Player kills a shop owner.
2. Death event becomes canonical.
3. Shop loses active owner/operator.
4. Household loses income and may inherit property.
5. Employee may become interim manager, buyer or claimant.
6. Inventory replenishment may stop if supplier relationship depended on the owner.
7. Prices or availability may change locally.
8. Authorities/faction may investigate depending on witnesses and law.
9. Children/dependents may remember the event and their future trajectory may change.
10. Months/years later an heir may own the property, sell it, convert it, abandon it or seek revenge.

The engine should not force all possible second- and third-order consequences. It should select consequences based on causality, salience, simulation budgets and reasonable world behavior.

## Adaptive simulation fidelity

Use layered simulation rather than simulating every citizen at full tick-rate.

### Tier A — Active scene
Full spatial, combat, inventory, relationship and decision state for currently relevant actors and objects.

### Tier B — Active locality
Businesses, households, named NPCs, local economy, governance, transport and active pressures update at medium fidelity.

### Tier C — Regional simulation
Settlements, factions, trade, migration, conflicts, infrastructure and aggregate demographics update in batches.

### Tier D — Background world
Low-salience entities use coarse event scheduling and demographic/economic aggregates until promoted.

Promotion/demotion must preserve identity and causal history.

## Time and aging

Ledger Time is authoritative. Time passage can trigger scheduled or probabilistic processes including:

- aging and life-stage transitions;
- pregnancy/birth where canonically relevant;
- education/apprenticeship completion;
- succession and inheritance;
- crop/production cycles;
- debt/payment dates;
- elections/appointments/leadership turnover;
- construction and repair;
- travel/migration;
- disease/recovery;
- market restocking;
- faction operations;
- deterioration and abandonment.

A child encountered early in a long campaign can later become an adult with preserved identity, relationships, memories and history rather than being replaced by a newly invented adult NPC.

## Businesses and ownership

Businesses are canonical entities distinct from their owners.

A business may have:

- entity ID;
- property/location ID;
- current owner(s);
- operator/manager;
- staff roster;
- inventory model;
- supplier relationships;
- pricing policy;
- faction/legal affiliation;
- wealth/liquidity;
- reputation;
- opening state and hours if useful;
- business type and capability tags;
- history/events.

Owner death does not delete the business automatically. Succession, inheritance, sale, seizure, abandonment or employee takeover may occur according to world rules.

## Infrastructure and topology

Roads, bridges, ferry routes, gates and passes are canonical topology, not painted art.

Events can:

- create routes;
- destroy routes;
- reroute traffic;
- close routes;
- increase/decrease travel cost;
- change safety;
- alter trade connectivity;
- shift settlement growth and prices.

Godot renders the authoritative topology. Navigation and economic systems consume the same topology basis.

## Social memory and lineage

Named and promoted NPCs maintain relationship and memory records scoped to what they know.

Lineage/household state can support:

- parent/child;
- sibling;
- guardian/dependent;
- spouse/partner;
- heir/successor;
- mentor/apprentice;
- employer/employee.

These relations can materially affect inheritance, loyalty, grudges, succession, migration and future quests.

## World generation versus world mutation

Generation creates a new entity when causally justified.

Mutation changes an existing entity.

Examples:

- refugees establish a hamlet -> generation;
- hamlet expands into a town -> mutation;
- shop owner dies -> person mutation/death + business succession workflow;
- bridge collapses -> infrastructure mutation;
- faction builds alternate road -> generation + topology mutation;
- child becomes adult -> person lifecycle mutation;
- merchant retires and daughter takes over -> person + business relationship mutations.

The AI may propose these operations, but authoritative services validate preconditions, Ledger Time, resources, spatial feasibility and causal support before commit.

## AI responsibilities

AI can:

- interpret player intent;
- propose likely actor/world responses;
- choose among allowed causal actions for autonomous NPCs/factions;
- propose generated entities consistent with local grammar and world state;
- write names, descriptions, dialogue and short histories after structured state exists;
- narrate committed outcomes.

AI cannot:

- overwrite canonical state in prose;
- resurrect or relocate entities without a valid operation;
- invent ownership, kinship, inventory, roads, buildings or people merely to satisfy narration;
- skip costs/resources/time required by world rules;
- grant NPC knowledge they do not possess.

## Event architecture

World evolution should be event-sourced where practical. Representative events:

- PERSON_BORN
- PERSON_AGED_STAGE
- PERSON_DIED
- PERSON_MIGRATED
- RELATIONSHIP_CREATED
- EMPLOYMENT_STARTED
- EMPLOYMENT_ENDED
- BUSINESS_FOUNDED
- BUSINESS_OWNER_CHANGED
- BUSINESS_CLOSED
- PROPERTY_TRANSFERRED
- INVENTORY_RESTOCKED
- PRICE_CHANGED
- ROAD_BUILT
- ROAD_BLOCKED
- BRIDGE_DESTROYED
- SETTLEMENT_FOUNDED
- SETTLEMENT_EXPANDED
- DISTRICT_REBUILT
- FACTION_LEADER_CHANGED
- FACTION_ACTION_COMMITTED

Events should record causation, correlation, Ledger Time, source actor/process, rules/content version and affected entity IDs.

## Simulation budget and reasonableness

Cascades must remain bounded.

Use salience and causal strength to decide whether to materialize downstream effects. Suggested considerations:

- directness of cause;
- magnitude of effect;
- proximity to player/current region;
- named/promoted entity involvement;
- faction/economic importance;
- existing unresolved pressure;
- probability/necessity;
- computational budget.

The goal is not to simulate every butterfly effect. The goal is that consequences feel coherent, persistent and discoverable when they reasonably should.

## Visual projection implications

The reusable 2D asset system must support incremental mutation of existing places and people:

- storefront sign/owner/faction changes;
- building renovation/damage/abandonment;
- road and bridge variants;
- market stall occupancy;
- population/activity density;
- aging character portraits/sprites or life-stage variants;
- clothing/equipment/faction overlays;
- prosperity/poverty/damage states;
- seasonal/weather states;
- construction/rebuild stages.

Visual state derives from canonical entity state plus asset grammar; it is not an independent source of truth.

## Acceptance examples

1. Kill a merchant; revisit later; the business has a causally plausible successor/closure state rather than resetting.
2. Save an owner's child; relationship and succession consequences remain available years later.
3. A trade-road closure changes travel and supply conditions in connected settlements.
4. A child NPC ages across Ledger Time while preserving identity/history.
5. A faction takeover changes leadership, storefront affiliation, patrols and local services where reasonable.
6. Destroyed infrastructure remains destroyed until repaired/replaced through actual world operations.
7. Unrelated distant entities do not receive arbitrary cascade mutations solely to create drama.
