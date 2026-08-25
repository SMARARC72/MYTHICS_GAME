# Mythic Dynamic World Asset and Generation Architecture

## Purpose

Mythic's AI may not contradict current canonical reality, but it may create **new canonical reality** when that creation is causally justified by player actions, autonomous actor behavior, faction plans, world simulation, mythic events, or elapsed Ledger Time.

A new city, settlement, ruin, faction outpost, battlefield scar, road, shrine, dungeon entrance, neighborhood, rebuilt district, refugee camp, or transformed biome must enter the world through an authoritative world-generation workflow. The AI may propose and compose; the server validates, commits, persists, versions, and exposes the result.

The game therefore requires a large reusable 2D asset library and a semantic composition system capable of rendering an evolving world without requiring handcrafted art for every generated location.

## Core invariant

> The AI may author future world state only through valid world-generation actions. Once committed, generated state is canonical and cannot be casually rewritten by narration.

Examples:

- A faction founds a fortified town after controlling a trade route for long enough.
- Refugees establish a camp that grows into a settlement.
- A destroyed district becomes ruins, then is rebuilt under a new faction aesthetic.
- A god's intervention transforms terrain and creates a shrine or hazard zone.
- A player's repeated support causes an outpost to expand into a regional hub.
- A war destroys roads and settlements, leaving visible scars and abandoned structures.

Invalid example:

- The narrator invents a nearby city solely because it would be convenient for the current scene.

## Generation authority pipeline

```text
world simulation / player consequence / actor plan
        -> generation trigger
        -> AI/world designer proposal
        -> semantic world specification
        -> rules + topology + canon validation
        -> asset grammar selection
        -> deterministic/procedural composition
        -> authoritative commit
        -> event ledger
        -> client projection
        -> Godot scene/map composition
```

The AI produces structured proposals, not raw unbounded scene descriptions.

## Semantic world specification

Generated places should be represented as structured data before visual assembly.

Minimum place schema concepts:

- stable place ID
- place type: city, village, camp, fort, ruin, shrine, dungeon, district, road node, wilderness site, etc.
- parent region / coordinates / topology
- founding cause and event provenance
- Ledger Time created / transformed
- controlling faction and disputed control
- population band
- wealth / supply / security / danger bands
- cultural/mythic tags
- biome/climate
- architectural grammar
- infrastructure requirements
- named districts/landmarks
- connections / roads / gates / waterways
- services / merchants / institutions
- hidden and public facts
- persistent object/entity seeds
- visual grammar ID
- generation seed
- asset-pack/version references
- destruction/degradation/rebuild state

## Asset architecture

Assets must be semantic and composable rather than treated only as finished maps.

### World-map assets

- biome tiles
- coastlines and rivers
- mountains/hills
- forests/vegetation
- roads/trails
- bridges
- settlement markers by size/type
- ruins
- shrines/temples
- faction overlays/banners
- supernatural zones
- weather overlays
- destruction/scar overlays
- map labels/icons

### Settlement/city assets

- streets and intersections
- walls/gates
- building footprints
- roofs
- modular facades
- doors/windows
- towers
- docks
- markets
- temples
- civic structures
- slums
- industrial structures
- farms
- plazas
- alleys
- rubble/fire/damage states
- faction decorations
- props and clutter

### Interior assets

- floors/walls
- doors/windows
- stairs
- furniture
- shelving
- storage
- lighting sources
- religious objects
- industrial/workshop props
- traps/hazards
- damage states
- environmental storytelling props

### Tactical/environment objects

Every potentially systemic prop requires semantic metadata separate from its sprite:

- object type
- mass
- material
- dimensions / occupied cells
- cover class
- flammability
- structural integrity
- movable / liftable / pushable / climbable / breakable flags
- attachment/anchoring
- traversal effect
- hazard potential
- inventory conversion if collectible
- interaction verbs/capabilities

Visual presence alone does not grant systemic existence. A decorative sprite may be non-interactive; a canonical object must have an authoritative entity record.

### Character system

Use modular character assembly to support evolving NPC populations and persistent characters:

- body/archetype
- skin tone
- hair/head
- facial features
- clothing layers
- armor
- weapons
- accessories
- faction marks
- supernatural traits
- injuries/scars
- status overlays
- portrait composition
- tactical sprite/token composition

Persistent named characters receive stable appearance seeds and asset manifests so they remain visually consistent across sessions and transformations.

## Asset grammar system

Do not let the AI select arbitrary filenames directly.

Use curated semantic grammars such as:

- `architecture.mythic_greek_urban`
- `architecture.industrial_harbor`
- `architecture.fortified_frontier`
- `architecture.refugee_camp`
- `architecture.ares_occupation`
- `interior.archive_flooded`
- `biome.coastal_temperate`

Each grammar maps semantic roles to approved asset families, palettes, adjacency rules, density ranges, allowed props, faction variants, and damage states.

Example:

```text
city proposal
  culture = hellenic-modern
  controller = Sons of Ares
  wealth = low
  security = high
  damage = recent-war

-> grammar selects
   road family A
   dense masonry building modules
   military barricades
   Sons of Ares banners
   damaged roof variants
   sparse civilian market props
   patrol NPC archetypes
```

The AI chooses semantic intent; generation code chooses validated assets.

## Procedural composition

The same canonical place must regenerate identically from its seed, grammar version, and committed specification unless a later world event modifies it.

Persist:

- generation seed
- grammar version
- asset-library version
- generated layout/topology where necessary
- object IDs and coordinates

Regeneration must not reshuffle a city every time it loads.

## Evolution model

Places need explicit transformation operations rather than total regeneration.

Examples:

- `settlement_expand`
- `district_destroy`
- `district_rebuild`
- `faction_occupy`
- `road_construct`
- `road_destroy`
- `shrine_manifest`
- `biome_corrupt`
- `camp_upgrade`
- `fortify`
- `abandon`

Transformations preserve unaffected geography and object identity.

A town founded on Day 12 may become a fortified city on Day 187 while remaining the same canonical place.

## Asset provenance

Every imported third-party asset family must be registered with:

- source URL
- author
- license
- attribution requirement
- import date
- source version
- semantic categories
- allowed modification
- prototype/production status

Prefer CC0 or permissive assets for the reusable composition library.

## Initial open asset sources

Current useful CC0 sources identified for prototyping include:

- Kenney Roguelike/RPG Pack: ~1,700 RPG/town/furniture assets.
- Kenney RPG Urban Pack: 480+ city/road/building assets plus directional characters.
- Kenney Map Pack: 180 overworld/map assets.
- Kenney RPG Base: 230 RPG tiles.
- Kenney Modular Characters: 425 modular character assets.
- Kenney Roguelike Characters: 450 character assets.
- Kenney Medieval RTS: 120 settlement/building assets.
- OpenGameArt CC0 RPG, open-world, city and modular tilesets as vetted individually.

These are prototype/coverage sources. Production art direction must unify palette, scale, perspective, silhouette and Mythic identity rather than ship an inconsistent collage.

## Production art strategy

Long term, build a proprietary Mythic master library with reusable modules rather than one-off scenes.

Priority art families:

1. overworld/region terrain
2. roads/rivers/coasts
3. settlement architecture families
4. dungeon/interior families
5. props/systemic objects
6. modular characters
7. creatures/enemies
8. faction visual languages
9. powers/VFX
10. destruction/transformation variants

The highest-value commissioned art is modular source art that multiplies across procedural combinations.

## Godot requirements

Godot should receive a public world projection containing semantic place/entity data plus asset grammar IDs and committed layout information. The Godot client may assemble visual scenes from approved local assets, but it must not invent canonical places or objects.

Godot may generate cosmetic-only detail locally when explicitly marked non-canonical and non-interactive, such as harmless debris variation, ambient particles, or foliage jitter. Cosmetic generation may never create a gameplay affordance.

## Acceptance tests

1. A faction event creates a new settlement through the server generation pipeline.
2. The generated settlement receives a stable ID, seed, topology, faction, landmarks, and asset grammar.
3. Godot renders the settlement from reusable assets.
4. Reloading reproduces the same settlement.
5. A later world event expands or damages the settlement without replacing unrelated areas.
6. Named NPCs retain visual identity as the settlement evolves.
7. Interactable objects correspond to authoritative object records.
8. Cosmetic-only sprites cannot be referenced as valid gameplay entities.
9. The AI cannot introduce a location without a valid generation event.
10. A generated location becomes fully canonical after commit and participates in travel, factions, economy, quests, encounters and future simulation.
