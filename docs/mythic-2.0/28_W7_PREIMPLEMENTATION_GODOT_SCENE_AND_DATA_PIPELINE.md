# Mythic 2.0 — W7 Preimplementation Godot Scene and Data Pipeline

**Status:** LOCKED client integration blueprint

## Objective

Ensure Godot presents the game and supports rich native interaction without becoming a duplicate rules/world engine.

## Client layers

### Presentation scenes
- boot/login/campaign selection;
- world map;
- exploration/location scene;
- tactical encounter;
- Hero/party;
- inventory/equipment;
- journal/codex/world records;
- dialogue/interaction overlays;
- settings/accessibility.

### Client services
- API/session;
- projection cache;
- ordered-event reconciliation;
- local input mapping;
- local settings;
- asset registry/resolver;
- animation/VFX/audio dispatcher;
- optimistic preview service where safe;
- draft/free-intent preservation;
- telemetry/error reporting.

## Canon boundary

Godot may calculate previews for pathing, range, hover odds and visual targeting, but every committed action is validated by the server. Client previews derive from a known state basis and are corrected on authoritative response.

## Tactical scene data

Godot receives logical hex topology and authoritative public state. Render nodes bind to stable entity IDs. Screen nodes never become identity.

Systemic objects require an entity/feature ID. Decorative-only props must not falsely promise gameplay affordances.

## Asset recipes

Server/content projection provides semantic recipes/asset IDs, not arbitrary local file paths. Godot resolves them through a versioned asset registry.

Character visual recipes can vary by age, clothing, equipment, injury, faction and supernatural state while preserving actor identity.

## Animation contract

Canonical event -> presentation event mapping.

Examples:
- ActorMoved -> path animation;
- AttackResolved -> attack/impact sequence using authoritative result;
- ObjectDestroyed -> destruction state swap;
- MoraleChanged -> icon/audio/animation;
- ItemImprinted -> reward reveal/VFX;
- SettlementChanged -> world-map/local visual update.

Animation failure never prevents canonical reconciliation.

## Dice presentation

Dice visuals receive predetermined authoritative roll results and animate toward/show those results. Client-side visual dice do not generate canonical randomness.

## Provider outage behavior

If the game server is reachable but AI provider is unavailable, deterministic combat/UI remains usable. Semantic/free-intent actions expose retry/fallback without corrupting state.

Full offline campaign support is not assumed for initial production because authoritative persistent simulation and AI are server-backed.

## Save/reconnect

Local client stores only safe settings, drafts, last acknowledged event cursor and recoverable request metadata. Canonical campaign save remains server-side.

## Performance targets

- smooth 60 FPS target on supported desktop hardware;
- tactical input feedback immediate;
- no blocking model call during enemy animation/turn loop;
- large maps use chunking/culling/LOD where required;
- asset loading supports asynchronous prefetch and deterministic fallbacks.

## Accessibility

Native client supports remappable keyboard/gamepad, text scaling, reduced motion, animation speed, color-independent cues, subtitles/text-first narrative, readable focus states and alternatives to precision-only input.

## Exit

Before implementation, define scene/service ownership diagram, projection-to-node binding rules, asset-registry format, canonical-to-presentation event mapping, reconnect state machine and client-preview authority rules.
