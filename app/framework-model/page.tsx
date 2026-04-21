// app/framework-model/page.tsx

import { PageFrame } from "../components/page-frame"
import { VesDiagram } from "../components/ves-diagram"
import { VesFramework } from "../components/ves-framework"
import Link from "next/link"

export default function FrameworkModelPage() {
  return (
    <PageFrame
      eyebrow="Framework"
      title="VES Framework Model"
      intro="The Veriscopic Decision Evidence Stack (VES-F1) defines how decisions become evidentially real, independently verifiable, and capable of surviving scrutiny."
    >

      <div className="callout">
        Most systems explain decisions after the fact.  
        VES defines what must exist at execution for a decision to be proven later.
      </div>

      {/* ── INTERACTIVE DIAGRAM ── */}
      <h2>Decision Evidence Stack</h2>
      <p>
        The VES-F1 model illustrates how decision-state is formed, captured,
        and tested under scrutiny. Each layer represents a necessary condition
        for defensibility.
      </p>

      <VesDiagram />

      {/* ── STATIC REFERENCE VERSION ── */}
      <VesFramework />

      {/* ── LAYER EXPLANATION ── */}
      <h2>How to read the model</h2>

      <div className="grid-2">

        <div className="card">
          <h3>Evidentiary Substrate</h3>
          <p>
            The foundation of what actually existed at execution.  
            Includes inputs, provenance, system state, authority, and constraints.
          </p>
          <p className="muted">
            If it is not captured here, it cannot be proven later.
          </p>
        </div>

        <div className="card">
          <h3>Decision State</h3>
          <p>
            The full set of conditions under which a decision was made.  
            This is the minimum unit required to test whether a decision holds.
          </p>
        </div>

        <div className="card">
          <h3>Integrity Layer</h3>
          <p>
            Ensures the decision-state is sealed, time-bound, and tamper-evident.
          </p>
        </div>

        <div className="card">
          <h3>Scrutiny Layer</h3>
          <p>
            Where decisions are challenged by regulators, counterparties,
            auditors, or courts.
          </p>
          <p className="muted">
            At this layer, explanation is irrelevant. Only proof remains.
          </p>
        </div>

      </div>

      {/* ── CORE DISTINCTION ── */}
      <h2>Foundational distinction</h2>
      <p>
        Governance defines intent.  
        Enforcement applies constraints.  
        Observability records activity.
      </p>

      <p>
        None of these establish what can be independently proven to have existed
        and held at the moment of execution.
      </p>

      <p>
        The evidentiary substrate binds:
      </p>

      <ul>
        <li>authority</li>
        <li>context</li>
        <li>system state</li>
        <li>constraints</li>
        <li>outcome</li>
      </ul>

      <p>
        into a single, time-bound record that determines whether a decision
        survives scrutiny or collapses into reconstruction.
      </p>

      {/* ── CTA ── */}
      <div className="grid-2" style={{ marginTop: "2rem" }}>
        <div className="card">
          <h3>Explore Concepts</h3>
          <p>Detailed definitions of each layer in the VES model.</p>
          <Link href="/concepts" className="card-link">
            View concepts →
          </Link>
        </div>

        <div className="card">
          <h3>Read Specification</h3>
          <p>Normative requirements for evidence and verification.</p>
          <Link href="/specification" className="card-link">
            Open specification →
          </Link>
        </div>
      </div>

    </PageFrame>
  )
}