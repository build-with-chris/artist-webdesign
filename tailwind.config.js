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
          overlay: withOpacity('--surface-overlay'),
          inverted: withOpacity('--surface-inverted'),
        },
        ink: {
          DEFAULT: withOpacity('--text-primary'),
          primary: withOpacity('--text-primary'),
          secondary: withOpacity('--text-secondary'),
          muted: withOpacity('--text-muted'),
        },
        brand: {
          DEFAULT: withOpacity('--brand'),
          soft: withOpacity('--brand-soft'),
          dim: withOpacity('--brand-dim'),
        },
        'on-brand': withOpacity('--on-brand'),
        line: {
          DEFAULT: 'rgb(var(--line-subtle))',
          subtle: 'rgb(var(--line-subtle))',
          strong: 'rgb(var(--line-strong))',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      fontSize: {
        // Fliessende Groessen: skalieren mit der Viewportbreite, ohne
        // dass pro Breakpoint eine eigene Klasse noetig ist.
        'display-xl': ['clamp(2.75rem, 1.6rem + 5.2vw, 5.5rem)', { lineHeight: '0.98', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(2.25rem, 1.5rem + 3.4vw, 4rem)', { lineHeight: '1.03', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(1.75rem, 1.3rem + 2.1vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'display-sm': ['clamp(1.375rem, 1.15rem + 1.1vw, 1.875rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'lead': ['clamp(1.0625rem, 1rem + 0.4vw, 1.25rem)', { lineHeight: '1.6' }],
        'eyebrow': ['0.75rem', { lineHeight: '1', letterSpacing: '0.16em' }],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      boxShadow: {
        raised: '0 1px 2px rgb(0 0 0 / 0.4), 0 8px 24px -12px rgb(0 0 0 / 0.6)',
        lifted: '0 2px 4px rgb(0 0 0 / 0.4), 0 20px 48px -24px rgb(0 0 0 / 0.8)',
        glow: '0 0 0 1px rgb(var(--brand) / 0.35), 0 12px 40px -12px rgb(var(--brand) / 0.35)',
      },
      maxWidth: {
        prose: '68ch',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'scroll-hint': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.5' },
          '50%': { transform: 'translateY(6px)', opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'scroll-hint': 'scroll-hint 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
