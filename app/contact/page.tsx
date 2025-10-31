'use client'
import { useLanguage } from '@/components/LanguageProvider'
import { useState } from 'react'

export default function ContactPage() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const t = {
    de: {
      title: 'Kontakt',
      subtitle: 'Schreib mir gerne eine Nachricht oder ruf mich an.',
      nameLabel: 'Dein Name',
      namePlaceholder: 'Max Mustermann',
      emailLabel: 'E-Mail',
      emailPlaceholder: 'max@beispiel.de',
      messageLabel: 'Deine Nachricht',
      messagePlaceholder: 'Schreib mir, was auf dem Herzen liegt...',
      phoneLabel: 'Telefon',
      phone: '0049 159 04891419',
      submitButton: 'Nachricht senden',
      submitting: 'Wird gesendet...',
      successMessage: 'Danke! Ich melde mich schnell zurück.',
      errorMessage: 'Da hat was nicht geklappt. Versuch es nochmal oder ruf mich an.',
      requiredField: 'Pflichtfelder',
    },
    en: {
      title: 'Contact',
      subtitle: 'Feel free to send me a message or give me a call.',
      nameLabel: 'Your name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email',
      emailPlaceholder: 'john@example.com',
      messageLabel: 'Your message',
      messagePlaceholder: 'Tell me what\'s on your mind...',
      phoneLabel: 'Phone',
      phone: '0049 159 04891419',
      submitButton: 'Send message',
      submitting: 'Sending...',
      successMessage: 'Thanks! I\'ll get back to you quickly.',
      errorMessage: 'Something went wrong. Try again or give me a call.',
      requiredField: 'Required fields',
    },
  }[language]

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
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          contactType: 'general',
        }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to send message')
      }

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-black text-white py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-zinc-400">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                {t.phoneLabel}
              </h2>
              <a
                href={`tel:${t.phone.replace(/\s/g, '')}`}
                className="text-xl text-zinc-300 hover:text-white transition-colors inline-block"
              >
                {t.phone}
              </a>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                {t.emailLabel}
              </h2>
              <a
                href="mailto:chris.hermann9397@gmail.com"
                className="text-xl text-zinc-300 hover:text-white transition-colors inline-block"
              >
                chris.hermann9397@gmail.com
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
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

              {/* Email */}
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

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
                  {t.messageLabel} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.messagePlaceholder}
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
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
        </div>
      </div>
    </div>
  )
}
