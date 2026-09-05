'use client'

/**
 * Vertrauensleiste direkt unter dem Hero. Zeigt die Namen der Projekte, die
 * bereits live sind. Bewusst als Text, weil keine Kundenlogos vorliegen.
 */
export default function ClientStrip({ language }: { language: 'de' | 'en' }) {
  const label =
    language === 'de'
      ? 'Bereits online für'
      : 'Already live for'

  const clients = [
    'Pepearts',
    'Pepe Dome',
    'No Roots Truck',
    'Artist Karlo',
    'Julia Mayr Photography',
  ]

  return (
    <section className="border-y border-line-subtle bg-surface-raised/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-9 sm:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-10">
          <p className="shrink-0 text-eyebrow font-semibold uppercase text-ink-muted">
            {label}
          </p>
          <ul className="mask-fade-x flex gap-x-8 gap-y-3 overflow-x-auto whitespace-nowrap pb-1 md:mask-none md:flex-wrap md:whitespace-normal">
            {clients.map((client) => (
              <li
                key={client}
                className="text-base font-medium tracking-tight text-ink-secondary"
              >
                {client}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
