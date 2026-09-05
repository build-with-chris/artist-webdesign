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
  /** Handy-Ansicht derselben Seite, 780 px breit. */
  mobileImage: string
  mobileWidth: number
  mobileHeight: number
  /**
   * Freigestelltes Kundenlogo. Fehlt es, wird der Name gesetzt gezeigt.
   * Fuer No Roots Truck liegt keines vor.
   */
  logo?: string
  logoWidth?: number
  logoHeight?: number
  /** Darstellungshoehe in px, ausgeglichen nach Flaeche. */
  logoDisplayHeight?: number
  /** Auf der Startseite zeigen. */
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: 'Pepearts',
    url: 'https://pepearts.de',
    alt: {
      de: 'Startseite von Pepearts mit dem Titel Pepe Collective ueber einer Aufnahme zweier Artistinnen',
      en: 'Pepearts homepage titled Pepe Collective over a photo of two performers',
    },
    description: {
      de: 'Portfolio für einen vielseitigen Artist. Ruhiges Layout, große Bilder, kurze Ladezeit.',
      en: 'Portfolio for a versatile artist. Calm layout, large images, quick to load.',
    },
    tags: ['Portfolio', 'React', 'Vite'],
    image: '/Portfolio/pepe-arts.webp',
    width: 1600,
    height: 889,
    mobileImage: '/Portfolio/mobil/pepe-arts.webp',
    mobileWidth: 780,
    mobileHeight: 1788,
    logo: '/logos/pepearts.webp',
    logoWidth: 452,
    logoHeight: 240,
    logoDisplayHeight: 28,
    featured: true,
  },
  {
    name: 'Pepe Dome',
    url: 'https://pepe-dome.de',
    alt: {
      de: 'Startseite des Pepe Dome mit der Zeile Erlebe Artistik hautnah auf dunklem Grund',
      en: 'Pepe Dome homepage with the line Erlebe Artistik hautnah on a dark background',
    },
    description: {
      de: 'Website einer Event-Location. Der Fokus liegt auf Atmosphäre und auf Buchungsanfragen.',
      en: 'Website for an event location. Focused on atmosphere and booking requests.',
    },
    tags: ['Event', 'Location', 'Buchung'],
    image: '/Portfolio/pepe-dome.webp',
    width: 1600,
    height: 889,
    mobileImage: '/Portfolio/mobil/pepe-dome.webp',
    mobileWidth: 780,
    mobileHeight: 1774,
    logo: '/logos/pepe-dome.webp',
    logoWidth: 401,
    logoHeight: 240,
    logoDisplayHeight: 30,
    featured: true,
  },
  {
    name: 'No Roots Truck',
    url: 'https://www.no-roots-truck.de/',
    alt: {
      de: 'Startseite des No Roots Truck mit dem umgebauten roten Lastwagen im Abendlicht',
      en: 'No Roots Truck homepage showing the converted red truck at dusk',
    },
    description: {
      de: 'Mobiles Showcase-Konzept. Verbindet Storytelling mit interaktiven Elementen.',
      en: 'A mobile showcase concept. Combines storytelling with interactive elements.',
    },
    tags: ['Showcase', 'React', 'Storytelling'],
    image: '/Portfolio/no-roots-truck.webp',
    width: 1600,
    height: 889,
    mobileImage: '/Portfolio/mobil/no-roots-truck.webp',
    mobileWidth: 780,
    mobileHeight: 1780,
    featured: true,
  },
  {
    name: 'Julia Mayr Photography',
    url: 'https://www.juliamayr-photo.com/',
    alt: {
      de: 'Startseite von Julia Mayr Photography mit einer Galerie aus Schwarzweissaufnahmen',
      en: 'Julia Mayr Photography homepage with a gallery of black and white images',
    },
    description: {
      de: 'Website für Paar- und Hochzeitsfotografie. Ruhige Galerie, viel Raum für die Bilder.',
      en: 'Website for couple and wedding photography. Calm gallery, plenty of room for the images.',
    },
    tags: ['Fotografie', 'Portfolio', 'Next.js'],
    image: '/Portfolio/julia-mayr.webp',
    width: 1600,
    height: 889,
    mobileImage: '/Portfolio/mobil/julia-mayr.webp',
    mobileWidth: 780,
    mobileHeight: 1766,
    logo: '/logos/julia-mayr.webp',
    logoWidth: 824,
    logoHeight: 240,
    logoDisplayHeight: 25,
  },
  {
    name: 'Artist Karlo',
    url: 'https://karlo-theta.vercel.app/',
    alt: {
      de: 'Startseite von Artist Karlo mit einer Aufnahme im rotierenden Cyr Wheel',
      en: 'Artist Karlo homepage showing a performance inside a spinning Cyr Wheel',
    },
    description: {
      de: 'Portfolio für einen Cyr Wheel und Aerial Artist. Klare Struktur, starke Bühnenbilder.',
      en: 'Portfolio for a Cyr Wheel and aerial artist. Clear structure, strong stage imagery.',
    },
    tags: ['Portfolio', 'Artist', 'Next.js'],
    image: '/Portfolio/karlo.webp',
    width: 1600,
    height: 889,
    mobileImage: '/Portfolio/mobil/karlo.webp',
    mobileWidth: 780,
    mobileHeight: 1800,
    logo: '/logos/karlo.webp',
    logoWidth: 378,
    logoHeight: 240,
    logoDisplayHeight: 32,
  },
]
