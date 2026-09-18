import type { Metadata } from "next"
import { PageFrame } from "../components/page-frame"
import { namingClarification } from "@/lib/site"

export const metadata: Metadata = { title: "Changelog", description: "Version history and dated changes to the Verifiable Evidence Standard.", alternates: { canonical: "/changelog" } }
export default function ChangelogPage(){return <PageFrame eyebrow="Version history" title="Changelog" intro="Material changes are dated, versioned and preserved so implementers can identify the semantics that applied to an evidence package." toc={[{id:"v12",label:"1.2 Draft"},{id:"naming",label:"Naming"},{id:"policy",label:"Policy"}]}>
  <h2 id="v12">VES 1.2 Draft — 18 September 2026</h2><ul><li>Introduced the public VES Decision Envelope and External Evidence Object wrapper.</li><li>Defined six separate verification dimensions.</li><li>Established Verified, Qualified, Incomplete, Indeterminate and Failed result statuses.</li><li>Renamed the level model to Decision-Evidence Maturity.</li><li>Published Draft 2020-12 schemas and fictional claims-referral test vectors.</li><li>Clarified the boundary between runtime evidence and a complete consequential decision-state.</li><li>Removed certification marks and legal-admissibility claims from the public model.</li></ul>
  <h2 id="naming">Naming clarification — September 2026</h2><div className="callout">{namingClarification}</div>
  <h2 id="policy">Change policy</h2><p>Major versions may change required public semantics. Minor versions may add compatible fields, profiles or definitions. Patch versions correct errors without changing intended semantics. Draft versions may change before stabilisation and should always be cited with the draft label.</p>
  </PageFrame>}

