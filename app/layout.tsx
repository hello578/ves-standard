import type { Metadata } from "next"
import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { siteConfig } from "@/lib/site"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.name} (VES)`, template: `%s | VES` },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  keywords: ["Verifiable Evidence Standard", "VES", "decision evidence", "insurance", "decision-state", "evidence integrity"],
  openGraph: { title: siteConfig.name, description: siteConfig.description, url: siteConfig.url, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary", title: siteConfig.name, description: siteConfig.description },
  robots: { index: true, follow: true },
}

const organizationJsonLd = { "@context": "https://schema.org", "@type": "Organization", name: "Veriscopic", url: "https://veriscopic.com" }
const websiteJsonLd = { "@context": "https://schema.org", "@type": "WebSite", name: siteConfig.name, alternateName: "VES", url: siteConfig.url, description: siteConfig.description }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <div className="site-shell"><Header /><div id="main-content">{children}</div><Footer /></div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      </body>
    </html>
  )
}
