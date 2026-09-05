interface CardProps {
  children: React.ReactNode
  /** Hebt die Karte hervor, etwa das empfohlene Paket. */
  featured?: boolean
  /** Reagiert auf Hover. Nur setzen, wenn die Karte anklickbar ist. */
  interactive?: boolean
  className?: string
}

/**
 * Bewusst zurueckhaltend: eine helle Flaeche mit feiner Linie, ohne
 * Dauerschatten. Rand und Fuellung sagen "eigenes Objekt", mehr braucht
 * es nicht, sonst wirkt jede Seite wie ein Kachelbrett.
 */
export default function Card({
  children,
  featured = false,
  interactive = false,
  className = '',
}: CardProps) {
  return (
    <div
      className={[
        'relative overflow-hidden rounded-lg border p-7 sm:p-8',
        featured
          ? 'border-brand/40 bg-brand-wash'
          : 'border-line-subtle bg-surface-raised',
        interactive ? 'transition-colors duration-200 ease-out hover:border-line-strong' : '',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}

/** Feld fuer ein Icon am Kartenkopf. */
export function CardIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-md bg-brand-wash text-brand">
      {children}
    </span>
  )
}
