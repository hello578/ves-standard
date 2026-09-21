import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"

const routes = ["", "/1.2", "/standard", "/concepts", "/specification", "/interoperability", "/verify", "/examples/claims-referral", "/implement", "/conformance", "/governance", "/versions", "/changelog", "/faq", "/cite", "/terms-of-use"]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${siteConfig.url}${route}`, lastModified: new Date(siteConfig.publicationDate), changeFrequency: route === "" ? "monthly" : "yearly", priority: route === "" ? 1 : route === "/standard" || route === "/specification" ? 0.9 : 0.7 }))
}
