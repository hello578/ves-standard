// cite/page.tsx

import { PageFrame } from "../components/page-frame"

export default function CitePage() {
  return (
    <PageFrame
      eyebrow="Reference Format"
      title="Citation"
      intro="This page provides recommended citation formats for referencing the Veriscopic Evidence Standard (VES) in policy documents, procurement materials, reports, assessment outputs, academic references, and evidence-related documentation."
    >
      <h2>Recommended citation</h2>
      <pre>{`Veriscopic. (2026). Veriscopic Evidence Standard (VES), Version 1.0. https://vesstandard.org`}</pre>

      <h2>Short citation</h2>
      <pre>{`Veriscopic Evidence Standard (VES) v1.0`}</pre>

      <h2>Version pinning</h2>
      <p>
        Where evidence is assessed over time, references SHOULD specify the
        applicable VES version. This is particularly important where a decision,
        evidence record, or dispute spans multiple periods.
      </p>

      <h2>Suggested usage contexts</h2>
      <ul>
        <li>internal governance and audit documentation</li>
        <li>evidence framework references</li>
        <li>AI governance or consequential decision policy materials</li>
        <li>vendor and procurement requirements</li>
        <li>research, analysis, or academic citation</li>
      </ul>
    </PageFrame>
  )
}