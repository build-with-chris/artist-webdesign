'use client'

import { ButtonLink } from '../ui/Button'
import Icon from '../ui/Icon'

/**
 * Der Hero traegt auf jeder Bildschirmbreite dieselbe Ueberschrift.
 * Vorher war die h1 nur auf dem Handy im Markup, auf dem Desktop sah der
 * Besucher nur einen Fliesstext und Suchmaschinen fanden keine Hauptzeile.
 *
 * Das Bild kommt als natives picture-Element, damit der Browser genau
 * einen der drei Zuschnitte laedt. Die Abdunkelung ist so gewaehlt, dass
 * Holz und Kaminfeuer sichtbar bleiben: Das Bild ist die Waerme, die die
 * Seite tragen soll, es zuzudecken waere Verschwendung.
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
      proof: [
        { icon: 'gauge' as const, label: 'Fast loading instead of plugin ballast' },
        { icon: 'phone-mobile' as const, label: 'Built for mobile, not retrofitted' },
        { icon: 'chat' as const, label: 'One contact, no agency layers' },
      ],
    },
  }[language]

  return (
    <section className="zone-dark relative isolate flex min-h-[88svh] items-end overflow-hidden pb-16 pt-28 sm:pb-20 md:min-h-[86vh] md:items-center md:pb-24 md:pt-32">
      <picture className="absolute inset-0 -z-10">
        <source media="(min-width: 1024px)" srcSet="/hero-desktop.webp" />
        <source media="(min-width: 640px)" srcSet="/hero-tablet.webp" />
        <img
          src="/hero-mobile.webp"
          alt=""
          width={752}
          height={941}
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
      </picture>

      {/* Seitlicher Verlauf fuer die Textspalte, dazu ein sanfter Auslauf
          nach unten. Rechts bleibt das Bild deutlich sichtbar. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(96deg, rgb(var(--surface-base) / 0.96) 0%, rgb(var(--surface-base) / 0.93) 34%, rgb(var(--surface-base) / 0.66) 56%, rgb(var(--surface-base) / 0.22) 100%)',
        }}
      />
      {/* Zweiter Verlauf von oben und unten: daempft die Lampe und den
          Bilderrahmen hinter der Ueberschrift, laesst die Bildmitte mit
          Kaminfeuer und Person frei. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-surface/70 via-transparent to-surface"
      />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line-strong px-3.5 py-1.5 text-xs font-medium text-ink-secondary backdrop-blur-sm">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand" />
            {t.badge}
          </p>

          <h1 className="font-display text-display-xl font-normal">
            {t.title1}{' '}
            <span className="italic text-brand">{t.titleAccent}</span>
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
    </section>
  )
}
