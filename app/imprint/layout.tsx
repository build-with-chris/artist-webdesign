import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Angaben gemaess Paragraf 5 TMG.',
  alternates: { canonical: '/imprint' },
  openGraph: { title: 'Impressum', description: 'Angaben gemaess Paragraf 5 TMG.', url: '/imprint' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
