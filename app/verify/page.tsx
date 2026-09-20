import type { Metadata } from "next"
import { VerifierDemo } from "../components/verifier-demo"
import { verificationDisclaimer } from "@/lib/site"

export const metadata: Metadata = { title: "Verify", description: "A transparent browser-only structural validation demonstration for VES 1.2 Draft.", alternates: { canonical: "/verify" } }
export default function VerifyPage(){return <main><section className="page-hero verify-hero"><div className="container"><p className="eyebrow">Transparent demonstration</p><h1>Inspect a VES package.</h1><p>Validate a fictional Decision Envelope against the published VES 1.2 Draft JSON Schema. The default package demonstrates a Qualified result with explicit limitations.</p></div></section><section className="verify-section"><div className="container"><VerifierDemo/><div className="verification-disclaimer"><strong>Verification boundary</strong><p>{verificationDisclaimer}</p><p>A PDF, receipt or source record may be an Evidence Object. The submitted JSON Decision Envelope is the structural unit assessed by this demonstration; source artefacts are not independently verified here.</p></div></div></section></main>}
