# MYTHICS_GAME

Implementation repository for the **Mythic Superhero RPG Platform**.

## Current control state

- Product planning: complete and approved
- Pre-engineering specification: complete and approved
- Frontend UX/UI: complete and approved
- Clean-session implementation: authorized; protected-preview candidate implemented
- Production deployment and public release: closed
- Design workflow: Figma-free

The repository contains the complete checksum-controlled Codex handoff under:

`docs/implementation-handoff/v1.0/`

Start with:

1. [`AGENTS.md`](AGENTS.md)
2. [`docs/implementation-handoff/v1.0/README_FIRST.md`](docs/implementation-handoff/v1.0/README_FIRST.md)
3. [`docs/implementation-handoff/v1.0/SOURCE_PRECEDENCE.md`](docs/implementation-handoff/v1.0/SOURCE_PRECEDENCE.md)
4. [`docs/implementation-handoff/v1.0/00_START_HERE/CODEX_EXECUTION_PROMPT.md`](docs/implementation-handoff/v1.0/00_START_HERE/CODEX_EXECUTION_PROMPT.md)

## Handoff integrity

The checksum ledger and embedded package archives remain available for optional
integrity diagnostics. They are not a pre-mutation implementation gate.

The source archive is also retained in `release-bundles/` for clean-session transfer or independent verification.

## Run the protected preview

```bash
npm install
npm run dev
```

Open `http://localhost:3000/campaign/glass-harbor/stage`. The implementation
includes all fourteen approved route families, pinned C1–C3 contract sources,
deterministic service fakes, generated schema registration, and automated
contract, architecture, accessibility, route, and production-build checks.

The Drowned Archive Stage is also a playable local vertical slice: free-form
goal and method input are interpreted into a correctable proposal, confirmed
through an idempotent authoritative campaign service, resolved with seeded
dice, and returned as a recorded receipt. The local preview keeps canonical
content and private NPC knowledge server-side while IndexedDB retains only
draft and recovery workflow data. See the full engineering plan in
[`docs/engineering/PLAYABLE_VERTICAL_SLICE_PLAN.md`](docs/engineering/PLAYABLE_VERTICAL_SLICE_PLAN.md).

Run the complete local verification sequence with:

```bash
npm run check
npm run test:contracts
npm run test:e2e
```

## Authorization boundary

Repository inspection and non-mutating diagnostics are allowed. Construction begins only after the product owner provides the exact authorization required by `AGENTS.md` and the implementation-authorization record.

That authorization targets a tested protected-preview candidate. It does not authorize production deployment, public release, paid providers, destructive production mutations, comic publication, rights/canon clearance, or bypassing a failed gate.
