'use client'

import Link from 'next/link'
import CTABlock from './CTABlock'

interface FooterProps {
  language: 'de' | 'en'
}

export default function Footer({ language }: FooterProps) {
  const translations = {
    de: {
      home: 'Home ',
      services: 'Leistungen',
      process: 'Ablauf',
      about: 'Über mich',
      contact: 'Kontakt',
      legal: 'Rechtliches',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      copyright: 'Artist Webdesign – schlank, schnell, mobil.',
    },
    en: {
      home: 'Home',
      services: 'Services',
      process: 'Process',
      about: 'About',
      contact: 'Contact',
      legal: 'Legal',
      imprint: 'Imprint',
      privacy: 'Privacy',
      copyright: 'Artist Web Design – lean, fast, mobile.',
    }
  }

  const t = translations[language]

  const navLinks = [
    { href: '/', label: t.home },
    { href: '/services', label: t.services },
    { href: '/process', label: t.process },
    { href: '/about', label: t.about },
    { href: '/contact', label: t.contact },
  ]

  return (
    <footer className="bg-dark-bg border-t border-dark-text/10">
      {/* CTA Section */}
      <CTABlock language={language} variant="footer" />

      {/* Footer Links */}
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">

            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold text-dark-text mb-4">
                Artist Webdesign
              </h3>
              <p className="text-dark-text/60 leading-relaxed">
                {t.copyright}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-sm font-semibold text-dark-text/80 uppercase tracking-wider mb-4">
                Navigation
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-dark-text/60 hover:text-dark-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-dark-text/80 uppercase tracking-wider mb-4">
                {t.legal}
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/imprint"
                    className="text-dark-text/60 hover:text-dark-accent transition-colors"
                  >
                    {t.imprint}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-dark-text/60 hover:text-dark-accent transition-colors"
                  >
                    {t.privacy}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-dark-text/10 text-center">
            <p className="text-dark-text/40 text-sm">
              © {new Date().getFullYear()} {t.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
