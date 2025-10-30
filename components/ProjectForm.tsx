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
    colors: '',
    fonts: '',
    goal: '',
    usp: '',
    targetAudience: '',
    updateFrequency: '',
    standOut: '',
    exampleSites: '',
  })

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const translations = {
    de: {
      title: 'Projekt anfragen',
      subtitle: 'Erzähl mir von deinem Projekt – je mehr ich weiß, desto besser kann ich dir helfen.',
      nameLabel: 'Dein Name',
      namePlaceholder: 'Max Mustermann',
      emailLabel: 'E-Mail',
      emailPlaceholder: 'max@beispiel.de',
      scopeLabel: 'Umfang',
      scopePlaceholder: 'z.B. One-Pager, mehrseitige Website, Online-Shop...',
      styleLabel: 'Stil & Vibe',
      stylePlaceholder: 'Minimalistisch, verspielt, elegant, modern...',
      colorsLabel: 'Farben',
      colorsPlaceholder: 'Hast du schon Farben im Kopf? z.B. Schwarz, Gold, Mint...',
      fontsLabel: 'Schriften',
      fontsPlaceholder: 'Magst du serifenlose, klassische oder verspielte Fonts?',
      goalLabel: 'Ziel der Website',
      goalPlaceholder: 'Was soll deine Website erreichen? Mehr Buchungen, Info, Portfolio zeigen...',
      uspLabel: 'Dein USP',
      uspPlaceholder: 'Was macht dich oder dein Angebot besonders?',
      targetAudienceLabel: 'Zielgruppe',
      targetAudiencePlaceholder: 'Wer soll deine Website besuchen? z.B. Eventmanager, Fans, Unternehmen...',
      updateFrequencyLabel: 'Update-Häufigkeit',
      updateFrequencyOptions: [
        { value: '', label: 'Bitte auswählen...' },
        { value: 'rarely', label: 'Selten – einmal pro Jahr oder weniger' },
        { value: 'occasional', label: 'Gelegentlich – paar Mal im Jahr' },
        { value: 'regular', label: 'Regelmäßig – monatlich' },
        { value: 'frequent', label: 'Häufig – wöchentlich oder öfter' },
      ],
      standOutLabel: 'Wovon willst du dich abheben?',
      standOutPlaceholder: 'Gibt es Konkurrenz oder andere Sites, von denen du dich unterscheiden willst?',
      exampleSitesLabel: 'Beispielseiten',
      exampleSitesPlaceholder: 'Links zu Websites, die dir gefallen (Design, Struktur, Vibe...)',
      submitButton: 'Anfrage senden',
      submitting: 'Wird gesendet...',
      successMessage: 'Danke, ich melde mich schnell.',
      errorMessage: 'Da hat was nicht geklappt. Versuch es nochmal oder schreib mir direkt.',
      requiredField: 'Füll das bitte aus, dann kann ich dir gezielt helfen.',
    },
    en: {
      title: 'Request a project',
      subtitle: 'Tell me about your project – the more I know, the better I can help you.',
      nameLabel: 'Your name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email',
      emailPlaceholder: 'john@example.com',
      scopeLabel: 'Scope',
      scopePlaceholder: 'e.g. One-pager, multi-page website, online shop...',
      styleLabel: 'Style & Vibe',
      stylePlaceholder: 'Minimalist, playful, elegant, modern...',
      colorsLabel: 'Colors',
      colorsPlaceholder: 'Do you have colors in mind? e.g. Black, Gold, Mint...',
      fontsLabel: 'Fonts',
      fontsPlaceholder: 'Do you like sans-serif, classic, or playful fonts?',
      goalLabel: 'Website goal',
      goalPlaceholder: 'What should your website achieve? More bookings, info, show portfolio...',
      uspLabel: 'Your USP',
      uspPlaceholder: 'What makes you or your offer special?',
      targetAudienceLabel: 'Target audience',
      targetAudiencePlaceholder: 'Who should visit your website? e.g. Event managers, fans, companies...',
      updateFrequencyLabel: 'Update frequency',
      updateFrequencyOptions: [
        { value: '', label: 'Please select...' },
        { value: 'rarely', label: 'Rarely – once a year or less' },
        { value: 'occasional', label: 'Occasionally – a few times a year' },
        { value: 'regular', label: 'Regularly – monthly' },
        { value: 'frequent', label: 'Frequently – weekly or more' },
      ],
      standOutLabel: 'What do you want to stand out from?',
      standOutPlaceholder: 'Is there competition or other sites you want to differentiate from?',
      exampleSitesLabel: 'Example sites',
      exampleSitesPlaceholder: 'Links to websites you like (design, structure, vibe...)',
      submitButton: 'Send request',
      submitting: 'Sending...',
      successMessage: "Thanks, I'll get back to you quickly.",
      errorMessage: "Something went wrong. Try again or contact me directly.",
      requiredField: 'Please fill this out so I can help you effectively.',
    },
  }

  const t = translations[language]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission (replace with actual backend integration)
    try {
      // Placeholder - Backend integration would go here
      console.log('Form submitted:', formData)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simulate success (change to actual API response handling)
      setSubmitStatus('success')

      // Reset form on success
      setFormData({
        name: '',
        email: '',
        scope: '',
        style: '',
        colors: '',
        fonts: '',
        goal: '',
        usp: '',
        targetAudience: '',
        updateFrequency: '',
        standOut: '',
        exampleSites: '',
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

  return (
    <section id="contact" className="py-32 px-6 bg-black relative">
      <div className="max-w-3xl mx-auto">
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
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
              {t.nameLabel}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.namePlaceholder}
              required
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
              {t.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.emailPlaceholder}
              required
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent transition-all"
            />
          </div>

          {/* Scope */}
          <div>
            <label htmlFor="scope" className="block text-sm font-medium text-zinc-400 mb-2">
              {t.scopeLabel}
            </label>
            <input
              type="text"
              id="scope"
              name="scope"
              value={formData.scope}
              onChange={handleChange}
              placeholder={t.scopePlaceholder}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent transition-all"
            />
          </div>

          {/* Style */}
          <div>
            <label htmlFor="style" className="block text-sm font-medium text-zinc-400 mb-2">
              {t.styleLabel}
            </label>
            <input
              type="text"
              id="style"
              name="style"
              value={formData.style}
              onChange={handleChange}
              placeholder={t.stylePlaceholder}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent transition-all"
            />
          </div>

          {/* Colors */}
          <div>
            <label htmlFor="colors" className="block text-sm font-medium text-zinc-400 mb-2">
              {t.colorsLabel}
            </label>
            <input
              type="text"
              id="colors"
              name="colors"
              value={formData.colors}
              onChange={handleChange}
              placeholder={t.colorsPlaceholder}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent transition-all"
            />
          </div>

          {/* Fonts */}
          <div>
            <label htmlFor="fonts" className="block text-sm font-medium text-zinc-400 mb-2">
              {t.fontsLabel}
            </label>
            <input
              type="text"
              id="fonts"
              name="fonts"
              value={formData.fonts}
              onChange={handleChange}
              placeholder={t.fontsPlaceholder}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent transition-all"
            />
          </div>

          {/* Goal */}
          <div>
            <label htmlFor="goal" className="block text-sm font-medium text-zinc-400 mb-2">
              {t.goalLabel}
            </label>
            <textarea
              id="goal"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              placeholder={t.goalPlaceholder}
              rows={3}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent transition-all resize-none"
            />
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
              rows={3}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Target Audience */}
          <div>
            <label htmlFor="targetAudience" className="block text-sm font-medium text-zinc-400 mb-2">
              {t.targetAudienceLabel}
            </label>
            <input
              type="text"
              id="targetAudience"
              name="targetAudience"
              value={formData.targetAudience}
              onChange={handleChange}
              placeholder={t.targetAudiencePlaceholder}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent transition-all"
            />
          </div>

          {/* Update Frequency */}
          <div>
            <label htmlFor="updateFrequency" className="block text-sm font-medium text-zinc-400 mb-2">
              {t.updateFrequencyLabel}
            </label>
            <select
              id="updateFrequency"
              name="updateFrequency"
              value={formData.updateFrequency}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent transition-all"
            >
              {t.updateFrequencyOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Stand Out */}
          <div>
            <label htmlFor="standOut" className="block text-sm font-medium text-zinc-400 mb-2">
              {t.standOutLabel}
            </label>
            <textarea
              id="standOut"
              name="standOut"
              value={formData.standOut}
              onChange={handleChange}
              placeholder={t.standOutPlaceholder}
              rows={3}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Example Sites */}
          <div>
            <label htmlFor="exampleSites" className="block text-sm font-medium text-zinc-400 mb-2">
              {t.exampleSitesLabel}
            </label>
            <textarea
              id="exampleSites"
              name="exampleSites"
              value={formData.exampleSites}
              onChange={handleChange}
              placeholder={t.exampleSitesPlaceholder}
              rows={3}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
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

        {/* Required Field Helper Text */}
        <p className="text-sm text-zinc-500 text-center mt-6">
          * {t.requiredField}
        </p>
      </div>
    </section>
  )
}
