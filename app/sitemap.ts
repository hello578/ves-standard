import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"

const routes = ["", "/standard", "/concepts", "/specification", "/interoperability", "/verify", "/examples/claims-referral", "/implement", "/conformance", "/governance", "/versions", "/changelog", "/faq", "/cite"]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${siteConfig.url}${route}`, lastModified: new Date("2026-09-18"), changeFrequency: route === "" ? "monthly" : "yearly", priority: route === "" ? 1 : route === "/standard" || route === "/specification" ? 0.9 : 0.7 }))
}
