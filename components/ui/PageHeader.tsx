/**
 * Kopf fuer alle Unterseiten. Haelt Abstand zur festen Navigation und
 * sorgt dafuer, dass jede Seite gleich anfaengt. Die Flaeche ist eine
 * Stufe tiefer abgesetzt, damit der Kopf ohne Effekte vom Inhalt abhebt.
 */
interface PageHeaderProps {
  eyebrow?: string
  title: React.ReactNode
  lead?: string
  children?: React.ReactNode
}

export default function PageHeader({ eyebrow, title, lead, children }: PageHeaderProps) {
  return (
    <section className="grain relative overflow-hidden border-b border-line-subtle bg-surface-sunk pb-16 pt-32 md:pb-20 md:pt-40">
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        {eyebrow && (
          <p className="mb-5 flex items-center gap-2.5 text-eyebrow font-semibold uppercase text-brand">
            <span aria-hidden className="h-px w-6 bg-brand/50" />
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl font-display text-display-lg font-normal">{title}</h1>
        {lead && <p className="mt-6 max-w-2xl text-lead text-ink-secondary">{lead}</p>}
        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>
  )
}
