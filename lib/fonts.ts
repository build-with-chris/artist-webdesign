import {
  Inter,
  Playfair_Display,
  Montserrat,
  Poppins,
  Space_Mono,
  Roboto,
} from 'next/font/google'

/**
 * Schriften fuer die Vorschau im Fragebogen.
 *
 * Vorher standen dort nur Namen wie "Playfair Display" in einer
 * font-family. Da die Schriften nicht geladen waren, sah der Kunde in allen
 * sechs Kacheln dieselbe Systemschrift und traf seine Wahl im Blindflug.
 * Jetzt wird jede Schrift wirklich geladen.
 *
 * preload steht auf false: Die Vorschau steht in Schritt zwei des
 * Fragebogens, die Schriften duerfen also nachladen, statt den ersten
 * Aufbau zu bremsen.
 *
 * Die Aufrufe muessen ausgeschrieben stehen: next/font wertet die
 * Argumente beim Bauen statisch aus und akzeptiert keine Variablen.
 */
export const previewInter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: ['400', '600'],
})

export const previewPlayfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: ['400', '600'],
})

export const previewMontserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: ['600', '800'],
})

export const previewRoboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: ['400', '500'],
})

export const previewPoppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: ['400', '600'],
})

export const previewSpaceMono = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  weight: ['400', '700'],
})

/** Ordnet den Auswahlwert der geladenen Schrift zu. */
export const previewFontClass: Record<string, string> = {
  clean: previewInter.className,
  elegant: previewPlayfair.className,
  bold: previewMontserrat.className,
  minimal: previewRoboto.className,
  creative: previewPoppins.className,
  tech: previewSpaceMono.className,
}
