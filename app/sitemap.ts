import type { MetadataRoute } from 'next'
import { routes, site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return routes.map((path) => ({
    url: `${site.url}${path === '/' ? '' : path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'monthly' : 'yearly',
    priority: path === '/' ? 1 : path === '/start-project' ? 0.9 : 0.7,
  }))
}
