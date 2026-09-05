import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Leistungen und Preise',
  description: 'Onepager ab 500 Euro, mehrseitige Website ab 900 Euro. Hosting und Pflege fuer 20 Euro im Monat inklusive Domain. Alle Leistungen im Ueberblick.',
  alternates: { canonical: '/services' },
  openGraph: { title: 'Leistungen und Preise', description: 'Onepager ab 500 Euro, mehrseitige Website ab 900 Euro. Hosting und Pflege fuer 20 Euro im Monat inklusive Domain. Alle Leistungen im Ueberblick.', url: '/services' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
