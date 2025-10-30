'use client'

import { ReactNode } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import { LanguageProvider, useLanguage } from './LanguageProvider'

function LayoutContent({ children }: { children: ReactNode }) {
  const { language, toggleLanguage } = useLanguage()

  return (
    <>
      <Navigation language={language} onLanguageToggle={toggleLanguage} />
      <div className="pt-16">{children}</div>
      <Footer language={language} />
    </>
  )
}

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <LayoutContent>{children}</LayoutContent>
    </LanguageProvider>
  )
}
