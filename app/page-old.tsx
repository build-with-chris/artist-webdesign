'use client'

import { useState, useEffect } from 'react'
import ProjectForm from '@/components/ProjectForm'

export default function Home() {
  const [language, setLanguage] = useState('de')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const translations = {
    de: {
      heroTitle1: 'Hochwertige Websites,',
      heroTitle2: 'die ankommen.',
      heroSubtitle: 'Ich entwickle deine Website – schnell, individuell und ohne Baukasten. Für Künstler und Unternehmen, die Wert auf echte Handarbeit legen.',
      ctaPrimary: 'Projekt starten',
      ctaSecondary: 'Referenzen ansehen',
      trustIndicator: 'Entwickelt mit React & Next.js',
      processTitle: "So läuft's ab",
      processSubtitle: 'Von der Idee bis zum Launch – ein klarer Prozess, der funktioniert.',
      step1Title: 'Kennenlernen',
      step1Desc: 'Wir sprechen kurz über dein Projekt – per Mail, WhatsApp oder Call. Ich höre zu, stelle Fragen und checke, ob ich der Richtige für dich bin.',
      step2Title: 'Fragebogen ausfüllen',
      step2Desc: 'Du bekommst einen kurzen Fragebogen von mir. Damit kann ich deine Vorstellungen, Ziele und Style-Wünsche besser verstehen und direkt loslegen.',
      step3Title: 'Konzept + Angebot',
      step3Desc: 'Ich schicke dir ein klares Konzept mit Struktur, Timeline und Preis. Du weißt genau, was dich erwartet – keine versteckten Kosten, keine Überraschungen.',
      step4Title: 'Design & Umsetzung',
      step4Desc: 'Ich entwickle deine Website und halte dich auf dem Laufenden. Du bekommst Zwischenstände, kannst Feedback geben und siehst, wie alles Form annimmt.',
      step5Title: 'Launch',
      step5Desc: 'Deine Seite geht live. Ich zeige dir, wie du kleinere Updates selbst machen kannst, und bin auch danach für dich da, falls was ist.',
      stepLabel: 'Schritt',
      servicesTitle: 'Was du bekommst',
      servicesSubtitle: 'Echte Handarbeit für deinen digitalen Auftritt.',
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
      service3Title: 'Pflege auf Wunsch',
      service3Benefit: 'Nach dem Launch kannst du entspannen – ich kümmere mich um Updates und Änderungen.',
      service3Point1: 'Content-Updates innerhalb von 24h',
      service3Point2: 'Technische Wartung inklusive',
      service3Point3: 'Hosting & SSL-Zertifikat',
      whyTitle: 'Warum mit mir arbeiten?',
      whyPoint1Title: 'Ich kenne die Bühne',
      whyPoint1Text: 'Als Artist weiß ich, was zählt: ein Auftritt, der hängen bleibt. Deine Website ist deine digitale Bühne – ich sorge dafür, dass sie wirkt.',
      whyPoint2Title: 'Schnelle Kommunikation',
      whyPoint2Text: 'WhatsApp, Mail, Call – wie du willst. Ich antworte schnell und unkompliziert. Keine Warteschleifen, kein Agentur-Gedöns.',
      whyPoint3Title: 'Design first',
      whyPoint3Text: 'Bei mir steht Design an erster Stelle. Deine Seite soll nicht nur funktionieren, sondern richtig gut aussehen – auf allen Geräten.',
    },
    en: {
      heroTitle1: 'High-quality websites',
      heroTitle2: 'that deliver.',
      heroSubtitle: 'I develop your website – fast, custom-built, no templates. For artists and businesses who value real craftsmanship.',
      ctaPrimary: 'Start project',
      ctaSecondary: 'View references',
      trustIndicator: 'Built with React & Next.js',
      processTitle: 'How it works',
      processSubtitle: 'From idea to launch – a clear process that works.',
      step1Title: 'Get to know each other',
      step1Desc: 'We talk briefly about your project – via email, WhatsApp, or call. I listen, ask questions, and check if I\'m the right fit for you.',
      step2Title: 'Fill out questionnaire',
      step2Desc: 'You receive a short questionnaire from me. This helps me better understand your vision, goals, and style preferences so I can get started right away.',
      step3Title: 'Concept + Proposal',
      step3Desc: 'I send you a clear concept with structure, timeline, and price. You know exactly what to expect – no hidden costs, no surprises.',
      step4Title: 'Design & Development',
      step4Desc: 'I build your website and keep you updated. You get progress updates, can provide feedback, and see everything take shape.',
      step5Title: 'Launch',
      step5Desc: 'Your site goes live. I show you how to make small updates yourself, and I\'m there for you afterward if you need anything.',
      stepLabel: 'Step',
      servicesTitle: 'What you get',
      servicesSubtitle: 'Real craftsmanship for your digital presence.',
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
      service3Title: 'Maintenance on Demand',
      service3Benefit: 'After launch, you can relax – I take care of updates and changes.',
      service3Point1: 'Content updates within 24 hours',
      service3Point2: 'Technical maintenance included',
      service3Point3: 'Hosting & SSL certificate',
      whyTitle: 'Why work with me?',
      whyPoint1Title: 'I know the stage',
      whyPoint1Text: 'As an artist, I know what counts: a performance that sticks. Your website is your digital stage – I make sure it delivers.',
      whyPoint2Title: 'Fast communication',
      whyPoint2Text: 'WhatsApp, email, call – however you prefer. I respond quickly and straightforwardly. No queues, no agency nonsense.',
      whyPoint3Title: 'Design first',
      whyPoint3Text: 'Design comes first for me. Your site should not only work but look really good – on all devices.',
    }
  }

  const t = translations[language as keyof typeof translations]

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de')
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

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
              href="#contact"
              className="group px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-all duration-300 flex items-center gap-2"
            >
              {t.ctaPrimary}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#projects"
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

      {/* Controls */}
      <div className="fixed top-6 right-6 z-50 flex gap-3">
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-full text-sm hover:bg-zinc-800 hover:text-white transition-all duration-300"
        >
          {language === 'de' ? 'EN' : 'DE'}
        </button>
      </div>

      {/* Process Section - So läuft's ab */}
      <section className="py-32 px-6 bg-black relative">
        {/* Section Header */}
        <div className="max-w-6xl mx-auto mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t.processTitle}
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            {t.processSubtitle}
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Step 1 */}
          <div className="group relative flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl group-hover:bg-zinc-800 group-hover:border-zinc-700 transition-all duration-300">
                💬
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm text-zinc-600 font-medium">{t.stepLabel} 1</span>
                <div className="h-px flex-1 bg-zinc-800"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{t.step1Title}</h3>
              <p className="text-lg text-zinc-400 leading-relaxed">
                {t.step1Desc}
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group relative flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl group-hover:bg-zinc-800 group-hover:border-zinc-700 transition-all duration-300">
                📝
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm text-zinc-600 font-medium">{t.stepLabel} 2</span>
                <div className="h-px flex-1 bg-zinc-800"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{t.step2Title}</h3>
              <p className="text-lg text-zinc-400 leading-relaxed">
                {t.step2Desc}
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group relative flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl group-hover:bg-zinc-800 group-hover:border-zinc-700 transition-all duration-300">
                📋
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm text-zinc-600 font-medium">{t.stepLabel} 3</span>
                <div className="h-px flex-1 bg-zinc-800"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{t.step3Title}</h3>
              <p className="text-lg text-zinc-400 leading-relaxed">
                {t.step3Desc}
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="group relative flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl group-hover:bg-zinc-800 group-hover:border-zinc-700 transition-all duration-300">
                ⚡
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm text-zinc-600 font-medium">{t.stepLabel} 4</span>
                <div className="h-px flex-1 bg-zinc-800"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{t.step4Title}</h3>
              <p className="text-lg text-zinc-400 leading-relaxed">
                {t.step4Desc}
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="group relative flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl group-hover:bg-zinc-800 group-hover:border-zinc-700 transition-all duration-300">
                🚀
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm text-zinc-600 font-medium">{t.stepLabel} 5</span>
                <div className="h-px flex-1 bg-zinc-800"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{t.step5Title}</h3>
              <p className="text-lg text-zinc-400 leading-relaxed">
                {t.step5Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Was du bekommst */}
      <section className="py-32 px-6 bg-zinc-950 relative">
        {/* Section Header */}
        <div className="max-w-6xl mx-auto mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t.servicesTitle}
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* Service Cards */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Card 1 - Individuelles Design */}
          <div className="group relative bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition-all duration-300">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-6 group-hover:bg-white/10 transition-all duration-300">
              🎨
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-4">
              {t.service1Title}
            </h3>

            {/* Benefit */}
            <p className="text-zinc-400 mb-6 leading-relaxed">
              {t.service1Benefit}
            </p>

            {/* Bulletpoints */}
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-zinc-400">
                <span className="text-zinc-600 mt-1">→</span>
                <span>{t.service1Point1}</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <span className="text-zinc-600 mt-1">→</span>
                <span>{t.service1Point2}</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <span className="text-zinc-600 mt-1">→</span>
                <span>{t.service1Point3}</span>
              </li>
            </ul>
          </div>

          {/* Card 2 - Schnelle Umsetzung */}
          <div className="group relative bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition-all duration-300">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-6 group-hover:bg-white/10 transition-all duration-300">
              ⚡
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-4">
              {t.service2Title}
            </h3>

            {/* Benefit */}
            <p className="text-zinc-400 mb-6 leading-relaxed">
              {t.service2Benefit}
            </p>

            {/* Bulletpoints */}
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-zinc-400">
                <span className="text-zinc-600 mt-1">→</span>
                <span>{t.service2Point1}</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <span className="text-zinc-600 mt-1">→</span>
                <span>{t.service2Point2}</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <span className="text-zinc-600 mt-1">→</span>
                <span>{t.service2Point3}</span>
              </li>
            </ul>
          </div>

          {/* Card 3 - Pflege auf Wunsch */}
          <div className="group relative bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition-all duration-300">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-6 group-hover:bg-white/10 transition-all duration-300">
              🛠️
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-4">
              {t.service3Title}
            </h3>

            {/* Benefit */}
            <p className="text-zinc-400 mb-6 leading-relaxed">
              {t.service3Benefit}
            </p>

            {/* Bulletpoints */}
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-zinc-400">
                <span className="text-zinc-600 mt-1">→</span>
                <span>{t.service3Point1}</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <span className="text-zinc-600 mt-1">→</span>
                <span>{t.service3Point2}</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-400">
                <span className="text-zinc-600 mt-1">→</span>
                <span>{t.service3Point3}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="py-32 px-6 bg-black relative overflow-hidden">
        {/* Subtle accent line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>

        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
            {t.whyTitle}
          </h2>

          {/* 3 Points */}
          <div className="space-y-12">
            {/* Point 1 */}
            <div className="group">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-3">
                <span className="text-zinc-600 group-hover:text-zinc-500 transition-colors">01</span>
                {t.whyPoint1Title}
              </h3>
              <p className="text-lg text-zinc-400 leading-relaxed pl-12">
                {t.whyPoint1Text}
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-zinc-900"></div>

            {/* Point 2 */}
            <div className="group">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-3">
                <span className="text-zinc-600 group-hover:text-zinc-500 transition-colors">02</span>
                {t.whyPoint2Title}
              </h3>
              <p className="text-lg text-zinc-400 leading-relaxed pl-12">
                {t.whyPoint2Text}
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-zinc-900"></div>

            {/* Point 3 */}
            <div className="group">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-3">
                <span className="text-zinc-600 group-hover:text-zinc-500 transition-colors">03</span>
                {t.whyPoint3Title}
              </h3>
              <p className="text-lg text-zinc-400 leading-relaxed pl-12">
                {t.whyPoint3Text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Form */}
      <ProjectForm language={language as 'de' | 'en'} />
    </div>
  )
}
