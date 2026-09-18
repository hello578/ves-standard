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

export const audiences = [
  ["Claims", "Preserve the basis of a settlement, referral or denial so later reviews do not begin with a forensic search."],
  ["Underwriting", "Bind risk decisions to the evidence, authority and governing conditions in force at acceptance."],
  ["Delegated authority", "Show which mandate, limit and approval state applied when an organisation committed."],
  ["Operational risk & assurance", "Review consequential decisions through a consistent, portable evidence structure."],
  ["Reinsurance", "Retain the decision evidence needed to examine coverage, authority and material conditions later."],
] as const

