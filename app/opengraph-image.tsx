import { ImageResponse } from "next/og"

export const alt = "The Verifiable Evidence Standard — VES 1.2"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px", color: "#0c1718", background: "#f7f7f2", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontWeight: 700, letterSpacing: "0.08em" }}>
          <span style={{ width: 58, height: 58, display: "flex", alignItems: "center", justifyContent: "center", color: "white", background: "#0c1718", borderRadius: 999 }}>V</span>
          VES
        </div>
        <span style={{ color: "#0b6665", fontFamily: "monospace", fontSize: 20 }}>VES 1.2 · VERISCOPIC</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
        <span style={{ color: "#0b6665", fontFamily: "monospace", fontSize: 20, letterSpacing: "0.08em", textTransform: "uppercase" }}>The Verifiable Evidence Standard</span>
        <h1 style={{ margin: "24px 0 22px", fontSize: 72, lineHeight: 1.02, letterSpacing: "-0.045em", fontWeight: 600 }}>Verifiable evidence for consequential decisions.</h1>
        <p style={{ margin: 0, color: "#526263", fontSize: 27, lineHeight: 1.4 }}>Portable, independently verifiable, point-in-time decision-state.</p>
      </div>
      <div style={{ width: "100%", height: 8, background: "#0b6665" }} />
    </div>,
    size,
  )
}
