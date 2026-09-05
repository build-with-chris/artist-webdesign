'use client'

import { ReactNode } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import { LanguageProvider, useLanguage } from './LanguageProvider'

function LayoutContent({ children }: { children: ReactNode }) {
  const { language, toggleLanguage } = useLanguage()

  return (
    <>
      <a href="#main" className="skip-link">
        {language === 'de' ? 'Zum Inhalt springen' : 'Skip to content'}
      </a>
      <Navigation language={language} onLanguageToggle={toggleLanguage} />
      <main id="main">{children}</main>
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
