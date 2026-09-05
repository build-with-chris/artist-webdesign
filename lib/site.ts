/**
 * Zentrale Angaben zur Website. Wird von Metadaten, Sitemap, Footer und
 * den strukturierten Daten genutzt, damit eine Aenderung reicht.
 */
export const site = {
  name: 'Artist Webdesign',
  /**
   * Produktivdomain. Ueber NEXT_PUBLIC_SITE_URL setzbar, damit Vorschau-
   * Deployments nicht auf die Live-Domain zeigen.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://artist-webdesign.de',
  email: 'chris.hermann9397@gmail.com',
  phone: '+4915904891419',
  phoneDisplay: '+49 159 04891419',
  owner: 'Christoph Hermann',
  city: 'Finsing',
  country: 'DE',
} as const

export const routes = [
  '/',
  '/services',
  '/portfolio',
  '/process',
  '/about',
  '/start-project',
  '/contact',
  '/imprint',
  '/privacy',
] as const
