import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ueber mich',
  description: 'Christoph Hermann, Artist und Webentwickler. Warum ich Websites selbst baue und was das fuer dein Projekt bedeutet.',
  alternates: { canonical: '/about' },
  openGraph: { title: 'Ueber mich', description: 'Christoph Hermann, Artist und Webentwickler. Warum ich Websites selbst baue und was das fuer dein Projekt bedeutet.', url: '/about' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
