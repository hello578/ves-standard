import type { Metadata } from "next"
import { PageFrame } from "../components/page-frame"

export const metadata: Metadata = { title: "Privacy", description: "Privacy information for vesstandard.org.", alternates: { canonical: "/privacy" } }
export default function PrivacyPage(){return <PageFrame eyebrow="Legal" title="Privacy notice" intro="This public standards website is informational and does not accept evidence packages, create accounts or provide an upload service.">
  <h2>Data processing</h2><p>VESstandard.org does not collect personal information through forms, registration, profiling or customer-evidence workflows. Limited request information such as IP address, browser type and security metadata may be processed transiently by hosting infrastructure to deliver and protect the site.</p>
  <h2>Optional analytics</h2><p>With your consent, the site uses Google Analytics 4 to understand page use and improve the public standards website. Google may process technical and usage information as a third-party analytics provider. Analytics is not loaded until you select “Allow analytics”, and it is not used to collect, upload or inspect evidence packages. You can decline analytics without affecting access to the site. See <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google’s privacy policy</a> for information about Google’s processing.</p>
  <h2>Browser-only verification</h2><p>Text entered into the structural validation demonstration remains in the browser. The demonstration does not upload, retain or transmit the submitted JSON to a VES database or verification service. Users should nevertheless use only fictional or non-sensitive material.</p>
  <h2>Stewardship contact</h2><p>The Verifiable Evidence Standard is stewarded by Veriscopic. Questions about this notice may be directed to <a href="mailto:standards@veriscopic.com">standards@veriscopic.com</a>.</p>
  </PageFrame>}
