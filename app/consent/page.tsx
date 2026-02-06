
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

