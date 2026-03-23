
// /verify/page.tsx

import { PageFrame } from "../components/page-frame"

export default function VerifyPage() {
  return (
    <PageFrame
      eyebrow="Verification"
      title="Verify a VES Record"
      intro="Verification enables independent assessment of whether a decision record existed at a claimed point in time and has remained materially unaltered."
    >
      <div className="callout">
        Verification is the process by which a VES Evidence Pack is assessed
        without reliance on the originating system.
      </div>

      <h2>1. Purpose</h2>
      <p>
        The purpose of verification is to determine whether a decision record:
      </p>
      <ul>
        <li>existed at the claimed point-in-time</li>
        <li>has remained materially unaltered</li>
        <li>contains the minimum required elements defined by VES</li>
      </ul>

      <h2>2. Verification process</h2>
      <p>A verifier SHALL assess, at minimum:</p>
      <ul>
        <li>integrity seal or cryptographic hash</li>
        <li>timestamp validity and alignment with capture moment</li>
        <li>presence of required evidence elements</li>
        <li>declared VES version compatibility</li>
      </ul>

      <h2>3. Verification outcomes</h2>
      <ul>
        <li>
          <strong>Valid</strong> — the record satisfies integrity, timing, and
          completeness requirements
        </li>
        <li>
          <strong>Invalid</strong> — one or more requirements are not met
        </li>
        <li>
          <strong>Indeterminate</strong> — insufficient information to conclude
        </li>
      </ul>

      <h2>4. Certification reference</h2>
      <p>
        Where applicable, a VES Certification Identifier (VCID) MAY be used to
        reference a specific certified record.
      </p>

      <div className="callout">
        Example: VES-C-2026-000128
      </div>

      <h2>5. Scope of verification</h2>
      <p>
        Verification assesses the existence, integrity, and structure of a record.
        It does not determine whether a decision was correct, optimal, or justified.
      </p>

      <h2>6. Independence requirement</h2>
      <p>
        A record that cannot be verified without reliance on the originating
        system SHALL NOT be considered independently verifiable under VES.
      </p>

      <div className="divider" />

      <p className="muted">
        Verification is defined relative to VES v1.1 and subsequent versions as published.
      </p>
    </PageFrame>
  )
}