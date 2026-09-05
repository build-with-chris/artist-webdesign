import type { Metadata, Viewport } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'
import { site } from '@/lib/site'

// Inter traegt saemtliche Lauftexte und die Bedienelemente.
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

// Instrument Serif setzt Akzente in Ueberschriften. Bewusst sparsam,
// damit der Kontrast zur Sans wirkt.
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Artist Webdesign – Websites für Artists und kleine Unternehmen',
    template: `%s – ${site.name}`,
  },
  description:
    'Individuell entwickelte Websites statt Baukasten. Schnell, mobil optimiert und persönlich betreut. Erster Design-Entwurf für 40 Euro, anrechenbar auf jedes Paket.',
  keywords: [
    'Webdesign',
    'Website für Künstler',
    'Webentwicklung',
    'Next.js',
    'Onepager',
    'Website erstellen lassen',
  ],
  authors: [{ name: site.owner }],
  creator: site.owner,
  alternates: {
    canonical: '/',
    languages: { 'de-DE': '/', 'en-US': '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: site.url,
    siteName: site.name,
    title: 'Artist Webdesign – Websites für Artists und kleine Unternehmen',
    description:
      'Individuell entwickelte Websites statt Baukasten. Schnell, mobil optimiert und persönlich betreut.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artist Webdesign',
    description: 'Individuell entwickelte Websites statt Baukasten.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export const viewport: Viewport = {
  themeColor: '#0c0c0e',
  colorScheme: 'dark',
}

// Strukturierte Daten. Hilft Suchmaschinen, das Angebot einzuordnen.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.name,
  description: 'Individuell entwickelte Websites für Artists und kleine Unternehmen.',
  url: site.url,
  email: site.email,
  telephone: site.phone,
  founder: { '@type': 'Person', name: site.owner },
  areaServed: { '@type': 'Country', name: 'Deutschland' },
  address: { '@type': 'PostalAddress', addressLocality: site.city, addressCountry: site.country },
  priceRange: '€€',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="bg-surface font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
