
// app  /layout.tsx
// app/layout.tsx

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Veriscopic Evidence Standard (VES)",
  description:
    "The Veriscopic Evidence Standard (VES) defines requirements for capturing and verifying evidence of judgement at the moment it is exercised.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          margin: 0,
          backgroundColor: "#ffffff",
          color: "#111827",
        }}
      >
        {/* Site identifier — not a competing title */}
        <header
          style={{
            borderBottom: "1px solid #e5e7eb",
            padding: "1rem",
          }}
        >
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <span
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                letterSpacing: "0.01em",
              }}
            >
              Veriscopic Evidence Standard
            </span>
          </div>
        </header>

        {children}

        <footer
          style={{
            borderTop: "1px solid #e5e7eb",
            marginTop: "4rem",
            padding: "1.5rem 1rem",
            fontSize: "0.875rem",
            color: "#6b7280",
          }}
        >
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <p style={{ margin: 0 }}>
              <a href="https://veriscopic.com">© Veriscopic</a> — Steward of the
              Veriscopic Evidence Standard
            </p>

            <p style={{ margin: "0.25rem 0 0 0" }}>
              <a href="/privacy">Privacy</a> ·{" "}
              <a href="/consent">View consent record</a> ·{" "}
              Consent is evidenced at the moment judgement is exercised.
            </p>
          </div>
        </footer>

        {/* Veriscopic Consent Evidence — single source of truth */}
        <script
          src="https://www.veriscopic.com/consent-client.js"
          data-veriscopic-site="cf836bbb-1e43-4ea2-8c1a-7bb4175ba72a"
          data-veriscopic-show-mark="true"
          data-veriscopic-persistent-mark="true"
          defer
        ></script>
      </body>
    </html>
  )
}
