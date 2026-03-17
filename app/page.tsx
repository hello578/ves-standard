// app/page.tsx
import Link from "next/link"

export default function HomePage() {
  return (
    <main>

      {/* ══════════════════════════════
          HERO — DIAGRAM FIRST
      ══════════════════════════════ */}
      <section className="hero">
        <div className="container">

          {/* Framework diagram */}
          <div className="hero-diagram">
            <img
              src="/images/ves-f1-decision-evidence-stack.svg"
              alt="VES-F1 — The Veriscopic Decision Evidence Stack"
              className="diagram-img"
            />
          </div>

          {/* Copy block below diagram */}
          <div className="hero-text">
            <p className="eyebrow">VES Framework Model</p>

            <h1>
              The Veriscopic<br />
              Decision Evidence Stack
            </h1>

            <p className="hero-lead">
              A standard defining how operational decisions become{" "}
              <span className="text-strong">verifiable evidence</span>{" "}
              under scrutiny.
            </p>

            <div className="hero-actions">
              <Link href="/specification" className="btn btn-primary">
                View specification
              </Link>
              <Link href="/concepts" className="btn btn-ghost">
                Explore concepts
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          INTERPRETATION — 2-COL
      ══════════════════════════════ */}
      <section className="section section-divider">
        <div className="container">

          <div className="grid-2">
            <div className="card">
              <h3>Decision-state is evidentiary</h3>
              <p>
                <span className="text-strong">
                  What existed at the moment a decision was executed
                </span>{" "}
                determines defensibility under scrutiny.
              </p>
            </div>

            <div className="card">
              <h3>Reconstruction is insufficient</h3>
              <p>
                Logs, documents, and system traces cannot reliably reproduce
                decision conditions after the fact.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          CORE AXIOM
      ══════════════════════════════ */}
      <section className="section section-divider">
        <div className="container">

          <div className="card-framed center-card">
            <p className="text-muted">Core principle</p>
            <p className="axiom">
              Decisions are made in systems. Defensibility is created at execution
              — or not at all.
            </p>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          STRUCTURE — 3-COL
      ══════════════════════════════ */}
      <section className="section section-divider">
        <div className="container">

          <div className="section-header">
            <h2>Structure of the standard</h2>
            <span className="section-rule" aria-hidden="true" />
          </div>

          <div className="grid-3">
            <div className="card">
              <h3>Operational layer</h3>
              <p>
                Where decisions are formed, evaluated, and committed.
              </p>
            </div>

            <div className="card">
              <h3>Evidence layer</h3>
              <p>
                Where decision-state is captured as a canonical,
                tamper-resistant record.
              </p>
            </div>

            <div className="card">
              <h3>Scrutiny layer</h3>
              <p>
                Where evidence is tested under audit, dispute,
                or regulatory review.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          CTA CARDS
      ══════════════════════════════ */}
      <section className="section section-divider">
        <div className="container">

          <div className="grid-2">

            <div className="card">
              <h3>Specification</h3>
              <p>
                Formal definition of the Veriscopic Evidence Standard.
              </p>
              <Link href="/specification" className="card-link">
                Open specification →
              </Link>
            </div>

            <div className="card">
              <h3>Versions</h3>
              <p>
                Track the evolution and versioned releases of the standard.
              </p>
              <Link href="/versions" className="card-link">
                View versions →
              </Link>
            </div>

          </div>

        </div>
      </section>

    </main>
  )
}