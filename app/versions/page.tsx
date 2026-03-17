
// app/versions/page.tsx

import { PageFrame } from "../components/page-frame"

export default function VersionsPage() {
  return (
    <PageFrame
      eyebrow="Publication Record"
      title="Versions"
      intro="Versions of VES are intended to be stable, explicit, and referenceable. Revisions are published conservatively so that evidence assessments can remain pinned to the correct standard text."
    >

      <h2>Published versions</h2>

      <table className="version-table">
        <thead>
          <tr>
            <th>Version</th>
            <th>Status</th>
            <th>Published</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>VES v1.1</td>
            <td><span className="status-badge status-active">Active</span></td>
            <td>2026</td>
            <td>Current active version. Introduces structured terminology and defined concepts for VES decision evidence.</td>
          </tr>
          <tr>
            <td>VES v1.0</td>
            <td><span className="status-badge" style={{background:"#f8fafc",color:"#475569",border:"1px solid #e2e8f0"}}>Superseded</span></td>
            <td>2026</td>
            <td>Initial public publication of the Veriscopic Evidence Standard.</td>
          </tr>
        </tbody>
      </table>

      <h2>Versioning policy</h2>
      <ul>
        <li>Each published version is intended to be referenceable as a stable text.</li>
        <li>Material revisions are published as distinct versions.</li>
        <li>
          Historical references SHOULD identify the version of VES under which an
          evidence record was created or assessed.
        </li>
        <li>
          The stewardship record SHOULD make clear which version is currently active.
        </li>
      </ul>

      <h2>Versioning principles</h2>
      <p>
        VES versions are intended to remain citable and stable. Changes are
        documented explicitly. Backwards-incompatible changes, if required,
        result in a new major version rather than silent amendment.
      </p>

      <div className="callout">
        Where scrutiny occurs long after the original judgement, version pinning is
        important. The relevant question is not merely what VES says now, but what
        version applied to the evidenced decision at the time.
      </div>

    </PageFrame>
  )
}