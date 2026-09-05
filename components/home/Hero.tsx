'use client'

import { ButtonLink } from '../ui/Button'
import Icon from '../ui/Icon'

/**
 * Der Hero traegt jetzt auf jeder Bildschirmbreite dieselbe Ueberschrift.
 * Vorher war die h1 nur auf dem Handy im Markup, auf dem Desktop sah der
 * Besucher nur einen Fliesstext und Suchmaschinen fanden keine Hauptzeile.
 *
 * Das Hintergrundbild kommt als natives picture-Element. Vorher lagen drei
 * img-Tags uebereinander, die per CSS ausgeblendet wurden: der Browser hat
 * alle drei geladen, also rund 400 KB statt 50 KB auf dem Handy.
 */
export default function Hero({ language }: { language: 'de' | 'en' }) {
  const t = {
    de: {
      badge: 'Plätze für 2026 frei',
      title1: 'Deine Website,',
      titleAccent: 'handgebaut',
      title2: 'statt Baukasten.',
      lead: 'Ich entwickle Websites für Artists und kleine Unternehmen. Individuell im Design, schnell im Laden, sauber auf dem Handy. Persönlich betreut vom ersten Gespräch bis nach dem Launch.',
      primary: 'Projekt starten',
      secondary: 'Projekte ansehen',
      alt: '',
      proof: [
        { icon: 'gauge' as const, label: 'Schnelle Ladezeiten statt Plugin-Ballast' },
        { icon: 'phone-mobile' as const, label: 'Für das Handy gebaut, nicht angepasst' },
        { icon: 'chat' as const, label: 'Ein Ansprechpartner, keine Agentur' },
      ],
    },
    en: {
      badge: 'Slots open for 2026',
      title1: 'Your website,',
      titleAccent: 'hand built',
      title2: 'not assembled.',
      lead: 'I build websites for artists and small businesses. Custom in design, quick to load, clean on mobile. Personally handled from the first call to well after launch.',
      primary: 'Start a project',
      secondary: 'See the work',
      alt: '',
      proof: [
        { icon: 'gauge' as const, label: 'Fast loading instead of plugin ballast' },
        { icon: 'phone-mobile' as const, label: 'Built for mobile, not retrofitted' },
        { icon: 'chat' as const, label: 'One contact, no agency layers' },
      ],
    },
  }[language]

  return (
    <header className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 sm:pb-20 md:min-h-[92vh] md:items-center md:pb-24 md:pt-32">
      <picture className="absolute inset-0 -z-10">
        <source media="(min-width: 1024px)" srcSet="/Hero 16:9.webp" />
        <source media="(min-width: 640px)" srcSet="/Hero 3:2.webp" />
        <img
          src="/Hero LP mobile.webp"
          alt=""
          width={1092}
          height={1366}
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
      </picture>

      {/* Zwei Verlaeufe: seitlich fuer die Textspalte, unten fuer den
          Uebergang in den naechsten Abschnitt. So bleibt rechts vom Text
          etwas vom Bild sichtbar, statt es voellig zuzudecken. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(100deg, rgb(var(--surface-base)) 0%, rgb(var(--surface-base) / 0.97) 52%, rgb(var(--surface-base) / 0.86) 70%, rgb(var(--surface-base) / 0.45) 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-surface via-surface/35 to-surface/65"
      />
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-60" />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-white/[0.06] px-3.5 py-1.5 text-xs font-medium text-ink-secondary backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            {t.badge}
          </p>

          <h1 className="text-display-xl font-semibold">
            {t.title1}{' '}
            <span className="font-display font-normal italic text-brand">{t.titleAccent}</span>
            <br />
            {t.title2}
          </h1>

          <p className="mt-7 max-w-xl text-lead text-ink-secondary">{t.lead}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/start-project" size="lg" arrow>
              {t.primary}
            </ButtonLink>
            <ButtonLink href="/portfolio" variant="secondary" size="lg">
              {t.secondary}
            </ButtonLink>
          </div>

          {/* Drei knappe Argumente statt einer reinen Technikzeile */}
          <ul className="mt-12 grid gap-3 sm:grid-cols-3 sm:gap-5">
            {t.proof.map((item) => (
              <li key={item.label} className="flex items-start gap-2.5">
                <Icon name={item.icon} size={18} className="mt-0.5 shrink-0 text-brand" />
                <span className="text-sm leading-snug text-ink-secondary">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-line-strong p-1.5">
          <span className="h-1.5 w-1 animate-scroll-hint rounded-full bg-brand" />
        </span>
      </div>
    </header>
  )
}
