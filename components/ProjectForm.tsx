'use client'

import { useState } from 'react'
import { Button } from './ui/Button'
import { TextField, TextAreaField, SelectField, ChoiceTile } from './ui/Field'
import Icon, { type IconName } from './ui/Icon'
import { previewFontClass } from '@/lib/fonts'

interface ProjectFormProps {
  language: 'de' | 'en'
}

const emptyForm = {
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
  website: '', // Honigtopf
}

type FormData = typeof emptyForm
type Errors = Partial<Record<keyof FormData, string>>

/**
 * Der Fragebogen fuehrt jetzt durch drei Etappen statt vierzehn Felder am
 * Stueck zu zeigen. Inhalt und uebertragene Daten sind unveraendert, nur der
 * Weg dahin ist kuerzer: Fortschrittsbalken oben, Pruefung je Etappe, und
 * die Schriftvorschau zeigt endlich die echten Schriften.
 */
export default function ProjectForm({ language }: ProjectFormProps) {
  const [formData, setFormData] = useState<FormData>(emptyForm)
  const [errors, setErrors] = useState<Errors>({})
  const [step, setStep] = useState(0)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStartTime] = useState(Date.now())

  const t = {
    de: {
      title: 'Projekt anfragen',
      subtitle: 'In etwa fünf Minuten zum ersten Design-Entwurf. Unverbindlich.',
      stepOf: (a: number, b: number) => `Schritt ${a} von ${b}`,
      steps: ['Dein Projekt', 'Dein Stil', 'Rahmen'],
      stepHints: [
        'Wer bist du und was soll die Website leisten?',
        'Damit ich weiß, wie dein Entwurf aussehen soll.',
        'Zeitrahmen, Budget und alles, was mir sonst hilft.',
      ],
      back: 'Zurück',
      next: 'Weiter',
      nameLabel: 'Dein Name',
      namePlaceholder: 'Max Mustermann',
      emailLabel: 'E-Mail',
      emailPlaceholder: 'max@beispiel.de',
      scopeLabel: 'Was ist dir am wichtigsten?',
      scopeOptions: [
        { value: 'onepager', label: 'Schnell online', desc: 'Eine Seite, schnell und klar' },
        { value: 'multipage', label: 'Mehrere Seiten', desc: 'Verschiedene Unterseiten und Inhalte' },
        { value: 'portfolio', label: 'Meine Arbeiten zeigen', desc: 'Portfolio und Projekte präsentieren' },
        { value: 'booking', label: 'Buchungen ermöglichen', desc: 'Termine und Events online buchbar' },
        { value: 'blog', label: 'Regelmäßig Inhalte teilen', desc: 'Blog oder News-Bereich' },
        { value: 'other', label: 'Etwas anderes', desc: 'Erzähl mir davon' },
      ],
      goalLabel: 'Was soll deine Website erreichen?',
      goalHint: 'Mehrfachauswahl möglich',
      goalOptions: [
        { value: 'bookings', label: 'Mehr Buchungen', icon: 'calendar' as IconName },
        { value: 'portfolio', label: 'Portfolio zeigen', icon: 'palette' as IconName },
        { value: 'info', label: 'Informationen teilen', icon: 'info' as IconName },
        { value: 'contact', label: 'Kontaktaufnahme', icon: 'mail' as IconName },
        { value: 'sales', label: 'Produkte verkaufen', icon: 'euro' as IconName },
        { value: 'events', label: 'Events bewerben', icon: 'ticket' as IconName },
        { value: 'credibility', label: 'Glaubwürdigkeit zeigen', icon: 'star' as IconName },
      ],
      styleLabel: 'Welcher Stil passt zu dir?',
      styleOptions: [
        { value: 'minimalist', label: 'Minimalistisch', desc: 'Aufgeräumt und einfach' },
        { value: 'elegant', label: 'Elegant', desc: 'Klassisch und edel' },
        { value: 'modern', label: 'Modern', desc: 'Klar und aktuell' },
        { value: 'playful', label: 'Verspielt', desc: 'Kreativ und locker' },
        { value: 'professional', label: 'Professionell', desc: 'Seriös und vertrauenswürdig' },
        { value: 'bold', label: 'Mutig', desc: 'Auffällig und stark' },
      ],
      colorsLabel: 'Welches Farbschema gefällt dir?',
      colorsOptions: [
        { value: 'monochrome', label: 'Monochrom', desc: 'Schwarz, Weiß, Grautöne', colors: ['#0c0c0e', '#f5f4f1', '#6b6b70'] },
        { value: 'warm', label: 'Warme Töne', desc: 'Orange, Gold, Beige', colors: ['#ff6a1a', '#eab308', '#fde68a'] },
        { value: 'cool', label: 'Kühle Töne', desc: 'Blau, Mint, Türkis', colors: ['#2563eb', '#14b8a6', '#67e8f9'] },
        { value: 'earth', label: 'Erdtöne', desc: 'Braun, Beige, Terrakotta', colors: ['#92400e', '#a8a29e', '#c2410c'] },
        { value: 'bold', label: 'Kontrastreich', desc: 'Schwarz, Weiß, Akzentfarbe', colors: ['#0c0c0e', '#f5f4f1', '#dc2626'] },
        { value: 'pastel', label: 'Pastell', desc: 'Sanfte, zarte Töne', colors: ['#fbcfe8', '#ddd6fe', '#bfdbfe'] },
      ],
      fontsLabel: 'Welche Schrift gefällt dir?',
      fontsHint: 'Die Vorschau zeigt die echte Schrift.',
      fontsSample: 'Meine Arbeit erzählt Geschichten',
      fontsOptions: [
        { value: 'clean', label: 'Inter', desc: 'Modern und klar' },
        { value: 'elegant', label: 'Playfair Display', desc: 'Klassisch und elegant' },
        { value: 'bold', label: 'Montserrat', desc: 'Kraftvoll und auffällig' },
        { value: 'minimal', label: 'Roboto', desc: 'Sauber und zurückhaltend' },
        { value: 'creative', label: 'Poppins', desc: 'Freundlich und rund' },
        { value: 'tech', label: 'Space Mono', desc: 'Technisch und eigen' },
      ],
      targetAudienceLabel: 'Wer ist deine Zielgruppe?',
      targetAudienceOptions: [
        { value: 'artists', label: 'Künstler und Kreative' },
        { value: 'businesses', label: 'Unternehmen' },
        { value: 'eventmanagers', label: 'Event-Manager' },
        { value: 'fans', label: 'Fans und Community' },
        { value: 'public', label: 'Öffentlichkeit' },
        { value: 'other', label: 'Andere' },
      ],
      uspLabel: 'Was macht dich besonders?',
      uspPlaceholder: 'Kurz und in deinen Worten.',
      updateFrequencyLabel: 'Wie oft willst du Inhalte aktualisieren?',
      updateFrequencyOptions: [
        { value: '', label: 'Bitte auswählen' },
        { value: 'rarely', label: 'Selten, einmal im Jahr oder weniger' },
        { value: 'occasional', label: 'Gelegentlich, ein paar Mal im Jahr' },
        { value: 'regular', label: 'Regelmäßig, monatlich' },
        { value: 'frequent', label: 'Häufig, wöchentlich oder öfter' },
      ],
      timelineLabel: 'Wann soll die Website online gehen?',
      timelineOptions: [
        { value: '', label: 'Bitte auswählen' },
        { value: 'asap', label: 'So schnell wie möglich' },
        { value: 'month', label: 'In einem Monat' },
        { value: 'quarter', label: 'In zwei bis drei Monaten' },
        { value: 'flexible', label: 'Flexibel' },
      ],
      budgetLabel: 'Welches Paket passt zu dir?',
      budgetOptions: [
        { value: 'basic', label: 'Basic', desc: '500 € · Onepager, schnell online' },
        { value: 'advanced', label: 'Advanced', desc: '900 € · Mehrseitig, erweiterte Funktionen' },
        { value: 'custom', label: 'Individuell', desc: 'Lass uns gemeinsam planen' },
      ],
      exampleSitesLabel: 'Beispielseiten',
      exampleSitesOptional: 'optional',
      exampleSitesPlaceholder: 'Links zu Websites, die dir gefallen',
      submitButton: 'Anfrage senden',
      submitting: 'Wird gesendet',
      successTitle: 'Angekommen',
      successMessage: 'Danke. Ich melde mich schnell mit einem ersten Design-Entwurf.',
      errorMessage: 'Da hat etwas nicht geklappt. Versuch es noch einmal oder schreib mir direkt.',
      errName: 'Bitte trag deinen Namen ein.',
      errEmail: 'Bitte trag eine gültige E-Mail-Adresse ein.',
      errScope: 'Bitte wähl aus, was dir am wichtigsten ist.',
      restart: 'Noch eine Anfrage senden',
    },
    en: {
      title: 'Request a project',
      subtitle: 'About five minutes to a first design draft. No obligation.',
      stepOf: (a: number, b: number) => `Step ${a} of ${b}`,
      steps: ['Your project', 'Your style', 'The frame'],
      stepHints: [
        'Who are you and what should the website do?',
        'So I know what your draft should look like.',
        'Timing, budget and anything else that helps.',
      ],
      back: 'Back',
      next: 'Next',
      nameLabel: 'Your name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email',
      emailPlaceholder: 'john@example.com',
      scopeLabel: 'What matters most to you?',
      scopeOptions: [
        { value: 'onepager', label: 'Get online fast', desc: 'One page, quick and clear' },
        { value: 'multipage', label: 'Multiple pages', desc: 'Different pages and content' },
        { value: 'portfolio', label: 'Show my work', desc: 'Present portfolio and projects' },
        { value: 'booking', label: 'Enable bookings', desc: 'Book appointments and events online' },
        { value: 'blog', label: 'Share content regularly', desc: 'Blog or news section' },
        { value: 'other', label: 'Something else', desc: 'Tell me about it' },
      ],
      goalLabel: 'What should your website achieve?',
      goalHint: 'Pick as many as you like',
      goalOptions: [
        { value: 'bookings', label: 'More bookings', icon: 'calendar' as IconName },
        { value: 'portfolio', label: 'Show portfolio', icon: 'palette' as IconName },
        { value: 'info', label: 'Share information', icon: 'info' as IconName },
        { value: 'contact', label: 'Get in touch', icon: 'mail' as IconName },
        { value: 'sales', label: 'Sell products', icon: 'euro' as IconName },
        { value: 'events', label: 'Promote events', icon: 'ticket' as IconName },
        { value: 'credibility', label: 'Show credibility', icon: 'star' as IconName },
      ],
      styleLabel: 'Which style fits you?',
      styleOptions: [
        { value: 'minimalist', label: 'Minimalist', desc: 'Clean and simple' },
        { value: 'elegant', label: 'Elegant', desc: 'Classic and refined' },
        { value: 'modern', label: 'Modern', desc: 'Clear and current' },
        { value: 'playful', label: 'Playful', desc: 'Creative and loose' },
        { value: 'professional', label: 'Professional', desc: 'Serious and trustworthy' },
        { value: 'bold', label: 'Bold', desc: 'Eye-catching and strong' },
      ],
      colorsLabel: 'Which colour scheme appeals to you?',
      colorsOptions: [
        { value: 'monochrome', label: 'Monochrome', desc: 'Black, white, greys', colors: ['#0c0c0e', '#f5f4f1', '#6b6b70'] },
        { value: 'warm', label: 'Warm tones', desc: 'Orange, gold, beige', colors: ['#ff6a1a', '#eab308', '#fde68a'] },
        { value: 'cool', label: 'Cool tones', desc: 'Blue, mint, turquoise', colors: ['#2563eb', '#14b8a6', '#67e8f9'] },
        { value: 'earth', label: 'Earth tones', desc: 'Brown, beige, terracotta', colors: ['#92400e', '#a8a29e', '#c2410c'] },
        { value: 'bold', label: 'High contrast', desc: 'Black, white, accent colour', colors: ['#0c0c0e', '#f5f4f1', '#dc2626'] },
        { value: 'pastel', label: 'Pastel', desc: 'Soft, gentle tones', colors: ['#fbcfe8', '#ddd6fe', '#bfdbfe'] },
      ],
      fontsLabel: 'Which typeface do you like?',
      fontsHint: 'The preview shows the real typeface.',
      fontsSample: 'My work tells stories',
      fontsOptions: [
        { value: 'clean', label: 'Inter', desc: 'Modern and clear' },
        { value: 'elegant', label: 'Playfair Display', desc: 'Classic and elegant' },
        { value: 'bold', label: 'Montserrat', desc: 'Powerful and striking' },
        { value: 'minimal', label: 'Roboto', desc: 'Clean and restrained' },
        { value: 'creative', label: 'Poppins', desc: 'Friendly and round' },
        { value: 'tech', label: 'Space Mono', desc: 'Technical and distinct' },
      ],
      targetAudienceLabel: 'Who is your audience?',
      targetAudienceOptions: [
        { value: 'artists', label: 'Artists and creatives' },
        { value: 'businesses', label: 'Businesses' },
        { value: 'eventmanagers', label: 'Event managers' },
        { value: 'fans', label: 'Fans and community' },
        { value: 'public', label: 'General public' },
        { value: 'other', label: 'Other' },
      ],
      uspLabel: 'What makes you special?',
      uspPlaceholder: 'Short and in your own words.',
      updateFrequencyLabel: 'How often do you want to update content?',
      updateFrequencyOptions: [
        { value: '', label: 'Please select' },
        { value: 'rarely', label: 'Rarely, once a year or less' },
        { value: 'occasional', label: 'Occasionally, a few times a year' },
        { value: 'regular', label: 'Regularly, monthly' },
        { value: 'frequent', label: 'Frequently, weekly or more' },
      ],
      timelineLabel: 'When should the website go live?',
      timelineOptions: [
        { value: '', label: 'Please select' },
        { value: 'asap', label: 'As soon as possible' },
        { value: 'month', label: 'In one month' },
        { value: 'quarter', label: 'In two to three months' },
        { value: 'flexible', label: 'Flexible' },
      ],
      budgetLabel: 'Which package fits you?',
      budgetOptions: [
        { value: 'basic', label: 'Basic', desc: '€500 · One-pager, quickly online' },
        { value: 'advanced', label: 'Advanced', desc: '€900 · Multi-page, advanced features' },
        { value: 'custom', label: 'Custom', desc: 'Let us plan it together' },
      ],
      exampleSitesLabel: 'Example sites',
      exampleSitesOptional: 'optional',
      exampleSitesPlaceholder: 'Links to websites you like',
      submitButton: 'Send request',
      submitting: 'Sending',
      successTitle: 'Received',
      successMessage: 'Thank you. I will get back to you soon with a first design draft.',
      errorMessage: 'Something went wrong. Try again or write to me directly.',
      errName: 'Please enter your name.',
      errEmail: 'Please enter a valid email address.',
      errScope: 'Please pick what matters most to you.',
      restart: 'Send another request',
    },
  }[language]

  const totalSteps = t.steps.length

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const toggleArray = (field: 'colors' | 'goal', value: string) => {
    setFormData((prev) => {
      const current = prev[field]
      return {
        ...prev,
        [field]: current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value],
      }
    })
  }

  // Nur der erste Schritt hat Pflichtfelder, der Rest ist freiwillig.
  const validateStep = (index: number): Errors => {
    if (index !== 0) return {}
    const next: Errors = {}
    if (!formData.name.trim()) next.name = t.errName
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email.trim())) next.email = t.errEmail
    if (!formData.scope) next.scope = t.errScope
    return next
  }

  const goToStep = (index: number) => {
    setStep(index)
    // Zum Formularanfang, damit der neue Schritt sichtbar beginnt.
    document.getElementById('fragebogen')?.scrollIntoView({ block: 'start' })
  }

  const handleNext = () => {
    const found = validateStep(step)
    setErrors(found)
    if (Object.keys(found).length > 0) return
    goToStep(Math.min(step + 1, totalSteps - 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.website) return

    const found = validateStep(0)
    if (Object.keys(found).length > 0) {
      setErrors(found)
      goToStep(0)
      return
    }

    if (Date.now() - formStartTime < 3000) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formStartTime }),
      })

      const data = await response.json()
      if (!response.ok || !data.success) throw new Error(data.message || 'Failed to send email')

      setSubmitStatus('success')
      setFormData(emptyForm)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <section className="mx-auto w-full max-w-2xl px-5 py-32 text-center sm:px-8 md:py-40">
        <span className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-brand">
          <Icon name="check" size={30} />
        </span>
        <h1 className="text-display-md font-semibold">{t.successTitle}</h1>
        <p className="mx-auto mt-5 max-w-md text-lead text-ink-secondary">{t.successMessage}</p>
        <Button
          variant="secondary"
          size="lg"
          className="mt-9"
          onClick={() => {
            setSubmitStatus('idle')
            setStep(0)
          }}
        >
          {t.restart}
        </Button>
      </section>
    )
  }

  return (
    <section id="fragebogen" className="mx-auto w-full max-w-3xl px-5 py-28 sm:px-8 md:py-36">
      <header className="mb-12 text-center">
        <h1 className="text-display-lg font-semibold">{t.title}</h1>
        <p className="mx-auto mt-5 max-w-xl text-lead text-ink-secondary">{t.subtitle}</p>
      </header>

      {/* Fortschritt */}
      <div className="mb-10">
        <p className="mb-3 text-eyebrow font-semibold uppercase text-brand">
          {t.stepOf(step + 1, totalSteps)}
        </p>

        <ol className="flex gap-2">
          {t.steps.map((label, idx) => (
            <li key={label} className="flex-1">
              <button
                type="button"
                // Zurueckspringen ist immer erlaubt, vorspringen erst nach Pruefung.
                onClick={() => idx < step && goToStep(idx)}
                disabled={idx > step}
                aria-current={idx === step ? 'step' : undefined}
                className={`w-full text-left ${idx < step ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <span
                  className={`block h-1 rounded-full transition-colors duration-300 ${
                    idx <= step ? 'bg-brand' : 'bg-line-strong'
                  }`}
                />
                <span
                  className={`mt-2.5 block text-xs font-medium transition-colors ${
                    idx <= step ? 'text-ink' : 'text-ink-muted'
                  }`}
                >
                  {label}
                </span>
              </button>
            </li>
          ))}
        </ol>

        <p className="mt-5 text-sm text-ink-secondary">{t.stepHints[step]}</p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-10">
        {/* Schritt 1: Kontakt und Zweck */}
        {step === 0 && (
          <>
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField
                label={t.nameLabel}
                name="name"
                value={formData.name}
                onChange={(e) => set('name', e.target.value)}
                placeholder={t.namePlaceholder}
                autoComplete="name"
                error={errors.name}
                required
              />
              <TextField
                label={t.emailLabel}
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => set('email', e.target.value)}
                placeholder={t.emailPlaceholder}
                autoComplete="email"
                error={errors.email}
                required
              />
            </div>

            <fieldset>
              <legend className="mb-4 text-sm font-medium text-ink-secondary">
                {t.scopeLabel} <span className="text-brand">*</span>
              </legend>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {t.scopeOptions.map((option) => (
                  <ChoiceTile
                    key={option.value}
                    selected={formData.scope === option.value}
                    onClick={() => set('scope', option.value)}
                  >
                    <span className="block font-semibold text-ink">{option.label}</span>
                    <span className="mt-1 block text-xs text-ink-muted">{option.desc}</span>
                  </ChoiceTile>
                ))}
              </div>
              {errors.scope && <p className="mt-2 text-xs text-red-400">{errors.scope}</p>}
            </fieldset>

            <fieldset>
              <legend className="mb-1 text-sm font-medium text-ink-secondary">{t.goalLabel}</legend>
              <p className="mb-4 text-xs text-ink-muted">{t.goalHint}</p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {t.goalOptions.map((option) => (
                  <ChoiceTile
                    key={option.value}
                    selected={formData.goal.includes(option.value)}
                    onClick={() => toggleArray('goal', option.value)}
                    className="flex items-center gap-3"
                  >
                    <Icon name={option.icon} size={20} className="shrink-0 text-brand" />
                    <span className="text-sm font-medium">{option.label}</span>
                  </ChoiceTile>
                ))}
              </div>
            </fieldset>
          </>
        )}

        {/* Schritt 2: Anmutung */}
        {step === 1 && (
          <>
            <fieldset>
              <legend className="mb-4 text-sm font-medium text-ink-secondary">{t.styleLabel}</legend>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {t.styleOptions.map((option) => (
                  <ChoiceTile
                    key={option.value}
                    selected={formData.style === option.value}
                    onClick={() => set('style', option.value)}
                  >
                    <span className="block font-semibold text-ink">{option.label}</span>
                    <span className="mt-1 block text-xs text-ink-muted">{option.desc}</span>
                  </ChoiceTile>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-4 text-sm font-medium text-ink-secondary">
                {t.colorsLabel}
              </legend>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {t.colorsOptions.map((option) => (
                  <ChoiceTile
                    key={option.value}
                    selected={formData.colors.includes(option.value)}
                    onClick={() => set('colors', [option.value])}
                  >
                    <span className="mb-3 flex gap-1.5">
                      {option.colors.map((hex) => (
                        <span
                          key={hex}
                          className="h-9 flex-1 rounded-sm ring-1 ring-inset ring-white/10"
                          style={{ backgroundColor: hex }}
                        />
                      ))}
                    </span>
                    <span className="block font-semibold text-ink">{option.label}</span>
                    <span className="mt-1 block text-xs text-ink-muted">{option.desc}</span>
                  </ChoiceTile>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-1 text-sm font-medium text-ink-secondary">{t.fontsLabel}</legend>
              <p className="mb-4 text-xs text-ink-muted">{t.fontsHint}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {t.fontsOptions.map((option) => (
                  <ChoiceTile
                    key={option.value}
                    selected={formData.fonts === option.value}
                    onClick={() => set('fonts', option.value)}
                  >
                    <span
                      className={`block text-xl leading-snug text-ink ${previewFontClass[option.value]}`}
                    >
                      {t.fontsSample}
                    </span>
                    <span className="mt-3 flex items-baseline gap-2 border-t border-line-subtle pt-3">
                      <span className="text-sm font-semibold text-ink">{option.label}</span>
                      <span className="text-xs text-ink-muted">{option.desc}</span>
                    </span>
                  </ChoiceTile>
                ))}
              </div>
            </fieldset>
          </>
        )}

        {/* Schritt 3: Rahmenbedingungen */}
        {step === 2 && (
          <>
            <fieldset>
              <legend className="mb-4 text-sm font-medium text-ink-secondary">
                {t.budgetLabel}
              </legend>
              <div className="grid gap-3 sm:grid-cols-3">
                {t.budgetOptions.map((option) => (
                  <ChoiceTile
                    key={option.value}
                    selected={formData.budget === option.value}
                    onClick={() => set('budget', option.value)}
                  >
                    <span className="block font-semibold text-ink">{option.label}</span>
                    <span className="mt-1 block text-xs text-ink-muted">{option.desc}</span>
                  </ChoiceTile>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-4 text-sm font-medium text-ink-secondary">
                {t.targetAudienceLabel}
              </legend>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {t.targetAudienceOptions.map((option) => (
                  <ChoiceTile
                    key={option.value}
                    selected={formData.targetAudience === option.value}
                    onClick={() => set('targetAudience', option.value)}
                    className="text-center text-sm font-medium"
                  >
                    {option.label}
                  </ChoiceTile>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-5 sm:grid-cols-2">
              <SelectField
                label={t.timelineLabel}
                name="timeline"
                value={formData.timeline}
                onChange={(e) => set('timeline', e.target.value)}
                options={t.timelineOptions}
              />
              <SelectField
                label={t.updateFrequencyLabel}
                name="updateFrequency"
                value={formData.updateFrequency}
                onChange={(e) => set('updateFrequency', e.target.value)}
                options={t.updateFrequencyOptions}
              />
            </div>

            <TextAreaField
              label={t.uspLabel}
              name="usp"
              value={formData.usp}
              onChange={(e) => set('usp', e.target.value)}
              placeholder={t.uspPlaceholder}
              rows={3}
            />

            <TextField
              label={`${t.exampleSitesLabel} (${t.exampleSitesOptional})`}
              name="exampleSites"
              value={formData.exampleSites}
              onChange={(e) => set('exampleSites', e.target.value)}
              placeholder={t.exampleSitesPlaceholder}
            />
          </>
        )}

        {/* Honigtopf: fuer Menschen unsichtbar, Bots fuellen ihn aus. */}
        <div className="absolute left-[-9999px] opacity-0" aria-hidden="true">
          <label htmlFor="project-website">Website (leave blank)</label>
          <input
            type="text"
            id="project-website"
            name="website"
            value={formData.website}
            onChange={(e) => set('website', e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Navigation zwischen den Schritten */}
        <div className="flex flex-col gap-3 border-t border-line-subtle pt-8 sm:flex-row-reverse sm:items-center sm:justify-start">
          {step < totalSteps - 1 ? (
            <Button size="lg" arrow onClick={handleNext} className="sm:min-w-48">
              {t.next}
            </Button>
          ) : (
            <Button type="submit" size="lg" arrow disabled={isSubmitting} className="sm:min-w-48">
              {isSubmitting ? t.submitting : t.submitButton}
            </Button>
          )}

          {step > 0 && (
            <Button variant="secondary" size="lg" onClick={() => goToStep(step - 1)}>
              {t.back}
            </Button>
          )}
        </div>

        {submitStatus === 'error' && (
          <p
            role="alert"
            className="rounded-md border border-red-600/40 bg-red-500/10 p-4 text-sm text-red-300"
          >
            {t.errorMessage}
          </p>
        )}
      </form>
    </section>
  )
}
