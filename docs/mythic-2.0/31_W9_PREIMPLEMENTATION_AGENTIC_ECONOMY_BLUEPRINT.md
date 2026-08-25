# Mythic 2.0 — W9 Preimplementation Agentic Economy Blueprint

**Status:** LOCKED implementation blueprint

## Objective

Define the minimum economy capable of proving persistent business/household/trade causality plus sparse AI economic agency in the vertical slice and simulation harness.

## Minimum deterministic economy

Implement headlessly before broad world content:
- commodity/item stock;
- business inventory;
- production recipes;
- consumption needs;
- household income/expense;
- business cash flow;
- wages;
- rent/property obligations where applicable;
- supplier/customer links;
- road/route transport cost;
- local price pressure;
- transaction ledger;
- ownership and management;
- basic debt/claims;
- projects/investment;
- insolvency/closure;
- inheritance/succession hooks.

## EconomicIntentPacket

Versioned proposal fields should include:
- actor/business ID;
- knowledge basis;
- goal;
- action family;
- target entities;
- capital/resource ceiling;
- acceptable risk;
- expected time horizon;
- fallback;
- reason codes;
- confidence/ambiguity;
- provenance/model metadata.

Allowed action families initially:
- supplier_change;
- price_policy_change;
- hire_or_release;
- inventory_mix_change;
- purchase_or_sell_asset;
- invest_expand;
- relocate;
- borrow_or_repay;
- negotiate_contract;
- close_business;
- succession_strategy.

## Planning triggers

The scheduler evaluates triggers without AI. It calls the planner only when a threshold is met.

Examples:
- stockout duration;
- margin collapse;
- insolvency risk;
- supplier failure;
- route closure;
- new law/tax;
- owner death;
- unusual demand spike;
- player offer/threat;
- major competitor event;
- available expansion capital.

## Deterministic policy fallback

Every business has a simple non-LLM policy so the economy continues during provider outage:
- maintain target stock;
- prefer known profitable suppliers;
- adjust prices within bounded range to scarcity/cost;
- preserve solvency;
- reduce hiring/production under sustained loss;
- close only after defined thresholds or authoritative event.

## Vertical-slice economic proof

Glass Harbor should include at least:
- one persistent shop/business;
- named owner + one worker/apprentice;
- at least two supplier links;
- one route-sensitive commodity;
- one player-visible price/inventory effect from a world event;
- one owner/management transition fixture;
- one AI economic planning trigger;
- one negotiated contract/reward path;
- save/reload preservation.

## Required simulations

Batch-test:
1. route closure -> shortage -> price/inventory response;
2. supplier death/closure -> substitution attempt;
3. owner death -> succession candidate resolution;
4. demand spike -> expansion vs price response;
5. prolonged loss -> downsizing/closure;
6. player injects capital -> investment/project;
7. faction tariff -> route/supplier adaptation;
8. model unavailable -> deterministic fallback continuity.

## Metrics

Track:
- stockout frequency/duration;
- price volatility;
- business survival;
- substitution success;
- transaction volume;
- household affordability;
- planning calls per simulated year;
- model cost per business-year;
- invalid proposal rate;
- percentage of committed economic actions from deterministic policy vs model planning.

## Fun/readability rule

The player should notice economic consequences through play—changed prices, stock, ownership, jobs, routes and opportunities—not through a finance dashboard.

## Exit

W9 is ready for implementation when economy entities, transaction semantics, production/consumption rules, planning triggers, EconomicIntentPacket schema, fallback policies, simulations and metrics are fully versioned.
