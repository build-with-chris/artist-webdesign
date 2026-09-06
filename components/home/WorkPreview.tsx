'use client'

import { Section, SectionHeader } from '../ui/Section'
import { ButtonLink } from '../ui/Button'
import ProjectCard from '../ProjectCard'
import { projects } from '@/lib/projects'

export default function WorkPreview({ language }: { language: 'de' | 'en' }) {
  const t = {
    de: {
      eyebrow: 'Projekte',
      title: 'Seiten, die schon live sind',
      lead: 'Jedes Projekt ist mit dem Kunden zusammen entstanden. Klick dich rein, die Links führen auf die echten Websites.',
      link: 'Alle Projekte',
    },
    en: {
      eyebrow: 'Work',
      title: 'Sites that are already live',
      lead: 'Every project came out of working with the client. Click through, the links lead to the real websites.',
      link: 'All projects',
    },
  }[language]

  const featured = projects.filter((project) => project.featured)

  return (
    <Section id="projekte" tone="sunk">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
        <ButtonLink
          href="/portfolio"
          variant="secondary"
          arrow
          className="hidden shrink-0 md:inline-flex"
        >
          {t.link}
        </ButtonLink>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.name} project={project} language={language} />
        ))}
      </div>

      <div className="mt-8 md:hidden">
        <ButtonLink href="/portfolio" variant="secondary" size="lg" arrow className="w-full">
          {t.link}
        </ButtonLink>
      </div>
    </Section>
  )
}
