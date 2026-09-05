'use client'

import Icon from './ui/Icon'
import { ButtonLink } from './ui/Button'
import { packages } from '@/lib/packages'

interface PricingCardsProps {
  language: 'de' | 'en'
  /** compact laesst den Aufruf je Karte weg, etwa auf der Startseite. */
  variant?: 'full' | 'compact'
}

export default function PricingCards({ language, variant = 'full' }: PricingCardsProps) {
  const label = {
    de: { popular: 'Meist gewählt', cta: 'Dieses Paket anfragen', addon: 'Zusatz' },
    en: { popular: 'Most chosen', cta: 'Request this package', addon: 'Add-on' },
  }[language]

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {packages.map((pkg) => (
        <div
          key={pkg.id}
          className={[
            'relative flex flex-col rounded-lg border p-7 sm:p-8',
            pkg.featured
              ? 'border-brand/40 bg-gradient-to-b from-brand/[0.1] to-surface-raised shadow-lifted'
              : 'border-line-subtle bg-surface-raised',
          ].join(' ')}
        >
          {pkg.featured && (
            <span className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-on-brand">
              {label.popular}
            </span>
          )}
          {pkg.addon && (
            <span className="absolute -top-3 left-7 rounded-full border border-line-strong bg-surface-sunk px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-ink-secondary">
              {label.addon}
            </span>
          )}

          <h3 className="text-lg font-semibold tracking-tight">{pkg.name}</h3>

          <p className="mt-4 flex items-baseline gap-2">
            <span className="text-4xl font-semibold tracking-tight">{pkg.price[language]}</span>
            {pkg.cadence && (
              <span className="text-sm text-ink-muted">{pkg.cadence[language]}</span>
            )}
            {pkg.compare && (
              <span className="text-sm text-ink-muted line-through">{pkg.compare[language]}</span>
            )}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-ink-secondary">
            {pkg.tagline[language]}
          </p>

          <ul className="mt-7 flex-1 space-y-3 border-t border-line-subtle pt-7">
            {pkg.features.map((feature) => (
              <li
                key={feature.de}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-secondary"
              >
                <Icon
                  name="check"
                  size={16}
                  className={`mt-0.5 shrink-0 ${pkg.featured ? 'text-brand' : 'text-brand/70'}`}
                />
                {feature[language]}
              </li>
            ))}
          </ul>

          {variant === 'full' && !pkg.addon && (
            <ButtonLink
              href="/start-project"
              variant={pkg.featured ? 'primary' : 'secondary'}
              size="lg"
              arrow
              className="mt-8 w-full"
            >
              {label.cta}
            </ButtonLink>
          )}
        </div>
      ))}
    </div>
  )
}
