
// app/conformance/page.tsx
// app/conformance/page.tsx
import { PageFrame } from "../components/page-frame"

export default function ConformancePage() {
  return (
    <PageFrame
      eyebrow="Implementation Alignment"
      title="Conformance"
      intro="VES defines what a scrutiny-ready evidence record must contain. Conformance describes the degree to which a system, workflow, or organisation aligns with those requirements."
    >

      <h2>What conformance means</h2>
      <p>
        Conformance to VES indicates that a system or process produces evidence
        that satisfies the normative requirements of the standard. It is assessed
        against the minimum evidence pack requirements, integrity mechanisms,
        timestamping, and independent verifiability defined in the specification.
      </p>

      <h2>Conformance levels</h2>

      <div className="conformance-levels">

        <div className="conformance-level">
          <p className="level-number">Level 01</p>
          <p className="level-title">Foundational</p>
          <p className="level-text">
            Basic capture of decision-state elements with timestamping and
            integrity mechanisms present but not consistently enforced.
          </p>
        </div>

        <div className="conformance-level">
          <p className="level-number">Level 02</p>
          <p className="level-title">Structured</p>
          <p className="level-text">
            Consistent capture of evidence packs with defined structure,
            repeatability, and integrity preservation across workflows.
          </p>
        </div>

        <div className="conformance-level">
          <p className="level-number">Level 03</p>
          <p className="level-title">Defensible</p>
          <p className="level-text">
            Evidence is complete, sealed, independently verifiable, and capable
            of surviving scrutiny with minimal reconstruction.
          </p>
        </div>

      </div>

      <h2>Important distinction</h2>

      <div className="callout">
        Conformance does not imply endorsement of a specific product. It indicates
        that the evidentiary substrate and defensibility layer meet the
        requirements defined by VES.
      </div>

    </PageFrame>
  )
}