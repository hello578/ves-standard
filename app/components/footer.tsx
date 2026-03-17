
// app/components/footer.tsx
// app/components/footer.tsx
import Link from "next/link"

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">

        <div className="footer-grid">

          {/* BRAND COL */}
          <div className="footer-brand">
            <div className="footer-brand-mark">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-ves.svg" alt="VES" className="footer-brand-logo" />
            </div>
            <p className="footer-brand-desc">
              A published standard for capturing, preserving, and independently
              verifying decision-state evidence.
            </p>
          </div>

          {/* STANDARD */}
          <div>
            <p className="footer-col-label">Standard</p>
            <div className="footer-links">
              <Link href="/specification">Specification</Link>
              <Link href="/conformance">Conformance</Link>
              <Link href="/versions">Versions</Link>
            </div>
          </div>

          {/* REFERENCE */}
          <div>
            <p className="footer-col-label">Reference</p>
            <div className="footer-links">
              <Link href="/concepts">Concepts</Link>
              <Link href="/cite">Citation</Link>
              <Link href="/stewardship">Stewardship</Link>
            </div>
          </div>

          {/* STEWARD */}
          <div>
            <p className="footer-col-label">Steward</p>
            <div className="footer-links">
              <a href="https://veriscopic.com" target="_blank" rel="noopener noreferrer">
                Veriscopic
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM RULE */}
        <div className="footer-bottom">
          <span className="footer-bottom-left">
            © 2026 Veriscopic™ · All rights reserved
          </span>
          <span className="footer-bottom-right">
            <Link href="/privacy">Privacy</Link>
            {" · "}
            <Link href="/consent">Consent</Link>
          </span>
        </div>

      </div>
    </footer>
  )
}