import Link from "next/link"
import { namingClarification } from "@/lib/site"

const groups = [
  ["Standard", [["Standard", "/standard"], ["Specification", "/specification"], ["Interoperability", "/interoperability"], ["Conformance", "/conformance"]]],
  ["Resources", [["Verify", "/verify"], ["Implement", "/implement"], ["Claims example", "/examples/claims-referral"], ["FAQ", "/faq"]]],
  ["Stewardship", [["Governance", "/governance"], ["Changelog", "/changelog"], ["Cite VES", "/cite"], ["Veriscopic", "https://veriscopic.com"]]],
] as const

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-statement"><span className="brand-mark" aria-hidden="true">V</span><p>The Verifiable Evidence Standard preserves the basis of consequential decisions for later independent review.</p></div>
          <div className="footer-nav">
            {groups.map(([title, links]) => (
              <div key={title}>
                <p className="footer-label">{title}</p>
                {links.map(([label, href]) => href.startsWith("http") ? <a key={href} href={href} target="_blank" rel="noreferrer">{label}</a> : <Link key={href} href={href}>{label}</Link>)}
              </div>
            ))}
          </div>
        </div>
        <p className="footer-note">{namingClarification}</p>
        <div className="footer-bottom"><span>VES 1.2 Draft · Stewarded by Veriscopic</span><span><Link href="/privacy">Privacy</Link> · <Link href="/cookies">Cookies</Link> · © 2026 Veriscopic</span></div>
      </div>
    </footer>
  )
}

