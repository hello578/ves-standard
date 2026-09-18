import type { Metadata } from "next"
import { PageFrame } from "../components/page-frame"
import { namingClarification, verificationDisclaimer } from "@/lib/site"

export const metadata: Metadata = { title: "Governance", description: "Stewardship, version policy and public change process for VES.", alternates: { canonical: "/governance" } }
export default function GovernancePage(){return <PageFrame eyebrow="Stewardship" title="Governance of VES" intro="VES is stewarded by Veriscopic. Governance is designed to preserve technical clarity, public version history and an implementation-neutral standard." toc={[{id:"stewardship",label:"Stewardship"},{id:"changes",label:"Change process"},{id:"versions",label:"Version policy"},{id:"participate",label:"Participate"},{id:"boundary",label:"Boundary"}]}>
  <h2 id="stewardship">Stewardship</h2><p>Veriscopic maintains the public specification, schemas, profiles, examples, change history and citation rules. Stewardship does not imply that every implementation, evidence package or decision has been reviewed by Veriscopic.</p>
  <h2 id="changes">Public change process</h2><ol><li>Material proposals are recorded with their rationale and affected public semantics.</li><li>Draft changes are versioned and published for review before being described as stable.</li><li>Breaking changes require a new major version; compatible additions require a minor version.</li><li>Corrections that do not change meaning may be published as patch revisions.</li><li>Historical versions remain identifiable and citable.</li></ol>
  <h2 id="versions">Version and naming policy</h2><p>{namingClarification}</p><p>Published evidence packages should pin the applicable VES version. Historical names and version records are preserved rather than silently rewritten.</p>
  <h2 id="participate">Working-group interest</h2><p>Insurance operators, assurance leaders, architects and technical reviewers may register interest in future public review and working-group activity by contacting <a href="mailto:standards@veriscopic.com">standards@veriscopic.com</a>. No members, endorsements or adoption claims are implied.</p>
  <h2 id="boundary">Verification boundary</h2><div className="callout callout-warning">{verificationDisclaimer}</div><p>Public governance also protects private implementation methods. VES does not publish Veriscopic capture orchestration, completeness-scoring algorithms, authority-resolution rules, reconciliation logic, State Comparison mechanics, Declared Validity logic or learning-loop mechanics.</p>
  </PageFrame>}

