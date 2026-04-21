
// app/specification/page.tsx


import { PageFrame } from "../components/page-frame"

export default function SpecificationPage() {
  return (
    <PageFrame
      eyebrow="Normative Text"
      title="Specification"
      intro="This document defines the normative requirements of the Veriscopic Evidence Standard (VES) v1.1. The key words MUST, SHALL, SHOULD, MAY, and SHOULD NOT are to be interpreted in accordance with RFC 2119."
    >

      <div className="callout">
        VES defines the requirements of a scrutiny-ready evidence record. It does
        not mandate a single product, vendor, or software architecture.
      </div>

      <h2>Normative Principle</h2>
      <p>
        A decision is only defensible if the full decision-state can be independently
        verified to have existed and held at the moment it crossed the execution
        boundary.
      </p>
      <p>
        All representations derived after this moment are considered reconstruction
        and are subordinate to point-in-time evidence.
      </p>

      <h2>Status of this standard</h2>
      <p>
        This document defines Version 1.1 of the Veriscopic Evidence Standard
        (VES). It is published as a stable reference specification. Future
        revisions, if any, will be versioned and published separately.
      </p>

      <h2>1. Scope</h2>
      <p>
        VES applies to the capture, preservation, sealing, and later verification
        of evidence relating to consequential human, organisational, or
        system-assisted judgement.
      </p>
      <p>
        It is intended for situations in which a decision, approval, rejection,
        escalation, delegation, acceptance of risk, or permission to proceed may
        later require review under scrutiny.
      </p>

      <h2>2. Definitions</h2>
      <ul>
        <li>
          <strong>Decision-state</strong> — the complete set of inputs, authority,
          constraints, system outputs, and contextual conditions that existed and
          were actively relied upon at the moment a consequential judgement was
          exercised. A decision-state is only valid if it enables independent
          verification of whether the decision would hold or fail under scrutiny.
        </li>
        <li>
          <strong>Evidence Pack</strong> — a structured, integrity-bound record
          capturing the decision-state at a specific point in time, designed to
          enable independent verification and reconstruction under scrutiny.
        </li>
        <li>
          <strong>Execution boundary</strong> — the point at which a judgement,
          recommendation, or assessment becomes a committed organisational act and
          exposure attaches.
        </li>
        <li>
          <strong>Point-in-time</strong> — the moment at which the decision-state
          is recorded, before hindsight, reinterpretation, or post-event
          reconstruction intervene.
        </li>
        <li>
          <strong>Verifier</strong> — a party capable of independently assessing
          the integrity, timing, and completeness of an Evidence Pack without
          reliance on internal system assertions.
        </li>
      </ul>

      <h2>3. Minimum evidence pack requirements</h2>
      <p>An Evidence Pack MUST include, at minimum:</p>
      <ul>
        <li>a point-in-time timestamp or equivalent temporal anchor</li>
        <li>a description of the judgement, act, or outcome being evidenced</li>
        <li>identification of the accountable role, actor, or authority context</li>
        <li>the material context or conditions under which the judgement was made</li>
        <li>the relevant inputs, artefacts, or system outputs relied upon</li>
        <li>an integrity mechanism enabling later verification</li>
      </ul>

      <p>
        Evidence Packs MUST include sufficient information to determine:
      </p>
      <ul>
        <li>whether the acting authority was valid at the moment of execution</li>
        <li>whether governing constraints and controls were active and effective</li>
        <li>whether the decision-state was complete and materially sufficient</li>
      </ul>

      <p>
        Omission of material elements that prevent independent reconstruction SHALL
        constitute non-conformance.
      </p>

      <h3>3.1 Held Conditions</h3>
      <p>
        Evidence Packs MUST enable verification that all governing authority,
        constraints, and control conditions were not only defined, but actively
        held at the moment of execution.
      </p>
      <p>
        Assertions of policy, control, or enforcement without evidence of active
        application at the execution boundary SHALL NOT be considered sufficient.
      </p>

      <h2>4. Integrity and sealing</h2>
      <p>
        Evidence Packs MUST be protected against undetected modification.
        A cryptographic hash, seal, or equivalent integrity mechanism SHALL be
        generated at the time of capture or immediately adjacent to it.
      </p>
      <p>
        The integrity mechanism MUST be sufficiently stable and reproducible to
        allow later verification of whether the evidence record has been materially
        altered.
      </p>

      <h2>5. Timestamping</h2>
      <p>
        Timestamps MUST be generated at, or immediately adjacent to, the point at
        which the relevant decision-state is captured. They SHALL NOT be
        retroactively rewritten as if they reflected the original moment of
        judgement.
      </p>

      <h2>6. Verification</h2>
      <p>
        An Evidence Pack MUST be independently verifiable. Verification SHALL make
        it possible to assess:
      </p>
      <ul>
        <li>whether the evidence record existed at the claimed time</li>
        <li>whether it has remained materially unaltered</li>
        <li>whether the decision-state was complete and sufficient</li>
        <li>whether authority, constraints, and governing conditions can be verified as having held at execution</li>
      </ul>

      <p>
        Verification SHALL NOT rely solely on internal system assertions or
        reconstructed records.
      </p>

      <h2>7. Implementation neutrality</h2>
      <p>
        VES is implementation-neutral. Conformance to the standard MAY be achieved
        through different software systems, operating models, storage approaches,
        or delivery architectures, provided the normative requirements of this
        specification are met.
      </p>

      <h2>8. Version pinning</h2>
      <p>
        Where evidence is created, cited, assessed, or challenged over time,
        references to VES SHOULD specify the applicable version of the standard.
      </p>

      <h2>9. Defensibility failure</h2>
      <p>
        A defensibility failure occurs when a decision cannot be supported by
        independently verifiable evidence of its decision-state at the execution
        boundary.
      </p>
      <p>
        In such cases, evidence collapses into reconstruction, interpretation, or
        assertion, and the decision is exposed under scrutiny.
      </p>
      <p>
        Defensibility failure SHALL be considered non-conformance with this
        standard.
      </p>

      <h2>10. Reconstruction limitation</h2>
      <p>
        Evidence derived solely from logs, telemetry, documentation, or system
        traces after the execution boundary SHALL NOT be considered sufficient to
        establish decision-state.
      </p>
      <p>
        Where decision-state cannot be demonstrated from point-in-time evidence,
        reconstruction SHALL be treated as incomplete and non-authoritative.
      </p>

      <div className="divider" />

      <p className="muted">
        Reference: RFC 2119 — Key words for use in RFCs to Indicate Requirement Levels.
      </p>

    </PageFrame>
  )
}