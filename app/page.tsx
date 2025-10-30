'use client'

import { useLanguage } from '@/components/LanguageProvider'

export default function Home() {
  const { language } = useLanguage()

  const translations = {
    de: {
      heroTitle1: 'Hochwertige Websites,',
      heroTitle2: 'die ankommen.',
      heroSubtitle: 'Ich entwickle deine Website – schnell, individuell und ohne Baukasten. Für Künstler und Unternehmen, die Wert auf echte Handarbeit legen.',
      ctaPrimary: 'Projekt starten',
      ctaSecondary: 'Leistungen ansehen',
      trustIndicator: 'Entwickelt mit React & Next.js',
      seoIntro: 'Als Artist weiß ich, was eine moderne Website braucht: Sie muss schnell online gehen, richtig gut aussehen und mobil funktionieren. Ich entwickle individuelles Design für Künstler, Artisten und kleine Unternehmen – ohne Template, dafür mit echtem Code. Von der ersten Idee bis zum Launch begleite ich dich persönlich. Deine Website wird nicht nur technisch einwandfrei sein, sondern auch deinen Stil perfekt widerspiegeln. Schnelle Ladezeiten, klare Struktur, professioneller Auftritt – genau das, was du brauchst.',
      // Free Design Teaser
      freeDesignBadge: 'Besonderes Angebot',
      freeDesignTitle: 'Erst sehen, dann entscheiden',
      freeDesignText: 'Nach dem Ausfüllen des Fragebogens erstelle ich auf eigene Vorleistung einen ersten Webdesign-Entwurf – ganz unverbindlich. So siehst du direkt, wie deine Website aussehen könnte, bevor du dich entscheidest.',
      freeDesignCTA: 'Kostenlosen Entwurf anfragen',
    },
    en: {
      heroTitle1: 'High-quality websites',
      heroTitle2: 'that deliver.',
      heroSubtitle: 'I develop your website – fast, custom-built, no templates. For artists and businesses who value real craftsmanship.',
      ctaPrimary: 'Start project',
      ctaSecondary: 'View services',
      trustIndicator: 'Built with React & Next.js',
      seoIntro: 'As an artist, I know what a modern website needs: it has to go online quickly, look great, and work perfectly on mobile. I create custom design for artists, performers, and small businesses – no templates, just real code. From the first idea to launch, I guide you personally. Your website will not only be technically flawless but also perfectly reflect your style. Fast loading times, clear structure, professional presence – exactly what you need.',
      // Free Design Teaser
      freeDesignBadge: 'Special Offer',
      freeDesignTitle: 'See first, decide later',
      freeDesignText: "After you fill out the questionnaire, I'll create a first web design draft on my own initiative – completely non-binding. This way, you can see what your website could look like before you commit.",
      freeDesignCTA: 'Request free draft',
    }
  }

  const t = translations[language as keyof typeof translations]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Dark & Elegant */}
      <header className="relative min-h-screen flex items-center justify-center px-6 py-32">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black"></div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
          {/* Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              {t.heroTitle1}
              <br />
              <span className="text-zinc-400">{t.heroTitle2}</span>
            </h1>

            {/* Subline */}
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              {t.heroSubtitle}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="/contact"
              className="group px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-all duration-300 flex items-center gap-2"
            >
              {t.ctaPrimary}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="/services"
              className="px-8 py-4 bg-transparent border border-zinc-700 text-white rounded-full font-medium hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-300"
            >
              {t.ctaSecondary}
            </a>
          </div>

          {/* Trust indicator - subtle */}
          <div className="pt-16">
            <p className="text-sm text-zinc-600 uppercase tracking-wider">
              {t.trustIndicator}
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-zinc-600 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* SEO Intro Section entfernt */}

      {/* Free Design Teaser */}
      <section className="py-20 px-6 bg-black relative overflow-hidden">
        {/* Subtle glow effect in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-white/80 backdrop-blur-sm">
              {t.freeDesignBadge}
            </span>
          </div>

          {/* Content */}
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-10 md:p-12 text-center shadow-[0_0_50px_rgba(255,255,255,0.03)]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t.freeDesignTitle}
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-8 max-w-2xl mx-auto">
              {t.freeDesignText}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] group"
            >
              {t.freeDesignCTA}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
