import { StatusPill, type VerificationStatus } from "./status-pill"

export type DimensionResult = { name: string; status: VerificationStatus; note: string }

export function VerificationResult({ status, dimensions, limitations, label = "Package result" }: { status: VerificationStatus; dimensions: DimensionResult[]; limitations: string[]; label?: string }) {
  return <section className="verification-result" aria-live="polite">
    <header className="result-header"><div><p className="eyebrow">{label}</p><h2>{status}</h2></div><StatusPill status={status}/></header>
    <div className="result-dimensions">{dimensions.map((item)=><article key={item.name}><div><h3>{item.name}</h3><StatusPill status={item.status}/></div><p>{item.note}</p></article>)}</div>
    <div className="limitations"><h3>Visible limitations</h3><ul>{limitations.map((item)=><li key={item}>{item}</li>)}</ul></div>
  </section>
}
