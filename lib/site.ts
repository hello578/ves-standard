export const siteConfig = {
  name: "The Verifiable Evidence Standard",
  shortName: "VES",
  version: "1.2 Draft",
  draftPublicationDate: "2026-09-20",
  activeVersion: "1.1",
  url: "https://vesstandard.org",
  description:
    "A published, implementation-neutral standard for preserving interoperable evidence, authority, conditions and judgement around consequential decisions.",
  steward: "Veriscopic",
} as const

export const primaryNavigation = [
  { href: "/standard", label: "Standard" },
  { href: "/specification", label: "Specification" },
  { href: "/interoperability", label: "Interoperability" },
  { href: "/examples/claims-referral", label: "Examples" },
  { href: "/verify", label: "Verify" },
  { href: "/implement", label: "Implement" },
  { href: "/governance", label: "Governance" },
] as const

export const verificationDisclaimer =
  "VES verification assesses the integrity, declared provenance and structural completeness of a submitted Decision Envelope against a stated VES profile. A verification result does not certify that the underlying decision was correct, lawful, fair, compliant or complete beyond the evidence submitted."

export const namingClarification =
  "Naming clarification — 2026-09-18: the standard was previously expanded as “Veriscopic Evidence Standard.” It is now named the Verifiable Evidence Standard to describe the property the standard enables. Veriscopic remains its steward."
