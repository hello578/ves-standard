
// app/versions/page.tsx

export default function VersionsPage() {
  return (
    <main style={{ maxWidth: 720, margin: "4rem auto", padding: "0 1rem" }}>
      <h1>Versions</h1>

      <h2>VES v1.0</h2>
      <ul>
        <li><strong>Status:</strong> Active</li>
        <li><strong>Published:</strong> 2026</li>
        <li><strong>Notes:</strong> Initial publication</li>
      </ul>

      <p>
        Versions of VES are intended to be stable. Revisions are published
        conservatively and documented explicitly.
      </p>
    </main>
  )
}
