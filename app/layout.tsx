// app/layout.tsx
import type { Metadata } from "next"
import { Header } from "./components/header"
import { Footer } from "./components/footer"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://vesstandard.org"),
  title: {
    default: "Veriscopic Evidence Standard (VES)",
    template: "%s | Veriscopic Evidence Standard",
  },
  description:
    "The Veriscopic Evidence Standard (VES) defines how decision-state evidence can be captured, preserved, sealed, and independently verified at the point a consequential judgement is exercised.",
  applicationName: "Veriscopic Evidence Standard",
  keywords: [
    "Veriscopic Evidence Standard",
    "VES",
    "decision-state evidence",
    "governance evidence",
    "defensibility",
    "audit evidence",
    "AI governance",
    "independent verification",
    "consequential decisions",
  ],
  openGraph: {
    title: "Veriscopic Evidence Standard (VES)",
    description:
      "A published standard for capturing and verifying decision-state evidence.",
    url: "https://vesstandard.org",
    siteName: "Veriscopic Evidence Standard",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Header />
          {children}
          <Footer />
        </div>

        {/* CONSENT SCRIPT */}
        <script
          src="https://www.veriscopic.com/consent-client.js"
          data-veriscopic-site="cf836bbb-1e43-4ea2-8c1a-7bb4175ba72a"
          data-veriscopic-show-mark="true"
          data-veriscopic-persistent-mark="true"
          data-veriscopic-record-url="https://www.veriscopic.com/record/vesstandard.org/05e0d5e1-0d18-4ece-990d-a240b5d34823"
          defer
        />
      </body>
    </html>
  )
}