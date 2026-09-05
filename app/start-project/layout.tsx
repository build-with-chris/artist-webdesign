import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projekt starten',
  description: 'Fragebogen in drei Schritten. Waehle Stil, Farben und Schrift, ich baue daraus einen ersten Design-Entwurf fuer 40 Euro.',
  alternates: { canonical: '/start-project' },
  openGraph: { title: 'Projekt starten', description: 'Fragebogen in drei Schritten. Waehle Stil, Farben und Schrift, ich baue daraus einen ersten Design-Entwurf fuer 40 Euro.', url: '/start-project' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
