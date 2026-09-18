import type { ReactNode } from "react"
import Link from "next/link"
import { siteConfig } from "@/lib/site"

type Props = { eyebrow?: string; title: string; intro: string; children: ReactNode; toc?: { id: string; label: string }[] }

export function PageFrame({ eyebrow, title, intro, children, toc }: Props) {
  return (
    <main>
      <section className="page-hero"><div className="container page-hero-grid"><div>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h1>{title}</h1><p>{intro}</p></div><div className="page-version"><span>Latest draft</span><strong>VES 1.2 Draft</strong><small>Published: <time dateTime={siteConfig.draftPublicationDate}>{siteConfig.draftPublicationDate}</time></small><p>For implementation review. VES {siteConfig.activeVersion} remains the current active, citable version until VES 1.2 is formally published.</p><Link href="/versions">View versions →</Link></div></div></section>
      <section className="page-content"><div className={`container content-layout ${toc?.length ? "with-toc" : ""}`}>{toc?.length ? <aside className="toc"><p>On this page</p>{toc.map((item) => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}</aside> : null}<article className="prose">{children}</article></div></section>
    </main>
  )
}
