# Mythic 2.0 — FP-07 Godot Native Client Architecture

**Status:** LOCKED architecture target

## 1. Target

Mythic 2.0 is a native desktop/Steam-first game. The production client is **Godot 4 .NET/C#**. The client is never canonical authority; it renders viewpoint-safe server projections, gathers player intent, previews legal possibilities and presents committed events.

Windows is first production target, with Linux/macOS seams preserved.

## 2. Why C#/.NET

Native-only removes the Godot web/C# constraint. C# is preferred for this stateful, contract-heavy project because it provides strong typing, mature .NET libraries/tooling, shared language with the ASP.NET backend, testability and easier generated-contract reuse.

GDScript remains acceptable for isolated editor/tool scripts only when it creates clear value; gameplay authority should not split across languages casually.

## 3. Client boundaries

Godot owns:

- rendering and animation;
- input/controller/keyboard/mouse;
- cameras and visual map composition;
- UI/HUD/Hero/World screens;
- audio/VFX;
- local deterministic previews;
- temporary draft/pending-command/settings storage;
- projection reconciliation.

Godot does **not** own:

- canonical world truth;
- authoritative dice;
- final combat legality;
- HP/inventory/ownership mutation;
- world simulation;
- AI world creation;
- hidden knowledge;
- authoritative saves.

## 4. Project structure

Recommended client structure:

```text
client/godot/
  Bootstrap/
  Core/
  Contracts/
  Networking/
  Projections/
  Commands/
  WorldMap/
  LocalWorld/
  Tactical/
  Characters/
  UI/
  Assets/
  Audio/
  VFX/
  Settings/
  Accessibility/
  Platform/
  Tests/
```

## 5. Core services

Autoload/service layer should include SessionService, ApiClient, EventStreamClient, ProjectionStore, CommandCoordinator, SceneRouter, InputService, AssetRegistry, Audio/Vfx service, SettingsService, AccessibilityService and Platform/Steam adapter.

Services coordinate presentation; they do not become a second rules engine.

## 6. Transport

Use HTTPS for commands/queries and an ordered live event channel (WebSocket or equivalent) for committed events/updates.

Every authoritative request carries campaign/viewpoint identity, contract version, expected state basis where needed, command/idempotency identity and correlation data.

The client must preserve pending command identity before send and resolve unknown commit status before retry.

## 7. Generated contracts

The Godot client consumes generated/versioned C# DTOs from the shared contract source. Incoming payloads are runtime validated at trust boundaries.

Do not hand-maintain duplicate domain models in the client when generation/shared immutable DTOs are practical.

## 8. Three primary play modes

### World
Strategic world map for travel, discovery, routes, settlements, faction/topology state and time/world consequences.

### Local
2D city/site/dungeon exploration with people, structures, systemic objects, interaction and free intent.

### Encounter
Hex-grid tactical combat with AP/Reaction mechanics, initiative, cover/LOS/elevation, objectives and environmental Stunts.

Transitions are game modes, not separate applications.

## 9. Spatial representation

Use Godot `TileMapLayer`/`TileSet` or current equivalent for reusable local/world tile composition and visual/collision/occlusion metadata.

Canonical spatial identity remains logical: stable entity IDs + hex/grid/world topology.

For tactical pathing, maintain an explicit weighted logical hex graph / A* representation rather than making rendered tiles the sole authority. Client path previews are advisory; server validates committed movement.

## 10. Hex coordinates

Tactical cells use stable logical coordinates (axial/cube or another explicitly documented representation). Pixel position is derived presentation data.

All movement, targeting, cover, area effects and object anchors ultimately refer to logical cell/entity IDs.

## 11. Asset resolution

Server projections use semantic visual descriptors and asset-family/state IDs, not arbitrary local file paths as canonical truth.

The client AssetRegistry resolves semantic descriptors to installed sprites/tiles/portraits/VFX/fallbacks. This allows art replacement without rewriting world history.

## 12. Systemic objects

An interactable environmental object exists because the authoritative projection provides a stable systemic entity/feature. A decorative sprite is not automatically targetable.

Godot can highlight/inspect systemic objects, but the server owns object capabilities, condition and committed mutation.

## 13. Presentation reconciliation

Animations may begin from known committed events, but visual prediction never permanently diverges from the authoritative projection. On conflict/reconnect/event gap, pause mutation and reconcile/resync.

## 14. Dice presentation

Dice visuals animate predetermined authoritative results. They never create canonical randomness client-side.

Support compact routine rolls, high-emphasis critical/important rolls, optional breakdown and reduced-motion alternatives.

## 15. UI architecture

The UI must read as a game, not desktop software. Primary navigation remains Play/Hero/World conceptually, while Play transitions between World, Local and Encounter.

Use game-material framing, portraits, equipment icons, maps, initiative/AP/HP/mechanics, concise narrative/dialogue and contextual free-intent input. Avoid equal-weight card dashboards.

## 16. Accessibility

Native Godot means accessibility can no longer rely on HTML semantics. Explicitly engineer keyboard/controller focus, remapping, scalable text/UI, high contrast, non-color cues, reduced motion/flashing, subtitle/narrative readability, input alternatives and screen-reader strategy where technically feasible.

Accessibility settings are local/profile data unless a server account sync is explicitly added.

## 17. Local persistence

Godot may persist settings, accessibility preferences, cached projections, drafts, pending command metadata, event cursor and optional downloaded asset/cache state.

Canonical campaign state remains server-side.

## 18. Steam/platform seam

Steamworks integration stays behind a Platform adapter. Do not entangle gameplay with one wrapper/plugin. Expected future features include achievements, cloud/settings integration where appropriate, rich presence, overlay/friends hooks if useful and build/depot metadata.

## 19. Performance

Target stable 60 FPS on ordinary supported desktop hardware. AI/network/database work never blocks the render thread. Large worlds use streaming/chunking/culling and semantic LOD; only current/relevant entities are fully instantiated in a scene.

## 20. Testing

Client tests cover projection parsing, command state machines, unknown-status recovery, event gap/resync, hex coordinate transforms, path-preview consistency, asset fallback/provenance, systemic-vs-cosmetic interaction, controller/keyboard navigation and scene transition state.

Headless server rules remain separately testable without Godot.

## 21. Lock

LOCKED: Godot 4 .NET/C#; native Windows-first; server authority; generated contracts; World/Local/Encounter modes; explicit logical spatial graph; semantic asset registry; presentation-only dice/random visuals; platform adapter; native accessibility work; no client canonical save.

OPEN: final stable Godot patch at bootstrap, exact Steam integration library, art perspective, exact scene hierarchy/naming, renderer-specific optimizations.
