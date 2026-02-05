import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vesstandard.org"

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/specification`, lastModified: new Date() },
    { url: `${baseUrl}/versions`, lastModified: new Date() },
    { url: `${baseUrl}/cite`, lastModified: new Date() },
    { url: `${baseUrl}/stewardship`, lastModified: new Date() },
  ]
}
