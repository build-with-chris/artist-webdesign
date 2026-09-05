/**
 * Die veroeffentlichten Projekte. Eine Quelle fuer Startseite und
 * Projektseite, damit beide nicht auseinanderlaufen.
 *
 * width und height sind die echten Bildmasse. Next.js reserviert damit den
 * Platz vor dem Laden, das Layout springt nicht.
 */
export interface Project {
  name: string
  url: string
  /** Was auf der Seite zu sehen ist. Grundlage fuer den Alt-Text. */
  alt: { de: string; en: string }
  description: { de: string; en: string }
  tags: string[]
  image: string
  width: number
  height: number
  /** Auf der Startseite zeigen. */
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: 'Pepearts',
    url: 'https://pepearts.de',
    alt: {
      de: 'Startseite von Pepearts mit grossflaechigem Buehnenfoto und Menue',
      en: 'Pepearts homepage with a full-width stage photo and menu',
    },
    description: {
      de: 'Portfolio für einen vielseitigen Artist. Ruhiges Layout, große Bilder, kurze Ladezeit.',
      en: 'Portfolio for a versatile artist. Calm layout, large images, quick to load.',
    },
    tags: ['Portfolio', 'React', 'Vite'],
    image: '/Portfolio/pepe-arts.webp',
    width: 1600,
    height: 1062,
    featured: true,
  },
  {
    name: 'Pepe Dome',
    url: 'https://pepe-dome.de',
    alt: {
      de: 'Website des Pepe Dome mit Ansicht der Veranstaltungskuppel',
      en: 'Pepe Dome website showing the event dome',
    },
    description: {
      de: 'Website einer Event-Location. Der Fokus liegt auf Atmosphäre und auf Buchungsanfragen.',
      en: 'Website for an event location. Focused on atmosphere and booking requests.',
    },
    tags: ['Event', 'Location', 'Buchung'],
    image: '/Portfolio/pepe-dome.webp',
    width: 1600,
    height: 1168,
    featured: true,
  },
  {
    name: 'No Roots Truck',
    url: 'https://www.no-roots-truck.de/',
    alt: {
      de: 'Website des No Roots Truck mit Aufnahme des umgebauten Fahrzeugs',
      en: 'No Roots Truck website showing the converted vehicle',
    },
    description: {
      de: 'Mobiles Showcase-Konzept. Verbindet Storytelling mit interaktiven Elementen.',
      en: 'A mobile showcase concept. Combines storytelling with interactive elements.',
    },
    tags: ['Showcase', 'React', 'Storytelling'],
    image: '/Portfolio/no-roots-truck.webp',
    width: 1600,
    height: 1137,
    featured: true,
  },
  {
    name: 'Julia Mayr Photography',
    url: 'https://www.juliamayr-photo.com/',
    alt: {
      de: 'Fotografie-Website von Julia Mayr mit Paaraufnahme im Grossformat',
      en: 'Julia Mayr photography website with a large couple portrait',
    },
    description: {
      de: 'Website für Paar- und Hochzeitsfotografie. Ruhige Galerie, viel Raum für die Bilder.',
      en: 'Website for couple and wedding photography. Calm gallery, plenty of room for the images.',
    },
    tags: ['Fotografie', 'Portfolio', 'Next.js'],
    image: '/Portfolio/juliaPhotography.webp',
    width: 1575,
    height: 886,
  },
  {
    name: 'Artist Karlo',
    url: 'https://karlo-theta.vercel.app/',
    alt: {
      de: 'Portfolio-Website von Artist Karlo mit Aufnahme am Cyr Wheel',
      en: 'Artist Karlo portfolio website showing a Cyr Wheel performance',
    },
    description: {
      de: 'Portfolio für einen Cyr Wheel und Aerial Artist. Klare Struktur, starke Bühnenbilder.',
      en: 'Portfolio for a Cyr Wheel and aerial artist. Clear structure, strong stage imagery.',
    },
    tags: ['Portfolio', 'Artist', 'Next.js'],
    image: '/Portfolio/Karlo.webp',
    width: 754,
    height: 954,
  },
]
