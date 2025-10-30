import type { Metadata } from 'next'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

export const metadata: Metadata = {
  title: 'Artist Webdesign - Performance meets Code',
  description: 'Websites, die wirken – wie dein Auftritt auf der Bühne. Professionelles Webdesign für Artists.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="bg-dark-bg text-dark-text antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
