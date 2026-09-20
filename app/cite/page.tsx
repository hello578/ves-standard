import type { Metadata } from "next"
import { PageFrame } from "../components/page-frame"

export const metadata: Metadata = { title: "Cite VES", description: "Canonical citation and permanent-link rules for VES 1.2 Draft.", alternates: { canonical: "/cite" } }
export default function CitePage(){return <PageFrame eyebrow="Permanent reference" title="Cite VES" intro="Pin the version and draft status when referencing the standard, schema or a VES profile.">
  <h2>Current active version</h2><pre>{`Veriscopic. (2026-03-17). Veriscopic Evidence Standard (VES), Version 1.1. https://ves-standard-joox4w58c-veri-a9c52b37.vercel.app/`}</pre><p>VES 1.1 retains the name under which it was published. The dated deployment is its permanent public snapshot.</p>
  <h2>Recommended draft citation</h2><pre>{`Veriscopic. (2026-09-20). The Verifiable Evidence Standard (VES), Version 1.2 Draft. https://vesstandard.org/standard`}</pre>
  <h2>Short citation</h2><pre>{`The Verifiable Evidence Standard (VES) 1.2 Draft`}</pre>
  <h2>Schema identifiers</h2><pre>{`https://vesstandard.org/schemas/ves-decision-envelope-1.2-draft.schema.json
https://vesstandard.org/schemas/ves-external-evidence-object-1.2-draft.schema.json`}</pre>
  <h2>Version pinning</h2><p>Evidence packages, implementation statements and technical reviews should cite the exact VES version and applicable profile. VES 1.1 remains the current active, citable version. VES 1.2 Draft is published for implementation review and must be cited with its draft status.</p>
  </PageFrame>}
