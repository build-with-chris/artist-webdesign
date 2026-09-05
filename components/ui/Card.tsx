interface CardProps {
  children: React.ReactNode
  /** Hebt die Karte optisch hervor, etwa das empfohlene Paket. */
  featured?: boolean
  /** Reagiert auf Hover. Nur setzen, wenn die Karte anklickbar ist. */
  interactive?: boolean
  className?: string
}

export default function Card({
  children,
  featured = false,
  interactive = false,
  className = '',
}: CardProps) {
  return (
    <div
      className={[
        'edge-highlight relative overflow-hidden rounded-lg border p-7 sm:p-8',
        featured
          ? 'border-brand/35 bg-gradient-to-b from-brand/[0.09] to-surface-raised shadow-lifted'
          : 'border-line-subtle bg-surface-raised',
        interactive
          ? 'transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lifted'
          : '',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}

/** Quadratisches Feld fuer ein Icon am Kartenkopf. */
export function CardIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-md border border-line-strong bg-white/[0.04] text-brand">
      {children}
    </span>
  )
}
