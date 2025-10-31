'use client'

import Link from 'next/link'

interface CTABlockProps {
  language: 'de' | 'en'
  variant?: 'default' | 'footer'
}

export default function CTABlock({ language, variant = 'default' }: CTABlockProps) {
  const translations = {
    de: {
      headline: 'Lass uns dein Projekt starten',
      text: 'Erzähl mir in ein paar Minuten von deiner Idee – ich melde mich schnell mit einem Vorschlag.',
      button: 'Fragebogen ausfüllen',
    },
    en: {
      headline: "Let's start your project",
      text: "Tell me about your idea in a few minutes – I will get back to you quickly with a proposal.",
      button: 'Fill out questionnaire',
    }
  }

  const t = translations[language]

  if (variant === 'footer') {
    return (
      <div className="bg-dark-surface border-t border-dark-text/10 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
            {t.headline}
          </h3>
          <p className="text-lg text-dark-text/60 mb-8 max-w-2xl mx-auto">
            {t.text}
          </p>
          <Link
            href="/start-project"
            className="inline-flex items-center gap-2 px-8 py-4 bg-dark-accent text-white rounded-full font-medium hover:bg-dark-accent-hover hover:shadow-dark-lg transition-all duration-300"
          >
            {t.button}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-dark-surface to-dark-bg rounded-3xl p-12 border border-dark-accent/20 shadow-dark-xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-dark-text mb-6">
          {t.headline}
        </h2>
        <p className="text-xl text-dark-text/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t.text}
        </p>
        <Link
          href="/start-project"
          className="inline-flex items-center gap-2 px-8 py-4 bg-dark-accent text-white rounded-full font-medium hover:bg-dark-accent-hover hover:shadow-dark-lg transition-all duration-300 group"
        >
          {t.button}
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </section>
  )
}
