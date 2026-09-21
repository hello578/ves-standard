import type { Metadata } from "next"
import { PageFrame } from "../components/page-frame"

export const metadata: Metadata = { title: "Terms of use", description: "Terms for using and citing the public VES publication and implementation artefacts.", alternates: { canonical: "/terms-of-use" } }

export default function TermsOfUsePage(){return <PageFrame eyebrow="Publication terms" title="Terms of use" intro="Conditions for using, citing and implementing the public VES publication and its implementation artefacts." toc={[{id:"publication",label:"Public publication"},{id:"marks",label:"Marks and claims"},{id:"limits",label:"Limits"}]}> 
  <h2 id="publication">Public publication</h2><p>VES is publicly published for review, citation and compatible implementation. Veriscopic stewards the standard and reserves all rights in VES marks, logos, certification language, conformance marks, proprietary tools and commercial services.</p>
  <h2 id="marks">Marks and claims</h2><p>Publication of schemas, examples and documentation does not grant permission to imply endorsement, certification, accreditation or organisational approval by Veriscopic. Use the exact VES version and applicable profile when describing an implementation.</p>
  <h2 id="limits">Limits</h2><p>VES does not certify that a decision is correct, lawful, fair, compliant or complete beyond the submitted evidence. Nothing on this site creates a patent covenant, certification relationship or guarantee of any decision outcome.</p>
  </PageFrame>}
