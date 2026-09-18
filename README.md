# The Verifiable Evidence Standard

Public website and implementation artefacts for VES 1.2 Draft, stewarded by Veriscopic.

VES defines how the evidence, authority, governing conditions, system outputs and human judgement behind a consequential organisational decision can be preserved as a portable, independently verifiable decision-state.

## Development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm run typecheck
npm run build
```

The site is static-first. It has no database, authentication, upload path or server-side evidence storage. The `/verify` demonstration validates JSON structure in the browser and does not verify signatures or retrieve external evidence.

See [SCHEMAS.md](./SCHEMAS.md) for the public schema and test-vector semantics.

