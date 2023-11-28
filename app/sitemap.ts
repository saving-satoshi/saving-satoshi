import { MetadataRoute } from 'next'

const BASE_URL = 'https://savingsatoshi.com/'

export default function sitemap(): MetadataRoute.Sitemap {
  // languages saving-satoshi supports
  const languages = ['en', 'es', 'hi', 'nl']
  const sitemapPages: MetadataRoute.Sitemap[] = languages.map((lang) => {
    // sites to crawl
    const urlsToCrawl = ['/about', '/chapters']
    return urlsToCrawl.map((page) => ({
      url: BASE_URL + lang + page,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    }))
  })
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...sitemapPages.flat(1),
  ]
}
