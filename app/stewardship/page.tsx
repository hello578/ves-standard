
// app/stewardship/page.tsx

import { PageFrame } from "../components/page-frame"

export default function StewardshipPage() {
  return (
    <PageFrame
      eyebrow="Governance of the Standard"
      title="Stewardship"
      intro="The Veriscopic Evidence Standard (VES) is published and stewarded by Veriscopic. Stewardship exists to preserve publication continuity, version clarity, and the long-term referenceability of the standard."
    >

      <h2>Stewardship responsibilities</h2>

      <ul className="responsibility-list">
        <li>Maintaining the published specification</li>
        <li>Managing versioning and publication records</li>
        <li>Ensuring continuity and accessibility of the standard text</li>
        <li>Publishing revisions conservatively and explicitly</li>
      </ul>

      <h2>Independence from implementation</h2>
      <p>
        Stewardship of VES is distinct from ownership of any specific software,
        workflow engine, platform, storage layer, or commercial implementation.
        The standard is intended to remain referenceable independently of the
        lifecycle of any individual product.
      </p>

      <h2>Publication approach</h2>
      <p>
        VES is published as an open, referenceable standard intended to support
        independent verification, structured assessment, and third-party review in
        consequential decision environments.
      </p>

      <h2>Change control</h2>
      <p>
        Changes to the Veriscopic Evidence Standard are published conservatively.
        Backwards-incompatible changes, if ever required, will result in a new
        major version. Minor clarifications may be published separately where they
        do not alter the substantive requirements of an already published version.
      </p>

      <div className="callout">
        The purpose of stewardship is not to centralise trust in a single product.
        It is to preserve the integrity, stability, and referenceability of the
        standard itself.
      </div>

    </PageFrame>
  )
}
