
// app  /layout.tsx

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
        <header
          style={{
            borderBottom: "1px solid #e5e7eb",
            padding: "1rem",
          }}
        >
          <strong>Veriscopic Evidence Standard</strong>
        </header>

        {children}

        <footer
          style={{
            borderTop: "1px solid #e5e7eb",
            padding: "1rem",
            fontSize: "0.875rem",
            color: "#6b7280",
          }}
        >
          © Veriscopic — Steward of the Veriscopic Evidence Standard
        </footer>
      </body>
    </html>
  )
}

