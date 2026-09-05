'use client'

import { Section, SectionHeader } from '../ui/Section'
import Card, { CardIcon } from '../ui/Card'
import { ButtonLink } from '../ui/Button'
import Icon, { type IconName } from '../ui/Icon'

export default function Services({ language }: { language: 'de' | 'en' }) {
  const t = {
    de: {
      eyebrow: 'Leistungen',
      title: 'Drei Dinge, auf die du dich verlassen kannst',
      lead: 'Kein Baukasten, keine Vorlage von der Stange. Jede Seite entsteht als eigener Code, damit sie genau das kann, was du brauchst.',
      link: 'Alle Leistungen und Preise',
      items: [
        {
          icon: 'palette' as IconName,
          title: 'Design, das zu dir passt',
          text: 'Deine Website wird von Grund auf für dich entworfen. Stil, Farben und Schrift stimmen wir vorher gemeinsam ab.',
          points: ['Eigenes Design statt Template', 'Auf deine Zielgruppe zugeschnitten', 'Später erweiterbar'],
        },
        {
          icon: 'bolt' as IconName,
          title: 'In ein bis drei Wochen online',
          text: 'Du bekommst von Anfang an eine klare Timeline und siehst Zwischenstände, statt wochenlang zu warten.',
          points: ['Feste Termine ab Tag eins', 'Regelmäßige Zwischenstände', 'Pünktlicher Launch'],
        },
        {
          icon: 'wrench' as IconName,
          title: 'Betreuung nach dem Launch',
          text: 'Neue Bilder, ein neuer Termin, ein geänderter Text: Du sagst Bescheid, ich setze es um.',
          points: ['Änderungen innerhalb von 24 Stunden', 'Technische Wartung und Updates', 'Hosting und SSL inklusive'],
        },
      ],
    },
    en: {
      eyebrow: 'Services',
      title: 'Three things you can count on',
      lead: 'No page builder, no off-the-shelf template. Every site is written as its own code so it does exactly what you need.',
      link: 'All services and prices',
      items: [
        {
          icon: 'palette' as IconName,
          title: 'Design that fits you',
          text: 'Your website is designed for you from scratch. We agree on style, colours and type beforehand.',
          points: ['Custom design, no template', 'Tailored to your audience', 'Room to grow later'],
        },
        {
          icon: 'bolt' as IconName,
          title: 'Online in one to three weeks',
          text: 'You get a clear timeline from the start and see progress instead of waiting for weeks.',
          points: ['Fixed dates from day one', 'Regular progress updates', 'On-time launch'],
        },
        {
          icon: 'wrench' as IconName,
          title: 'Support after launch',
          text: 'New photos, a new date, a changed text: you let me know and I take care of it.',
          points: ['Changes within 24 hours', 'Technical maintenance and updates', 'Hosting and SSL included'],
        },
      ],
    },
  }[language]

  return (
    <Section id="leistungen">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {t.items.map((item) => (
          <Card key={item.title} interactive>
            <CardIcon>
              <Icon name={item.icon} size={22} />
            </CardIcon>
            <h3 className="text-display-sm font-semibold">{item.title}</h3>
            <p className="mt-3 text-ink-secondary">{item.text}</p>
            <ul className="mt-6 space-y-2.5 border-t border-line-subtle pt-6">
              {item.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                  <Icon name="check" size={16} className="mt-0.5 shrink-0 text-brand" />
                  {point}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="mt-10">
        <ButtonLink href="/services" variant="secondary" size="lg" arrow>
          {t.link}
        </ButtonLink>
      </div>
    </Section>
  )
}
