
// /certification/page.tsx

import { PageFrame } from "../components/page-frame"

export default function CertificationPage() {
  return (
    <PageFrame
      eyebrow="Conformance"
      title="Certification"
      intro="VES Certification defines the conditions under which a decision record can be recognised as independently verifiable under the Veriscopic Evidence Standard (VES)."
    >
      <div className="callout">
        Certification is not a statement of intent. It is a determination that a
        decision record meets the requirements necessary to be proven under scrutiny.
      </div>

      <h2>Certification levels</h2>
      <p>
        VES defines three levels of conformance, reflecting increasing levels of
        evidential strength and independence.
      </p>

      <h3>VES-Compliant</h3>
      <p>
        A record that structurally aligns with the VES minimum requirements.
        Conformance MAY be self-declared.
      </p>
      <ul>
        <li>captures decision-state at a defined point-in-time</li>
        <li>includes required contextual elements</li>
        <li>applies an integrity mechanism</li>
      </ul>

      <h3>VES-Verified</h3>
      <p>
        A record that has been validated against the VES schema and structural
        requirements.
      </p>
      <ul>
        <li>evidence pack structure conforms to VES v1.1</li>
        <li>integrity mechanism is reproducible</li>
        <li>timestamp alignment is validated</li>
      </ul>

      <h3>VES-Certified</h3>
      <p>
        A record that is independently verifiable and capable of being relied upon
        under audit, dispute, or regulatory scrutiny.
      </p>
      <ul>
        <li>decision-state captured at execution boundary</li>
        <li>cryptographic sealing applied at or near capture</li>
        <li>timestamp anchored to an external or verifiable source</li>
        <li>
          record capable of independent verification without reliance on originating system
        </li>
      </ul>

      <h2>Certification identifier</h2>
      <p>
        Certified records SHOULD include a unique VES Certification Identifier
        (VCID), enabling reference and verification.
      </p>
      <div className="callout">
        Example: VES-C-2026-000128
      </div>

      <h2>Use of the VES mark</h2>
      <p>
        The VES mark MAY be used in accordance with the certification level
        achieved. Misrepresentation of certification level SHALL be considered
        non-conformant with the standard.
      </p>

      <h2>Independence</h2>
      <p>
        Certification is predicated on independence. A record that cannot be
        verified without reliance on the originating system SHALL NOT be considered
        VES-Certified.
      </p>

      <div className="divider" />

      <p className="muted">
        VES Certification is defined relative to VES v1.1. Future revisions may
        introduce additional certification criteria.
      </p>
    </PageFrame>
  )
}