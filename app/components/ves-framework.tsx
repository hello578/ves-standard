
// app/components/ves-framework.tsx

import Image from "next/image"

export function VesFramework() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">VES Framework Model</h2>

        <p className="section-lead">
          The Veriscopic Decision Evidence Stack (VES-F1) illustrates how
          operational decisions become structured, verifiable evidence capable of
          withstanding scrutiny.
        </p>

        <div className="card" style={{ padding: "1.5rem" }}>
          <Image
            src="/images/ves-f1-decision-evidence-stack.svg"
            alt="Veriscopic Decision Evidence Stack"
            width={1200}
            height={800}
            className="w-full h-auto rounded-xl"
            priority
          />
        </div>

        <div className="grid-2" style={{ marginTop: "1.5rem" }}>
          <div className="card info-card">
            <h3>Evidentiary substrate</h3>
            <p>
              Decision State, Provenance, and Event form the substrate of what
              actually existed at execution.
            </p>
          </div>

          <div className="card info-card">
            <h3>Defensibility layer</h3>
            <p>
              Canonical records and defensibility determine whether that
              evidence survives scrutiny.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}