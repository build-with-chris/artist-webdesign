import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Schreib mir eine Nachricht, ruf an oder melde dich per WhatsApp. Antwort in der Regel am selben Tag.',
  alternates: { canonical: '/contact' },
  openGraph: { title: 'Kontakt', description: 'Schreib mir eine Nachricht, ruf an oder melde dich per WhatsApp. Antwort in der Regel am selben Tag.', url: '/contact' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
