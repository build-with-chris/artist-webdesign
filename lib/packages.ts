/**
 * Die Pakete. Eine Quelle fuer Startseite, Leistungsseite und Fragebogen.
 *
 * Hinweis: Der frueher hinterlegte Zusatz "gilt bis 31.12.2025" beim
 * Basic-Paket ist entfernt, weil das Datum vorbei ist. Eine abgelaufene
 * Frist auf der Seite wirkt wie eine vergessene Baustelle.
 */
export interface Package {
  id: 'basic' | 'advanced' | 'care'
  name: string
  price: { de: string; en: string }
  /** Streichpreis, falls es einen gibt. */
  compare?: { de: string; en: string }
  cadence?: { de: string; en: string }
  tagline: { de: string; en: string }
  features: { de: string; en: string }[]
  featured?: boolean
  /** Nur zusaetzlich zu einem Paket buchbar. */
  addon?: boolean
}

export const packages: Package[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: { de: '500 €', en: '€500' },
    tagline: {
      de: 'Der solide Start: ein klarer Onepager, der alles Wichtige zeigt.',
      en: 'A solid start: one clear page that shows everything that matters.',
    },
    features: [
      { de: 'Startseite, Angebot, Projekte und Kontakt', en: 'Home, services, work and contact' },
      { de: 'Mobil optimiert und für Suchmaschinen aufbereitet', en: 'Mobile optimised and prepared for search engines' },
      { de: 'Schnelle Ladezeiten', en: 'Fast loading times' },
      { de: 'Texte und Bilder lassen sich später leicht tauschen', en: 'Text and images are easy to swap later' },
    ],
  },
  {
    id: 'advanced',
    name: 'Advanced',
    price: { de: '900 €', en: '€900' },
    compare: { de: 'statt 1400 €', en: 'instead of €1400' },
    tagline: {
      de: 'Für mehr Spielraum und Wachstum.',
      en: 'For more room and growth.',
    },
    features: [
      { de: 'Mehrseitige Website oder Anbindung an ein CMS', en: 'Multi-page website or CMS integration' },
      { de: 'Blog, Galerie, Video- oder Buchungsbereiche', en: 'Blog, gallery, video or booking sections' },
      { de: 'Formulare mit Prüfung der Eingaben', en: 'Forms with input validation' },
      { de: 'Analytics, SEO-Feinschliff und Hosting', en: 'Analytics, SEO fine-tuning and hosting' },
    ],
    featured: true,
  },
  {
    id: 'care',
    name: 'Hosting und Pflege',
    price: { de: '20 €', en: '€20' },
    cadence: { de: 'pro Monat', en: 'per month' },
    tagline: {
      de: 'Zusätzlich buchbar. Domain ist enthalten.',
      en: 'Bookable in addition. Domain included.',
    },
    features: [
      { de: 'Hosting auf einem schnellen, zuverlässigen Server', en: 'Hosting on a fast, reliable server' },
      { de: 'Neue Bilder, Texte oder Termine innerhalb von 24 Stunden', en: 'New images, texts or dates within 24 hours' },
      { de: 'SSL-Zertifikat und regelmäßige Sicherheitsupdates', en: 'SSL certificate and regular security updates' },
      { de: 'Du sagst, was du brauchst, ich kümmere mich', en: 'You say what you need, I take care of it' },
    ],
    addon: true,
  },
]
