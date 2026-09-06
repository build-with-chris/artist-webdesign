'use client'

import { useLanguage } from '@/components/LanguageProvider'
import PageHeader from '@/components/ui/PageHeader'
import { Section, SectionHeader } from '@/components/ui/Section'
import Card, { CardIcon } from '@/components/ui/Card'
import PricingCards from '@/components/PricingCards'
import { ButtonLink } from '@/components/ui/Button'
import Icon, { type IconName } from '@/components/ui/Icon'

export default function ServicesPage() {
  const { language } = useLanguage()

  const t = {
    de: {
      eyebrow: 'Leistungen',
      title: 'Was du bekommst',
      lead: 'Feste Pakete, klare Preise, nichts von der Stange. Was nicht drinsteht, kostet auch nichts.',
      ctaPrimary: 'Projekt starten',
      ctaSecondary: 'Ablauf ansehen',

      pricingEyebrow: 'Pakete',
      pricingTitle: 'Preise auf einen Blick',
      pricingLead: 'Hosting und Pflege sind zusätzlich buchbar und enthalten die Domain.',

      draftEyebrow: 'Vor der Entscheidung',
      draftTitle: 'Design-Entwurf für 40 €',
      draftText: 'Nach dem Fragebogen baue ich einen ersten Entwurf deiner Website. Die 40 Euro werden dir bei Buchung eines Pakets voll angerechnet. Du siehst also das Ergebnis, bevor du dich festlegst.',
      draftPoints: [
        'Erster sichtbarer Entwurf deiner Website',
        '40 Euro werden auf das Paket angerechnet',
        'Keine Verpflichtung zur Zusammenarbeit',
        'Du entscheidest in Ruhe',
      ],
      draftCta: 'Fragebogen ausfüllen',

      featuresEyebrow: 'Im Detail',
      featuresTitle: 'Was in jedem Projekt steckt',
      features: [
        {
          icon: 'palette' as IconName,
          title: 'Individuelles Design',
          text: 'Deine Website wird von Grund auf für dich entwickelt. Kein Template, keine Kompromisse.',
          points: ['Design, das zu dir passt', 'Optimiert für deine Zielgruppe', 'Flexibel erweiterbar'],
        },
        {
          icon: 'bolt' as IconName,
          title: 'Schnelle Umsetzung',
          text: 'Du brauchst deine Website schnell? Ich liefere in ein bis drei Wochen, ohne an der Qualität zu sparen.',
          points: ['Klare Timeline von Anfang an', 'Regelmäßige Updates während der Entwicklung', 'Pünktlicher Launch'],
        },
        {
          icon: 'wrench' as IconName,
          title: 'Pflege und Betreuung',
          text: 'Nach dem Launch kannst du entspannen. Änderungen setze ich innerhalb von 24 Stunden um, Urlaubszeiten kündige ich vorher an.',
          points: ['Änderungen innerhalb von 24 Stunden', 'Technische Wartung und Updates', 'Hosting und SSL-Zertifikat inklusive'],
        },
        {
          icon: 'gauge' as IconName,
          title: 'Technik, die trägt',
          text: 'Gebaut mit React und Next.js. Schnelle Ladezeiten, saubere Struktur, keine Plugin-Abhängigkeiten.',
          points: ['Kurze Ladezeiten', 'Für Suchmaschinen aufbereitet', 'Sicher ohne Plugin-Wildwuchs'],
        },
        {
          icon: 'phone-mobile' as IconName,
          title: 'Zuerst fürs Handy',
          text: 'Die meisten Besucher kommen vom Telefon. Deshalb entsteht das Layout dort zuerst und wächst dann nach oben.',
          points: ['Bedienbar mit einer Hand', 'Bilder in passender Größe', 'Getestet auf echten Geräten'],
        },
        {
          icon: 'shield' as IconName,
          title: 'Rechtliches mitgedacht',
          text: 'Impressum, Datenschutz und Formulare mit Spamschutz gehören dazu. Die Inhalte stimmen wir gemeinsam ab.',
          points: ['Impressum und Datenschutz eingebunden', 'Formulare mit Spamschutz', 'SSL-Verschlüsselung'],
        },
      ],
    },
    en: {
      eyebrow: 'Services',
      title: 'What you get',
      lead: 'Fixed packages, clear prices, nothing off the shelf. What is not listed does not cost anything either.',
      ctaPrimary: 'Start a project',
      ctaSecondary: 'See the process',

      pricingEyebrow: 'Packages',
      pricingTitle: 'Prices at a glance',
      pricingLead: 'Hosting and maintenance can be added and include the domain.',

      draftEyebrow: 'Before you decide',
      draftTitle: 'Design draft for €40',
      draftText: 'After the questionnaire I build a first draft of your website. The 40 euros are fully credited when you book a package. So you see the result before you commit.',
      draftPoints: [
        'A first visible draft of your website',
        '40 euros credited towards the package',
        'No obligation to work together',
        'You decide at your own pace',
      ],
      draftCta: 'Fill out questionnaire',

      featuresEyebrow: 'In detail',
      featuresTitle: 'What every project includes',
      features: [
        {
          icon: 'palette' as IconName,
          title: 'Custom design',
          text: 'Your website is built from scratch for you. No template, no compromises.',
          points: ['Design that fits you', 'Optimised for your audience', 'Room to grow'],
        },
        {
          icon: 'bolt' as IconName,
          title: 'Fast delivery',
          text: 'Need your website quickly? I deliver in one to three weeks without cutting quality.',
          points: ['Clear timeline from the start', 'Regular updates during development', 'On-time launch'],
        },
        {
          icon: 'wrench' as IconName,
          title: 'Maintenance and support',
          text: 'After launch you can relax. I make changes within 24 hours and announce holidays in advance.',
          points: ['Changes within 24 hours', 'Technical maintenance and updates', 'Hosting and SSL certificate included'],
        },
        {
          icon: 'gauge' as IconName,
          title: 'Technology that holds up',
          text: 'Built with React and Next.js. Fast loading, clean structure, no plugin dependencies.',
          points: ['Short loading times', 'Prepared for search engines', 'Safe without plugin sprawl'],
        },
        {
          icon: 'phone-mobile' as IconName,
          title: 'Mobile first',
          text: 'Most visitors arrive on a phone. So the layout starts there and grows upwards from it.',
          points: ['Usable with one hand', 'Images at the right size', 'Tested on real devices'],
        },
        {
          icon: 'shield' as IconName,
          title: 'Legal basics covered',
          text: 'Imprint, privacy policy and forms with spam protection are part of it. We agree on the content together.',
          points: ['Imprint and privacy policy included', 'Forms with spam protection', 'SSL encryption'],
        },
      ],
    },
  }[language]

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/start-project" size="lg" arrow>
            {t.ctaPrimary}
          </ButtonLink>
          <ButtonLink href="/process" variant="secondary" size="lg">
            {t.ctaSecondary}
          </ButtonLink>
        </div>
      </PageHeader>

      {/* Pakete zuerst: Preise sind die haeufigste Frage. */}
      <Section id="pakete">
        <SectionHeader
          eyebrow={t.pricingEyebrow}
          title={t.pricingTitle}
          lead={t.pricingLead}
          align="center"
        />
        <div className="mt-14">
          <PricingCards language={language} />
        </div>
      </Section>

      {/* Der Entwurf als eigener Block */}
      <section className="grain relative overflow-hidden border-y border-line-subtle bg-surface-sunk py-20 md:py-24">
        <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="mb-4 flex items-center gap-2.5 text-eyebrow font-semibold uppercase text-brand">
                <span aria-hidden className="h-px w-6 bg-brand/60" />
                {t.draftEyebrow}
              </p>
              <h2 className="font-display text-display-md font-normal">{t.draftTitle}</h2>
              <p className="mt-5 max-w-prose text-lead text-ink-secondary">{t.draftText}</p>
              <ButtonLink href="/start-project" size="lg" arrow className="mt-8">
                {t.draftCta}
              </ButtonLink>
            </div>

            <ul className="space-y-3 rounded-lg border border-line-subtle bg-surface-raised p-7">
              {t.draftPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-ink-secondary">
                  <Icon name="check" size={16} className="mt-0.5 shrink-0 text-brand" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Alle Leistungsbausteine */}
      <Section>
        <SectionHeader eyebrow={t.featuresEyebrow} title={t.featuresTitle} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 sm:grid-rows-[auto_auto_1fr_auto] lg:grid-cols-3">
          {t.features.map((feature) => (
            <Card
              key={feature.title}
              interactive
              className="sm:row-span-4 sm:grid sm:grid-rows-subgrid"
            >
              <CardIcon>
                <Icon name={feature.icon} size={22} />
              </CardIcon>
              <h3 className="text-lg font-semibold tracking-tight">{feature.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-secondary">{feature.text}</p>
              <ul className="mt-6 space-y-2.5 border-t border-line-subtle pt-6">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-ink-secondary">
                    <Icon name="check" size={16} className="mt-0.5 shrink-0 text-brand" />
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
