# Mythic 2.0 — FP-03 World Ontology LOCKED

**Status:** LOCKED for downstream architecture
**Purpose:** Define the minimum canonical entities, relationships, identity rules, spatial topology, knowledge boundaries, ownership semantics, and materialization rules required for Mythic's persistent world.

## 1. Governing invariant

The world is a graph of durable identities and relationships, not a collection of narrative summaries.

Anything that can produce meaningful future consequences must exist as authoritative state or be derivable from authoritative state.

The AI may propose new facts; only committed world events make them canonical.

## 2. Stable identity

Every canonical entity receives an immutable stable ID at creation/materialization.

Stable IDs survive:
- ownership changes;
- aging;
- injury;
- role/job changes;
- faction allegiance changes;
- relocation;
- rebuilding or repair;
- character-control transfer;
- death, where historical reference remains necessary.

Names and labels are mutable attributes, never identity.

## 3. Core entity classes

### 3.1 Person
Required durable fields:
- person_id;
- birth ledger date / estimated age basis;
- biological/adoptive lineage links where known;
- household membership history;
- current life status;
- physical profile;
- capability profile;
- current roles/jobs/offices;
- faction/organization memberships;
- property/asset claims;
- knowledge references;
- memories/significant events;
- reputation dimensions;
- current location basis;
- simulation tier;
- provenance/materialization reason.

A player character is a Person with a current `player_control` relationship. It is not a separate species of entity.

### 3.2 Household / Family
Represents practical social/economic units separately from genealogy.

Tracks:
- members;
- dependents;
- residence;
- shared wealth/resources;
- obligations;
- inheritance customs/legal basis;
- household status/history.

### 3.3 Relationship Edge
Relationships are first-class edges between entities.

Possible dimensions include:
- kinship;
- friendship;
- affection;
- trust;
- fear;
- loyalty;
- rivalry;
- debt;
- command;
- patronage;
- mentorship;
- ownership/employment;
- hostility;
- reputation-derived expectations.

Each edge can have direction, magnitude, confidence, public/private visibility, start/end Ledger Time and provenance.

### 3.4 Organization / Faction
Includes guilds, governments, cults, armies, companies, gangs, houses, religious orders, political movements and ad hoc groups.

Tracks purpose, leadership/offices, membership, assets/property, territory/influence, policies/norms, inter-organization relations, goals/projects, treasury/resources, reputation, succession rules and simulation tier.

### 3.5 Office / Role / Job
Jobs and offices are durable positions, not people. A holder can die, resign, be fired or be replaced while the position persists.

### 3.6 Business
A business is a durable commercial/social entity independent of its owner. Track business ID, site/property links, ownership claims, manager/employees, inventory/resource categories, suppliers/customers, pricing/economic profile, reputation, debt/obligations, operating state and succession/transfer history.

### 3.7 Property / Structure
Durable built environment such as houses, shops, forts, bridges, shrines, dungeons, city walls and farms. Ownership, custody and occupation are separate. Track spatial basis, construction/material profile, integrity/damage, capacity/use, access rules, attached systemic objects and visual grammar/state.

### 3.8 Item / Object
A systemic object has authoritative existence and may participate in rules. Track location/custody/ownership, material, mass/size, durability, value, tags/capabilities, state, visibility/knowledge and containment where relevant. Cosmetic decoration is never automatically systemic.

### 3.9 Place hierarchy

`World -> Region -> Settlement -> District -> Site -> Spatial Cell/Anchor`

All persistent levels receive stable identity where needed. A settlement is not a rendered map; it is a durable social/spatial entity with changing visual representations.

### 3.10 Infrastructure
First-class topology entities include roads, bridges, ports, tunnels, gates, transit routes, aqueducts and setting-appropriate utilities. Infrastructure can alter travel cost, trade, defense, migration and growth.

### 3.11 Resource / Commodity
Economically relevant material classes can remain aggregated: grain, iron, timber, medicine, fuel, luxuries, etc.

### 3.12 Project
Long-running directed change such as building a road, fortifying a district, training an apprentice, rebuilding a shop, founding a settlement or raising an army. Projects have actors, requirements, duration, progress, risks, costs and interruption rules.

### 3.13 Claim / Right / Obligation
Separate social/legal reality from possession: ownership, inheritance claims, debt, contracts, fealty, taxes, custody, marriage obligations, guild rights.

### 3.14 Event
Canonical change records event ID, Ledger Time, causation/correlation, affected entities, type/version, authoritative payload, knowledge consequences, significance and provenance.

## 4. Ownership, possession and custody are distinct

For systemic entities distinguish legal/social ownership, physical possession, operational custody, location and access rights. Inheritance, theft, seizure and storage cannot collapse into one field.

## 5. Knowledge model

Truth and knowledge are separate. A fact can be true canonically, known by one person, suspected by another, falsely believed by a third, publicly reported inaccurately, or hidden entirely. Knowledge records require source/provenance and confidence where relevant. Client projections may not infer hidden truth from IDs, payload shape or omissions.

## 6. Memory model

Persistent people retain significant/relationship-relevant memories, not transcripts. Memory records can store subjects, interpreted meaning, emotional salience, confidence, source, Ledger Time, retention policy and whether personally experienced, told, inferred or culturally transmitted. Historical fact and personal memory are distinct.

## 7. Materialization

Most population remains aggregated until individual identity is causally required. Triggers include player interaction, lineage, ownership/office, major events/projects, repeated relevance, leadership, legal responsibility or validated world significance. Materialization adds detail consistent with existing aggregates and never contradicts committed facts.

## 8. Simulation tiers

Suggested tiers: S0 aggregate/background; S1 materialized low-fidelity; S2 persistent/local actor; S3 major autonomous actor; S4 active-scene full fidelity. Identity survives promotion/demotion. Demotion reduces update frequency/detail, never history.

## 9. Spatial topology

World geography has synchronized logical topology and rendered geometry. Logical topology is authoritative for connectivity, distance, traversability, control, risk and cost. Godot rendering never creates canonical connectivity or objects by itself. A destroyed bridge changes logical topology first, then visuals.

## 10. Generational continuity

Birth, childhood, aging, adulthood, retirement and death operate on the same Person ID. Successor play transfers control to an existing Person when possible. Inheritance is event-driven through claims, law/custom, wills, possession and conflict; nothing teleports to a successor for convenience.

## 11. World-generation authority

AI/simulation may create new canonical entities when a valid cause exists: refugees found a settlement, a faction constructs a fort, merchant opens a store, family has a child, road is built, cult establishes a shrine.

Creation pipeline:
`cause -> proposal -> constraint validation -> simulation/rules approval -> canonical creation event -> asset/visual projection`

## 12. Locked rejection rules

Reject or clarify references to nonexistent systemic objects, impossible ownership transfers, hidden knowledge without a source, invalid spatial connectivity, identity replacement masquerading as continuity, retroactive facts conflicting with history, or AI-created entities with no causal creation path.

## 13. FP-03 exit criteria

Downstream systems must answer deterministically: Who/what is this? Where is it? Who owns/possesses/controls it? Who knows what? What relationships connect it? How can it change without losing identity? What event caused the change? At what simulation fidelity should it run?

These rules are binding for FP-04 onward.
