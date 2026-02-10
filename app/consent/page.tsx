// app/consent/page.tsx (third-party safe)

"use client"

export default function ConsentRecordPage() {
  function resetConsent() {
    if (typeof window !== "undefined" && window.VeriscopicConsent?.reset) {
      window.VeriscopicConsent.reset()
      return
    }

    // Fallback: local reset only
    try {
      localStorage.removeItem("veriscopic-cookie-consent")
      localStorage.removeItem("veriscopic-consent-hash")
      window.location.reload()
    } catch {
      // no-op
    }
  }

  return (
    <main style={{ maxWidth: 720, margin: "4rem auto", padding: "0 1rem" }}>
      <h1>Consent Record</h1>

      <p>
        This page provides access to information about consent exercised on this
        site.
      </p>

      <p>
        Where consent is requested, it is captured at the moment judgement is
        exercised and preserved as an evidential record in line with the
        Veriscopic Evidence Standard (VES).
      </p>

      <p>
        The record reflects the policy text, context, and interface state
        presented at the time consent was given.
      </p>

      {/* ✅ ADD THIS BLOCK HERE */}
      <h2>What is recorded</h2>

      <p>
        When you make a consent choice on this site, a cryptographic evidence
        record is created at that moment. This record preserves:
      </p>

      <ul>
        <li>The consent decision exercised</li>
        <li>The site and policy context presented</li>
        <li>The time the decision was made</li>
      </ul>

      <p>
        These records are preserved independently under the Veriscopic Evidence
        Standard (VES). This page does not display the evidential record itself.
      </p>

      {/* Reset section remains unchanged */}
      <h2>Reset consent</h2>

      <p>
        You may withdraw consent on this device and re-exercise judgement at any
        time.
      </p>

      <button
        onClick={resetConsent}
        style={{
          marginTop: "0.75rem",
          padding: "0.5rem 0.75rem",
          fontSize: "0.875rem",
          border: "1px solid #e5e7eb",
          background: "#ffffff",
          cursor: "pointer",
        }}
      >
        Reset consent
      </button>

      <p style={{ marginTop: "2rem", fontSize: "0.875rem", color: "#6b7280" }}>
        This page exists to support inspection and evidencing. It does not assess
        the legal validity or sufficiency of consent in any jurisdiction.
      </p>
    </main>
  )
}


