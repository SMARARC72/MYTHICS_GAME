# Mythic 2.0 — World Simulation First Principles

## The world is a graph of durable entities

Cities are not monoliths. They contain and connect people, households, properties, businesses, inventories, jobs, organizations, factions, roads, districts, suppliers, customers, laws, obligations, relationships, knowledge, resources, demographics, physical objects, sites and landmarks. Each meaningful entity has a stable identity and history.

## Causal change

A bakery owner dying should not automatically delete the bakery. Possible consequences include inheritance, employee takeover, sale, creditor seizure, faction control, closure, liquidation or transformation.

A bridge collapse may alter route topology, travel time, trade, scarcity, migration, military movement and settlement growth.

A child can age into an adult while retaining the same identity, family, memories, social history and consequences.

## AI and simulation relationship

AI can propose and plan new world actions when justified: found a settlement, open/close/acquire a business, build a road, marry, migrate, raise an army, pursue revenge, create an organization or rebuild after disaster. The authoritative simulation validates prerequisites, costs, geography, time, conflicts and invariants before committing resulting state.

## Adaptive simulation fidelity

### Tier A — Active scene
Full spatial/object/combat fidelity.

### Tier B — Active locality
Persistent named NPCs, businesses, households, governance, local markets and local projects.

### Tier C — Region
Faction goals, migration, trade, infrastructure, conflict and demographics evaluated in batches.

### Tier D — Background world
Coarse aggregates and scheduled events. Promote entities into higher fidelity when relevance increases.

The system must never spend frontier-model tokens continuously simulating every resident.

## Causal significance budget

Potential consequences are ranked by causal strength, magnitude, spatial proximity, named-entity involvement, faction/economic importance, player relevance, time horizon, novelty and simulation budget. Weak consequences terminate; strong consequences propagate.

## Time

Ledger Time remains authoritative across multiple scales: rounds/seconds, minutes/hours, hours/days, weeks/months and years. World catch-up is simulated from elapsed time and relevant state rather than replaying every minute.

## Generational continuity

The campaign is not tied to one protagonist. Characters may be born, age, learn, form relationships, have children, acquire property, change occupation, gain injuries/scars, retire, disappear or die. A successor does not inherit information, power, reputation, equipment or property unless a causal transfer justifies it.

## Visual projection

Godot renders canonical state using reusable semantic assets. A new city is not merely an AI-generated background image; it is a structured place containing topology, districts, buildings, businesses, people and objects, composed using bounded asset grammars.

Systemic objects require authoritative identity. Cosmetic dressing may exist locally but cannot become a gameplay affordance until materialized as canonical state.
