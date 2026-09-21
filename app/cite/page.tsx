import type { Metadata } from "next"
import { PageFrame } from "../components/page-frame"

export const metadata: Metadata = { title: "Cite VES", description: "Canonical citation and permanent-link rules for VES 1.2.", alternates: { canonical: "/cite" } }

export default function CitePage(){return <PageFrame eyebrow="Permanent reference" title="Cite VES" intro="Identify the exact VES version and applicable profile when referencing the standard, schema or an evidence package.">
  <h2>Current published version</h2><pre>{`Verifiable Evidence Standard, VES 1.2, stewarded by Veriscopic, published 21 September 2026, available at https://vesstandard.org/1.2.`}</pre><p>VES 1.2 is the current published version and its canonical identifier is <a href="https://vesstandard.org/1.2">https://vesstandard.org/1.2</a>.</p>
  <h2>Short citation</h2><pre>{`VES 1.2, Veriscopic, 2026.`}</pre>
  <h2>Schema identifiers</h2><pre>{`https://vesstandard.org/schemas/ves-decision-envelope-1.2.schema.json
https://vesstandard.org/schemas/ves-external-evidence-object-1.2.schema.json`}</pre>
  <h2>Version pinning</h2><p>Evidence packages, implementation statements and technical reviews should identify the exact VES version and applicable profile. <a href="https://veriscopic.com">Veriscopic</a> is the steward of the published standard.</p>
  </PageFrame>}
