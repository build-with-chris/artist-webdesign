'use client'

import { useState } from 'react'
import { useLanguage } from '@/components/LanguageProvider'
import PageHeader from '@/components/ui/PageHeader'
import { Section } from '@/components/ui/Section'
import { Button, ButtonLink } from '@/components/ui/Button'
import { TextField, TextAreaField } from '@/components/ui/Field'
import Icon from '@/components/ui/Icon'
import { site } from '@/lib/site'

type Errors = Partial<Record<'name' | 'email' | 'message', string>>

export default function ContactPage() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '', // Honigtopf gegen Bots
  })
  const [errors, setErrors] = useState<Errors>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStartTime] = useState(Date.now())

  const t = {
    de: {
      eyebrow: 'Kontakt',
      title: 'Schreib mir',
      lead: 'Eine kurze Nachricht reicht. Ich antworte in der Regel am selben Tag.',
      formTitle: 'Nachricht',
      nameLabel: 'Dein Name',
      namePlaceholder: 'Max Mustermann',
      emailLabel: 'E-Mail',
      emailPlaceholder: 'max@beispiel.de',
      messageLabel: 'Deine Nachricht',
      messagePlaceholder: 'Worum geht es? Ein paar Sätze genügen.',
      submitButton: 'Nachricht senden',
      submitting: 'Wird gesendet',
      successMessage: 'Danke, deine Nachricht ist angekommen. Ich melde mich schnell zurück.',
      errorMessage: 'Da hat etwas nicht geklappt. Versuch es noch einmal oder ruf mich an.',
      required: 'Pflichtfelder sind mit einem Stern gekennzeichnet.',
      directTitle: 'Direkter Draht',
      directText: 'Lieber telefonieren oder per WhatsApp schreiben? Beides geht.',
      phoneLabel: 'Telefon und WhatsApp',
      emailLabelShort: 'E-Mail',
      projectTitle: 'Schon konkret?',
      projectText: 'Wenn du weißt, was du brauchst, spar dir den Umweg: Der Fragebogen fragt alles ab, was ich für einen Entwurf brauche.',
      projectCta: 'Fragebogen ausfüllen',
      errName: 'Bitte trag deinen Namen ein.',
      errEmail: 'Bitte trag eine gültige E-Mail-Adresse ein.',
      errMessage: 'Bitte schreib ein paar Sätze zu deinem Anliegen.',
    },
    en: {
      eyebrow: 'Contact',
      title: 'Write to me',
      lead: 'A short message is enough. I usually answer the same day.',
      formTitle: 'Message',
      nameLabel: 'Your name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email',
      emailPlaceholder: 'john@example.com',
      messageLabel: 'Your message',
      messagePlaceholder: 'What is it about? A few sentences are enough.',
      submitButton: 'Send message',
      submitting: 'Sending',
      successMessage: 'Thanks, your message arrived. I will get back to you soon.',
      errorMessage: 'Something went wrong. Try again or give me a call.',
      required: 'Required fields are marked with a star.',
      directTitle: 'Direct line',
      directText: 'Prefer a call or WhatsApp? Both work.',
      phoneLabel: 'Phone and WhatsApp',
      emailLabelShort: 'Email',
      projectTitle: 'Already specific?',
      projectText: 'If you know what you need, skip the detour: the questionnaire asks everything I need for a draft.',
      projectCta: 'Fill out questionnaire',
      errName: 'Please enter your name.',
      errEmail: 'Please enter a valid email address.',
      errMessage: 'Please write a few sentences about your request.',
    },
  }[language]

  const validate = (): Errors => {
    const next: Errors = {}
    if (!formData.name.trim()) next.name = t.errName
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email.trim())) next.email = t.errEmail
    if (formData.message.trim().length < 10) next.message = t.errMessage
    return next
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Bot erkannt: still abbrechen, ohne Hinweis.
    if (formData.website) return

    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    // Zu schnell abgeschickt, um echt getippt zu sein.
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
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          contactType: 'general',
          formStartTime,
        }),
      })

      const data = await response.json()
      if (!response.ok || !data.success) throw new Error(data.message || 'Failed to send message')

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '', website: '' })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Fehler verschwindet, sobald der Nutzer nachbessert.
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* Direkte Wege */}
          <div className="space-y-5">
            <div className="rounded-lg border border-line-subtle bg-surface-raised p-7">
              <h2 className="font-display text-display-sm font-normal">{t.directTitle}</h2>
              <p className="mt-3 leading-relaxed text-ink-secondary">{t.directText}</p>

              <div className="mt-7 space-y-5">
                <div>
                  <p className="mb-1.5 text-eyebrow font-semibold uppercase text-ink-muted">
                    {t.phoneLabel}
                  </p>
                  <a
                    href={`tel:${site.phone}`}
                    className="inline-flex items-center gap-2.5 text-lg text-ink transition-colors hover:text-brand"
                  >
                    <Icon name="phone" size={20} className="text-brand" />
                    {site.phoneDisplay}
                  </a>
                </div>

                <div>
                  <p className="mb-1.5 text-eyebrow font-semibold uppercase text-ink-muted">
                    {t.emailLabelShort}
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2.5 break-all text-lg text-ink transition-colors hover:text-brand"
                  >
                    <Icon name="mail" size={20} className="shrink-0 text-brand" />
                    {site.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-brand/25 bg-brand-wash p-7">
              <h2 className="text-lg font-semibold tracking-tight">{t.projectTitle}</h2>
              <p className="mt-3 leading-relaxed text-ink-secondary">{t.projectText}</p>
              <ButtonLink href="/start-project" size="md" arrow className="mt-5">
                {t.projectCta}
              </ButtonLink>
            </div>
          </div>

          {/* Formular */}
          <div className="rounded-lg border border-line-subtle bg-surface-raised p-7 sm:p-9">
            <h2 className="font-display text-display-sm font-normal">{t.formTitle}</h2>

            <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-5">
              <TextField
                label={t.nameLabel}
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                onChange={handleChange}
                placeholder={t.emailPlaceholder}
                autoComplete="email"
                error={errors.email}
                required
              />
              <TextAreaField
                label={t.messageLabel}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.messagePlaceholder}
                rows={6}
                error={errors.message}
                required
              />

              {/* Honigtopf: fuer Menschen unsichtbar, Bots fuellen ihn aus. */}
              <div className="absolute left-[-9999px] opacity-0" aria-hidden="true">
                <label htmlFor="contact-website">Website (leave blank)</label>
                <input
                  type="text"
                  id="contact-website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <Button type="submit" size="lg" arrow disabled={isSubmitting} className="w-full">
                {isSubmitting ? t.submitting : t.submitButton}
              </Button>

              <p className="text-xs text-ink-muted">{t.required}</p>

              {submitStatus === 'success' && (
                <p
                  role="status"
                  className="flex items-start gap-2.5 rounded-md border border-green-600/40 bg-green-500/10 p-4 text-sm text-green-300"
                >
                  <Icon name="check" size={18} className="mt-0.5 shrink-0" />
                  {t.successMessage}
                </p>
              )}

              {submitStatus === 'error' && (
                <p
                  role="alert"
                  className="rounded-md border border-red-600/40 bg-red-500/10 p-4 text-sm text-red-300"
                >
                  {t.errorMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </Section>
    </>
  )
}
