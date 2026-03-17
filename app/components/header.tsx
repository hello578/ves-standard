
// app/components/header.tsx
// app/components/header.tsx
"use client"

import Link from "next/link"
import { useState } from "react"

const nav = [
  { href: "/concepts",      label: "Concepts" },
  { href: "/specification", label: "Specification" },
  { href: "/conformance",   label: "Conformance" },
  { href: "/versions",      label: "Versions" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header-inner">

        {/* BRAND */}
        <Link href="/" className="brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-ves.svg" alt="VES" className="brand-logo" />
          <span className="brand-text">VES</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? "×" : "≡"}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
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