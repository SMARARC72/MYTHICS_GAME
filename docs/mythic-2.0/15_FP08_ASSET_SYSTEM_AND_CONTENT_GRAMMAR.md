# Mythic 2.0 — FP-08 Asset System and Content Grammar

**Status:** LOCKED system architecture; final art style remains open

## 1. Asset premise

Mythic cannot rely on one-off scene art because the world can evolve for decades or generations. The production library must be **large, reusable, semantic and modular** so authoritative world changes can be represented consistently.

AI/simulation proposes semantic world state. Deterministic generation selects compatible art/assets. Art never creates canonical facts by itself.

## 2. Existing monster library

The product owner already has **800+ internally created monster assets**. This is treated as a major existing asset base, not a reason to purchase another broad creature catalog.

Before production use, audit/normalize each asset with:

- stable asset ID;
- provenance/rights;
- dimensions/style;
- species/creature family;
- tactical footprint/scale;
- facing/animation availability;
- portrait vs tactical suitability;
- biome/faction/culture tags;
- tactical role tags;
- variant/state information;
- prototype vs production status.

Tactical role taxonomy should include at least skirmisher, bruiser, tank, artillery, controller, support, ambusher, swarm, summoner, disruptor, assassin, morale predator, environmental threat and boss/elite.

## 3. Asset registry

Every production asset or modular family gets metadata for ID, source/creator, license/ownership, version, semantic tags, compatible states, dimensions, pivot/anchor, scale, animation/variant support, production status and fallback.

No unattributed third-party art enters release manifests.

## 4. Required library families

### World map
Terrain/biomes, roads, rivers, bridges, settlement scale states, ruins, forts, temples/mythic sites, faction overlays, weather/seasons, fog/knowledge, disaster/corruption and travel/trade markers.

### Local exteriors
Ground, roads/alleys/edges, walls/fences/gates, roofs/facades, market modules, docks, rural/industrial/civic/religious buildings, vegetation/water, rubble/damage and construction states.

### Interiors
Floors, walls, doors/windows/stairs, shelves, furniture, counters, workshops/forges, kitchens/storage, prison, temple, tavern/inn, shop fixtures, civic/bureaucratic fixtures and ruin/dungeon modules.

### Tactical systemic props
Movable crates/barrels, braziers/fire, oil/fuel, carts, pillars/supports, chandeliers, chains, doors/barricades, bridges/platforms, debris, cover, traps, machinery, magical devices, corpses and setting-appropriate vehicles. Systemic families require rules-relevant state variants.

### Human/near-human people
Modular or composited body/age/face/hair/clothing/profession/armor/weapon/faction/wealth/injury/supernatural-state layers as the art direction allows. Persistent people retain visual identity across age and role changes.

### Equipment/items
Weapons, armor, shields, tools, consumables, valuables, evidence, artifacts, crafting/trade goods.

### UI/mechanics
Coherent bespoke icons/visual language for abilities, skills, damage types, conditions, Morale, Exertion, Fate, Mantles, initiative, AP, equipment, factions, objectives, maps and interactions.

### VFX/audio-linked visuals
Impacts, projectiles, damage, elemental effects, smoke/fire/water/weather, statuses, healing, mythic powers, destruction, discovery/XP/level and UI critical/confirmation feedback.

## 5. Semantic generation grammar

World generation operates on semantic descriptors, not raw sprite filenames. Example settlement descriptor can include scale, biome, culture family, wealth, security, controller/faction, damage/recovery state, age and district purposes.

Generation maps descriptors to compatible tile/building/prop/faction families.

The LLM may propose semantic descriptors; it does not directly place arbitrary canonical sprites.

## 6. Settlement grammar

Settlement composition uses terrain/topology constraints, entrances/road graph, district graph, lots, civic/market anchors, residences, industry/businesses, religion/mythic anchors, defenses, decoration/vegetation, systemic objects and population/business assignment.

Settlement identity persists. Expansion adds districts/lots/roads. Destruction changes states/removes structures. Reconstruction transforms existing entities. Faction capture changes control/guards/markings without replacing the city with an unrelated one.

## 7. Building grammar

Buildings have stable structure identity and semantic type/state: dwelling, smithy, bakery, inn, stall, warehouse, temple, government office, barracks, manor, workshop, etc.

Visual composition can express culture, wealth, age, condition, owner/faction, business type, occupancy, construction, damage/repair and season/weather.

## 8. Business visual continuity

Business identity is independent from owner identity. Ownership change can alter sign/name, owner portrait, inventory/staff, faction markings and prosperity while retaining the same underlying business/structure unless canonical events change them.

## 9. Character visual continuity

Persistent persons store a stable visual seed/profile plus canonical overrides. Age, hairstyle/clothing, profession, wealth, faction, equipment, injury/scars and supernatural changes update descriptors without rerolling the person as a new random visual.

## 10. Modular variation

Prefer art-directed combinatorics rather than linear one-off asset growth: roof/wall/door/window modules, signs, clutter, damage overlays, banners, prosperity and seasonal layers; compatible human body/face/hair/clothing/equipment composition where style supports it.

Randomization is constrained by compatibility/culture/state rules.

## 11. Cosmetic vs systemic

**Cosmetic** visuals may vary locally when they have no gameplay meaning.

**Systemic** visuals represent authoritative entities/features with stable identity/properties.

Free intent cannot convert arbitrary decoration into an interactable object unless a validated materialization process explicitly creates a systemic entity.

## 12. Destruction/state changes

Do not require continuous physics destruction for every object. Use authored rules-relevant states such as pristine, worn, damaged, heavily damaged, destroyed, burning and rebuilt/repaired where useful. Canonical rules choose state; client selects visual variant.

## 13. Art consistency

Open/CC0 assets can accelerate prototype work, but commercial output cannot look like unrelated packs. Production locks must eventually define perspective, render/outline style, palette behavior, tile/character scale, lighting/shadows, portrait style, UI material language and VFX language.

Existing monster assets are audited against that direction; incompatible assets are reworked/reference-only rather than forcing inconsistent art.

## 14. Production priority

0. Audit/normalize 800+ monsters.
1. Coherent Drowned Archive local/tactical environment family.
2. Core human modular family + hero/major NPC portraits.
3. Tactical systemic props/weapons.
4. UI/icons/VFX coherence.
5. One world-map biome/settlement family.
6. Broader biomes/cultures only after vertical-slice fun passes.

## 15. Toolchain

Prefer Godot import tooling plus low-cost/free tools such as Aseprite when appropriate, Krita, Blender and custom validation/registry automation. Do not make a costly proprietary tool mandatory for runtime reproducibility without explicit approval.

## 16. Automated validation

CI/import tools should detect missing provenance/license, duplicate IDs, missing fallbacks, invalid dimensions/pivots, missing systemic states, broken semantic tags, unavailable references and prototype-only assets accidentally included in release manifests.

## 17. Cost strategy

Because creature breadth already exists, early bespoke spend should concentrate on the gaps players perceive most strongly: environments, human characters/portraits, systemic props, UI, VFX and world map.

Do not spend heavily on broad art before the core game loop is externally validated.

## 18. Locked decisions

LOCKED: semantic modular architecture; provenance registry; systemic/cosmetic separation; audit existing monsters first; stable person visual identity; settlement/building/business transformation instead of wholesale regeneration; AI semantic proposal + deterministic asset resolution; coherent production style; breadth after vertical-slice proof.

OPEN: final visual perspective/style, tile resolution, exact modular-human method, animation counts and final contractor budget.

## 19. Acceptance

A changed shop owner, aging NPC, damaged bridge, rebuilt district, faction takeover, new settlement and tactical environmental object must all be representable by semantic state + compatible reusable assets without requiring a one-off illustration for every event.
