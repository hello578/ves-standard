// app/page.tsx

import Link from "next/link"

export default function HomePage() {
  return (
    <main>

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="hero">
        <div className="container">

          <div className="hero-diagram">
            <img
              src="/images/ves-f1-decision-evidence-stack.svg"
              alt="VES-F1 — The Veriscopic Decision Evidence Stack"
              className="diagram-img"
            />
          </div>

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

            <p className="hero-subtle">
              Decisions are not tested when they are made — they are tested when they are challenged.
            </p>

            <div className="hero-actions">
              <Link href="/specification" className="btn btn-primary">
                View specification
              </Link>
              <Link href="/certification" className="btn btn-ghost">
                Certification
              </Link>
              <Link href="/verify" className="btn btn-ghost">
                Verify a record
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          AUTHORITY
      ══════════════════════════════ */}
      <section className="section section-divider">
        <div className="container">
          <div className="card-framed">

            <h2>Authority of the standard</h2>

            <p>
              VES defines the structural requirements for{" "}
              <span className="text-strong">decision-state evidence</span> in systems
              subject to audit, dispute, or regulatory scrutiny.
            </p>

            <ul className="list">
              <li>How decision-state must be captured</li>
              <li>How records must be sealed</li>
              <li>How evidence must be independently verified</li>
            </ul>

            <p className="text-muted">
              Systems that do not produce VES-compliant records cannot provide independently verifiable evidence.
            </p>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          INTERPRETATION
      ══════════════════════════════ */}
      <section className="section section-divider">
        <div className="container">

          <div className="grid-2">
            <div className="card">
              <h3>Decision-state is evidentiary</h3>
              <p>
                What existed at the moment a decision was executed determines defensibility.
              </p>
            </div>

            <div className="card">
              <h3>Reconstruction is insufficient</h3>
              <p>
                Logs, documents, and system traces cannot reliably reproduce decision conditions.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          ADMISSIBILITY
      ══════════════════════════════ */}
      <section className="section section-divider">
        <div className="container">

          <div className="section-header">
            <h2>Admissibility of evidence</h2>
          </div>

          <div className="grid-4">

            <div className="card">
              <h3>VES-L4</h3>
              <p className="text-strong">Sealed Decision-State</p>
              <p>Captured at execution, sealed, timestamped</p>
            </div>

            <div className="card">
              <h3>VES-L3</h3>
              <p className="text-strong">System Records</p>
              <p>Logs and telemetry</p>
            </div>

            <div className="card">
              <h3>VES-L2</h3>
              <p className="text-strong">Documentation</p>
              <p>Reports and approvals</p>
            </div>

            <div className="card">
              <h3>VES-L1</h3>
              <p className="text-strong">Narrative</p>
              <p>Post-hoc reconstruction</p>
            </div>

          </div>

          <p className="text-muted center-text">
            Only VES-L4 provides deterministic proof of decision conditions.
          </p>

        </div>
      </section>

      {/* ══════════════════════════════
          STRUCTURE
      ══════════════════════════════ */}
      <section className="section section-divider">
        <div className="container">

          <div className="section-header">
            <h2>Structure of the standard</h2>
          </div>

          <div className="grid-3">
            <div className="card">
              <h3>Operational layer</h3>
              <p>Where decisions are formed and executed.</p>
            </div>

            <div className="card">
              <h3>Evidence layer</h3>
              <p>Where decision-state becomes a tamper-resistant record.</p>
            </div>

            <div className="card">
              <h3>Scrutiny layer</h3>
              <p>Where evidence is tested under audit and dispute.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          CERTIFICATION + BADGES
      ══════════════════════════════ */}
      <section className="section section-divider">
        <div className="container">

          <div className="section-header center-text">
            <h2>VES Certification & Marks</h2>
            <p className="text-muted">
              Certification reflects the ability to produce verifiable decision-state evidence under scrutiny.
            </p>
          </div>

          <div className="ves-badges">

            <div className="ves-badge">
              <img src="/images/ves-badge-anchored.png" alt="VES Anchored" />
              <p className="badge-title">Anchored</p>
              <p className="badge-desc">Sealed + independently timestamped</p>
            </div>

            <div className="ves-badge">
              <img src="/images/ves-badge-sealed.png" alt="VES Sealed" />
              <p className="badge-title">Sealed</p>
              <p className="badge-desc">Full decision-state captured at execution</p>
            </div>

            <div className="ves-badge">
              <img src="/images/ves-badge-platinum.png" alt="VES Platinum" />
              <p className="badge-title">Platinum</p>
              <p className="badge-desc">Continuous, litigation-grade evidence chain</p>
            </div>

          </div>

          <div className="ves-verified">
            <p className="badge-title">Verified</p>
            <p className="badge-desc">Structured decision records present</p>
          </div>

          <div className="center-text" style={{ marginTop: "32px" }}>
            <Link href="/certification" className="btn btn-primary">
              View certification framework
            </Link>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          REGULATORY
      ══════════════════════════════ */}
      <section className="section section-divider">
        <div className="container">

          <div className="card-framed">

            <h2>Regulatory alignment</h2>

            <ul className="list">
              <li>EU AI Act — record keeping and traceability</li>
              <li>DORA — operational resilience and auditability</li>
              <li>Digital Services Act — decision accountability</li>
              <li>Supervisory and litigation contexts</li>
            </ul>

            <p className="text-muted">
              VES provides the evidence layer governance frameworks rely on.
            </p>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          CTA
      ══════════════════════════════ */}
      <section className="section section-divider">
        <div className="container">

          <div className="grid-3">

            <div className="card">
              <h3>Specification</h3>
              <Link href="/specification">Open →</Link>
            </div>

            <div className="card">
              <h3>Certification</h3>
              <Link href="/certification">Explore →</Link>
            </div>

            <div className="card">
              <h3>Verify</h3>
              <Link href="/verify">Validate →</Link>
            </div>

          </div>

        </div>
      </section>

    </main>
  )
}