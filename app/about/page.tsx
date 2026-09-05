'use client'

import Image from 'next/image'
import { useLanguage } from '@/components/LanguageProvider'
import PageHeader from '@/components/ui/PageHeader'
import { Section, SectionHeader } from '@/components/ui/Section'
import { ButtonLink } from '@/components/ui/Button'
import Icon, { type IconName } from '@/components/ui/Icon'

export default function AboutPage() {
  const { language } = useLanguage()

  const t = {
    de: {
      eyebrow: 'Über mich',
      title: 'Artist, Handwerker, Entwickler',
      lead: 'Ich baue Websites, weil ich weiß, wie es sich anfühlt, sich vor Publikum zu behaupten. Deine Seite ist deine Bühne.',
      cta: 'Projekt starten',
      contact: 'Direkt schreiben',

      codeEyebrow: 'Warum ich code',
      codeTitle: 'Aus einem Gedanken wird etwas Klickbares',
      codeText: [
        'Seit November 2024 beschäftige ich mich täglich mindestens sechs Stunden mit Webentwicklung.',
        'Coden ist für mich das effizienteste Werkzeug für Ideen. Es gibt mir die Möglichkeit, Projekte eigenständig umzusetzen, ohne auf jemanden zu warten.',
        'Ich liebe es, wenn aus einem Gedanken in kurzer Zeit etwas Reales entsteht, das Menschen verstehen und benutzen.',
      ],
      codeAlt: 'Chris im dunklen Mantel vor einer Glasfassade, seitlich blickend',

      whyEyebrow: 'Zusammenarbeit',
      whyTitle: 'Warum mit mir arbeiten',
      points: [
        {
          icon: 'star' as IconName,
          title: 'Ich kenne die Bühne',
          text: 'Als Artist weiß ich, was zählt: ein Auftritt, der hängen bleibt. Deine Website ist deine digitale Bühne, ich sorge dafür, dass sie wirkt.',
        },
        {
          icon: 'chat' as IconName,
          title: 'Kurze Wege',
          text: 'WhatsApp, Mail oder Anruf, ganz wie du magst. Ich antworte schnell und unkompliziert. Keine Warteschleifen, keine Agentur dazwischen.',
        },
        {
          icon: 'palette' as IconName,
          title: 'Design zuerst',
          text: 'Deine Seite soll nicht nur funktionieren, sondern gut aussehen. Auf dem Telefon genauso wie auf dem großen Bildschirm.',
        },
      ],

      makerEyebrow: 'Neben dem Rechner',
      makerTitle: 'Von der Almhütte zur Web-App',
      makerText: [
        'Ich bin ein Macher, der Projekte liebt. Eine meiner liebsten Erfahrungen: Ich habe eine alte Almhütte abgebaut und wieder aufgebaut. Das Projekt ist auf Instagram unter @cabin.kingdom zu sehen.',
        'Diese Liebe zum Handwerk steckt auch in meinen Websites. Sauber gebaut, ohne unnötige Teile, und so, dass es hält.',
        'Als Artist weiß ich, wie wichtig ein starker erster Eindruck ist. Deshalb baue ich Seiten, die schnell laden, gut aussehen und zeigen, was dich ausmacht.',
      ],
      makerAlt: 'Chris am Wasser im Gegenlicht, hält seinen Husky auf den Schultern',
    },
    en: {
      eyebrow: 'About me',
      title: 'Artist, maker, developer',
      lead: 'I build websites because I know how it feels to hold an audience. Your site is your stage.',
      cta: 'Start a project',
      contact: 'Write to me',

      codeEyebrow: 'Why I code',
      codeTitle: 'A thought turns into something you can click',
      codeText: [
        'Since November 2024 I have spent at least six hours a day on web development.',
        'Coding is the most efficient tool I have for ideas. It lets me carry out projects on my own without waiting for anyone.',
        'I love it when a thought becomes something real in a short time, something people understand and use.',
      ],
      codeAlt: 'Chris in a dark coat in front of a glass facade, looking to the side',

      whyEyebrow: 'Working together',
      whyTitle: 'Why work with me',
      points: [
        {
          icon: 'star' as IconName,
          title: 'I know the stage',
          text: 'As an artist I know what counts: a performance that sticks. Your website is your digital stage and I make sure it lands.',
        },
        {
          icon: 'chat' as IconName,
          title: 'Short paths',
          text: 'WhatsApp, email or a call, whatever suits you. I answer quickly and plainly. No queues, no agency in between.',
        },
        {
          icon: 'palette' as IconName,
          title: 'Design first',
          text: 'Your site should not only work but look good. On the phone just as much as on a large screen.',
        },
      ],

      makerEyebrow: 'Away from the screen',
      makerTitle: 'From an alpine cabin to a web app',
      makerText: [
        'I am a maker who loves projects. One of my favourites: I took an old alpine cabin apart and rebuilt it. You can see the project on Instagram at @cabin.kingdom.',
        'That love for craft goes into my websites too. Built cleanly, without unnecessary parts, and made to last.',
        'As an artist I know how much a strong first impression matters. So I build sites that load fast, look good and show what sets you apart.',
      ],
      makerAlt: 'Chris by the water in backlight, holding his husky over his shoulders',
    },
  }[language]

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/start-project" size="lg" arrow>
            {t.cta}
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" size="lg">
            {t.contact}
          </ButtonLink>
        </div>
      </PageHeader>

      {/* Warum ich code */}
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="order-2 overflow-hidden rounded-lg border border-line-subtle md:order-1">
            <Image
              src="/professional.webp"
              alt={t.codeAlt}
              width={864}
              height={1080}
              sizes="(min-width: 768px) 45vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <SectionHeader eyebrow={t.codeEyebrow} title={t.codeTitle} />
            <div className="mt-6 space-y-4 text-ink-secondary">
              {t.codeText.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Warum mit mir arbeiten */}
      <Section tone="sunk">
        <SectionHeader eyebrow={t.whyEyebrow} title={t.whyTitle} align="center" />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {t.points.map((point) => (
            <div
              key={point.title}
              className="rounded-lg border border-line-subtle bg-surface-raised p-7"
            >
              <span className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-md bg-brand-wash text-brand">
                <Icon name={point.icon} size={22} />
              </span>
              <h3 className="text-lg font-semibold tracking-tight">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{point.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Der private Teil */}
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="overflow-hidden rounded-lg border border-line-subtle">
            <Image
              src="/personal.webp"
              alt={t.makerAlt}
              width={864}
              height={1080}
              sizes="(min-width: 768px) 45vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <SectionHeader eyebrow={t.makerEyebrow} title={t.makerTitle} />
            <div className="mt-6 space-y-4 text-ink-secondary">
              {t.makerText.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed">
                  {paragraph.split('@cabin.kingdom').map((part, idx, parts) => (
                    <span key={idx}>
                      {part}
                      {idx < parts.length - 1 && (
                        <a
                          href="https://instagram.com/cabin.kingdom"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:decoration-brand"
                        >
                          @cabin.kingdom
                        </a>
                      )}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
