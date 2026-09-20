import type { Metadata } from "next"
import Link from "next/link"
import { DecisionEnvelopeDiagram } from "./components/decision-envelope-diagram"
import { MotionReveal } from "./components/motion-reveal"
import { Section } from "./components/section"
import { audiences, envelopeComponents, maturityLevels } from "@/content/standard"

export const metadata: Metadata = { alternates: { canonical: "/" } }

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">VES 1.2 Draft · Stewarded by Veriscopic</p>
            <h1>Verifiable evidence for consequential decisions.</h1>
            <p className="hero-lead">VES is a published standard for preserving the evidence, authority, conditions, judgement and commitment behind consequential decisions, so they can be independently reviewed without reconstructing them later.</p>
            <p className="hero-support">Valid evidence is not always sufficient decision evidence.</p>
            <div className="hero-actions"><Link href="/standard" className="button button-primary">Read the standard</Link><Link href="/examples/claims-referral" className="button button-secondary">Explore an example</Link></div>
          </div>
          <MotionReveal className="hero-instrument" delay={0.08}><DecisionEnvelopeDiagram /></MotionReveal>
        </div>
      </section>

      <Section eyebrow="The 60-second explanation" title="Preserve the decision, not just the activity." intro="A consequential decision is rarely contained in one system. VES links the material evidence into a portable point-in-time envelope without replacing the systems that produced it.">
        <div className="boundary-thesis"><strong>Different evidence answers different questions.</strong><p>Runtime records can show what a system did. Governance evidence can show how an organisation is controlled. VES addresses a different question: what evidence, authority, conditions, judgement and commitment formed the decision at the moment the organisation acted?</p></div>
        <div className="split-comparison">
          <div><p className="comparison-label">VES is</p><ul className="check-list"><li>A standard for preserving consequential decision evidence</li><li>A portable decision envelope</li><li>Applicable to human, rules, workflow and AI-assisted decisions</li><li>A way to verify a declared evidence package later</li></ul></div>
          <div><p className="comparison-label muted-label">VES is not</p><ul className="cross-list"><li>A runtime-control receipt or gateway</li><li>An audit log or replacement for source systems</li><li>A governance maturity taxonomy</li><li>A certification that a decision was correct</li></ul></div>
        </div>
      </Section>

      <Section eyebrow="Public model" title="The VES Decision Envelope" intro="Nine public components establish what was decided, what applied, who or what contributed, and how the resulting package can be checked later." className="section-tint">
        <div className="component-grid">{envelopeComponents.map((item, index) => <MotionReveal key={item.key} delay={Math.min(index * 0.025, 0.16)}><article className="component-card"><span>{item.key}</span><h3>{item.title}</h3><p>{item.description}</p></article></MotionReveal>)}</div>
        <div className="section-link"><Link href="/specification">Read the technical specification <span aria-hidden="true">→</span></Link></div>
      </Section>

      <Section eyebrow="Decision-Evidence Maturity" title="A progression from recollection to preserved state." intro="The levels describe evidence maturity. They are not certification grades and do not determine whether a decision was correct.">
        <div className="maturity-grid">{maturityLevels.map(([level, title, description]) => <article key={level} className="maturity-card"><span>{level}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
      </Section>

      <Section eyebrow="Insurance applications" title="One evidence model across consequential workflows." intro="VES applies wherever an organisational commitment may later need to be understood, tested or replayed.">
        <div className="audience-grid">{audiences.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
      </Section>

      <section className="closing-cta"><div className="container"><p className="eyebrow">Implementation-neutral by design</p><h2>Start with the public schema and a worked claims referral.</h2><div><Link href="/implement" className="button button-light">Implementation guide</Link><Link href="/verify" className="text-link">Open the verifier demo →</Link></div></div></section>
    </main>
  )
}
