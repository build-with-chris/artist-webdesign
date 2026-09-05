/**
 * Kopf fuer alle Unterseiten. Haelt Abstand zur fixierten Navigation und
 * sorgt dafuer, dass jede Seite gleich anfaengt.
 */
interface PageHeaderProps {
  eyebrow?: string
  title: React.ReactNode
  lead?: string
  children?: React.ReactNode
}

export default function PageHeader({ eyebrow, title, lead, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-line-subtle pb-16 pt-32 md:pb-20 md:pt-40">
      <div aria-hidden className="bg-grid absolute inset-0 opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/4 h-72 w-72 rounded-full bg-brand/12 blur-[110px]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        {eyebrow && (
          <p className="mb-5 flex items-center gap-2.5 text-eyebrow font-semibold uppercase text-brand">
            <span aria-hidden className="h-px w-6 bg-brand/60" />
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-display-lg font-semibold">{title}</h1>
        {lead && <p className="mt-6 max-w-2xl text-lead text-ink-secondary">{lead}</p>}
        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>
  )
}
