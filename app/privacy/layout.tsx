import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.',
  alternates: { canonical: '/privacy' },
  openGraph: { title: 'Datenschutz', description: 'Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.', url: '/privacy' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
