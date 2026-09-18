import type { Metadata } from "next"
import { PageFrame } from "../components/page-frame"
import { envelopeComponents, resultStatuses, verificationDimensions } from "@/content/standard"
import { StatusPill, type VerificationStatus } from "../components/status-pill"
import { TechnicalStructuredData } from "../components/technical-structured-data"

export const metadata: Metadata = { title: "Specification", description: "The public VES 1.2 Draft Decision Envelope, Evidence Object and verification model.", alternates: { canonical: "/specification" } }

export default function SpecificationPage() {
  return <><TechnicalStructuredData path="/specification" title="VES 1.2 Draft specification" description="The public VES Decision Envelope, External Evidence Object and verification result model." terms={["Decision identity","Business authority","Structural completeness","Replayability"]}/><PageFrame eyebrow="Technical specification" title="VES 1.2 Draft specification" intro="The public data model for preserving and assessing a consequential decision-state. Normative key words indicate requirements for the stated VES profile." toc={[{id:"envelope",label:"Decision Envelope"},{id:"evidence",label:"Evidence Object"},{id:"verification",label:"Verification"},{id:"statuses",label:"Statuses"},{id:"extensions",label:"Extensions"}]}>
    <div className="callout">This specification is implementation-neutral. It defines the public exchange surface, not proprietary capture, scoring, reconciliation or authority-resolution methods.</div>
    <h2 id="envelope">1. VES Decision Envelope</h2><p>A VES Decision Envelope MUST identify one consequential organisational commitment and bind the evidence relevant to understanding it at a declared point in time.</p><div className="definition-grid">{envelopeComponents.map((item)=><article key={item.key} className="definition-card"><span>{item.key}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
    <h3>Required top-level fields</h3><table className="spec-table"><thead><tr><th>Field</th><th>Type</th><th>Semantics</th></tr></thead><tbody>{[["ves_version","string","Pinned standard version."],["decision_id","UUID","Opaque decision identifier."],["decision_type","string","Namespaced decision classification."],["decision_timestamp","date-time","Organisational commitment time."],["decision_subject","object","Opaque reference; no personal data required."],["outcome","object","Declared outcome and commitment."],["profile","string","Profile against which the package is assessed."],["evidence","array","Wrapped native Evidence Objects."],["verification","object","Declared checks, status and limitations."],["extensions","object","Namespaced implementation extensions."]].map((row)=><tr key={row[0]}>{row.map((cell)=><td key={cell}>{cell}</td>)}</tr>)}</tbody></table>
    <h2 id="evidence">2. External Evidence Object</h2><p>Each input is wrapped with sufficient information to understand what it is, where it came from, when it applies, how integrity may be checked, and how it relates to the decision. The wrapper does not replace or reinterpret the native evidence format.</p><pre>{`{
  "evidence_id": "018f0d4e-7b3a-7c11-a75f-3d13ec33a001",
  "type": "runtime_receipt",
  "source": { "system": "example-workflow", "standard": "external.runtime.receipt", "standard_version": "1.1", "issuer": "issuer.example" },
  "captured_at": "2026-09-18T10:15:30Z",
  "applicability": { "from": "2026-09-18T00:00:00Z", "to": null },
  "integrity": { "algorithm": "sha-256", "digest": "sha256:REDACTED" },
  "decision_relation": "produced_by",
  "limitations": ["Does not establish business authority"]
}`}</pre>
    <h2 id="verification">3. Verification dimensions</h2><div className="dimension-grid">{verificationDimensions.map(([title,description],index)=><article key={title} className="dimension-card"><span>0{index+1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
    <h2 id="statuses">4. Result statuses</h2><p>Statuses assess a submitted package against its stated profile. They are not ratings of an insurer, product, person, vendor or decision outcome.</p><div className="status-grid">{resultStatuses.map(([status,description])=><article key={status} className="status-card"><StatusPill status={status as VerificationStatus}/><h3>{status}</h3><p>{description}</p></article>)}</div>
    <h2 id="extensions">5. Versioning and extensions</h2><p>Implementations MUST pin the applicable VES version. Extension keys MUST use a controlled namespace such as <code>org.example.claims</code>. Extensions MUST NOT alter the meaning of normative VES fields or be required to interpret the base envelope.</p>
  </PageFrame></>
}
