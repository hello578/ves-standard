import type { Metadata } from "next"
import Link from "next/link"
import { PageFrame } from "../components/page-frame"
import { namingClarification } from "@/lib/site"

export const metadata: Metadata = {
  title: "Versions",
  description: "Dated publication history and status of VES versions.",
  alternates: { canonical: "/versions" },
}

const versions = [
  {
    id: "ves-1-2-draft",
    version: "VES 1.2 Draft",
    date: "2026-09-18",
    status: "Latest draft",
    description: "Published for implementation review. VES 1.1 remains the current active, citable version until VES 1.2 is formally published.",
  },
  {
    id: "ves-1-1",
    version: "VES 1.1",
    historicalName: "Veriscopic Evidence Standard",
    date: "2026-03-17",
    status: "Active",
    description: "The current active, citable version.",
    deployment: "https://ves-standard-joox4w58c-veri-a9c52b37.vercel.app/",
    commit: "https://github.com/hello578/ves-standard/commit/4cf2baf7bd4b1518fcbd589596c16f149e080ecc",
  },
  {
    id: "ves-1-0",
    version: "VES 1.0",
    historicalName: "Veriscopic Evidence Standard",
    date: "2026-02-06",
    status: "Superseded by VES 1.1",
    description: "Initial public release.",
    deployment: "https://ves-standard-l455kkh2l-veri-a9c52b37.vercel.app/",
    commit: "https://github.com/hello578/ves-standard/commit/5d4115df9faa379a7f17494577d566678f199041",
  },
] as const

export default function VersionsPage() {
  return <PageFrame eyebrow="Publication record" title="Versions" intro="VES versions remain dated, identifiable and citable. Draft status is kept distinct from the active standard." toc={versions.map(({id,version})=>({id,label:version}))}>
    <div className="callout callout-warning"><strong>Current status</strong><p>VES 1.1 is the current active, citable version. VES 1.2 Draft is the latest draft and is published for implementation review only.</p></div>
    <div className="version-records">{versions.map((item)=><section id={item.id} key={item.id} className="version-record"><div className="version-record-heading"><div><h2>{item.version}</h2>{"historicalName" in item&&<p>Published under the historical expansion “{item.historicalName}”.</p>}</div><span>{item.status}</span></div><dl><div><dt>Publication date</dt><dd><time dateTime={item.date}>{item.date}</time></dd></div><div><dt>Status</dt><dd>{item.status}</dd></div></dl><p>{item.description}</p>{"deployment" in item&&<p className="release-evidence">Release evidence: <a href={item.deployment} target="_blank" rel="noreferrer">immutable Vercel deployment</a> · <a href={item.commit} target="_blank" rel="noreferrer">repository commit</a></p>}</section>)}</div>
    <h2 id="naming-clarification">Naming history</h2><div className="callout">{namingClarification}</div>
    <p>Material changes to the latest draft are recorded in the <Link href="/changelog">changelog</Link>. Citation formats are published on the <Link href="/cite">citation page</Link>.</p>
  </PageFrame>
}
