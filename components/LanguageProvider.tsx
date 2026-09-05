'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Language = 'de' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const STORAGE_KEY = 'aw-language'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('de')

  // Erst nach dem Mounten lesen, sonst weicht der Server-HTML vom Client ab.
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'de' || stored === 'en') {
      setLanguage(stored)
      return
    }
    if (navigator.language.toLowerCase().startsWith('en')) {
      setLanguage('en')
    }
  }, [])

  // Die Wahl merken und das lang-Attribut mitziehen, damit Screenreader
  // und Suchmaschinen die richtige Sprache annehmen.
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => setLanguage((prev) => (prev === 'de' ? 'en' : 'de'))

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
