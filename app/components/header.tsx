
// app/components/header.tsx
"use client"

import Link from "next/link"
import { useState } from "react"

const nav = [
  { href: "/concepts", label: "Concepts" },
  { href: "/specification", label: "Specification" },
  { href: "/certification", label: "Certification" },
  { href: "/conformance", label: "Conformance" },
  { href: "/verify", label: "Verify" },
  { href: "/versions", label: "Versions" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header-inner">

        <Link href="/" className="brand">
          <img src="/logo-ves.svg" alt="VES" className="brand-logo" />
          <span className="brand-text">VES</span>
        </Link>

        <nav className="desktop-nav">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
        >
          {open ? "×" : "≡"}
        </button>

      </div>

      {open && (
        <nav className="mobile-menu">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}