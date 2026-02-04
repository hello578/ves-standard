// cite/page.tsx

export default function CitePage() {
  return (
    <main style={{ maxWidth: 720, margin: "4rem auto", padding: "0 1rem" }}>
      <h1>Citation</h1>

      <p>
        This page provides recommended citation formats for referencing the
        Veriscopic Evidence Standard (VES).
      </p>

      <h2>Recommended citation</h2>
      <pre>
{`Veriscopic. (2026). Veriscopic Evidence Standard (VES), Version 1.0.
https://vesstandard.org`}
      </pre>

      <h2>Short citation</h2>
      <p>Veriscopic Evidence Standard (VES) v1.0</p>

      <h2>Version pinning</h2>
      <p>
        Where evidence is assessed over time, references SHOULD specify the
        applicable VES version.
      </p>
    </main>
  )
}
