import type { Metadata } from "next"
import { PageFrame } from "../components/page-frame"

export const metadata: Metadata = { title: "Conformance", description: "Current VES 1.2 Draft conformance claims and the planned testing boundary.", alternates: { canonical: "/conformance" } }
export default function ConformancePage(){return <PageFrame eyebrow="Current position" title="Conformance programme in development" intro="VES 1.2 Draft provides schemas and test vectors for implementation review. It does not currently operate a certification, seal or award programme." toc={[{id:"claims",label:"Current claims"},{id:"tests",label:"Future tests"},{id:"marks",label:"Marks"}]}>
  <h2 id="claims">What may be claimed now</h2><p>An implementation may state that it targets or has been structurally tested against a named VES 1.2 Draft schema or profile, provided the version, test scope, date and limitations are stated. It must not imply endorsement by Veriscopic.</p><div className="callout">Recommended language: “Designed against the VES 1.2 Draft Decision Envelope schema. This is an implementation statement, not certification by VES or Veriscopic.”</div>
  <h2 id="tests">How conformance testing is expected to work</h2><p>Future tests are expected to distinguish schema conformance, profile completeness, evidence integrity, authority evidence and replayability. A passing structural test will not establish that source evidence is true or that the underlying decision was correct.</p>
  <h2 id="marks">No public marks in this release</h2><p>VES does not publish Platinum, Sealed, Anchored or other certification badges in this release. Organisations must not create self-asserted VES seals or present a verification status as an organisational rating.</p>
  </PageFrame>}

