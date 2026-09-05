'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Icon from './ui/Icon'
import CTABlock from './CTABlock'
import { site } from '@/lib/site'

interface FooterProps {
  language: 'de' | 'en'
}

export default function Footer({ language }: FooterProps) {
  const pathname = usePathname()
  // Auf dem Fragebogen und der Kontaktseite steht der Aufruf schon im
  // Seiteninhalt. Ein zweiter direkt darunter wirkt draengend.
  const showCta = !['/start-project', '/contact'].includes(pathname)

  const t = {
    de: {
      tagline:
        'Individuell entwickelte Websites für Artists und kleine Unternehmen. Schlank, schnell, mobil.',
      sitemap: 'Seiten',
      home: 'Start',
      services: 'Leistungen',
      portfolio: 'Projekte',
      process: 'Ablauf',
      about: 'Über mich',
      getInTouch: 'Kontakt',
      contact: 'Nachricht schreiben',
      startProject: 'Projekt starten',
      legal: 'Rechtliches',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      builtWith: 'Gebaut mit Next.js und React',
    },
    en: {
      tagline:
        'Custom-built websites for artists and small businesses. Lean, fast, mobile.',
      sitemap: 'Pages',
      home: 'Home',
      services: 'Services',
      portfolio: 'Work',
      process: 'Process',
      about: 'About',
      getInTouch: 'Contact',
      contact: 'Send a message',
      startProject: 'Start a project',
      legal: 'Legal',
      imprint: 'Imprint',
      privacy: 'Privacy',
      builtWith: 'Built with Next.js and React',
    },
  }[language]

  const columns = [
    {
      heading: t.sitemap,
      links: [
        { href: '/', label: t.home },
        { href: '/services', label: t.services },
        { href: '/portfolio', label: t.portfolio },
        { href: '/process', label: t.process },
        { href: '/about', label: t.about },
      ],
    },
    {
      heading: t.getInTouch,
      links: [
        { href: '/start-project', label: t.startProject },
        { href: '/contact', label: t.contact },
      ],
    },
    {
      heading: t.legal,
      links: [
        { href: '/imprint', label: t.imprint },
        { href: '/privacy', label: t.privacy },
      ],
    },
  ]

  return (
    <footer className="border-t border-line-subtle bg-surface">
      {showCta && <CTABlock language={language} />}

      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_2fr]">
          {/* Marke und direkte Wege */}
          <div>
            <p className="flex items-baseline gap-1.5 text-base font-semibold tracking-tight">
              Artist <span className="font-display text-xl italic text-brand">Webdesign</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-secondary">
              {t.tagline}
            </p>

            <div className="mt-7 flex flex-col gap-3 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex w-fit items-center gap-2.5 text-ink-secondary transition-colors hover:text-ink"
              >
                <Icon name="mail" size={18} className="text-brand" />
                {site.email}
              </a>
              <a
                href={`tel:${site.phone}`}
                className="group inline-flex w-fit items-center gap-2.5 text-ink-secondary transition-colors hover:text-ink"
              >
                <Icon name="phone" size={18} className="text-brand" />
                {site.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Linkspalten */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.heading}>
                <h2 className="mb-4 text-eyebrow font-semibold uppercase text-ink-muted">
                  {column.heading}
                </h2>
                <ul className="space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink-secondary transition-colors hover:text-brand"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line-subtle pt-7 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.owner} · {site.name}
          </p>
          <p>{t.builtWith}</p>
        </div>
      </div>
    </footer>
  )
}
