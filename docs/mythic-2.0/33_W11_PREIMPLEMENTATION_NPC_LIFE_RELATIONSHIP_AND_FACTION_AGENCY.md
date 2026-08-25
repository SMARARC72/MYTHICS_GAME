# Mythic 2.0 — W11 Preimplementation NPC Life, Relationship and Faction Agency

**Status:** LOCKED orchestration blueprint

## Objective

Make important people and organizations behave as persistent agents across years without running continuous LLM consciousness.

## Actor life model

Authoritative state owns:
- identity;
- age/date of birth;
- health/injuries;
- household/family;
- residence;
- occupation/offices;
- property/wealth;
- skills/capabilities;
- relationships;
- knowledge/memories;
- obligations/contracts;
- faction memberships;
- current goals/projects.

Models may propose future goals and interpretations but cannot rewrite these facts.

## Life-planning windows

Trigger `LifePlanProposal` on meaningful transitions such as:
- adolescence/adulthood milestone;
- education/training completion;
- marriage/partnership opportunity;
- birth/adoption;
- bereavement;
- inheritance;
- job loss/promotion;
- severe injury;
- migration pressure;
- major relationship change;
- faction recruitment;
- religious/mythic experience;
- retirement;
- major wealth/status change.

Possible proposals include career, apprenticeship, study, courtship, migration, investment, revenge, reconciliation, public office, faction involvement and retirement.

Deterministic systems validate age, kinship, location, money, opportunity, law, time and counterpart consent/agency.

## Relationship interpretation

Events carry objective facts. AI may classify subjective meaning separately for each involved actor using only that actor's knowledge/personality.

Possible interpretations:
- gratitude;
- humiliation;
- admiration;
- fear;
- betrayal;
- loyalty;
- romantic interest;
- suspicion;
- rivalry;
- obligation;
- grief;
- awe.

Relationship mechanics translate validated interpretations into bounded deltas and memories. The model cannot directly set `friend=true` or create romance.

## Memory model

Models may propose salience and subjective framing for committed source events. Every durable memory references canonical event IDs and knowledge provenance.

Actors can remember incorrect beliefs if they genuinely believed them, but the memory is marked belief/interpretation rather than canonical truth.

## Faction/organization planning

Material organizations periodically receive `StrategicPlanProposal` from their actual knowledge, resources and goals.

Plans may include:
- recruitment;
- diplomacy;
- war/peace posture;
- trade;
- infrastructure;
- investigation;
- political lobbying;
- propaganda;
- territory;
- succession;
- research;
- artifact pursuit;
- countering a player/other faction;
- founding branches/settlements/businesses.

Plans compile into projects/actions with real budgets, actors and Ledger Time.

## Political and legal agency

Investigators, courts, rulers and councils reason from evidence they possess, not omniscient truth.

AI can propose:
- hypotheses;
- suspects;
- questioning priorities;
- warrants/orders;
- political compromises;
- sentences/settlements within legal grammar;
- public messaging.

Evidence, authority, law, jurisdiction and enforceability remain deterministic constraints.

## Player impact

The player can alter life trajectories without every effect being scripted. Saving a child, ruining a family business, exposing corruption, mentoring an apprentice or creating a new trade route can influence later plans when those actors reach relevant planning windows.

## Cadence and cost

- active companions/major rivals: event-driven plus occasional short-horizon planning;
- local named NPCs: milestone/event-driven;
- background materialized NPCs: sparse batch planning;
- aggregate population: no individual model planning until materialized.

## Validation fixtures

Include:
1. child grows into career consistent with local opportunity;
2. heir refuses expected career due to real relationship/history;
3. bereaved NPC forms valid revenge goal without gaining hidden knowledge;
4. spouse/apprentice business succession;
5. rival faction forms counter-plan from observed player actions only;
6. investigation reaches wrong but evidence-plausible conclusion;
7. model outage preserves prior goals and deterministic schedules;
8. successor player takes control of an already-lived existing person.

## Exit

W11 is ready when actor/faction plan schemas, life-event triggers, relationship interpretation schema, memory provenance rules, political/legal constraints, fallbacks and evaluation fixtures are versioned.
