import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projekte',
  description: 'Websites fuer Artists, eine Event-Location, ein Fotostudio und ein mobiles Showcase-Konzept. Alle Projekte sind online und verlinkt.',
  alternates: { canonical: '/portfolio' },
  openGraph: { title: 'Projekte', description: 'Websites fuer Artists, eine Event-Location, ein Fotostudio und ein mobiles Showcase-Konzept. Alle Projekte sind online und verlinkt.', url: '/portfolio' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
