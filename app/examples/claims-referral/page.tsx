import type { Metadata } from "next"
import Link from "next/link"
import { PageFrame } from "../../components/page-frame"
import { VerificationResult, type DimensionResult } from "../../components/verification-result"
import exampleResult from "@/public/examples/claims-referral-qualified-result.json"

export const metadata: Metadata = { title: "Claims Referral Example", description: "A fictional delegated claims-referral VES Decision Envelope and Qualified verification result.", alternates: { canonical: "/examples/claims-referral" } }
const timeline=[["10:10","Claim context fixed","A redacted context snapshot is referenced."],["10:11","Conditions identified","Versioned fictional wording and referral rules are linked."],["10:15","Workflow threshold reached","A runtime receipt records the system contribution."],["10:21","Human review completed","An opaque reviewer role approves escalation."],["10:22","Referral committed","The organisational outcome becomes effective."]]
export default function ClaimsReferralPage(){return <PageFrame eyebrow="Fictional worked example" title="Delegated claims referral" intro="A fictional referral demonstrates how source evidence, governing conditions, system contribution and human judgement can be linked without exposing customer or policy data." toc={[{id:"scenario",label:"Scenario"},{id:"replay",label:"Replay view"},{id:"result",label:"Result"},{id:"downloads",label:"Downloads"}]}>
  <div className="callout">All identifiers, issuers and references in this example are fictional, opaque or redacted. It contains no personal or real claim data.</div>
  <h2 id="scenario">Scenario</h2><p>A claims workflow identifies that a fictional claim exceeds a referral threshold. The workflow records a runtime event, a human reviewer confirms escalation, and the organisation commits to senior review. The package declares the applicable wording and authority context, but the delegated authority record cannot be independently retrieved.</p>
  <h2 id="replay">Point-in-time replay view</h2><div className="replay-timeline">{timeline.map(([time,title,description])=><article key={time}><time>{time} UTC</time><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
  <h2 id="result">Why the result is Qualified</h2><VerificationResult status="Qualified" dimensions={exampleResult.dimensions as DimensionResult[]} limitations={exampleResult.limitations}/>
  <h2 id="downloads">Download the test vectors</h2><div className="download-list"><Link className="download-link" href="/examples/claims-referral-qualified.json" download>Decision Envelope example <span>JSON</span></Link><Link className="download-link" href="/examples/claims-referral-qualified-result.json" download>Verification result example <span>JSON</span></Link></div>
  </PageFrame>}

