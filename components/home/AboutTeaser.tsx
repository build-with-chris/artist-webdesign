'use client'

import Image from 'next/image'
import { ButtonLink } from '../ui/Button'

/**
 * Kurzvorstellung mit Gesicht. Wer eine Website in Auftrag gibt, will
 * wissen, mit wem er es zu tun hat, bevor er ein Formular ausfuellt.
 */
export default function AboutTeaser({ language }: { language: 'de' | 'en' }) {
  const t = {
    de: {
      eyebrow: 'Wer dahinter steckt',
      title: 'Ich bin Chris und stehe selbst auf der Bühne',
      text: [
        'Als Artist weiß ich, wie viel ein erster Eindruck entscheidet. Genau das übertrage ich auf Websites: Die Seite muss in den ersten Sekunden zeigen, worum es geht.',
        'Seit November 2024 arbeite ich täglich mehrere Stunden an Webentwicklung. Ich baue jede Seite selbst, ohne Baukasten und ohne Zwischenstellen. Du schreibst mir, ich antworte, wir setzen es um.',
      ],
      cta: 'Mehr über mich',
      alt: 'Chris im dunklen Mantel vor einer Glasfassade, seitlich blickend',
    },
    en: {
      eyebrow: 'Who is behind this',
      title: 'I am Chris and I perform on stage myself',
      text: [
        'As an artist I know how much a first impression decides. I carry that over to websites: the page has to show what it is about within seconds.',
        'Since November 2024 I have been working on web development for several hours every day. I build every site myself, no page builder and no middlemen. You write to me, I answer, we get it done.',
      ],
      cta: 'More about me',
      alt: 'Chris in a dark coat in front of a glass facade, looking to the side',
    },
  }[language]

  return (
    <section className="border-t border-line-subtle bg-surface-sunk py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="relative overflow-hidden rounded-lg border border-line-subtle">
            <Image
              src="/professional.webp"
              alt={t.alt}
              width={864}
              height={1080}
              sizes="(min-width: 768px) 45vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-4 flex items-center gap-2.5 text-eyebrow font-semibold uppercase text-brand">
              <span aria-hidden className="h-px w-6 bg-brand/60" />
              {t.eyebrow}
            </p>
            <h2 className="font-display text-display-md font-normal">{t.title}</h2>
            <div className="mt-6 space-y-4 text-ink-secondary">
              {t.text.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <ButtonLink href="/about" variant="secondary" size="lg" arrow className="mt-8">
              {t.cta}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
