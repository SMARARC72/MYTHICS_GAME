# Mythic 2.0 — W4 Preimplementation Balance Tooling and Content Pipeline

**Status:** LOCKED tooling blueprint

## Objective

Build the project so designers/Codex can add monsters, items, encounters and environments without embedding balance logic or semantic meaning directly in Godot scenes.

## Required tools

### 1. Monster normalizer
Import the 800+ internal monster assets into a registry capturing asset ID/path/provenance, creature family, visual footprint, animation/facing state, biome/culture tags, physiology, tactical role(s), movement modes, threat band, signature mechanic slots, render scale and portrait/token suitability.

### 2. Tactical content validator
Validate monster/item/power records for missing IDs, illegal primitives, tier/budget violations, incompatible tags, impossible animation/asset references, missing tactics profile and missing counterplay metadata.

### 3. Battle simulator
CLI/headless runner for thousands of seeded fights with CSV/JSON output and deterministic replay fixtures.

### 4. Item forge simulator
Generate large batches of legal synthetic UniqueItemProposal fixtures without calling production APIs, validate budgets and measure mechanical diversity.

### 5. Intent benchmark harness
Run captured/local model fixtures and optional live-provider evaluations against the permanent grounded-intent set. Track grounding accuracy, hallucination rate, clarification rate, latency and cost.

### 6. Asset grammar previewer
Preview environment, character, item and faction semantic recipes without needing a hand-authored full map.

## Data ownership

Game data lives outside Godot scenes where practical. Godot consumes validated registries/recipes and uses scenes/resources for presentation/runtime composition.

## CI expectations

Every content PR should be able to run schema validation, deterministic unit tests, combat smoke simulations, effect-budget validation, asset-reference validation, hidden-knowledge checks and golden contract fixtures.

Large Monte Carlo balance batches may run nightly/on demand rather than every commit.

## Balance versioning

Separate stable mechanic semantics from versioned tuning tables. Every committed mechanical event stores the rules/tuning versions used so later rebalancing does not rewrite campaign history.

## Cost benchmarking

Live model benchmarks are opt-in CI jobs with explicit budget caps. Normal CI uses captured fixtures/test doubles and incurs no API cost.

## Exit

Before implementation breadth, define named schemas/formats for monster registry, tactics profile, effect primitives, tuning tables, asset recipe, intent benchmark and battle-simulation report.
