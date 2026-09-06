'use client'

import { useLanguage } from '@/components/LanguageProvider'
import PageHeader from '@/components/ui/PageHeader'
import { Section } from '@/components/ui/Section'
import { ButtonLink } from '@/components/ui/Button'
import Icon, { type IconName } from '@/components/ui/Icon'

export default function ProcessPage() {
  const { language } = useLanguage()

  const t = {
    de: {
      eyebrow: 'Ablauf',
      title: "So läuft's ab",
      lead: 'Sieben Etappen von der ersten Nachricht bis zum Launch. Du weißt jederzeit, woran wir sind.',
      cta: 'Jetzt starten',
      stepLabel: 'Schritt',
      youNeed: 'Was du dafür brauchst',
      steps: [
        {
          icon: 'chat' as IconName,
          title: 'Kennenlernen',
          desc: 'Wir sprechen kurz über dein Projekt, per Mail, WhatsApp oder Telefon. Ich höre zu, stelle Fragen und sage ehrlich, ob ich der Richtige für dich bin.',
          need: 'Eine grobe Vorstellung, worum es gehen soll',
        },
        {
          icon: 'document' as IconName,
          title: 'Fragebogen ausfüllen',
          desc: 'Du bekommst einen kurzen Fragebogen. Darin wählst du Stil, Farben und Schrift und beschreibst deine Ziele. So verstehe ich deine Vorstellungen, bevor ich anfange.',
          need: 'Etwa fünf Minuten Zeit',
        },
        {
          icon: 'clipboard' as IconName,
          title: 'Konzept und Angebot',
          desc: 'Ich schicke dir ein klares Konzept mit Struktur, Timeline und Preis. Du weißt genau, was dich erwartet: keine versteckten Kosten, keine Überraschungen.',
          need: 'Nichts, das liegt bei mir',
        },
        {
          icon: 'palette' as IconName,
          title: 'Design-Entwurf',
          desc: 'Ich erstelle einen ersten Design-Entwurf für 40 Euro, die auf das Paket angerechnet werden. So siehst du früh, wie deine Website aussehen wird und ob der Stil passt.',
          need: 'Deine Rückmeldung zum Entwurf',
        },
        {
          icon: 'package' as IconName,
          title: 'Inhalte sammeln',
          desc: 'Jetzt brauche ich Texte, Bilder und deine Antworten auf zwei Fragen: Was soll der Besucher mitnehmen, und an wen richtet sich die Seite? Dazu die Angaben für Impressum und Datenschutz.',
          need: 'Texte, Bilder, Angaben für das Impressum',
        },
        {
          icon: 'code' as IconName,
          title: 'Umsetzung',
          desc: 'Ich entwickle deine Website und halte dich auf dem Laufenden. Du bekommst Zwischenstände, gibst Feedback und siehst, wie alles Form annimmt.',
          need: 'Feedback zu den Zwischenständen',
        },
        {
          icon: 'rocket' as IconName,
          title: 'Launch',
          desc: 'Deine Seite geht live. Ich zeige dir, wie du kleinere Updates selbst machst, und bin auch danach erreichbar, wenn etwas ist.',
          need: 'Nichts mehr, ab hier läuft sie',
        },
      ],
    },
    en: {
      eyebrow: 'Process',
      title: 'How it works',
      lead: 'Seven stages from the first message to launch. You always know where we stand.',
      cta: 'Get started',
      stepLabel: 'Step',
      youNeed: 'What you need for this',
      steps: [
        {
          icon: 'chat' as IconName,
          title: 'Getting to know each other',
          desc: 'We talk briefly about your project by email, WhatsApp or phone. I listen, ask questions and say honestly whether I am the right fit.',
          need: 'A rough idea of what it should be about',
        },
        {
          icon: 'document' as IconName,
          title: 'Fill out the questionnaire',
          desc: 'You get a short questionnaire. In it you pick style, colours and type and describe your goals. That way I understand your ideas before I start.',
          need: 'About five minutes',
        },
        {
          icon: 'clipboard' as IconName,
          title: 'Concept and proposal',
          desc: 'I send you a clear concept with structure, timeline and price. You know exactly what to expect: no hidden costs, no surprises.',
          need: 'Nothing, that is on me',
        },
        {
          icon: 'palette' as IconName,
          title: 'Design draft',
          desc: 'I create a first design draft for 40 euros, credited towards the package. You see early on how your website will look and whether the style fits.',
          need: 'Your feedback on the draft',
        },
        {
          icon: 'package' as IconName,
          title: 'Gathering content',
          desc: 'Now I need texts, images and your answers to two questions: what should the visitor take away, and who is the site for? Plus the details for the imprint and privacy policy.',
          need: 'Texts, images, imprint details',
        },
        {
          icon: 'code' as IconName,
          title: 'Building it',
          desc: 'I build your website and keep you posted. You get progress updates, give feedback and watch it take shape.',
          need: 'Feedback on the progress updates',
        },
        {
          icon: 'rocket' as IconName,
          title: 'Launch',
          desc: 'Your site goes live. I show you how to make smaller updates yourself and stay reachable afterwards if anything comes up.',
          need: 'Nothing more, it runs from here',
        },
      ],
    },
  }[language]

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead}>
        <ButtonLink href="/start-project" size="lg" arrow>
          {t.cta}
        </ButtonLink>
      </PageHeader>

      <Section>
        <ol className="relative mx-auto max-w-3xl">
          {/* Durchgehende Zeitachse links neben den Etappen */}
          <span
            aria-hidden
            className="absolute bottom-10 left-6 top-6 hidden w-px bg-gradient-to-b from-brand/50 via-line-strong to-transparent sm:block"
          />

          {t.steps.map((step, idx) => (
            <li key={step.title} className="relative pb-12 last:pb-0 sm:pl-20">
              <div className="mb-5 flex items-center gap-4 sm:absolute sm:left-0 sm:top-0 sm:mb-0">
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-line-strong bg-surface-raised text-brand">
                  <Icon name={step.icon} size={22} />
                  <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[0.65rem] font-bold text-on-brand">
                    {idx + 1}
                  </span>
                </span>
                <span className="text-eyebrow font-semibold uppercase text-ink-muted sm:hidden">
                  {t.stepLabel} {idx + 1}
                </span>
              </div>

              <h2 className="font-display text-display-sm font-normal">{step.title}</h2>
              <p className="mt-3 leading-relaxed text-ink-secondary">{step.desc}</p>

              <p className="mt-4 inline-flex items-start gap-2 rounded-md border border-line-subtle bg-surface-raised px-3.5 py-2 text-ink-secondary">
                <Icon name="check" size={16} className="mt-0.5 shrink-0 text-brand" />
                <span>
                  <span className="text-ink-muted">{t.youNeed}: </span>
                  {step.need}
                </span>
              </p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  )
}
