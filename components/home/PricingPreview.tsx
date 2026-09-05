'use client'

import { Section, SectionHeader } from '../ui/Section'
import { ButtonLink } from '../ui/Button'
import PricingCards from '../PricingCards'

export default function PricingPreview({ language }: { language: 'de' | 'en' }) {
  const t = {
    de: {
      eyebrow: 'Preise',
      title: 'Was es kostet',
      lead: 'Feste Preise, keine versteckten Posten. Was drin ist, steht drin.',
      link: 'Leistungen im Detail',
    },
    en: {
      eyebrow: 'Pricing',
      title: 'What it costs',
      lead: 'Fixed prices, no hidden items. What is included is written down.',
      link: 'Services in detail',
    },
  }[language]

  return (
    <Section id="preise">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead} align="center" />
      <div className="mt-14">
        <PricingCards language={language} variant="compact" />
      </div>
      <div className="mt-10 flex justify-center">
        <ButtonLink href="/services" variant="secondary" size="lg" arrow>
          {t.link}
        </ButtonLink>
      </div>
    </Section>
  )
}
