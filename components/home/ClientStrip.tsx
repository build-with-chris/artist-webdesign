'use client'

import Image from 'next/image'
import { projects } from '@/lib/projects'

/**
 * Vertrauensleiste direkt unter dem Hero.
 *
 * Die Logos kommen in unterschiedlichen Farben, teils hell auf dunkel,
 * teils dunkel auf hell. brightness(0) legt sie ueber den Alphakanal auf
 * einen Ton, damit die Reihe ruhig bleibt und keines herausschreit. Fuer
 * No Roots Truck liegt kein Logo vor, dort steht der Name gesetzt.
 */
export default function ClientStrip({ language }: { language: 'de' | 'en' }) {
  const label = language === 'de' ? 'Bereits online für' : 'Already live for'

  return (
    <section className="border-b border-line-subtle bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 md:py-12">
        <div className="flex flex-col gap-7 md:flex-row md:items-center md:gap-12">
          <p className="shrink-0 text-eyebrow font-semibold uppercase text-ink-muted">
            {label}
          </p>

          <ul className="flex flex-wrap items-center gap-x-10 gap-y-6 sm:gap-x-14">
            {projects.map((project) => (
              <li key={project.name} className="flex items-center">
                {project.logo ? (
                  <Image
                    src={project.logo}
                    alt={project.name}
                    width={project.logoWidth}
                    height={project.logoHeight}
                    className="w-auto opacity-55 transition-opacity duration-200 hover:opacity-90"
                    style={{
                      filter: 'brightness(0)',
                      height: `${project.logoDisplayHeight}px`,
                    }}
                  />
                ) : (
                  <span className="font-display text-xl italic text-ink-muted">
                    {project.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
