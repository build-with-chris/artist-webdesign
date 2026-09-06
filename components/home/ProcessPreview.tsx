'use client'

import { Section, SectionHeader } from '../ui/Section'
import { ButtonLink } from '../ui/Button'
import Icon, { type IconName } from '../ui/Icon'

/**
 * Der Ablauf in vier Etappen. Die ausfuehrliche Fassung mit allen sieben
 * Schritten steht auf /process.
 */
export default function ProcessPreview({ language }: { language: 'de' | 'en' }) {
  const t = {
    de: {
      eyebrow: 'Ablauf',
      title: 'Von der ersten Nachricht bis zum Launch',
      lead: 'Du weißt immer, woran wir gerade sind und was als Nächstes von dir gebraucht wird.',
      link: 'Ablauf im Detail',
      steps: [
        { icon: 'chat' as IconName, title: 'Kennenlernen', text: 'Kurzes Gespräch per Mail, WhatsApp oder Telefon. Ich höre zu und sage ehrlich, ob ich passe.' },
        { icon: 'document' as IconName, title: 'Fragebogen', text: 'Du wählst Stil, Farben, Schrift und Ziele. Das dauert etwa fünf Minuten.' },
        { icon: 'palette' as IconName, title: 'Entwurf', text: 'Du bekommst einen ersten Design-Entwurf für 40 Euro. Erst danach entscheidest du.' },
        { icon: 'rocket' as IconName, title: 'Umsetzung und Launch', text: 'Ich baue die Seite, du siehst Zwischenstände. Danach geht sie live.' },
      ],
    },
    en: {
      eyebrow: 'Process',
      title: 'From first message to launch',
      lead: 'You always know where we stand and what is needed from you next.',
      link: 'The full process',
      steps: [
        { icon: 'chat' as IconName, title: 'Getting to know each other', text: 'A short talk by email, WhatsApp or phone. I listen and say honestly whether I am a fit.' },
        { icon: 'document' as IconName, title: 'Questionnaire', text: 'You pick style, colours, type and goals. Takes about five minutes.' },
        { icon: 'palette' as IconName, title: 'Draft', text: 'You get a first design draft for 40 euros. Only then do you decide.' },
        { icon: 'rocket' as IconName, title: 'Build and launch', text: 'I build the site, you see progress along the way. Then it goes live.' },
      ],
    },
  }[language]

  return (
    <Section id="ablauf">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      <ol className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {t.steps.map((step, idx) => (
          <li key={step.title} className="relative">
            {/* Verbindungslinie zwischen den Etappen, nur auf breiten Schirmen */}
            {idx < t.steps.length - 1 && (
              <span
                aria-hidden
                className="absolute left-12 right-0 top-6 hidden h-px bg-gradient-to-r from-line-strong to-transparent lg:block"
              />
            )}
            <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-line-strong bg-surface-raised text-brand">
              <Icon name={step.icon} size={22} />
              <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[0.65rem] font-bold text-on-brand">
                {idx + 1}
              </span>
            </div>
            <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
            <p className="mt-2 leading-relaxed text-ink-secondary">{step.text}</p>
          </li>
        ))}
      </ol>

      <div className="mt-12">
        <ButtonLink href="/process" variant="secondary" size="lg" arrow>
          {t.link}
        </ButtonLink>
      </div>
    </Section>
  )
}
