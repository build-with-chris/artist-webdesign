'use client'

import { useId } from 'react'

/**
 * Formularfelder mit einheitlichem Aussehen und sauberer Beschriftung.
 *
 * Fehler werden am Feld selbst angezeigt und ueber aria-describedby
 * verknuepft, damit Screenreader sie vorlesen. Vorher war der Absendeknopf
 * einfach deaktiviert, solange etwas fehlte: Der Nutzer sah dann nicht,
 * woran es lag.
 */
const control =
  'w-full rounded-md border bg-surface-sunk px-4 py-3 text-ink placeholder:text-ink-muted ' +
  'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand/60 focus:border-brand/50'

const stateClass = (error?: string) =>
  error ? 'border-red-500/60' : 'border-line-strong hover:border-line-strong'

interface BaseProps {
  label: string
  error?: string
  hint?: string
  required?: boolean
}

export function TextField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  autoComplete,
  error,
  hint,
  required,
}: BaseProps & {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
  autoComplete?: string
}) {
  const id = useId()
  const describedBy = [error && `${id}-error`, hint && `${id}-hint`].filter(Boolean).join(' ')

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink-secondary">
        {label} {required && <span className="text-brand">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy || undefined}
        className={`${control} ${stateClass(error)}`}
      />
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-2 text-xs text-ink-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}

export function TextAreaField({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 5,
  error,
  hint,
  required,
}: BaseProps & {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  rows?: number
}) {
  const id = useId()
  const describedBy = [error && `${id}-error`, hint && `${id}-hint`].filter(Boolean).join(' ')

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink-secondary">
        {label} {required && <span className="text-brand">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy || undefined}
        className={`${control} resize-y ${stateClass(error)}`}
      />
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-2 text-xs text-ink-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}

export function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  error,
}: BaseProps & {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: { value: string; label: string }[]
}) {
  const id = useId()

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink-secondary">
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`${control} ${stateClass(error)} appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-11`}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%23a8a7ac' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m4 6 4 4 4-4'/%3E%3C/svg%3E\")",
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-surface-sunk">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

/**
 * Auswahlkachel fuer Stil, Farben, Schrift und Ziele im Fragebogen.
 * Als echter Button umgesetzt, mit aria-pressed fuer den Zustand.
 */
export function ChoiceTile({
  selected,
  onClick,
  children,
  className = '',
}: {
  selected: boolean
  onClick: () => void
  children: React.ReactNode
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={[
        'rounded-md border p-4 text-left transition-all duration-200',
        selected
          ? 'border-brand bg-brand-wash text-ink'
          : 'border-line-strong bg-surface-sunk text-ink-secondary hover:border-line-strong hover:bg-brand-wash',
        className,
      ].join(' ')}
    >
      {children}
    </button>
  )
}
