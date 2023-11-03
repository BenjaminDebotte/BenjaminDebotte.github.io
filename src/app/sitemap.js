import { MetadataRoute } from 'next'

export default function sitemap() {
  return [
    {
      url: 'https://bdbt.net',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://acme.com/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    }
  ]
}
