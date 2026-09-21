"use client"

import type { ErrorObject } from "ajv"
import { useState } from "react"
import exampleEnvelope from "@/public/examples/fictional-claims-referral-qualified.json"
import exampleResult from "@/public/examples/fictional-claims-referral-qualified-result.json"
import { validateEnvelope } from "@/lib/validate-envelope"
import { VerificationResult, type DimensionResult } from "./verification-result"

type DemoState =
  | { mode: "example"; errors: ErrorObject[] }
  | { mode: "idle"; errors: ErrorObject[] }
  | { mode: "valid"; errors: ErrorObject[] }
  | { mode: "invalid"; errors: ErrorObject[] }

export function VerifierDemo() {
  const initial = JSON.stringify(exampleEnvelope, null, 2)
  const [source, setSource] = useState(initial)
  const [state, setState] = useState<DemoState>({ mode: "example", errors: [] })

  function runValidation() {
    try {
      const data: unknown = JSON.parse(source)
      const valid = validateEnvelope(data)
      if (!valid) {
        setState({ mode: "invalid", errors: validateEnvelope.errors ?? [] })
        return
      }

      const isWorkedExample = JSON.stringify(data) === JSON.stringify(exampleEnvelope)
      setState({ mode: isWorkedExample ? "example" : "valid", errors: [] })
    } catch {
      setState({ mode: "invalid", errors: [{ instancePath: "", schemaPath: "", keyword: "parse", params: {}, message: "Input is not valid JSON." }] })
    }
  }

  function reset() { setSource(initial); setState({ mode: "example", errors: [] }) }

  return <div className="verifier-shell">
    <div className="demo-notice"><strong>Structural validation only</strong><span>This demonstration does not verify signatures or retrieve external evidence.</span></div>
    <div className="verifier-grid">
      <section className="json-panel"><div className="panel-heading"><div><span>Input</span><strong>Fictional Decision Envelope</strong></div><span className="local-only">Browser only</span></div><label className="sr-only" htmlFor="ves-json">VES Decision Envelope JSON</label><textarea id="ves-json" value={source} onChange={(event)=>{setSource(event.target.value);setState({mode:"idle",errors:[]})}} spellCheck={false}/><div className="panel-actions"><button className="button button-primary" type="button" onClick={runValidation}>Validate structure</button><button className="button button-secondary" type="button" onClick={reset}>Reset example</button></div></section>
      <div>
        {state.mode === "invalid" && <section className="validation-errors" aria-live="polite"><p className="eyebrow">Structural result</p><h2>Validation errors</h2><ul>{state.errors.slice(0,8).map((error,index)=><li key={`${error.instancePath}-${index}`}><code>{error.instancePath || "/"}</code> {error.message}</li>)}</ul>{state.errors.length>8&&<p>Plus {state.errors.length-8} additional errors.</p>}</section>}
        {state.mode === "idle" && <section className="structural-result" aria-live="polite"><p className="eyebrow">Structural result</p><h2>Not yet validated</h2><p>The input has changed. Run structural validation to assess it against the published schema.</p></section>}
        {state.mode === "valid" && <section className="structural-result structural-result-valid" aria-live="polite"><p className="eyebrow">Structural result</p><h2>Structure valid</h2><p>The JSON conforms to the VES Decision Envelope 1.2 schema.</p><div className="callout callout-warning"><strong>No VES verification result has been determined.</strong> Structural validation alone cannot establish source integrity, provenance, business authority, temporal applicability or replayability.</div></section>}
        {state.mode === "example" && <VerificationResult status={exampleResult.overall_status as "Qualified"} dimensions={exampleResult.dimensions as DimensionResult[]} limitations={exampleResult.limitations} label="Fictional worked result"/>}
      </div>
    </div>
  </div>
}
