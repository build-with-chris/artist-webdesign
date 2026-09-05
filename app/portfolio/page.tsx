'use client'

import { useLanguage } from '@/components/LanguageProvider'
import PageHeader from '@/components/ui/PageHeader'
import { Section } from '@/components/ui/Section'
import ProjectCard from '@/components/ProjectCard'
import { ButtonLink } from '@/components/ui/Button'
import { projects } from '@/lib/projects'

export default function PortfolioPage() {
  const { language } = useLanguage()

  const t = {
    de: {
      eyebrow: 'Projekte',
      title: 'Websites, die ich gebaut habe',
      lead: 'Für Artists, eine Event-Location, ein Fotostudio und ein mobiles Showcase-Konzept. Alle Links führen auf die echten Seiten.',
      cta: 'Eigenes Projekt starten',
      count: (n: number) => `${n} veröffentlichte Projekte`,
    },
    en: {
      eyebrow: 'Work',
      title: 'Websites I have built',
      lead: 'For artists, an event location, a photo studio and a mobile showcase concept. Every link leads to the real site.',
      cta: 'Start your own project',
      count: (n: number) => `${n} published projects`,
    },
  }[language]

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead}>
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <ButtonLink href="/start-project" size="lg" arrow>
            {t.cta}
          </ButtonLink>
          <span className="text-sm text-ink-muted">{t.count(projects.length)}</span>
        </div>
      </PageHeader>

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.name}
              project={project}
              language={language}
              priority={idx < 3}
            />
          ))}
        </div>
      </Section>
    </>
  )
}
