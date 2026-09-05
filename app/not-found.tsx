'use client'

import { useLanguage } from '@/components/LanguageProvider'
import { ButtonLink } from '@/components/ui/Button'

/**
 * Auch die Fehlerseite bleibt im Layout und bietet einen Weg zurueck,
 * statt den Besucher in einer Sackgasse stehen zu lassen.
 */
export default function NotFound() {
  const { language } = useLanguage()

  const t = {
    de: {
      code: '404',
      title: 'Diese Seite gibt es nicht',
      text: 'Vielleicht ein alter Link oder ein Tippfehler in der Adresse. Von hier kommst du weiter.',
      home: 'Zur Startseite',
      contact: 'Schreib mir',
    },
    en: {
      code: '404',
      title: 'This page does not exist',
      text: 'Maybe an old link or a typo in the address. From here you can carry on.',
      home: 'Go to the homepage',
      contact: 'Write to me',
    },
  }[language]

  return (
    <section className="grain relative flex min-h-[80svh] items-center overflow-hidden bg-surface-sunk px-5 py-32 sm:px-8">
      <div className="relative mx-auto max-w-xl text-center">
        <p className="font-display text-7xl italic text-brand">{t.code}</p>
        <h1 className="mt-6 font-display text-display-md font-normal">{t.title}</h1>
        <p className="mx-auto mt-5 max-w-md text-lead text-ink-secondary">{t.text}</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg" arrow>
            {t.home}
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" size="lg">
            {t.contact}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
