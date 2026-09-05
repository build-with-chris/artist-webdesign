'use client'

import { ButtonLink } from './ui/Button'
import Icon from './ui/Icon'

interface CTABlockProps {
  language: 'de' | 'en'
}

/**
 * Schlussaufruf ueber dem Footer. Steht auf jeder Seite und ist damit der
 * verlaessliche Weg in den Fragebogen.
 */
export default function CTABlock({ language }: CTABlockProps) {
  const t = {
    de: {
      eyebrow: 'Nächster Schritt',
      headline: 'Sieh deine Website, bevor du dich entscheidest',
      text: 'Fülle den Fragebogen aus. Du wählst Stil, Farben und Schrift, ich baue daraus einen ersten Entwurf für 40 Euro. Der Betrag wird auf dein Paket angerechnet.',
      button: 'Fragebogen ausfüllen',
      secondary: 'Lieber erst schreiben',
      note: 'Dauert etwa 5 Minuten',
    },
    en: {
      eyebrow: 'Next step',
      headline: 'See your website before you decide',
      text: 'Fill out the questionnaire. You pick style, colours and type, I turn it into a first draft for 40 euros. The amount is credited towards your package.',
      button: 'Fill out questionnaire',
      secondary: 'Rather write first',
      note: 'Takes about 5 minutes',
    },
  }[language]

  return (
    <section className="zone-dark grain relative overflow-hidden">
      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-5 text-eyebrow font-semibold uppercase tracking-[0.15em] text-brand">
            {t.eyebrow}
          </p>
          <h2 className="font-display text-display-md font-normal">{t.headline}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lead text-ink-secondary">{t.text}</p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/start-project" size="lg" arrow>
              {t.button}
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" size="lg">
              {t.secondary}
            </ButtonLink>
          </div>

          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-ink-muted">
            <Icon name="check" size={16} className="text-brand" />
            {t.note}
          </p>
        </div>
      </div>
    </section>
  )
}
