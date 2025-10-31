'use client'
import { useLanguage } from '@/components/LanguageProvider'

export default function ServicesPage() {
  const { language } = useLanguage()
  
  const t = {
    de: {
      title: 'Was du bekommst',
      subtitle: 'Echte Handarbeit für deinen digitalen Auftritt.',
      pricingTitle: 'Pakete',
      popularBadge: 'Beliebt',
      service1Title: 'Individuelles Design',
      service1Benefit: 'Deine Website wird von Grund auf für dich entwickelt – kein Template, keine Kompromisse.',
      service1Point1: 'Design, das zu dir passt',
      service1Point2: 'Optimiert für deine Zielgruppe',
      service1Point3: 'Flexibel erweiterbar',
      service2Title: 'Schnelle Umsetzung',
      service2Benefit: 'Du brauchst deine Website schnell? Ich liefere in 1-3 Wochen – ohne Qualitätsverlust.',
      service2Point1: 'Klare Timeline von Anfang an',
      service2Point2: 'Regelmäßige Updates während der Entwicklung',
      service2Point3: 'Pünktlicher Launch',
      service3Title: 'Pflege & Betreuung',
      service3Benefit: 'Nach dem Launch kannst du entspannen – ich pflege deine Website und setze Änderungen innerhalb von 24h um (Urlaub ausgenommen, wird vorher kommuniziert).',
      service3Point1: 'Änderungen innerhalb von 24h umgesetzt',
      service3Point2: 'Technische Wartung & Updates',
      service3Point3: 'Hosting & SSL-Zertifikat inklusive',
      // Pricing packages
      basicTitle: 'Basic',
      basicPrice: '250€',
      basicOriginal: 'statt 690€',
      basicValidity: '(gilt bis 31.12.2025)',
      basicTagline: 'Der solide Start: ein klarer Onepager, der alles Wichtige zeigt.',
      basicFeature1: 'Startseite, Angebot, Projekte & Kontakt',
      basicFeature2: 'Mobilfreundlich & suchmaschinenoptimiert',
      basicFeature3: 'Saubere Performance',
      basicFeature4: 'Einfacher Austausch von Texten und Bildern',
      advancedTitle: 'Advanced',
      advancedPrice: 'ab 450€',
      advancedOriginal: 'statt 1400€',
      advancedTagline: 'Für mehr Spielraum und Wachstum.',
      advancedFeature1: 'Mehrseitige Website oder CMS-Anbindung',
      advancedFeature2: 'Blog, Galerie, Video- oder Buchungssektionen',
      advancedFeature3: 'Formulare mit Validierung',
      advancedFeature4: 'Extras wie Analytics, SEO-Finetuning & Hosting',
      // Hosting & Maintenance
      hostingTitle: 'Hosting & Pflege',
      hostingPrice: '20€ / Monat',
      hostingNote: '(muss dazu gebucht werden)',
      hostingSubtitle: 'Domain enthalten',
      hostingTagline: 'Darin enthalten:',
      hostingFeature1: 'Hosting auf einem schnellen, zuverlässigen Server',
      hostingFeature2: 'Contentpflege innerhalb von 24 Stunden: Wenn du neue Bilder, Texte oder Termine hast, werden sie blitzschnell aktualisiert',
      hostingFeature3: 'SSL-Zertifikat & regelmäßige Sicherheitsupdates inklusive',
      hostingFeature4: 'Keine Sorge um Technik oder Änderungen – du sagst, was du brauchst, ich kümmere mich.',
      // Free Design Highlight
      freeDesignTitle: 'Kostenloser Design-Entwurf',
      freeDesignBadge: 'Auf Vorleistung',
      freeDesignText: 'Nach dem Ausfüllen des Fragebogens erstelle ich auf eigene Vorleistung einen ersten Webdesign-Entwurf – komplett unverbindlich und kostenlos. Du siehst direkt, wie deine Website aussehen könnte, und entscheidest dann in Ruhe, ob wir zusammenarbeiten.',
      freeDesignPoint1: 'Erster visueller Entwurf deiner Website',
      freeDesignPoint2: 'Komplett kostenlos und unverbindlich',
      freeDesignPoint3: 'Keine Verpflichtung zur Zusammenarbeit',
      freeDesignPoint4: 'Erst sehen, dann entscheiden',
    },
    en: {
      title: 'What you get',
      subtitle: 'Real craftsmanship for your digital presence.',
      pricingTitle: 'Packages',
      popularBadge: 'Popular',
      service1Title: 'Custom Design',
      service1Benefit: 'Your website is built from scratch for you – no templates, no compromises.',
      service1Point1: 'Design that fits you',
      service1Point2: 'Optimized for your audience',
      service1Point3: 'Flexibly expandable',
      service2Title: 'Fast Delivery',
      service2Benefit: 'Need your website quickly? I deliver in 1-3 weeks – without sacrificing quality.',
      service2Point1: 'Clear timeline from the start',
      service2Point2: 'Regular updates during development',
      service2Point3: 'On-time launch',
      service3Title: 'Maintenance & Support',
      service3Benefit: 'After launch, you can relax – I maintain your website and implement changes within 24 hours (except during vacation, which will be communicated in advance).',
      service3Point1: 'Changes implemented within 24 hours',
      service3Point2: 'Technical maintenance & updates',
      service3Point3: 'Hosting & SSL certificate included',
      // Pricing packages
      basicTitle: 'Basic',
      basicPrice: '€250',
      basicOriginal: 'instead of €690',
      basicValidity: '(valid until Dec 31, 2025)',
      basicTagline: 'The solid start: a clear one-pager that shows everything important.',
      basicFeature1: 'Homepage, services, projects & contact',
      basicFeature2: 'Mobile-friendly & SEO-optimized',
      basicFeature3: 'Clean performance',
      basicFeature4: 'Easy text and image updates',
      advancedTitle: 'Advanced',
      advancedPrice: 'from €450',
      advancedOriginal: 'instead of €1400',
      advancedTagline: 'For more flexibility and growth.',
      advancedFeature1: 'Multi-page website or CMS integration',
      advancedFeature2: 'Blog, gallery, video, or booking sections',
      advancedFeature3: 'Forms with validation',
      advancedFeature4: 'Extras like analytics, SEO fine-tuning & hosting',
      // Hosting & Maintenance
      hostingTitle: 'Hosting & Maintenance',
      hostingPrice: '€20 / month',
      hostingNote: '(must be added separately)',
      hostingSubtitle: 'Domain included',
      hostingTagline: 'Included:',
      hostingFeature1: 'Hosting on a fast, reliable server',
      hostingFeature2: 'Content updates within 24 hours: When you have new images, texts, or dates, they will be updated lightning fast',
      hostingFeature3: 'SSL certificate & regular security updates included',
      hostingFeature4: 'No worries about tech or changes – you tell me what you need, I take care of it.',
      // Free Design Highlight
      freeDesignTitle: 'Free Design Draft',
      freeDesignBadge: 'On my initiative',
      freeDesignText: "After you fill out the questionnaire, I'll create a first web design draft on my own initiative – completely non-binding and free. You'll see directly how your website could look, and then decide at your own pace whether we work together.",
      freeDesignPoint1: 'First visual draft of your website',
      freeDesignPoint2: 'Completely free and non-binding',
      freeDesignPoint3: 'No obligation to work together',
      freeDesignPoint4: 'See first, decide later',
    }
  }[language]

  return (
    <div className="min-h-screen bg-zinc-950 text-white py-32 px-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{t.title}</h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">{t.subtitle}</p>
      </div>

      {/* Free Design Highlight - First */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="relative bg-gradient-to-br from-zinc-900 via-black to-zinc-900 border-2 border-orange-900/30 rounded-3xl p-10 md:p-12 overflow-hidden">
          {/* Glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

          {/* Badge */}
          <div className="relative mb-6">
            <span className="inline-block px-4 py-2 bg-orange-600/20 border border-orange-500/30 rounded-full text-sm text-orange-400 font-medium">
              {t.freeDesignBadge}
            </span>
          </div>

          {/* Content */}
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t.freeDesignTitle}
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-3xl">
              {t.freeDesignText}
            </p>

            {/* Features in 2 columns on desktop */}
            <ul className="grid md:grid-cols-2 gap-3 mb-8">
              {[1, 2, 3, 4].map((num) => (
                <li key={num} className="flex items-start gap-3 text-zinc-300">
                  <span className="text-orange-500 mt-0.5">✓</span>
                  <span>{t[`freeDesignPoint${num}` as keyof typeof t]}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] group"
            >
              Jetzt Fragebogen ausfüllen
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">{t.pricingTitle}</h2>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {/* Basic Package */}
          <div className="group relative bg-gradient-to-br from-zinc-900 to-black border-2 border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition-all duration-300">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{t.basicTitle}</h3>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold text-white">{t.basicPrice}</span>
                <span className="text-zinc-500 line-through text-sm">{t.basicOriginal}</span>
              </div>
              <span className="text-xs text-zinc-600">{t.basicValidity}</span>
            </div>

            <p className="text-zinc-400 mb-6 leading-relaxed">{t.basicTagline}</p>

            <ul className="space-y-3">
              {[1, 2, 3, 4].map((num) => (
                <li key={num} className="flex items-start gap-3 text-zinc-400 text-sm">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>{t[`basicFeature${num}` as keyof typeof t]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Advanced Package */}
          <div className="group relative bg-gradient-to-br from-zinc-900 to-black border-2 border-orange-900/50 rounded-3xl p-8 hover:border-orange-800/70 transition-all duration-300">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-orange-600 text-white text-xs font-medium rounded-full">
              {t.popularBadge}
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{t.advancedTitle}</h3>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold text-white">{t.advancedPrice}</span>
                <span className="text-zinc-500 line-through text-sm">{t.advancedOriginal}</span>
              </div>
            </div>

            <p className="text-zinc-400 mb-6 leading-relaxed">{t.advancedTagline}</p>

            <ul className="space-y-3">
              {[1, 2, 3, 4].map((num) => (
                <li key={num} className="flex items-start gap-3 text-zinc-400 text-sm">
                  <span className="text-orange-500 mt-0.5">✓</span>
                  <span>{t[`advancedFeature${num}` as keyof typeof t]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hosting & Maintenance Package */}
          <div className="group relative bg-gradient-to-br from-zinc-900 to-black border-2 border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition-all duration-300">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">{t.hostingTitle}</h3>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold text-white">{t.hostingPrice}</span>
              </div>
              <span className="text-xs text-zinc-600 block mb-1">{t.hostingNote}</span>
              <span className="text-xs text-green-500">{t.hostingSubtitle}</span>
            </div>

            <p className="text-zinc-400 mb-4 leading-relaxed font-medium">{t.hostingTagline}</p>

            <ul className="space-y-3">
              {[1, 2, 3, 4].map((num) => (
                <li key={num} className="flex items-start gap-3 text-zinc-400 text-sm">
                  <span className="text-blue-500 mt-0.5">✓</span>
                  <span>{t[`hostingFeature${num}` as keyof typeof t]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Free Design Highlight */}
      {/* Entfällt! Entfernt, da doppelt. */}

      {/* Image Break Section - Smooth Transition with Overlap */}
      <section className="max-w-7xl mx-auto -mt-16 mb-16 relative z-0">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image - Maintains original aspect ratio */}
          <div className="relative w-full overflow-hidden">
            <img
              src="/service.webp"
              alt="Services"
              className="w-full h-auto object-contain"
            />
            {/* Gradient overlay for smooth transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/30 via-zinc-950/20 to-zinc-950/60 pointer-events-none"></div>
            
            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="max-w-7xl mx-auto -mt-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((num) => (
            <div key={num} className="group relative bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-6 group-hover:bg-white/10 transition-all duration-300">
                {num === 1 ? '🎨' : num === 2 ? '⚡' : '🛠️'}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t[`service${num}Title` as keyof typeof t]}</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">{t[`service${num}Benefit` as keyof typeof t]}</p>
              <ul className="space-y-3">
                {[1, 2, 3].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-zinc-400">
                    <span className="text-zinc-600 mt-1">→</span>
                    <span>{t[`service${num}Point${point}` as keyof typeof t]}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
