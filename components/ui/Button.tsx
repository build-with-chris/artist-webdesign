import Link from 'next/link'
import Icon from './Icon'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-md font-semibold ' +
  'transition-colors duration-200 ease-out disabled:cursor-not-allowed disabled:opacity-45'

const variants: Record<Variant, string> = {
  primary: 'bg-brand text-on-brand hover:bg-brand-strong',
  secondary: 'border border-line-strong text-ink hover:border-ink-muted hover:bg-brand-wash',
  ghost: 'text-ink-secondary hover:text-brand',
}

const sizes: Record<Size, string> = {
  md: 'px-4.5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  /** Blendet den Pfeil ein, der beim Hover nach rechts wandert. */
  arrow?: boolean
  className?: string
  children: React.ReactNode
}

const cls = ({ variant = 'primary', size = 'md', className = '' }: CommonProps) =>
  `${base} ${variants[variant]} ${sizes[size]} ${className}`

export function ButtonLink({
  href,
  external,
  ...props
}: CommonProps & { href: string; external?: boolean }) {
  const inner = (
    <>
      {props.children}
      {props.arrow && (
        <Icon
          name={external ? 'arrow-up-right' : 'arrow-right'}
          size={18}
          className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
        />
      )}
    </>
  )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls(props)}>
        {inner}
      </a>
    )
  }

  return (
    <Link href={href} className={cls(props)}>
      {inner}
    </Link>
  )
}

export function Button({
  type = 'button',
  disabled,
  onClick,
  ...props
}: CommonProps & {
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}) {
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={cls(props)}>
      {props.children}
      {props.arrow && (
        <Icon
          name="arrow-right"
          size={18}
          className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
        />
      )}
    </button>
  )
}
