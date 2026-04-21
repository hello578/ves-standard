// app/concepts/page.tsx
// app/concepts/page.tsx

import Link from "next/link"

const concepts = [
  {
    title: "Evidentiary Substrate",
    text: "The complete, time-bound record of what actually existed and held at the moment a decision crossed the execution boundary, preserved in a form that can be independently verified under scrutiny.\n\nIf it did not exist and was not captured at that moment, it cannot be proven later.\n\nDistinct from logs, telemetry, or documentation, it captures what can be proven — not what can be described.\n\nThis forms the foundation of decision defensibility across audit, dispute, regulatory review, and capital allocation."
  },
  {
    title: "Decision State",
    text: "The full set of inputs, authority, system outputs, constraints, and contextual signals that existed and were actively relied upon at the moment a consequential judgement was exercised.\n\nThis is the minimum unit required to determine whether a decision will hold or fail when challenged under scrutiny."
  },
  {
    title: "Execution Boundary",
    text: "The point at which a recommendation, analysis, or model output becomes a committed organisational act and exposure attaches.\n\nAt this boundary, authority, state, and constraints must be evidenced — not inferred — including whether governing controls and constraints actively held at that moment.\n\nThis is the moment at which liability, accountability, and financial consequence begin."
  },
  {
    title: "Point-in-Time Evidence",
    text: "Evidence captured at or immediately adjacent to the execution boundary, before hindsight, reinterpretation, or reconstruction intervene.\n\nThis preserves the decision-state as it actually existed and held, rather than as it is later described or reconstructed."
  },
  {
    title: "Evidence Pack",
    text: "A structured, integrity-bound representation of the decision-state, assembled to enable independent verification and reconstruction under scrutiny.\n\nIt is not a report, summary, or explanation, but a verifiable instrument of proof of what actually existed at the moment of decision.\n\nIts purpose is not to describe the decision, but to allow it to be tested."
  },
  {
    title: "Defensibility Layer",
    text: "The layer that determines whether a decision can be independently verified and withstand scrutiny.\n\nIt governs whether evidence holds as proof, or collapses into retrospective explanation — including whether governing controls, authority, and constraints can be shown to have been active and effective at execution.\n\nThis layer determines whether a decision stands or fails when challenged."
  },
  {
    title: "Structural Defensibility",
    text: "The degree to which a decision can be supported by complete, coherent, and independently verifiable evidence of what existed and held at the moment it was made.\n\nHigh structural defensibility means the decision can stand on its own under scrutiny, without reliance on interpretation, reconstruction, or internal assertion.\n\nLow structural defensibility indicates exposure to dispute, rejection, or regulatory failure."
  },
  {
    title: "Reconstruction Gap",
    text: "The difference between what actually existed at decision-time and what can later be reconstructed from logs, documents, and system traces.\n\nThis gap is where defensibility fails, evidence degrades, and exposure forms.\n\nThe larger the reconstruction gap, the greater the reliance on interpretation rather than proof."
  },
  {
    title: "Scrutiny Boundary",
    text: "The point at which a decision becomes subject to external challenge, including audit, regulatory review, dispute, litigation, or capital assessment.\n\nAt this boundary, internal explanations lose authority, and only independently verifiable evidence determines outcome.\n\nThis is where decisions are accepted, rejected, or contested."
  },
  {
    title: "Independent Verifiability",
    text: "The ability for an independent third party to confirm that:\n\n– an evidence record existed at a specific time\n– it has not been materially altered\n– and that the decision-state, including authority, constraints, and governing conditions, can be verified as having held at that moment\n\nwithout reliance on internal systems, assertions, or reconstruction."
  },
  {
    title: "Defensibility Failure",
    text: "The condition in which a decision cannot be supported by independently verifiable evidence of its decision-state at execution.\n\nIn this state, evidence collapses into reconstruction, interpretation, or assertion, resulting in exposure under scrutiny.\n\nDefensibility failure is the primary driver of dispute, rejected claims, regulatory breach, and loss of capital confidence."
  },
  {
    title: "Prevention Verifiability Gap",
    text: "The failure mode in which a system claims to prevent invalid or unauthorised decisions, but cannot independently demonstrate that the relevant controls, constraints, and policies were active, applied, and effective at the moment of execution.\n\nUnder scrutiny, prevention must be evidenced — not asserted.\n\nWithout a verifiable decision-state, claims of enforcement or control cannot be validated and are treated as unproven."
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
              Far fewer can demonstrate what actually existed — and held — at the moment it was made.

              The evidentiary substrate determines what can be proven.
              The defensibility layer determines whether that proof holds under scrutiny or collapses into reconstruction.
            </p>
          </div>
        </div>
      </section>

      {/* ── POSITIONING BLOCK ── */}
      <section className="section">
        <div className="container">
          <div className="principle-block">
            <p className="principle-lead">Position in the stack</p>
            <p className="principle-statement">
              Governance defines intent.
              Enforcement applies constraints.
              Observability records activity.

              But none of these, on their own, establish what can be independently proven to have existed — and held — at the moment of execution.

              Visibility shows what can be seen.
              Cryptography can prove integrity.

              But neither reconstructs the full decision-state as it actually existed.

              The evidentiary substrate binds authority, context, system state, constraints, and outcome into a single, time-bound record that can be independently verified under scrutiny.
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