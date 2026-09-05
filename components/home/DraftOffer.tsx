'use client'

import { ButtonLink } from '../ui/Button'
import Icon from '../ui/Icon'

/**
 * Das Angebot, das die Website von anderen unterscheidet: ein bezahlter,
 * aber anrechenbarer Entwurf vor der Entscheidung. Deshalb bekommt es einen
 * eigenen, klar abgesetzten Block.
 */
export default function DraftOffer({ language }: { language: 'de' | 'en' }) {
  const t = {
    de: {
      eyebrow: 'Das Besondere',
      title: 'Erst sehen, dann entscheiden',
      text: 'Nach dem Fragebogen baue ich einen ersten Design-Entwurf deiner Website. Er kostet 40 Euro und wird dir bei Buchung eines Pakets voll angerechnet. Du siehst also, wie deine Seite aussehen wird, bevor du dich festlegst.',
      points: [
        'Erster sichtbarer Entwurf deiner Website',
        'Die 40 Euro werden auf das Paket angerechnet',
        'Keine Verpflichtung zur Zusammenarbeit',
        'Du entscheidest in Ruhe',
      ],
      cta: 'Entwurf für 40 € anfragen',
      price: '40 €',
      priceNote: 'anrechenbar',
    },
    en: {
      eyebrow: 'What makes this different',
      title: 'See first, decide later',
      text: 'After the questionnaire I build a first design draft of your website. It costs 40 euros and is fully credited when you book a package. So you see how your site will look before you commit.',
      points: [
        'A first visible draft of your website',
        'The 40 euros are credited towards the package',
        'No obligation to work together',
        'You decide at your own pace',
      ],
      cta: 'Request a draft for €40',
      price: '€40',
      priceNote: 'credited back',
    },
  }[language]

  return (
    <section className="relative overflow-hidden border-y border-line-subtle bg-surface-raised/40 py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-brand/15 blur-[110px]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <p className="mb-4 flex items-center gap-2.5 text-eyebrow font-semibold uppercase text-brand">
              <span aria-hidden className="h-px w-6 bg-brand/60" />
              {t.eyebrow}
            </p>
            <h2 className="text-display-md font-semibold">{t.title}</h2>
            <p className="mt-5 max-w-prose text-lead text-ink-secondary">{t.text}</p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                  <Icon name="check" size={16} className="mt-0.5 shrink-0 text-brand" />
                  {point}
                </li>
              ))}
            </ul>

            <ButtonLink href="/start-project" size="lg" arrow className="mt-9">
              {t.cta}
            </ButtonLink>
          </div>

          {/* Preisschild als ruhiger Blickfang */}
          <div className="edge-highlight relative rounded-xl border border-brand/30 bg-surface-raised p-10 text-center">
            <p className="font-display text-7xl italic leading-none text-brand">{t.price}</p>
            <p className="mt-4 text-sm uppercase tracking-[0.16em] text-ink-muted">
              {t.priceNote}
            </p>
            <div className="mt-8 border-t border-line-subtle pt-8">
              <p className="text-sm leading-relaxed text-ink-secondary">
                {language === 'de'
                  ? 'Buchst du danach ein Paket, zahlst du die 40 Euro faktisch nicht.'
                  : 'Book a package afterwards and the 40 euros effectively cost you nothing.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
