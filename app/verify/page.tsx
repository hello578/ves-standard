// /verify/page.tsx

import Link from "next/link"
import { PageFrame } from "../components/page-frame"

export default function VerifyPage() {
  return (
    <PageFrame
      eyebrow="Verification"
      title="Verify a VES Record"
      intro="Verification enables independent confirmation that a decision record existed at a claimed point in time and has remained materially unaltered."
    >
      {/* PRIMARY CALLOUT */}
      <div className="callout">
        Verification is performed without reliance on the originating system.
      </div>

      {/* LIVE ACTION (CRITICAL) */}
      <div className="card-framed center-text" style={{ marginBottom: "32px" }}>
        <p className="text-muted">Live verification</p>

        <p>
          Validate a VES record using the independent verification service.
        </p>

        <a
          href="https://verify.veriscopic.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Run live verification →
        </a>
      </div>

      {/* PURPOSE */}
      <h2>1. Purpose</h2>
      <p>
        Verification determines whether a decision record:
      </p>
      <ul>
        <li>existed at the claimed point-in-time</li>
        <li>has remained materially unaltered</li>
        <li>meets the structural requirements defined by VES</li>
      </ul>

      {/* PROCESS */}
      <h2>2. Verification process</h2>
      <p>A verifier SHALL assess, at minimum:</p>
      <ul>
        <li>cryptographic integrity (hash / seal)</li>
        <li>timestamp validity and independence</li>
        <li>presence of required evidence elements</li>
        <li>declared VES version compatibility</li>
      </ul>

      {/* OUTCOMES */}
      <h2>3. Verification outcomes</h2>
      <ul>
        <li>
          <strong>Valid</strong> — integrity, timing, and completeness confirmed
        </li>
        <li>
          <strong>Invalid</strong> — one or more requirements not satisfied
        </li>
        <li>
          <strong>Indeterminate</strong> — insufficient evidence to conclude
        </li>
      </ul>

      {/* EXAMPLE */}
      <div className="callout">
        Example VCID: <strong>VES-C-2026-000128</strong>
      </div>

      {/* SCOPE */}
      <h2>4. Scope of verification</h2>
      <p>
        Verification assesses existence, integrity, and structure of a record.
      </p>
      <p>
        It does <strong>not</strong> determine whether a decision was correct,
        optimal, or justified.
      </p>

      {/* INDEPENDENCE */}
      <h2>5. Independence requirement</h2>
      <p>
        A record that cannot be verified without reliance on the originating
        system SHALL NOT be considered independently verifiable under VES.
      </p>

      {/* CRITICAL LINE */}
      <div className="card-framed">
        <p className="text-strong">
          If verification depends on the system that produced the decision,
          the evidence is not independently defensible.
        </p>
      </div>

      <div className="divider" />

      <p className="muted">
        Verification is defined relative to VES v1.1 and subsequent versions.
      </p>
    </PageFrame>
  )
}