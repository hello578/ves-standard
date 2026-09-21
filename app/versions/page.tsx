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
    id: "ves-1-2",
    version: "VES 1.2",
    date: "2026-09-21",
    status: "Active",
    description: "Current published version. Stable, citable and available for compatible implementation.",
    deployment: "https://vesstandard.org/1.2",
    commit: "https://github.com/hello578/ves-standard/commit/b13cc29ca0926c4daf681b2bd02e09f2d54d15d5",
  },
  {
    id: "ves-1-2-draft",
    version: "VES 1.2 Draft",
    date: "2026-09-20",
    status: "Historical draft",
    description: "Pre-publication draft retained for historical citation and release traceability.",
  },
  {
    id: "ves-1-1",
    version: "VES 1.1",
    historicalName: "Veriscopic Evidence Standard",
    date: "2026-03-17",
    status: "Superseded",
    description: "Published under the historical expansion and superseded by VES 1.2 on 2026-09-21.",
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
    <div className="callout"><strong>Current status</strong><p>VES 1.2 is the current active, citable version, published on 2026-09-21. VES 1.1 is superseded.</p></div>
    <div className="callout"><strong>Source publication history</strong><p>First source repository activity was recorded on <time dateTime="2026-02-04">2026-02-04</time>. The initial public production deployment was recorded on <time dateTime="2026-02-06">2026-02-06</time>.</p><p><a href="https://github.com/hello578/ves-standard/commit/ea92b8e6e3eaf97655c442edbb9571f105fd32f4" target="_blank" rel="noreferrer">Initial repository commit</a> · <a href="https://ves-standard-l455kkh2l-veri-a9c52b37.vercel.app/" target="_blank" rel="noreferrer">Initial public deployment</a></p></div>
    <div className="version-records">{versions.map((item)=><section id={item.id} key={item.id} className="version-record"><div className="version-record-heading"><div><h2>{item.version}</h2>{"historicalName" in item&&<p>Published under the historical expansion “{item.historicalName}”.</p>}</div><span>{item.status}</span></div><dl><div><dt>Publication date</dt><dd><time dateTime={item.date}>{item.date}</time></dd></div><div><dt>Status</dt><dd>{item.status}</dd></div></dl><p>{item.description}</p>{"deployment" in item&&<p className="release-evidence">Release evidence: <a href={item.deployment} target="_blank" rel="noreferrer">immutable Vercel deployment</a> · <a href={item.commit} target="_blank" rel="noreferrer">repository commit</a></p>}</section>)}</div>
    <h2 id="naming-clarification">Naming clarification — Historical — 2026-09-18</h2><div className="callout">{namingClarification}</div>
    <p>Material changes to the current publication and its historical draft are recorded in the <Link href="/changelog">changelog</Link>. Citation formats are published on the <Link href="/cite">citation page</Link>.</p>
  </PageFrame>
}
