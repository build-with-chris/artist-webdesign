'use client'

import Image from 'next/image'
import Icon from './ui/Icon'
import type { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
  language: 'de' | 'en'
  priority?: boolean
  sizes?: string
}

/** Zeigt nur die Domain, ohne Protokoll und ohne www. */
function displayDomain(url: string) {
  return url.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '')
}

/**
 * Karte fuer ein veroeffentlichtes Projekt.
 *
 * Der angedeutete Browserrahmen ordnet den Screenshot ein: Man sieht sofort,
 * dass es eine Website ist, und die Domain steht direkt daneben. Der Zoom
 * beim Hover ist bewusst dezent, vorher waren es 150 Prozent, was den
 * Screenshot unlesbar gemacht hat.
 */
export default function ProjectCard({
  project,
  language,
  priority = false,
  sizes = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
}: ProjectCardProps) {
  const label = language === 'de' ? 'Website ansehen' : 'Visit site'

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-lg border border-line-subtle bg-surface-raised transition-all duration-300 ease-out hover:-translate-y-1 hover:border-line-strong hover:shadow-lifted"
    >
      <div className="border-b border-line-subtle bg-surface-sunk p-3 pb-0">
        {/* Fensterleiste */}
        <div className="mb-3 flex items-center gap-2 px-1">
          <span aria-hidden className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
            <span className="h-2 w-2 rounded-full bg-line-strong" />
          </span>
          <span className="ml-1 truncate rounded-full bg-surface-sunk px-2.5 py-0.5 text-[0.68rem] text-ink-muted">
            {displayDomain(project.url)}
          </span>
        </div>

        <div className="relative aspect-[16/9] overflow-hidden rounded-t-sm">
          <Image
            src={project.image}
            alt={project.alt[language]}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-brand">
          {project.name}
        </h3>
        <p className="mt-2.5 flex-1 leading-relaxed text-ink-secondary">
          {project.description[language]}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line-subtle bg-surface-sunk px-2.5 py-1 text-xs text-ink-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
          {label}
          <Icon
            name="arrow-up-right"
            size={16}
            className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </a>
  )
}
