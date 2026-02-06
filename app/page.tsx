
// app/page.tsx

// app/page.tsx

export default function HomePage() {
  return (
    <main
      style={{
        maxWidth: 720,
        margin: "4rem auto",
        padding: "0 1rem",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          lineHeight: 1.25,
          marginBottom: "1.5rem",
          letterSpacing: "-0.01em",
        }}
      >
        Veriscopic Evidence Standard (VES)
      </h1>

      <p>
        The Veriscopic Evidence Standard (VES) is a published standard for defining
        how evidence of judgement and decision-making may be captured, preserved,
        and verified at the moment it is exercised.
      </p>

      <p>
        VES is designed to support situations where decisions are subject to
        retrospective scrutiny, including regulatory review, audit, insurance
        assessment, legal inquiry, or board-level accountability.
      </p>

      <p>
        The standard specifies requirements for point-in-time evidence, integrity
        preservation, and verifiability, independent of any specific software
        implementation.
      </p>

      <p style={{ marginTop: "1.5rem" }}>
        <strong>Current version:</strong> VES v1.0<br />
        <strong>Status:</strong> Active<br />
        <strong>Initial publication:</strong> 2026
      </p>

      <nav style={{ marginTop: "2rem" }}>
        <ul style={{ paddingLeft: "1.25rem" }}>
          <li>
            <a href="/specification">Specification</a>
          </li>
          <li>
            <a href="/versions">Versions</a>
          </li>
          <li>
            <a href="/cite">Citation</a>
          </li>
          <li>
            <a href="/stewardship">Stewardship</a>
          </li>
        </ul>
      </nav>
    </main>
  )
}

