"use client"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { primaryNavigation } from "@/lib/site"

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="VES home">
          <span className="brand-mark" aria-hidden="true">V</span>
          <span className="brand-lockup"><strong>VES</strong><small>Verifiable Evidence Standard</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <Link key={item.href} href={item.href} data-active={pathname === item.href || pathname.startsWith(`${item.href}/`)}>{item.label}</Link>
          ))}
        </nav>
        <Link href="/standard" className="header-cta">Read VES 1.2 <span aria-hidden="true">↗</span></Link>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen((value) => !value)}>
          <span aria-hidden="true">{open ? "×" : "≡"}</span>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-nav" className="mobile-menu" aria-label="Mobile navigation" initial={reduceMotion ? false : { opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -8 }} transition={{ duration: 0.18 }}>
            <div className="container">
              {primaryNavigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
              <Link href="/standard" className="mobile-draft-link" onClick={() => setOpen(false)}>Read VES 1.2 Draft</Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
