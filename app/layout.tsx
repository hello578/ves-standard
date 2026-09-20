import type { Metadata } from "next"
import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { GoogleAnalytics } from "./components/google-analytics"
import { siteConfig } from "@/lib/site"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Verifiable Evidence Standard (VES)", template: `%s | VES` },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  keywords: [
    "Verifiable Evidence Standard", "VES", "consequential decision evidence", "decision evidence standard",
    "insurance decision evidence", "decision envelope", "evidence object", "point-in-time evidence",
    "business authority", "decision-state", "evidentiary continuity", "independent verification", "replayable decision-state",
  ],
  authors: [{ name: "Veriscopic", url: "https://veriscopic.com" }],
  creator: "Veriscopic",
  publisher: "Veriscopic",
  category: "technical standards",
  openGraph: { title: "Verifiable Evidence Standard (VES)", description: siteConfig.description, url: siteConfig.url, siteName: siteConfig.name, type: "website", locale: "en_GB" },
  twitter: { card: "summary_large_image", title: "Verifiable Evidence Standard (VES)", description: siteConfig.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  other: {
    "ves:version": "1.2-draft",
    "ves:publication-status": "draft",
    "ves:active-version": "1.1",
    "ves:steward": "Veriscopic",
  },
}

const organizationJsonLd = { "@context": "https://schema.org", "@type": "Organization", name: "Veriscopic", url: "https://veriscopic.com" }
const websiteJsonLd = { "@context": "https://schema.org", "@type": "WebSite", name: siteConfig.name, alternateName: "VES", url: siteConfig.url, description: siteConfig.description, inLanguage: "en-GB", publisher: { "@type": "Organization", name: "Veriscopic", url: "https://veriscopic.com" } }
const homepageJsonLd = { "@context": "https://schema.org", "@type": "WebPage", name: "Verifiable Evidence for Consequential Decisions", url: siteConfig.url, description: siteConfig.description, isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url }, about: [
  { "@type": "DefinedTerm", name: "Decision Envelope", description: "A versioned, structured record linking a consequential decision to its relevant evidence and governing context." },
  { "@type": "DefinedTerm", name: "Point-in-Time Evidence", description: "Evidence captured at, or demonstrably applicable to, the execution boundary of a consequential decision." },
  { "@type": "DefinedTerm", name: "Independent Verification", description: "Assessment of the declared structure, integrity, provenance and limitations of a VES Decision Envelope." },
] }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <div className="site-shell"><Header /><div id="main-content">{children}</div><Footer /></div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }} />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
