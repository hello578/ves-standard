
// app/stewardship/page.tsx

export default function StewardshipPage() {
  return (
    <main style={{ maxWidth: 720, margin: "4rem auto", padding: "0 1rem" }}>
      <h1>Stewardship</h1>

      <p>
        The Veriscopic Evidence Standard (VES) is published and stewarded by
        Veriscopic (https://veriscopic.com).
      </p>

      <p>
        Stewardship responsibilities include maintaining the published
        specification, managing versioning, and ensuring continuity and
        accessibility of the standard.
      </p>

      <p>
        Stewardship of the standard is distinct from ownership of any specific
        software, platform, or implementation.
      </p>

      <p>
        VES is published as an open, referenceable standard intended to support
        independent verification and third-party assessment.
      </p>


      <h2>Change Control</h2>
      <p>
        Changes to the Veriscopic Evidence Standard are published conservatively.
        Backwards-incompatible changes, if ever required, will result in a new major
        version.
      </p>

    </main>
  )
}
