/**
 * Ein einheitliches Strich-Icon-Set. Loest die Emoji ab, die vorher als
 * Icons dienten: Emoji werden je nach Geraet anders gerendert und wirken
 * in einem ruhigen, dunklen Layout schnell billig.
 *
 * Alle Pfade sind auf 24x24 gezeichnet, Strichstaerke 1.5.
 */

export type IconName =
  | 'arrow-right'
  | 'arrow-up-right'
  | 'check'
  | 'menu'
  | 'close'
  | 'palette'
  | 'bolt'
  | 'wrench'
  | 'chat'
  | 'clipboard'
  | 'document'
  | 'package'
  | 'code'
  | 'rocket'
  | 'calendar'
  | 'info'
  | 'mail'
  | 'phone'
  | 'euro'
  | 'ticket'
  | 'star'
  | 'users'
  | 'globe'
  | 'shield'
  | 'gauge'
  | 'phone-mobile'
  | 'search'
  | 'plus'
  | 'minus'

const paths: Record<IconName, React.ReactNode> = {
  'arrow-right': <path d="M5 12h14m0 0-5.5-5.5M19 12l-5.5 5.5" />,
  'arrow-up-right': <path d="M7 17 17 7m0 0H8.5M17 7v8.5" />,
  check: <path d="m4.5 12.5 5 5 10-11" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  palette: (
    <>
      <path d="M12 3a9 9 0 0 0 0 18c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.5-1.1-.3-.3-.4-.6-.4-1 0-.9.7-1.6 1.6-1.6H16a5 5 0 0 0 5-5c0-4.1-4-7.7-9-7.7Z" />
      <circle cx="7.5" cy="11.5" r="1" />
      <circle cx="10.5" cy="7.5" r="1" />
      <circle cx="15.5" cy="8.5" r="1" />
    </>
  ),
  bolt: <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2Z" />,
  wrench: (
    <path d="M15.5 3.2a5.5 5.5 0 0 0-4.8 8.1l-7 7a2 2 0 0 0 0 2.8l.7.7a2 2 0 0 0 2.8 0l7-7a5.5 5.5 0 0 0 6.6-7.4l-3 3-2.7-2.7 3-3a5.5 5.5 0 0 0-2.6-1.5Z" />
  ),
  chat: <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-5.4A8 8 0 1 1 21 12Z" />,
  clipboard: (
    <>
      <path d="M9 4.5H7.5A1.5 1.5 0 0 0 6 6v13.5A1.5 1.5 0 0 0 7.5 21h9a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H15" />
      <rect x="9" y="3" width="6" height="3" rx="1" />
    </>
  ),
  document: (
    <>
      <path d="M13.5 3H7a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 7 21h10a1.5 1.5 0 0 0 1.5-1.5V8L13.5 3Z" />
      <path d="M13.5 3v5h5M9 13h6M9 16.5h4" />
    </>
  ),
  package: (
    <>
      <path d="M12 3 3.5 7.5v9L12 21l8.5-4.5v-9L12 3Z" />
      <path d="M3.5 7.5 12 12m0 0 8.5-4.5M12 12v9" />
    </>
  ),
  code: <path d="m9 8-5 4 5 4m6-8 5 4-5 4M13.5 4l-3 16" />,
  rocket: (
    <>
      <path d="M12 2.5c2.8 2.3 4.4 5.7 4.4 9.3v3.7H7.6v-3.7c0-3.6 1.6-7 4.4-9.3Z" />
      <path d="M7.6 14.8 5 17.6V21l2.9-1.4M16.4 14.8l2.6 2.8V21l-2.9-1.4M10.3 19.8h3.4" />
      <circle cx="12" cy="9.4" r="1.7" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M3.5 10h17M8 3v4m8-4v4" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.5" />
      <circle cx="12" cy="7.75" r=".75" fill="currentColor" stroke="none" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m3.5 7.5 7.4 5.3a2 2 0 0 0 2.2 0l7.4-5.3" />
    </>
  ),
  phone: (
    <path d="M8 3.5H5.5A2 2 0 0 0 3.5 5.7C4 13 11 20 18.3 20.5a2 2 0 0 0 2.2-2V16l-4-1.5-2 2a15 15 0 0 1-5-5l2-2L10 5.5A2 2 0 0 0 8 3.5Z" />
  ),
  euro: <path d="M18 6.5a6.5 6.5 0 1 0 0 11M4.5 10.5h8m-8 3.5h8" />,
  ticket: (
    <>
      <path d="M3.5 8.5A1.5 1.5 0 0 1 5 7h14a1.5 1.5 0 0 1 1.5 1.5v1.8a2.2 2.2 0 0 0 0 4.4v1.8A1.5 1.5 0 0 1 19 18H5a1.5 1.5 0 0 1-1.5-1.5v-1.8a2.2 2.2 0 0 0 0-4.4V8.5Z" />
      <path d="M13 7v2m0 3v1m0 3v2" strokeDasharray="2 2" />
    </>
  ),
  star: <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8L12 3.5Z" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 5.2a3.5 3.5 0 0 1 0 6.6M18 14.4a6.5 6.5 0 0 1 3.5 5.6" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.3 9.5h17.4M3.3 14.5h17.4M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
    </>
  ),
  shield: <path d="M12 3 4.5 6v6c0 4.4 3 8 7.5 9 4.5-1 7.5-4.6 7.5-9V6L12 3Zm-3 8.8 2.2 2.2L15 10" />,
  gauge: (
    <>
      <path d="M4 17a9 9 0 1 1 16 0" />
      <path d="m14.5 9.5-3 4.5" />
      <circle cx="12" cy="15.5" r="1.5" />
    </>
  ),
  'phone-mobile': (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName
  /** Kantenlaenge in px. */
  size?: number
}

export default function Icon({ name, size = 24, className, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {paths[name]}
    </svg>
  )
}
