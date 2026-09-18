"use client"

import type { ErrorObject } from "ajv"
import { useState } from "react"
import exampleEnvelope from "@/public/examples/claims-referral-qualified.json"
import exampleResult from "@/public/examples/claims-referral-qualified-result.json"
import { validateEnvelope } from "@/lib/validate-envelope"
import { VerificationResult, type DimensionResult } from "./verification-result"

type DemoState = { valid: boolean; errors: ErrorObject[] }

export function VerifierDemo() {
  const initial = JSON.stringify(exampleEnvelope, null, 2)
  const [source, setSource] = useState(initial)
  const [state, setState] = useState<DemoState>({ valid: true, errors: [] })

  function runValidation() {
    try {
      const data: unknown = JSON.parse(source)
      const valid = validateEnvelope(data)
      setState({ valid: Boolean(valid), errors: validateEnvelope.errors ?? [] })
    } catch {
      setState({ valid: false, errors: [{ instancePath: "", schemaPath: "", keyword: "parse", params: {}, message: "Input is not valid JSON." }] })
    }
  }

  function reset() { setSource(initial); setState({ valid: true, errors: [] }) }

  return <div className="verifier-shell">
    <div className="demo-notice"><strong>Structural validation only</strong><span>This demonstration does not verify signatures or retrieve external evidence.</span></div>
    <div className="verifier-grid">
      <section className="json-panel"><div className="panel-heading"><div><span>Input</span><strong>Fictional Decision Envelope</strong></div><span className="local-only">Browser only</span></div><label className="sr-only" htmlFor="ves-json">VES Decision Envelope JSON</label><textarea id="ves-json" value={source} onChange={(event)=>setSource(event.target.value)} spellCheck={false}/><div className="panel-actions"><button className="button button-primary" type="button" onClick={runValidation}>Validate structure</button><button className="button button-secondary" type="button" onClick={reset}>Reset example</button></div></section>
      <div>
        {!state.valid ? <section className="validation-errors" aria-live="polite"><p className="eyebrow">Structural result</p><h2>Validation errors</h2><ul>{state.errors.slice(0,8).map((error,index)=><li key={`${error.instancePath}-${index}`}><code>{error.instancePath || "/"}</code> {error.message}</li>)}</ul>{state.errors.length>8&&<p>Plus {state.errors.length-8} additional errors.</p>}</section> : <VerificationResult status={exampleResult.overall_status as "Qualified"} dimensions={exampleResult.dimensions as DimensionResult[]} limitations={exampleResult.limitations}/>} 
      </div>
    </div>
  </div>
}
