import Image from 'next/image'

/**
 * Die Marke aus Signet und Schriftzug.
 *
 * Das gelieferte Logo setzt den Namen unter das Zeichen. Gestapelt passt
 * das nicht in eine Kopfleiste, dort steht der Schriftzug deshalb neben
 * dem Zeichen, gesperrt gesetzt wie im Original.
 *
 * Das Zeichen ist in dunklem Braun gezeichnet. Auf dunklem Grund kommt
 * die aufgehellte Fassung zum Einsatz, sonst waere es unsichtbar.
 */
export default function Wordmark({
  onDark = false,
  className = '',
}: {
  onDark?: boolean
  className?: string
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src={onDark ? '/logos/artist-webdesign-mark-light.webp' : '/logos/artist-webdesign-mark.webp'}
        alt=""
        width={520}
        height={320}
        priority
        className="h-6 w-auto sm:h-7"
      />
      <span className="flex flex-col leading-none">
        <span className="text-[0.82rem] font-semibold uppercase tracking-[0.2em] text-ink">
          Artist
        </span>
        <span className="mt-1 text-[0.6rem] uppercase tracking-[0.26em] text-ink-secondary">
          Webdesign
        </span>
      </span>
    </span>
  )
}
