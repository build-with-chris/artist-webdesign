'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

interface NavigationProps {
  language: 'de' | 'en'
  onLanguageToggle: () => void
}

export default function Navigation({ language, onLanguageToggle }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [mobileMenuOpen])

  const translations = {
    de: {
      home: 'Home',
      services: 'Leistungen',
      portfolio: 'Projekte',
      process: 'Ablauf',
      about: 'Über mich',
      contact: 'Kontakt',
      cta: 'Projekt starten',
    },
    en: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      process: 'Process',
      about: 'About',
      contact: 'Contact',
      cta: 'Start project',
    }
  }

  const t = translations[language]

  const navLinks = [
    { href: '/', label: t.home }, // Home-Link für beide Menüs
    { href: '/services', label: t.services },
    { href: '/portfolio', label: t.portfolio },
    { href: '/process', label: t.process },
    { href: '/about', label: t.about },
  ]

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black md:bg-black/50 md:backdrop-blur-lg border-b border-zinc-800 md:border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white hover:text-zinc-300 transition-colors">
            Artist Webdesign
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side - Language + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onLanguageToggle}
              className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {language === 'de' ? 'EN' : 'DE'}
            </button>
            <Link
              href="/contact"
              className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors"
            >
              {t.cta}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu - Fullscreen Overlay with Framer Motion */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden fixed inset-0 z-[99999]"
              style={{ 
                backgroundColor: '#000000',
                backdropFilter: 'none',
                WebkitBackdropFilter: 'none',
                opacity: 1,
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                height: '100%'
              }}
            >
              {/* Menu Content */}
              <div 
                className="relative h-full w-full flex flex-col" 
                style={{ 
                  backgroundColor: '#000000',
                  opacity: 1
                }}
              >
                {/* Close Button */}
                <div className="flex justify-end p-6">
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.1 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors hover:bg-white/5 rounded-full"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                {/* Centered Navigation Links */}
                <div className="flex-1 flex flex-col items-center justify-center px-6">
                  <nav className="w-full max-w-md space-y-2">
                    {navLinks.map((link, idx) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ delay: idx * 0.1, duration: 0.4, ease: 'easeOut' }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`group relative block py-4 text-center text-2xl font-semibold transition-all duration-300 ${
                            isActive(link.href)
                              ? 'text-white'
                              : 'text-zinc-500 hover:text-white'
                          }`}
                        >
                          {/* Statischer Glow hinter aktivem Link (bleibt dauerhaft sichtbar) */}
                          {isActive(link.href) && (
                            <span className="absolute inset-0 bg-[#f97316]/20 blur-xl rounded-lg z-0 pointer-events-none" />
                          )}
                          <span className="relative z-10">{link.label}</span>
                        </Link>
                        {/* Divider */}
                        {idx < navLinks.length - 1 && (
                          <div className="h-px bg-zinc-800/50 mt-2" />
                        )}
                      </motion.div>
                    ))}
                  </nav>
                </div>

                {/* Bottom Section - Language & CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="p-6 space-y-4"
                >
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={onLanguageToggle}
                      className="px-6 py-3 text-sm text-zinc-400 hover:text-white transition-all border border-zinc-800 hover:border-zinc-600 rounded-full hover:bg-white/5"
                    >
                      {language === 'de' ? 'EN' : 'DE'}
                    </button>
                  </div>
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-8 py-4 bg-white text-black rounded-full text-base font-semibold hover:bg-zinc-200 transition-all text-center hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                  >
                    {t.cta}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
