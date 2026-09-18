import { siteConfig } from "@/lib/site"

export function TechnicalStructuredData({ path, title, description, terms }: { path: string; title: string; description: string; terms: string[] }) {
  const url = `${siteConfig.url}${path}`
  const graph = { "@context": "https://schema.org", "@graph": [
    { "@type": "TechArticle", headline: title, description, url, datePublished: "2026-09-18", version: "1.2 Draft", author: { "@type": "Organization", name: "Veriscopic", url: "https://veriscopic.com" } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "VES", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: title, item: url }] },
    { "@type": "DefinedTermSet", name: `${title} defined terms`, url, hasDefinedTerm: terms.map((name) => ({ "@type": "DefinedTerm", name, inDefinedTermSet: url })) },
  ] }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
}
