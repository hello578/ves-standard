
// app/components/ves-diagram.tsx

"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export function VesDiagram() {
  const router = useRouter()
  const [active, setActive] = useState<string | null>(null)

  const zones = [
    {
      id: "scrutiny",
      label: "Scrutiny",
      points: "700,140 640,250 760,250",
      href: "/concepts#scrutiny",
      textY: 210,
    },
    {
      id: "integrity",
      label: "Integrity",
      points: "640,250 760,250 820,360 580,360",
      href: "/concepts#integrity",
      textY: 310,
    },
    {
      id: "decision",
      label: "Decision State",
      points: "580,360 820,360 900,520 500,520",
      href: "/concepts#decision-state",
      textY: 450,
    },
    {
      id: "inputs",
      label: "Inputs & Provenance",
      points: "500,520 900,520 1020,760 380,760",
      href: "/concepts#provenance",
      textY: 650,
    },
  ]

  return (
    <div className="hero-diagram">
      <svg viewBox="0 0 1400 900" className="diagram-svg">

        {/* Base image */}
        <image
          href="/images/ves-f1-decision-evidence-stack.svg"
          width="1400"
          height="900"
        />

        {/* Interactive layers */}
        {zones.map((z) => (
          <g key={z.id}>
            <polygon
              points={z.points}
              className={`svg-zone ${active === z.id ? "active" : ""}`}
              onMouseEnter={() => setActive(z.id)}
              onMouseLeave={() => setActive(null)}
              onClick={() => router.push(z.href)}
            />

            {/* label */}
            <text
              x="700"
              y={z.textY}
              className={`svg-label ${active === z.id ? "active" : ""}`}
            >
              {z.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}