import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ablauf',
  description: 'In sieben Etappen von der ersten Nachricht bis zum Launch. Mit Design-Entwurf vor der Entscheidung und klarer Timeline.',
  alternates: { canonical: '/process' },
  openGraph: { title: 'Ablauf', description: 'In sieben Etappen von der ersten Nachricht bis zum Launch. Mit Design-Entwurf vor der Entscheidung und klarer Timeline.', url: '/process' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
