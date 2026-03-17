
// app/components/page-frame.tsx


import { ReactNode } from "react"

type Props = {
  eyebrow?: string
  title: string
  intro: string
  children: ReactNode
}

export function PageFrame({ eyebrow, title, intro, children }: Props) {
  return (
    <main>

      {/* PAGE HERO — eyebrow, title, intro */}
      <section className="page-hero">
        <div className="container">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </section>

      {/* PAGE CONTENT — body prose */}
      <section className="page-content">
        <div className="container">
          <div className="prose">
            {children}
          </div>
        </div>
      </section>

    </main>
  )
}