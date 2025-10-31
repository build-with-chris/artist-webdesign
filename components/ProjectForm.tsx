'use client'

import { useState } from 'react'

interface ProjectFormProps {
  language: 'de' | 'en'
}

export default function ProjectForm({ language }: ProjectFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: '',
    style: '',
    colors: [] as string[],
    fonts: '',
    goal: [] as string[],
    usp: '',
    targetAudience: '',
    updateFrequency: '',
    standOut: '',
    exampleSites: '',
    budget: '',
    timeline: '',
  })

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const translations = {
    de: {
      title: 'Projekt anfragen',
      subtitle: 'In 5 Minuten zum Design-Entwurf – einfach, schnell, unverbindlich.',
      nameLabel: 'Dein Name',
      namePlaceholder: 'Max Mustermann',
      emailLabel: 'E-Mail',
      emailPlaceholder: 'max@beispiel.de',
      scopeLabel: 'Was ist dir am wichtigsten?',
      scopeOptions: [
        { value: 'onepager', label: 'Schnell online', desc: 'Eine Seite, schnell und klar' },
        { value: 'multipage', label: 'Mehrere Seiten', desc: 'Verschiedene Unterseiten & Inhalte' },
        { value: 'portfolio', label: 'Meine Arbeiten zeigen', desc: 'Portfolio & Projekte präsentieren' },
        { value: 'booking', label: 'Buchungen ermöglichen', desc: 'Termine & Events online buchbar' },
        { value: 'blog', label: 'Regelmäßig Inhalte teilen', desc: 'Blog oder News-Bereich' },
        { value: 'other', label: 'Etwas anderes', desc: 'Erzähl mir davon' },
      ],
      styleLabel: 'Welcher Stil passt zu dir?',
      styleOptions: [
        { value: 'minimalist', label: 'Minimalistisch', desc: 'Clean & einfach' },
        { value: 'elegant', label: 'Elegant', desc: 'Klassisch & edel' },
        { value: 'modern', label: 'Modern', desc: 'Futuristisch & trendy' },
        { value: 'playful', label: 'Verspielt', desc: 'Kreativ & locker' },
        { value: 'professional', label: 'Professionell', desc: 'Seriös & vertrauenswürdig' },
        { value: 'bold', label: 'Mutig', desc: 'Auffällig & stark' },
      ],
      colorsLabel: 'Welches Farbschema gefällt dir am besten?',
      colorsOptions: [
        { value: 'monochrome', label: 'Monochrom', desc: 'Schwarz, Weiß, Grautöne', colors: ['bg-black', 'bg-white', 'bg-zinc-600'] },
        { value: 'warm', label: 'Warm-Töne', desc: 'Orange, Gold, Beige', colors: ['bg-orange-500', 'bg-yellow-500', 'bg-amber-200'] },
        { value: 'cool', label: 'Cool-Töne', desc: 'Blau, Mint, Türkis', colors: ['bg-blue-500', 'bg-teal-500', 'bg-cyan-300'] },
        { value: 'earth', label: 'Erdtöne', desc: 'Braun, Beige, Terrakotta', colors: ['bg-amber-700', 'bg-stone-500', 'bg-orange-700'] },
        { value: 'bold', label: 'Kontrastreich', desc: 'Schwarz, Weiß, Akzentfarbe', colors: ['bg-black', 'bg-white', 'bg-red-500'] },
        { value: 'pastel', label: 'Pastell', desc: 'Sanfte, zarte Töne', colors: ['bg-pink-200', 'bg-purple-200', 'bg-blue-200'] },
      ],
      fontsLabel: 'Welche Schrift gefällt dir am besten?',
      fontsOptions: [
        { value: 'clean', label: 'Inter / Helvetica', desc: 'Modern & klar', example: 'Meine Kunst erzählt Geschichten' },
        { value: 'elegant', label: 'Playfair / Georgia', desc: 'Klassisch & elegant', example: 'Meine Kunst erzählt Geschichten' },
        { value: 'bold', label: 'Montserrat / Impact', desc: 'Kraftvoll & auffällig', example: 'Meine Kunst erzählt Geschichten' },
        { value: 'minimal', label: 'Roboto / Arial', desc: 'Sauber & minimalistisch', example: 'Meine Kunst erzählt Geschichten' },
        { value: 'creative', label: 'Poppins / Futura', desc: 'Kreativ & verspielt', example: 'Meine Kunst erzählt Geschichten' },
        { value: 'tech', label: 'Space Mono / Courier', desc: 'Technisch & modern', example: 'Meine Kunst erzählt Geschichten' },
      ],
      goalLabel: 'Was soll deine Website erreichen? (Mehrfachauswahl)',
      goalOptions: [
        { value: 'bookings', label: 'Mehr Buchungen', icon: '📅' },
        { value: 'portfolio', label: 'Portfolio zeigen', icon: '🎨' },
        { value: 'info', label: 'Informationen teilen', icon: 'ℹ️' },
        { value: 'contact', label: 'Kontaktaufnahme', icon: '✉️' },
        { value: 'sales', label: 'Produkte verkaufen', icon: '💰' },
        { value: 'events', label: 'Events bewerben', icon: '🎪' },
        { value: 'credibility', label: 'Glaubwürdigkeit zeigen', icon: '⭐' },
      ],
      uspLabel: 'Was macht dich besonders?',
      uspPlaceholder: 'Kurz und prägnant...',
      targetAudienceLabel: 'Wer ist deine Zielgruppe?',
      targetAudienceOptions: [
        { value: 'artists', label: 'Künstler & Kreative' },
        { value: 'businesses', label: 'Unternehmen' },
        { value: 'eventmanagers', label: 'Event-Manager' },
        { value: 'fans', label: 'Fans & Community' },
        { value: 'public', label: 'Öffentlichkeit' },
        { value: 'other', label: 'Andere' },
      ],
      updateFrequencyLabel: 'Wie oft willst du Inhalte aktualisieren?',
      updateFrequencyOptions: [
        { value: '', label: 'Bitte auswählen...' },
        { value: 'rarely', label: 'Selten – einmal pro Jahr oder weniger' },
        { value: 'occasional', label: 'Gelegentlich – paar Mal im Jahr' },
        { value: 'regular', label: 'Regelmäßig – monatlich' },
        { value: 'frequent', label: 'Häufig – wöchentlich oder öfter' },
      ],
      timelineLabel: 'Wann soll die Website online gehen?',
      timelineOptions: [
        { value: '', label: 'Bitte auswählen...' },
        { value: 'asap', label: 'So schnell wie möglich' },
        { value: 'month', label: 'In 1 Monat' },
        { value: 'quarter', label: 'In 2-3 Monaten' },
        { value: 'flexible', label: 'Flexibel' },
      ],
      budgetLabel: 'Welches Paket passt zu dir?',
      budgetOptions: [
        { value: 'basic', label: 'Basic', desc: '250€ – One-Pager, schnell online' },
        { value: 'advanced', label: 'Advanced', desc: 'ab 450€ – Mehrseitig, erweiterte Features' },
        { value: 'custom', label: 'Individuell', desc: 'Lass uns gemeinsam planen' },
      ],
      exampleSitesLabel: 'Beispielseiten (optional)',
      exampleSitesPlaceholder: 'Links zu Websites, die dir gefallen...',
      submitButton: 'Anfrage senden',
      submitting: 'Wird gesendet...',
      successMessage: 'Danke! Ich melde mich schnell mit einem ersten Design-Entwurf.',
      errorMessage: 'Da hat was nicht geklappt. Versuch es nochmal oder schreib mir direkt.',
    },
    en: {
      title: 'Request a project',
      subtitle: 'Get a design draft in 5 minutes – simple, fast, non-binding.',
      nameLabel: 'Your name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email',
      emailPlaceholder: 'john@example.com',
      scopeLabel: 'What is most important to you?',
      scopeOptions: [
        { value: 'onepager', label: 'Get online fast', desc: 'One page, quick and clear' },
        { value: 'multipage', label: 'Multiple pages', desc: 'Different pages & content' },
        { value: 'portfolio', label: 'Show my work', desc: 'Portfolio & projects presentation' },
        { value: 'booking', label: 'Enable bookings', desc: 'Book appointments & events online' },
        { value: 'blog', label: 'Share content regularly', desc: 'Blog or news section' },
        { value: 'other', label: 'Something else', desc: 'Tell me about it' },
      ],
      styleLabel: 'Which style fits you?',
      styleOptions: [
        { value: 'minimalist', label: 'Minimalist', desc: 'Clean & simple' },
        { value: 'elegant', label: 'Elegant', desc: 'Classic & refined' },
        { value: 'modern', label: 'Modern', desc: 'Futuristic & trendy' },
        { value: 'playful', label: 'Playful', desc: 'Creative & loose' },
        { value: 'professional', label: 'Professional', desc: 'Serious & trustworthy' },
        { value: 'bold', label: 'Bold', desc: 'Eye-catching & strong' },
      ],
      colorsLabel: 'Which color scheme appeals to you most?',
      colorsOptions: [
        { value: 'monochrome', label: 'Monochrome', desc: 'Black, White, Grays', colors: ['bg-black', 'bg-white', 'bg-zinc-600'] },
        { value: 'warm', label: 'Warm Tones', desc: 'Orange, Gold, Beige', colors: ['bg-orange-500', 'bg-yellow-500', 'bg-amber-200'] },
        { value: 'cool', label: 'Cool Tones', desc: 'Blue, Mint, Turquoise', colors: ['bg-blue-500', 'bg-teal-500', 'bg-cyan-300'] },
        { value: 'earth', label: 'Earth Tones', desc: 'Brown, Beige, Terracotta', colors: ['bg-amber-700', 'bg-stone-500', 'bg-orange-700'] },
        { value: 'bold', label: 'High Contrast', desc: 'Black, White, Accent Color', colors: ['bg-black', 'bg-white', 'bg-red-500'] },
        { value: 'pastel', label: 'Pastel', desc: 'Soft, gentle tones', colors: ['bg-pink-200', 'bg-purple-200', 'bg-blue-200'] },
      ],
      fontsLabel: 'Which font do you like best?',
      fontsOptions: [
        { value: 'clean', label: 'Inter / Helvetica', desc: 'Modern & clear', example: 'My art tells stories' },
        { value: 'elegant', label: 'Playfair / Georgia', desc: 'Classic & elegant', example: 'My art tells stories' },
        { value: 'bold', label: 'Montserrat / Impact', desc: 'Powerful & eye-catching', example: 'My art tells stories' },
        { value: 'minimal', label: 'Roboto / Arial', desc: 'Clean & minimalist', example: 'My art tells stories' },
        { value: 'creative', label: 'Poppins / Futura', desc: 'Creative & playful', example: 'My art tells stories' },
        { value: 'tech', label: 'Space Mono / Courier', desc: 'Technical & modern', example: 'My art tells stories' },
      ],
      goalLabel: 'What should your website achieve? (Multiple selection)',
      goalOptions: [
        { value: 'bookings', label: 'More bookings', icon: '📅' },
        { value: 'portfolio', label: 'Show portfolio', icon: '🎨' },
        { value: 'info', label: 'Share information', icon: 'ℹ️' },
        { value: 'contact', label: 'Get in touch', icon: '✉️' },
        { value: 'sales', label: 'Sell products', icon: '💰' },
        { value: 'events', label: 'Promote events', icon: '🎪' },
        { value: 'credibility', label: 'Show credibility', icon: '⭐' },
      ],
      uspLabel: 'What makes you special?',
      uspPlaceholder: 'Short and concise...',
      targetAudienceLabel: 'Who is your target audience?',
      targetAudienceOptions: [
        { value: 'artists', label: 'Artists & Creatives' },
        { value: 'businesses', label: 'Businesses' },
        { value: 'eventmanagers', label: 'Event Managers' },
        { value: 'fans', label: 'Fans & Community' },
        { value: 'public', label: 'General Public' },
        { value: 'other', label: 'Other' },
      ],
      updateFrequencyLabel: 'How often do you want to update content?',
      updateFrequencyOptions: [
        { value: '', label: 'Please select...' },
        { value: 'rarely', label: 'Rarely – once a year or less' },
        { value: 'occasional', label: 'Occasionally – a few times a year' },
        { value: 'regular', label: 'Regularly – monthly' },
        { value: 'frequent', label: 'Frequently – weekly or more' },
      ],
      timelineLabel: 'When should the website go online?',
      timelineOptions: [
        { value: '', label: 'Please select...' },
        { value: 'asap', label: 'As soon as possible' },
        { value: 'month', label: 'In 1 month' },
        { value: 'quarter', label: 'In 2-3 months' },
        { value: 'flexible', label: 'Flexible' },
      ],
      budgetLabel: 'Which package fits you?',
      budgetOptions: [
        { value: 'basic', label: 'Basic', desc: '€250 – One-pager, quick online' },
        { value: 'advanced', label: 'Advanced', desc: 'from €450 – Multi-page, advanced features' },
        { value: 'custom', label: 'Custom', desc: 'Let\'s plan together' },
      ],
      exampleSitesLabel: 'Example sites (optional)',
      exampleSitesPlaceholder: 'Links to websites you like...',
      submitButton: 'Send request',
      submitting: 'Sending...',
      successMessage: 'Thanks! I\'ll get back to you quickly with a first design draft.',
      errorMessage: 'Something went wrong. Try again or contact me directly.',
    },
  }

  const t = translations[language]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to send email')
      }

      setSubmitStatus('success')

      // Reset form on success
      setFormData({
        name: '',
        email: '',
        scope: '',
        style: '',
        colors: [],
        fonts: '',
        goal: [],
        usp: '',
        targetAudience: '',
        updateFrequency: '',
        standOut: '',
        exampleSites: '',
        budget: '',
        timeline: '',
      })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const toggleArray = (field: 'colors' | 'goal', value: string) => {
    setFormData(prev => {
      const currentArray = prev[field] as string[]
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value]
      return { ...prev, [field]: newArray }
    })
  }

  const getFontFamily = (fontValue: string) => {
    const fontMap: { [key: string]: string } = {
      clean: 'Inter, Helvetica, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      elegant: '"Playfair Display", Georgia, "Times New Roman", serif',
      bold: 'Montserrat, Impact, "Arial Black", sans-serif',
      minimal: 'Roboto, Arial, sans-serif',
      creative: 'Poppins, Futura, "Century Gothic", sans-serif',
      tech: '"Space Mono", "Courier New", Courier, monospace',
    }
    return fontMap[fontValue] || 'inherit'
  }

  return (
    <section id="contact" className="py-32 px-6 bg-black relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-zinc-400">
            {t.subtitle}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
                {t.nameLabel} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.namePlaceholder}
                required
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
                {t.emailLabel} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.emailPlaceholder}
                required
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Scope - Button Selection */}
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-4">
              {t.scopeLabel} *
            </label>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {t.scopeOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, scope: option.value })}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    formData.scope === option.value
                      ? 'border-white bg-white/10 text-white'
                      : 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800'
                  }`}
                >
                  <div className="font-semibold mb-1">{option.label}</div>
                  <div className="text-xs text-zinc-500">{option.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Style - Button Selection */}
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-4">
              {t.styleLabel}
            </label>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {t.styleOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, style: option.value })}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    formData.style === option.value
                      ? 'border-white bg-white/10 text-white'
                      : 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800'
                  }`}
                >
                  <div className="font-semibold mb-1">{option.label}</div>
                  <div className="text-xs text-zinc-500">{option.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Colors - Theme Selection */}
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-4">
              {t.colorsLabel}
            </label>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {t.colorsOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, colors: [option.value] })}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    formData.colors.includes(option.value)
                      ? 'border-white bg-white/10 text-white'
                      : 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800'
                  }`}
                >
                  <div className="font-semibold mb-2">{option.label}</div>
                  <div className="text-xs text-zinc-500 mb-3">{option.desc}</div>
                  <div className="flex gap-2">
                    {option.colors.map((colorClass, idx) => (
                      <div
                        key={idx}
                        className={`w-8 h-8 rounded ${colorClass} ${colorClass === 'bg-white' || colorClass === 'bg-black' ? 'border border-zinc-700' : ''}`}
                      ></div>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Fonts - Button Selection with Examples */}
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-4">
              {t.fontsLabel}
            </label>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {t.fontsOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, fonts: option.value })}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    formData.fonts === option.value
                      ? 'border-white bg-white/10 text-white'
                      : 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800'
                  }`}
                >
                  <div className="font-semibold mb-1">{option.label}</div>
                  <div className="text-xs text-zinc-500 mb-2">{option.desc}</div>
                  <div 
                    className="text-lg font-medium text-zinc-200 mt-2"
                    style={{ fontFamily: getFontFamily(option.value) }}
                  >
                    {option.example}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Goal - Multi Select */}
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-4">
              {t.goalLabel}
            </label>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {t.goalOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => toggleArray('goal', option.value)}
                  className={`p-4 rounded-xl border-2 transition-all text-left flex items-start gap-3 ${
                    formData.goal.includes(option.value)
                      ? 'border-white bg-white/10 text-white'
                      : 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800'
                  }`}
                >
                  <span className="text-2xl">{option.icon}</span>
                  <span className="font-medium">{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Target Audience - Button Selection */}
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-4">
              {t.targetAudienceLabel}
            </label>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {t.targetAudienceOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, targetAudience: option.value })}
                  className={`p-4 rounded-xl border-2 transition-all text-center ${
                    formData.targetAudience === option.value
                      ? 'border-white bg-white/10 text-white'
                      : 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Update Frequency & Timeline */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="updateFrequency" className="block text-sm font-medium text-zinc-400 mb-2">
                {t.updateFrequencyLabel}
              </label>
              <select
                id="updateFrequency"
                name="updateFrequency"
                value={formData.updateFrequency}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
              >
                {t.updateFrequencyOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-zinc-400 mb-2">
                {t.timelineLabel}
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
              >
                {t.timelineOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* USP */}
          <div>
            <label htmlFor="usp" className="block text-sm font-medium text-zinc-400 mb-2">
              {t.uspLabel}
            </label>
            <textarea
              id="usp"
              name="usp"
              value={formData.usp}
              onChange={handleChange}
              placeholder={t.uspPlaceholder}
              rows={2}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Budget - Package Selection */}
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-4">
              {t.budgetLabel}
            </label>
            <div className="grid sm:grid-cols-3 gap-4">
              {t.budgetOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, budget: option.value })}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    formData.budget === option.value
                      ? 'border-white bg-white/10 text-white'
                      : 'border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-800'
                  }`}
                >
                  <div className="font-semibold mb-1">{option.label}</div>
                  <div className="text-xs text-zinc-500">{option.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Example Sites */}
          <div>
            <label htmlFor="exampleSites" className="block text-sm font-medium text-zinc-400 mb-2">
              {t.exampleSitesLabel}
            </label>
            <input
              type="text"
              id="exampleSites"
              name="exampleSites"
              value={formData.exampleSites}
              onChange={handleChange}
              placeholder={t.exampleSitesPlaceholder}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || !formData.name || !formData.email || !formData.scope}
            className="w-full px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? t.submitting : t.submitButton}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mt-6 p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
              <p className="text-green-400 text-center font-medium">
                ✓ {t.successMessage}
              </p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mt-6 p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
              <p className="text-red-400 text-center">
                {t.errorMessage}
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
