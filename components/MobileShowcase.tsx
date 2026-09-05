'use client'

import Image from 'next/image'
import { projects } from '@/lib/projects'

/**
 * Die Handy-Ansichten aller Projekte nebeneinander.
 *
 * Auf der Startseite steht das Versprechen "Für das Handy gebaut, nicht
 * angepasst". Dieser Abschnitt belegt es, statt es nur zu behaupten. Die
 * Geraeterahmen sind mit CSS gezeichnet, dafuer braucht es keine Bilder.
 */
export default function MobileShowcase({ language }: { language: 'de' | 'en' }) {
  const t = {
    de: {
      eyebrow: 'Auf dem Handy',
      title: 'Dieselben Seiten in der Hosentasche',
      lead: 'Die meisten Besucher kommen vom Telefon. Deshalb entsteht jedes Layout dort zuerst und wächst dann nach oben, statt nachträglich zusammengeschoben zu werden.',
    },
    en: {
      eyebrow: 'On mobile',
      title: 'The same sites in your pocket',
      lead: 'Most visitors arrive on a phone. So every layout starts there and grows upwards, instead of being squeezed together afterwards.',
    },
  }[language]

  return (
    <section className="grain relative overflow-hidden border-t border-line-subtle bg-surface-sunk py-20 md:py-28">
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 flex items-center gap-2.5 text-eyebrow font-semibold uppercase text-brand">
            <span aria-hidden className="h-px w-6 bg-brand/50" />
            {t.eyebrow}
          </p>
          <h2 className="font-display text-display-md font-normal">{t.title}</h2>
          <p className="mt-5 max-w-prose text-lead text-ink-secondary">{t.lead}</p>
        </div>

        {/* Auf schmalen Schirmen seitlich scrollbar, damit die Geraete
            nicht auf Briefmarkengroesse schrumpfen. */}
        <ul className="-mx-5 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-5">
          {projects.map((project) => (
            <li key={project.name} className="w-[13rem] shrink-0 snap-start sm:w-auto">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-[39/89] overflow-hidden rounded-[1.6rem] border-[6px] border-ink/80 bg-ink shadow-lifted transition-transform duration-300 ease-out group-hover:-translate-y-1">
                  <Image
                    src={project.mobileImage}
                    alt={`${project.name} ${language === 'de' ? 'auf dem Handy' : 'on mobile'}`}
                    fill
                    sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 13rem"
                    className="object-cover object-top"
                  />
                </div>
                <p className="mt-3.5 text-center text-sm font-medium text-ink-secondary transition-colors group-hover:text-brand">
                  {project.name}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
