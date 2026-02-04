
// specification/page.tsx

export default function SpecificationPage() {
  return (
    <main style={{ maxWidth: 720, margin: "4rem auto", padding: "0 1rem" }}>
      <h1>Specification</h1>

      <p>
        This document defines the normative requirements of the Veriscopic Evidence
        Standard (VES) v1.0. The key words <strong>MUST</strong>,{" "}
        <strong>SHALL</strong>, and <strong>MAY</strong> are to be interpreted as
        described in RFC 2119.
      </p>

      <h2>1. Scope</h2>
      <p>
        VES applies to the capture and preservation of evidence relating to human
        or organisational judgement, including decisions to approve, reject,
        accept risk, or proceed under stated conditions.
      </p>

      <h2>2. Definitions</h2>
      <ul>
        <li>
          <strong>Evidence Pack</strong> — A structured record capturing the
          context, judgement, and confirmation of a decision at a specific point
          in time.
        </li>
        <li>
          <strong>Point-in-time</strong> — The moment at which judgement is
          exercised and recorded, prior to any subsequent outcomes or hindsight.
        </li>
        <li>
          <strong>Verifier</strong> — A party capable of independently assessing
          the integrity and completeness of an Evidence Pack.
        </li>
      </ul>

      <h2>3. Evidence Pack Requirements</h2>
      <p>An Evidence Pack MUST include, at minimum:</p>
      <ul>
        <li>a point-in-time timestamp</li>
        <li>a description of the judgement exercised</li>
        <li>identification of the accountable decision-maker or role</li>
        <li>the context or conditions under which the decision was made</li>
        <li>an integrity mechanism enabling later verification</li>
      </ul>

      <h2>4. Integrity and Hashing</h2>
      <p>
        Evidence Packs MUST be protected against undetected modification. A
        cryptographic hash or equivalent integrity mechanism SHALL be generated at
        the time of capture.
      </p>

      <h2>5. Timestamping</h2>
      <p>
        Timestamps MUST be generated at or immediately adjacent to the moment
        judgement is exercised and SHALL NOT be retroactively altered.
      </p>

      <h2>6. Verification</h2>
      <p>
        Evidence Packs MUST be independently verifiable, allowing confirmation
        that the record existed at the stated time and has not been altered.
      </p>
    </main>
  )
}
