
// app/concepts/page.tsx
// app/concepts/page.tsx
import Link from "next/link"

const concepts = [
  {
    title: "Evidentiary Substrate",
    text: "What actually existed at the moment a decision crossed the execution boundary. This forms the foundation upon which all defensibility depends."
  },
  {
    title: "Decision State",
    text: "The complete set of inputs, authority, system outputs, and contextual signals present at the moment a consequential judgement was exercised."
  },
  {
    title: "Execution Boundary",
    text: "The point at which a recommendation, analysis, or model output becomes a committed organisational act, instruction, or outcome."
  },
  {
    title: "Point-in-Time Evidence",
    text: "Evidence captured at or immediately adjacent to the execution boundary, prior to hindsight, reinterpretation, or reconstruction."
  },
  {
    title: "Evidence Pack",
    text: "A structured representation of the decision-state, assembled in a form that preserves integrity and enables later verification."
  },
  {
    title: "Defensibility Layer",
    text: "Determines whether the evidentiary substrate can withstand scrutiny. Governs how evidence survives challenge, interpretation, and dispute."
  },
  {
    title: "Structural Defensibility",
    text: "The degree to which a decision can be supported by complete, coherent, and verifiable evidence of what existed at the moment it was made."
  },
  {
    title: "Reconstruction Gap",
    text: "The difference between what actually existed at decision-time and what can later be reconstructed from logs, documents, and system traces."
  },
  {
    title: "Scrutiny Boundary",
    text: "The point at which a decision becomes subject to external challenge, including audit, regulatory review, dispute, or litigation."
  },
  {
    title: "Independent Verifiability",
    text: "The ability for a third party to confirm that an evidence record existed at a specific time and has not been materially altered."
  }
]

export default function ConceptsPage() {
  return (
    <main>

      {/* ── PAGE HEADER ── */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">VES Terminology</p>
          <h1>Core Concepts</h1>
          <p>
            VES v1.1 defines a structured language for how consequential decisions
            become evidentially real and defensible under scrutiny.
          </p>
        </div>
      </section>

      {/* ── PRINCIPLE BLOCK ── */}
      <section className="page-content" style={{paddingBottom: 0}}>
        <div className="container">
          <div className="principle-block">
            <p className="principle-lead">Foundational distinction</p>
            <p className="principle-statement">
              VES distinguishes between explaining a decision and proving it.
              The evidentiary substrate determines what can be proven —
              the defensibility layer determines whether that proof survives scrutiny.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONCEPT GRID ── */}
      <section className="section section-divider">
        <div className="container">

          <div className="section-header">
            <h2>Defined terms</h2>
            <span className="section-rule" aria-hidden="true" />
          </div>

          <div className="concept-grid">
            {concepts.map((c, i) => (
              <div key={c.title} className="concept-card">
                <p className="concept-number">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="concept-title">{c.title}</h3>
                <p className="concept-text">{c.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section-divider">
        <div className="container">
          <div className="grid-2">
            <div className="card">
              <h3>Specification</h3>
              <p>Formal normative definition of the standard.</p>
              <Link href="/specification" className="card-link">
                Open specification →
              </Link>
            </div>
            <div className="card">
              <h3>Framework Model</h3>
              <p>Visual representation of the VES decision evidence stack.</p>
              <Link href="/" className="card-link">
                View model →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}