// app/concepts/page.tsx

import Link from "next/link"

const concepts = [
  {
    title: "Evidentiary Substrate",
    text: "The complete, time-bound record of what actually existed at the moment a decision crossed the execution boundary, preserved in a form that can be independently verified under scrutiny. If it did not exist and was not captured at that moment, it cannot be proven later. Distinct from logs, telemetry, or documentation, it captures what can be proven — not what can be described.\n\nThis forms the foundation of decision defensibility across audit, dispute, and regulatory review."
  },
  {
    title: "Decision State",
    text: "The full set of inputs, authority, system outputs, and contextual signals that existed and were relied upon at the moment a consequential judgement was exercised. This is the minimum unit required for independent reconstruction under scrutiny."
  },
  {
    title: "Execution Boundary",
    text: "The point at which a recommendation, analysis, or model output becomes a committed organisational act. At this boundary, authority, state, and constraints must be evidenced — not inferred."
  },
  {
    title: "Point-in-Time Evidence",
    text: "Evidence captured at or immediately adjacent to the execution boundary, before hindsight, reinterpretation, or reconstruction intervene, preserving the decision-state as it actually existed."
  },
  {
    title: "Evidence Pack",
    text: "A structured, integrity-bound representation of the decision-state, assembled to enable independent verification and reconstruction under scrutiny. Not a report, but a verifiable record of what actually existed."
  },
  {
    title: "Defensibility Layer",
    text: "The layer that determines whether a decision can be independently reconstructed and withstand scrutiny. It governs whether evidence holds, or collapses into retrospective explanation."
  },
  {
    title: "Structural Defensibility",
    text: "The degree to which a decision can be supported by complete, coherent, and independently verifiable evidence of what existed at the moment it was made. High structural defensibility means the decision can stand on its own under scrutiny."
  },
  {
    title: "Reconstruction Gap",
    text: "The difference between what actually existed at decision-time and what can later be reconstructed from logs, documents, and system traces. This gap is where defensibility fails and exposure forms."
  },
  {
    title: "Scrutiny Boundary",
    text: "The point at which a decision becomes subject to external challenge, including audit, regulatory review, dispute, or litigation. This is where evidence is tested against independent verification."
  },
  {
    title: "Independent Verifiability",
    text: "The ability for an independent third party to confirm that an evidence record existed at a specific time and has not been materially altered, without relying on internal assertions."
  }
]

export default function ConceptsPage() {
  return (
    <main>

      {/* ── PAGE HEADER ── */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">VES v1.1 — Normative Definitions</p>
          <h1>Core Concepts</h1>
          <p>
            A structured language for how consequential decisions become evidentially real,
            independently verifiable, and defensible under scrutiny.
          </p>
        </div>
      </section>

      {/* ── PRINCIPLE BLOCK ── */}
      <section className="page-content" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="principle-block">
            <p className="principle-lead">Foundational distinction</p>
            <p className="principle-statement">
              VES distinguishes between explaining a decision and proving it.
              Most systems can describe how a decision was made.
              Far fewer can demonstrate what actually existed at the moment it was made.

              The evidentiary substrate determines what can be proven.
              The defensibility layer determines whether that proof holds under scrutiny or collapses into reconstruction.
            </p>
          </div>
        </div>
      </section>

      {/* ── POSITIONING BLOCK (CRITICAL ADD) ── */}
      <section className="section">
        <div className="container">
          <div className="principle-block">
            <p className="principle-lead">Position in the stack</p>
            <p className="principle-statement">
              VES does not replace governance systems, observability tools, or cryptographic controls.

              Visibility shows what can be seen.
              Cryptography can prove integrity.

              But neither, on their own, reconstructs the full decision-state as it actually existed.

              The evidentiary substrate binds context, authority, system state, and outcome into a form that can be independently verified under scrutiny.
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
                <p className="concept-text">
                  {c.text.split("\n\n").map((para, idx) => (
                    <span key={idx}>
                      {para}
                      <br /><br />
                    </span>
                  ))}
                </p>
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
              <Link href="/framework-model" className="card-link">
                View model →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}