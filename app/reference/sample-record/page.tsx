
// reference/sample-record/page.tsx

import { PageFrame } from "@/app/components/page-frame"

export default function SampleRecordPage() {
  return (
    <PageFrame
      eyebrow="Reference"
      title="Sample VES Record"
      intro="This example illustrates the structure of a VES-compliant decision record."
    >
      <div className="callout">
        This is a reference example. VES records must be generated and sealed at execution.
      </div>

      <pre className="code-block">
{`{
  "ves_version": "1.1",
  "record_id": "VES-C-2026-000128",
  "timestamp": "2026-03-23T09:14:22Z",

  "decision": {
    "type": "claims_approval",
    "system": "claims-engine-v2",
    "jurisdiction": "UK"
  },

  "inputs": {
    "claim_amount": 4200,
    "policy_status": "active",
    "risk_flag": "low"
  },

  "output": {
    "decision": "approved",
    "confidence": 0.93
  },

  "evidence": {
    "model_version": "v3.4.1",
    "ruleset_version": "2026.03",
    "data_snapshot_id": "ds_88372"
  },

  "content_hash": "f3a1c9e8c7e5c8b9d4a1e8f9b7a3c6d2e5f1a9c7b8d4e6f9a1b3c7d8e9f2a6b"
}`}
      </pre>

      <h2>What this shows</h2>
      <ul>
        <li>Decision context at execution</li>
        <li>Inputs and outputs captured deterministically</li>
        <li>Evidence references bound to the decision</li>
        <li>Canonical hash for integrity verification</li>
      </ul>

      <h2>Important</h2>
      <p>
        This example demonstrates structure only. A valid VES record must be:
      </p>
      <ul>
        <li>captured at execution</li>
        <li>cryptographically sealed</li>
        <li>independently timestamped</li>
      </ul>

      <div className="callout">
        Records that are reconstructed after the fact do not meet VES requirements.
      </div>
    </PageFrame>
  )
}