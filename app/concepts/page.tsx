import type { Metadata } from "next"
import Link from "next/link"
import { PageFrame } from "../components/page-frame"
import { TechnicalStructuredData } from "../components/technical-structured-data"
import { coreConcepts, maturityLevels } from "@/content/standard"

export const metadata: Metadata = {
  title: "Core Concepts",
  description: "Citable definitions for the core concepts used by the Verifiable Evidence Standard.",
  alternates: { canonical: "/concepts" },
}

export default function ConceptsPage() {
  return <><TechnicalStructuredData path="/concepts" title="VES core concepts" description="The citable defined vocabulary of the Verifiable Evidence Standard." terms={coreConcepts.map(({term,definition})=>({name:term,description:definition}))}/><PageFrame eyebrow="Defined vocabulary" title="Core concepts" intro="A shared vocabulary for preserving, checking and later understanding consequential decisions without reconstructing them from fragmented systems." toc={coreConcepts.map(({id,term})=>({id,label:term}))}>
    <div className="callout"><strong>Foundational distinction</strong><p>Most systems can describe a decision after the event. VES concerns whether the material evidence, authority and governing conditions relevant to that decision were preserved in a form that can be checked later.</p><p>A recorded action is not necessarily an explainable decision.</p></div>
    <dl className="core-concepts core-concepts-citable">{coreConcepts.map((concept)=><div id={concept.id} key={concept.id}><dt>{concept.term}</dt><dd>{concept.definition}</dd><a className="definition-permalink" href={`#${concept.id}`} aria-label={`Permanent link to ${concept.term}`}>Permanent link</a></div>)}</dl>
    <h2 id="maturity-levels">Decision-Evidence Maturity levels</h2><ul>{maturityLevels.map(([level,title,description])=><li key={level}><strong>{level} {title}:</strong> {description}</li>)}</ul>
    <p>For normative data fields and verification semantics, see the <Link href="/specification">VES 1.2 Draft specification</Link>.</p>
  </PageFrame></>
}
