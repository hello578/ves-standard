
// marks/page.tsx

import { PageFrame } from "../components/page-frame"

export default function MarksPage() {
  return (
    <PageFrame
      eyebrow="Conformance Marks"
      title="VES Marks"
      intro="VES Marks indicate the level of evidential conformance achieved by a decision record or system under the Veriscopic Evidence Standard (VES)."
    >
      <div className="callout">
        VES Marks are not decorative. They are signals of evidential capability
        and conformance under defined conditions.
      </div>

      <h2>1. Mark hierarchy</h2>
      <p>
        VES defines a hierarchy of marks reflecting increasing levels of evidential strength.
      </p>

      <h3>VES-Compliant</h3>
      <p>
        Indicates structural alignment with the minimum requirements of VES.
      </p>
      <ul>
        <li>decision-state captured at a defined point-in-time</li>
        <li>required contextual elements present</li>
        <li>integrity mechanism applied</li>
      </ul>

      <h3>VES-Verified</h3>
      <p>
        Indicates validation against VES schema and structural requirements.
      </p>
      <ul>
        <li>evidence structure conforms to VES v1.1</li>
        <li>integrity mechanism reproducible</li>
        <li>timestamp alignment validated</li>
      </ul>

      <h3>VES-Certified</h3>
      <p>
        Indicates independent verifiability and readiness for scrutiny.
      </p>
      <ul>
        <li>decision-state captured at execution boundary</li>
        <li>cryptographic sealing applied at or near capture</li>
        <li>timestamp anchored to a verifiable source</li>
        <li>independent verification possible without originating system</li>
      </ul>

      <h2>2. Use of marks</h2>
      <p>
        VES Marks SHALL only be used where the corresponding level of conformance
        has been achieved.
      </p>
      <ul>
        <li>marks MUST reflect actual conformance level</li>
        <li>marks SHOULD be accompanied by a certification identifier where applicable</li>
        <li>marks SHALL NOT be used in a misleading or implied manner</li>
      </ul>

      <h2>3. Certification identifier</h2>
      <p>
        Where applicable, use of a mark SHOULD include a VES Certification Identifier (VCID).
      </p>

      <div className="callout">
        Example: VES-C-2026-000128
      </div>

      <h2>4. Purpose</h2>
      <p>
        The purpose of VES Marks is to provide a clear and consistent signal that
        a decision record can be relied upon under scrutiny.
      </p>

      <h2>5. Misuse</h2>
      <p>
        Misrepresentation of VES conformance or certification level SHALL be
        considered non-conformant with the standard.
      </p>

      <div className="divider" />

      <p className="muted">
        VES Marks are defined relative to VES v1.1.
      </p>
    </PageFrame>
  )
}