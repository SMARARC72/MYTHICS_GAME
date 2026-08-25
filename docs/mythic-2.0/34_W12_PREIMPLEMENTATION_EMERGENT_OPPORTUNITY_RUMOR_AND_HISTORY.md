# Mythic 2.0 — W12 Preimplementation Emergent Opportunity, Rumor and History System

**Status:** LOCKED orchestration blueprint

## Objective

Replace conventional arbitrary quest generation with a system that turns actual world pressures, actor goals and unresolved consequences into discoverable player opportunities.

## Principle

> **The world creates problems and ambitions. AI helps people express them.**

A quest/opportunity is not a free-floating content object invented because the player needs something to do. It points to real actors, needs, conflicts, locations, projects, threats, debts, rumors or opportunities.

## Opportunity sources

Canonical sources can include:
- business shortage/contract;
- missing person;
- monster threat;
- faction conflict;
- inheritance dispute;
- investigation;
- road/bridge failure;
- construction project;
- political campaign;
- research/artifact lead;
- debt/claim;
- criminal activity;
- rescue/protection request;
- trade opportunity;
- family request;
- personal ambition;
- emerging settlement;
- war/disaster;
- player-created consequence.

## Opportunity expression

AI may turn a valid source into natural player-facing forms:
- direct request;
- conversation;
- rumor;
- job board/contract;
- letter/message;
- faction briefing;
- news report;
- environmental clue;
- overheard dialogue;
- discovered record;
- emergent encounter.

The underlying source remains authoritative and can change or disappear even if the player ignores it.

## No frozen quest state

Opportunities continue evolving with the world.

If a player ignores a missing-person request:
- another actor may investigate;
- the person may return;
- evidence may decay;
- the victim may die;
- the case may become politically important;
- the requester may leave.

The system does not freeze the world waiting for the protagonist.

## Rumor network

Canonical events can generate viewpoint-dependent `RumorSeed` records when socially transmissible.

Models may create language variants and subjective framing based on speaker culture, faction, knowledge and incentives.

Rumors track:
- source event;
- origin actor/location;
- factual core;
- distortion/uncertainty;
- propagation path;
- audience knowledge;
- expiration/relevance;
- deliberate propaganda flag where applicable.

Rumors can be false interpretations without becoming canonical truth.

## News and public narratives

Settlements/factions can project events through newspapers, heralds, religious sermons, official notices, gossip networks or modern media depending setting/context.

Different factions can describe the same canonical event differently.

## History and chronicles

The event ledger remains factual history. Models create compressed human-readable histories tied to source events:
- personal journals;
- family histories;
- settlement chronicles;
- faction histories;
- biographies;
- memorials;
- legends;
- distorted folklore.

Historical narratives can disagree while the authoritative event record remains stable.

## Attention director

A non-authoritative `AttentionDirector` may rank which existing world threads are worth surfacing to the player based on proximity, character interests, relationships, urgency, novelty and unresolved consequences.

It **cannot create threats, secretly scale difficulty, move actors, alter outcomes or force a story arc**. It only decides which valid information/opportunities are presented prominently.

## Mythic uniqueness

This enables a player to hear, years later, a distorted tavern legend about something their previous character actually did, discover that a former side effect became a political issue, or receive a contract from a business that exists because an earlier player-created trade route made it viable.

## Validation fixtures

1. world pressure produces opportunity without inventing source facts;
2. ignored opportunity resolves independently;
3. same event yields different faction narratives;
4. rumor distorts interpretation but preserves source provenance;
5. hidden event does not become rumor without a valid transmission path;
6. old character action appears in later generational history;
7. AttentionDirector surfaces real thread but cannot mutate world;
8. player-caused economic event creates later contract opportunity.

## Exit

W12 is ready when opportunity-source schema, presentation forms, rumor propagation model, history provenance, AttentionDirector constraints and evaluation fixtures are versioned.
