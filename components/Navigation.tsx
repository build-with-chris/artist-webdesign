'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from './ui/Icon'
import { ButtonLink } from './ui/Button'

interface NavigationProps {
  language: 'de' | 'en'
  onLanguageToggle: () => void
}

export default function Navigation({ language, onLanguageToggle }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Die Leiste startet transparent ueber dem Hero und legt sich erst beim
  // Scrollen als Flaeche darueber. Das gibt dem Bild oben mehr Raum.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Hintergrund nicht mitscrollen lassen, solange das Menue offen ist.
  useEffect(() => {
    if (!mobileMenuOpen) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [mobileMenuOpen])

  // Escape schliesst das Menue.
  useEffect(() => {
    if (!mobileMenuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMobileMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileMenuOpen])

  // Beim Seitenwechsel schliessen.
  useEffect(() => setMobileMenuOpen(false), [pathname])

  const t = {
    de: {
      home: 'Start',
      services: 'Leistungen',
      portfolio: 'Projekte',
      process: 'Ablauf',
      about: 'Über mich',
      contact: 'Kontakt',
      cta: 'Projekt starten',
      menu: 'Menü öffnen',
      close: 'Menü schließen',
      switch: 'Switch to English',
    },
    en: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Work',
      process: 'Process',
      about: 'About',
      contact: 'Contact',
      cta: 'Start project',
      menu: 'Open menu',
      close: 'Close menu',
      switch: 'Auf Deutsch wechseln',
    },
  }[language]

  const navLinks = [
    { href: '/services', label: t.services },
    { href: '/portfolio', label: t.portfolio },
    { href: '/process', label: t.process },
    { href: '/about', label: t.about },
    { href: '/contact', label: t.contact },
  ]

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path)

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out ${
          scrolled
            ? 'border-b border-line-subtle bg-surface/85 backdrop-blur-xl'
            : 'border-b border-transparent'
        }`}
      >
      <nav
        aria-label={language === 'de' ? 'Hauptnavigation' : 'Main navigation'}
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8 md:h-[4.5rem]"
      >
        {/* Wortmarke */}
        <Link
          href="/"
          className="group flex items-baseline gap-1.5 text-[0.95rem] font-semibold tracking-tight text-ink"
        >
          Artist
          <span className="font-display text-lg italic text-brand transition-colors group-hover:text-brand-soft">
            Webdesign
          </span>
        </Link>

        {/* Links, ab Tablet */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${
                  isActive(link.href)
                    ? 'text-ink'
                    : 'text-ink-secondary hover:text-ink'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span
                    aria-hidden
                    className="absolute inset-x-3.5 -bottom-0.5 h-px bg-brand"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={onLanguageToggle}
            aria-label={t.switch}
            className="rounded-full border border-line-subtle px-3 py-1.5 text-xs font-semibold tracking-wide text-ink-secondary transition-colors hover:border-line-strong hover:text-ink"
          >
            {language === 'de' ? 'EN' : 'DE'}
          </button>

          <ButtonLink href="/start-project" size="md" arrow className="hidden sm:inline-flex">
            {t.cta}
          </ButtonLink>

          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label={t.menu}
            aria-expanded={mobileMenuOpen}
            className="-mr-1 flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-white/5 md:hidden"
          >
            <Icon name="menu" />
          </button>
        </div>
        </nav>
      </header>

      {/* Vollbildmenue auf dem Handy. Bewusst ausserhalb des header, damit
          inset-0 sich auf das Fenster bezieht und nicht auf die Leiste. */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={language === 'de' ? 'Navigation' : 'Navigation'}
            className="fixed inset-0 z-[100] flex flex-col bg-surface md:hidden"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <span className="text-[0.95rem] font-semibold tracking-tight">
                Artist <span className="font-display text-lg italic text-brand">Webdesign</span>
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label={t.close}
                className="-mr-1 flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-white/5"
              >
                <Icon name="close" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center px-5">
              <ul>
                {[{ href: '/', label: t.home }, ...navLinks].map((link, idx) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.3, ease: 'easeOut' }}
                    className="border-b border-line-subtle last:border-0"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={isActive(link.href) ? 'page' : undefined}
                      className={`flex items-center justify-between py-4 text-2xl font-medium tracking-tight transition-colors ${
                        isActive(link.href) ? 'text-brand' : 'text-ink hover:text-brand-soft'
                      }`}
                    >
                      {link.label}
                      <Icon name="arrow-right" size={20} className="opacity-40" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="space-y-3 px-5 pb-10">
              <ButtonLink
                href="/start-project"
                size="lg"
                arrow
                className="w-full"
              >
                {t.cta}
              </ButtonLink>
              <p className="text-center text-sm text-ink-muted">
                {language === 'de'
                  ? 'Antwort in der Regel am selben Tag'
                  : 'Usually answered the same day'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
