import { siteConfig } from "@/lib/site"

type DefinedTerm = string | { name: string; description: string }

export function TechnicalStructuredData({ path, title, description, terms }: { path: string; title: string; description: string; terms: DefinedTerm[] | readonly DefinedTerm[] }) {
  const url = `${siteConfig.url}${path}`
  const graph = { "@context": "https://schema.org", "@graph": [
    { "@type": "TechArticle", headline: title, description, url, inLanguage: "en-GB", datePublished: siteConfig.draftPublicationDate, dateModified: siteConfig.draftPublicationDate, version: "1.2 Draft", author: { "@type": "Organization", name: "Veriscopic", url: "https://veriscopic.com" }, publisher: { "@type": "Organization", name: "Veriscopic", url: "https://veriscopic.com" }, isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "VES", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: title, item: url }] },
    { "@type": "DefinedTermSet", name: `${title} defined terms`, url, hasDefinedTerm: terms.map((term) => ({ "@type": "DefinedTerm", name: typeof term === "string" ? term : term.name, description: typeof term === "string" ? undefined : term.description, inDefinedTermSet: url })) },
  ] }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
}
