export type EnvelopeComponent = {
  key: string
  title: string
  description: string
}

export const envelopeComponents: EnvelopeComponent[] = [
  { key: "01", title: "Decision identity", description: "The decision type, opaque subject reference, outcome and execution time." },
  { key: "02", title: "Decision context", description: "The material facts and source evidence available or relied upon." },
  { key: "03", title: "Governing conditions", description: "The policy, wording, rules, requirements or instructions applicable at the time." },
  { key: "04", title: "Business authority", description: "The role, delegated authority, limits and approval state at execution." },
  { key: "05", title: "System contribution", description: "Rules, models, workflows or external systems that materially influenced the decision." },
  { key: "06", title: "Human judgement", description: "Review, intervention, approval, override or rationale where applicable." },
  { key: "07", title: "Commitment", description: "The organisational outcome, including financial, contractual or customer consequence." },
  { key: "08", title: "Evidence integrity", description: "References, hashes, signatures and declared provenance of evidence objects." },
  { key: "09", title: "Verification", description: "The profile used, checks performed, result status and visible limitations." },
]

export const verificationDimensions = [
  ["Source conformance", "Conformance to the object’s declared source format or profile."],
  ["Integrity and provenance", "Whether the object is intact and attributable to its declared issuer or source."],
  ["Temporal applicability", "Whether validity and point-in-time applicability are declared for the decision."],
  ["Business authority", "Whether the package evidences the authority asserted at execution."],
  ["Structural completeness", "Whether required evidence classes are present for the selected VES profile."],
  ["Replayability", "Whether sufficient references and artefacts are retained for later review."],
] as const

export const resultStatuses = [
  ["Verified", "All required checks for the stated profile passed."],
  ["Qualified", "The package is useful and intact, but declared limitations or non-required gaps apply."],
  ["Incomplete", "One or more required evidence classes are absent."],
  ["Indeterminate", "Verification could not establish a required fact."],
  ["Failed", "An integrity or conformance check failed."],
] as const

export const maturityLevels = [
  ["L1", "Narrative", "The decision is described after the fact."],
  ["L2", "Documentary", "Documents and artefacts are retained, but association or timing may be weak."],
  ["L3", "Traceable", "Source evidence, versions and attributable decision history are linked."],
  ["L4", "Preserved Decision-State", "A time-bound envelope preserves authority, conditions, human and system contribution, integrity data and a replay path."],
] as const

export const coreConcepts = [
  {
    id: "decision-state",
    term: "Decision-State",
    definition: "The material evidence, authority, governing conditions, system contribution and judgement relevant to a consequential decision at the time the organisation committed to it.",
  },
  {
    id: "execution-boundary",
    term: "Execution Boundary",
    definition: "The point at which a recommendation, analysis or workflow result becomes a consequential organisational commitment.",
  },
  {
    id: "point-in-time-evidence",
    term: "Point-in-Time Evidence",
    definition: "Evidence captured at, or demonstrably applicable to, the execution boundary, before later change, hindsight or reconstruction alters the available picture.",
  },
  {
    id: "decision-envelope",
    term: "Decision Envelope",
    definition: "A versioned, structured record that links a consequential decision to its relevant evidence objects, governing conditions, authority, system contribution, human judgement, commitment and verification information.",
  },
  {
    id: "evidence-object",
    term: "Evidence Object",
    definition: "A source artefact or reference—such as a document, runtime receipt, authority record, model output, system event, external data source or human review—described with provenance, integrity and decision relevance.",
  },
  {
    id: "evidentiary-continuity",
    term: "Evidentiary Continuity",
    definition: "The ability for decision-relevant evidence to remain intelligible and reviewable when responsibility, systems, people or organisations change.",
  },
  {
    id: "reconstruction-burden",
    term: "Reconstruction Burden",
    definition: "The operational work required to reassemble why a consequential decision was made after its original decision-state has become fragmented, changed or unavailable.",
  },
  {
    id: "reconstruction-gap",
    term: "Reconstruction Gap",
    definition: "The difference between the decision-state available at the time and what can later be assembled from surviving systems, documents and recollection.",
  },
  {
    id: "independent-verification",
    term: "Independent Verification",
    definition: "The ability for a reviewer to assess the declared structure, integrity and provenance of a VES evidence package without relying solely on the originating user interface or an untested assertion.",
  },
  {
    id: "decision-evidence-maturity",
    term: "Decision-Evidence Maturity",
    definition: "A capability continuum from L1 Narrative, through L2 Documentary and L3 Traceable, to L4 Preserved Decision-State.",
  },
] as const

export const audiences = [
  ["Claims", "Preserve the basis of a settlement, referral or denial so later reviews do not begin with a forensic search."],
  ["Underwriting", "Bind risk decisions to the evidence, authority and governing conditions in force at acceptance."],
  ["Delegated authority", "Show which mandate, limit and approval state applied when an organisation committed."],
  ["Operational risk & assurance", "Review consequential decisions through a consistent, portable evidence structure."],
  ["Reinsurance", "Retain the decision evidence needed to examine coverage, authority and material conditions later."],
] as const
