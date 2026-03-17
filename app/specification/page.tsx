
// specification/page.tsx
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
          <strong>Decision-state</strong> — the evidence context that existed at
          the moment a consequential judgement was exercised.
        </li>
        <li>
          <strong>Evidence Pack</strong> — a structured record capturing the
          relevant decision-state at a specific point in time.
        </li>
        <li>
          <strong>Execution boundary</strong> — the point at which a judgement,
          recommendation, or assessment becomes a committed organisational act or
          outcome.
        </li>
        <li>
          <strong>Point-in-time</strong> — the relevant moment at which the
          decision-state is recorded, before later hindsight, reinterpretation, or
          post-event reconstruction.
        </li>
        <li>
          <strong>Verifier</strong> — a party capable of independently assessing
          the integrity, stated timing, and completeness of an Evidence Pack.
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
        <li>whether the minimum required elements were present</li>
      </ul>

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

      <div className="divider" />

      <p className="muted">
        Reference: RFC 2119 — Key words for use in RFCs to Indicate Requirement Levels.
      </p>

    </PageFrame>
  )
}