/**
 * Rhythmus-Bausteine. Sie halten Innenabstaende, Textbreiten und die
 * Anordnung von Eyebrow, Ueberschrift und Fliesstext ueber alle Seiten
 * hinweg gleich.
 */

interface SectionProps {
  children: React.ReactNode
  id?: string
  /** sunk setzt die Flaeche eine Stufe tiefer ab, dark kehrt sie um. */
  tone?: 'base' | 'sunk' | 'dark'
  space?: 'tight' | 'normal' | 'loose'
  className?: string
}

const spacing = {
  tight: 'py-14 md:py-20',
  normal: 'py-20 md:py-28',
  loose: 'py-24 md:py-36',
}

const tones = {
  base: '',
  sunk: 'bg-surface-sunk',
  dark: 'zone-dark grain',
}

export function Section({
  children,
  id,
  tone = 'base',
  space = 'normal',
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative ${spacing[space]} ${tones[tone]} ${className}`}
    >
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  )
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-2.5 text-eyebrow font-semibold uppercase text-brand">
      <span aria-hidden className="h-px w-6 bg-brand/50" />
      {children}
    </p>
  )
}

interface HeaderProps {
  eyebrow?: string
  title: React.ReactNode
  lead?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = 'left',
  className = '',
}: HeaderProps) {
  const centered = align === 'center'
  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <p
          className={`mb-4 flex items-center gap-2.5 text-eyebrow font-semibold uppercase text-brand ${
            centered ? 'justify-center' : ''
          }`}
        >
          <span aria-hidden className="h-px w-6 bg-brand/50" />
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-display-md font-normal text-ink">{title}</h2>
      {lead && (
        <p className={`mt-5 text-lead text-ink-secondary ${centered ? 'mx-auto max-w-2xl' : 'max-w-prose'}`}>
          {lead}
        </p>
      )}
    </div>
  )
}
