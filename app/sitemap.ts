import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"

const publicationDate = new Date("2026-09-21T00:00:00.000Z")

const entries: Array<Pick<MetadataRoute.Sitemap[number], "url" | "priority" | "changeFrequency">> = [
  { url: `${siteConfig.url}/`, priority: 1, changeFrequency: "monthly" },
  { url: `${siteConfig.url}/1.2`, priority: 1, changeFrequency: "yearly" },
  { url: `${siteConfig.url}/standard`, priority: 0.9, changeFrequency: "yearly" },
  { url: `${siteConfig.url}/specification`, priority: 0.9, changeFrequency: "yearly" },
  { url: `${siteConfig.url}/schemas/ves-decision-envelope-1.2.schema.json`, priority: 0.8, changeFrequency: "yearly" },
  { url: `${siteConfig.url}/schemas/ves-external-evidence-object-1.2.schema.json`, priority: 0.8, changeFrequency: "yearly" },
  { url: `${siteConfig.url}/versions`, priority: 0.7, changeFrequency: "yearly" },
  { url: `${siteConfig.url}/changelog`, priority: 0.7, changeFrequency: "yearly" },
  { url: `${siteConfig.url}/cite`, priority: 0.7, changeFrequency: "yearly" },
  { url: `${siteConfig.url}/governance`, priority: 0.7, changeFrequency: "yearly" },
  { url: `${siteConfig.url}/concepts`, priority: 0.6, changeFrequency: "yearly" },
  { url: `${siteConfig.url}/interoperability`, priority: 0.6, changeFrequency: "yearly" },
  { url: `${siteConfig.url}/verify`, priority: 0.6, changeFrequency: "yearly" },
  { url: `${siteConfig.url}/implement`, priority: 0.6, changeFrequency: "yearly" },
  { url: `${siteConfig.url}/conformance`, priority: 0.6, changeFrequency: "yearly" },
  { url: `${siteConfig.url}/examples/claims-referral`, priority: 0.6, changeFrequency: "yearly" },
  { url: `${siteConfig.url}/faq`, priority: 0.6, changeFrequency: "yearly" },
  { url: `${siteConfig.url}/terms-of-use`, priority: 0.6, changeFrequency: "yearly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.map((entry) => ({ ...entry, lastModified: publicationDate }))
}
