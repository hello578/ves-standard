const inputs = ["Evidence", "Conditions", "Authority", "Systems", "Judgement", "Commitment"]

export function DecisionEnvelopeDiagram() {
  return (
    <figure className="envelope-diagram" aria-labelledby="diagram-title">
      <figcaption id="diagram-title" className="sr-only">
        Evidence and governing decision inputs are linked by a VES Decision Envelope for later review, replay and verification.
      </figcaption>
      <div className="diagram-inputs">
        {inputs.map((input) => <span key={input}>{input}</span>)}
      </div>
      <div className="diagram-connector" aria-hidden="true"><span /></div>
      <div className="diagram-envelope">
        <span className="diagram-kicker">VES 1.2</span>
        <strong>Decision Envelope</strong>
        <small>Portable links to native evidence</small>
      </div>
      <div className="diagram-connector" aria-hidden="true"><span /></div>
      <div className="diagram-output">
        <span>Review</span><span>Replay</span><span>Verify</span>
      </div>
    </figure>
  )
}

