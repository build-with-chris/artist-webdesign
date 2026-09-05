/** @type {import('tailwindcss').Config} */
const withOpacity = (variable) => ({ opacityValue }) =>
  opacityValue === undefined
    ? `rgb(var(${variable}))`
    : `rgb(var(${variable}) / ${opacityValue})`

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: withOpacity('--surface-base'),
          base: withOpacity('--surface-base'),
          raised: withOpacity('--surface-raised'),
          sunk: withOpacity('--surface-sunk'),
        },
        ink: {
          DEFAULT: withOpacity('--text-primary'),
          primary: withOpacity('--text-primary'),
          secondary: withOpacity('--text-secondary'),
          muted: withOpacity('--text-muted'),
        },
        brand: {
          DEFAULT: withOpacity('--brand'),
          strong: withOpacity('--brand-strong'),
          wash: 'rgb(var(--brand-wash))',
        },
        'on-brand': withOpacity('--on-brand'),
        line: {
          DEFAULT: 'rgb(var(--line-subtle))',
          subtle: 'rgb(var(--line-subtle))',
          strong: 'rgb(var(--line-strong))',
        },
      },
      fontFamily: {
        // Karla traegt Fliesstext und Bedienelemente: humanistisch
        // geschnitten, mit eigenen Formen statt der ueblichen Grotesk.
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Fraunces setzt die Ueberschriften. Weiche, leicht eigenwillige
        // Serifen, das Gegenteil des technischen Eindrucks.
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      fontSize: {
        // Fliessende Groessen: skalieren mit der Viewportbreite, ohne
        // dass pro Breakpoint eine eigene Klasse noetig ist.
        'display-xl': ['clamp(2.6rem, 1.6rem + 4.6vw, 5rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.1rem, 1.5rem + 2.9vw, 3.6rem)', { lineHeight: '1.06', letterSpacing: '-0.018em' }],
        'display-md': ['clamp(1.7rem, 1.3rem + 1.9vw, 2.6rem)', { lineHeight: '1.14', letterSpacing: '-0.015em' }],
        'display-sm': ['clamp(1.3rem, 1.15rem + 0.8vw, 1.7rem)', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'lead': ['clamp(1.0625rem, 1rem + 0.4vw, 1.2rem)', { lineHeight: '1.65' }],
        'eyebrow': ['0.75rem', { lineHeight: '1', letterSpacing: '0.15em' }],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      boxShadow: {
        // Weiche, warme Schatten statt harter schwarzer Kanten.
        raised: '0 1px 2px rgb(43 36 30 / .05), 0 6px 16px -10px rgb(43 36 30 / .22)',
        lifted: '0 2px 4px rgb(43 36 30 / .06), 0 18px 40px -22px rgb(43 36 30 / .35)',
      },
      maxWidth: {
        prose: '66ch',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
