# Mythic 2.0 — FP-09 Server, Data and Persistence Architecture

**Status:** LOCKED architectural baseline; exact hosting provider remains open

## Architecture stance

Use a **modular monolith + background worker**, not premature microservices.

Primary components: Godot client, authoritative API/runtime, background simulation worker, existing Supabase Pro Postgres, provider-neutral AI adapters and storage only where needed.

## Server runtime

Preferred greenfield stack is **ASP.NET Core / C#** on the current supported LTS .NET runtime at implementation start, with generated/shared player-safe contracts compatible with Godot .NET.

Existing TypeScript server code is migration input, not a dependency.

## Database

Use existing Supabase Pro Postgres as initial authoritative persistence. Supabase is infrastructure, not game authority. Godot never directly mutates canonical tables.

## Persistence model

Use a hybrid:

- append-only canonical event ledger for meaningful changes;
- normalized/current authoritative state tables for efficient simulation/query;
- snapshots/checkpoints for replay/recovery;
- player/viewpoint-safe read projections.

A committed command transaction atomically validates state/idempotency, resolves deterministic outcome, appends event(s), mutates current state, updates projection/checkpoint metadata, commits receipt/event range and publishes a post-commit notification.

## Identity

Canonical entities use immutable time-sortable IDs such as UUIDv7 where supported. IDs encode no mutable owner/faction/location meaning and survive aging, ownership, role, faction, visuals, tier promotion and player-control transfer.

## Ordering / Ledger Time

Each campaign has a monotonic event sequence plus canonical Ledger Time, version basis and integrity/checkpoint metadata.

Ledger Time is an integer duration from a campaign epoch; event sequence resolves ordering ties. Wall-clock time is operational metadata, not world chronology.

## Storage families

### Campaign/runtime
Campaigns, viewpoints/control, command receipts/idempotency, events, snapshots/checkpoints, projection versions.

### World entities
Persons, households, organizations/factions, settlements/districts/sites, structures/properties, businesses, offices/jobs, items/containers, resources, projects, routes/infrastructure, claims/rights/obligations.

### Graph/relations
Relationships, memberships, ownership/custody, kinship, employment, spatial containment, route edges, claims/obligations, hostility/alliance.

### Knowledge
Canonical facts/evidence, knowledge grants, beliefs/claims, memory episodes, provenance/confidence, viewpoint visibility.

### Simulation
Scheduled consequences, durable jobs, simulation tiers, materialization records, world-generation records and deterministic seeds/version metadata.

## Postgres/data-access policy

Use repository-controlled SQL migrations. Prefer explicit SQL plus Npgsql/Dapper-style data access for hot authoritative paths instead of hiding event/locking semantics behind a heavy ORM. Selective ORM use for simple admin/account data is acceptable.

## Command concurrency

Commands act against explicit campaign state/version. Postgres transactions/per-campaign concurrency prevent double mutation.

Required behavior:
- idempotency persisted before/with commit;
- duplicate key returns same result;
- same key/different payload rejected;
- stale basis rejected;
- unknown status resolved through receipt lookup;
- deterministic replay for recorded version/seed.

## Event ledger

Every event includes event ID, campaign ID, sequence, Ledger Time, type/version, causation/correlation where relevant, source command/event, deterministic metadata, canonical payload and rules/simulation/content version basis.

Events are immutable after commit. Corrections occur through new events/migrations.

## Domain invariants

All mutation goes through authoritative domain services. Examples: dead actors cannot take ordinary living actions; an item cannot have two exclusive custodians; routes cannot target nonexistent locations; child age derives from birth+Ledger Time; destroyed structures cannot operate normally; private knowledge cannot leak publicly. AI cannot bypass these checks.

## Simulation worker

Background worker handles locality/regional catch-up, projects, aging/materialization, economy/trade batches, faction consequences, settlement/infrastructure generation, semantic summaries/embeddings and deferred AI planning.

Durable jobs live in Postgres initially using a claim/lease pattern such as `FOR UPDATE SKIP LOCKED`; do not add Redis/queue infrastructure until measured need.

## Simulation triggers

World progression is primarily driven by **Ledger Time and canonical events**, not real-world time. An offline campaign does not consume simulation/AI budget by default. Long-inactive regions catch up deterministically when relevant.

## Knowledge/RAG

Structured canonical truth comes from structured state/query/projection services. RAG/vector search is never the sole source of truth.

Use pgvector/semantic retrieval for lore, relevant memories, narrative context and similar history. Knowledge projection filters all AI context to actor/viewpoint permissions.

## AI operational storage

Record task class, provider/model/version, template version, token/cost/latency, structured-output hash, validation status and cache usage. Canonical truth is the validated resulting event/data, not private model reasoning.

## Realtime transport

HTTPS handles commands/queries; an ordered WebSocket/equivalent channel delivers committed events with cursors, resume, heartbeat, gap detection and resync. The live channel is an optimization, not the ledger.

## Projections

Purpose-built projections serve strategic world, local scene, tactical encounter, Hero, inventory/equipment, journal/leads, relationships/factions and knowledge/dialogue. Cache/basis includes campaign, viewpoint, state sequence, knowledge basis and contract version.

## Authentication/security

Supabase Auth may supply account identity, while Mythic API remains authorization boundary. Never put service-role secrets in client or allow direct canonical writes. Validate all payloads, rate-limit AI-heavy routes, keep public/private projections separate and verify platform identity for future Steam integration.

## Backups/observability

Use Supabase Pro backups as baseline. Before commercial launch establish restore drills, migration policy, ledger integrity/rebuild and evaluate PITR. Instrument command latency, simulation backlog, AI cost/latency, DB contention, projection time, event gaps, replay failures, invalid AI proposals and player-facing failures.

## Hosting

Keep API/worker containerized and provider-portable; authoritative simulation should not depend on short serverless request limits. Initial host can be a modest always-on runtime near Supabase.

## Locked decisions

LOCKED: modular monolith + worker; C#/ASP.NET Core; Supabase Pro Postgres; server-only canonical writes; event ledger + current state; UUIDv7-style IDs; integer Ledger Time + event sequence; Postgres jobs before Redis; structured truth separate from RAG; knowledge-safe projections; HTTPS + ordered live events; containerized runtime; no wall-clock progression by default.

OPEN: exact .NET version at implementation, hosting vendor, final data-access details, live protocol library, PITR timing and long-term event archival/partitioning.

## Acceptance

A player can quit, reconnect elsewhere or transfer control to a successor and reconstruct the same world—people, ownership, injuries, routes, businesses, knowledge and history—from authoritative storage without relying on client memory or prompts.
