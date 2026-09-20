import type { Metadata } from "next"
import { PageFrame } from "../components/page-frame"

export const metadata: Metadata = { title: "Cookies", description: "Cookie information for vesstandard.org.", alternates: { canonical: "/cookies" } }
export default function CookiesPage(){return <PageFrame eyebrow="Legal" title="Cookie notice" intro="VESstandard.org does not use advertising or profiling cookies. Optional Google Analytics is loaded only after consent.">
  <h2>Essential operation</h2><p>The public site does not intentionally set non-essential cookies. Hosting and security infrastructure may process limited request metadata needed to deliver and protect the service.</p>
  <h2>Structural verification</h2><p>The browser-only verification demonstration does not require an account or cookie. Submitted JSON is not sent to a VES evidence service.</p>
  <h2>Optional analytics</h2><p>If you allow analytics, Google Analytics 4 may set measurement cookies and receive aggregated usage information. Declining analytics prevents the analytics script from loading. Your preference is stored locally in this browser and can be cleared through the browser’s site-data controls.</p>
  </PageFrame>}
