import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    
    // Determine if it's a project request or general contact
    const isProjectRequest = formData.contactType !== 'general' && formData.scope
    
    let emailBody = ''
    let subject = ''
    
    if (isProjectRequest) {
      // Project request format
      subject = `Neue Projektanfrage von ${formData.name}`
      emailBody = `
Neue Projektanfrage von ${formData.name} (${formData.email})

=== Projekt-Umfang ===
${formData.scope || 'Nicht angegeben'}

=== Stil ===
${formData.style || 'Nicht angegeben'}

=== Farbschema ===
${formData.colors?.join(', ') || 'Nicht angegeben'}

=== Schrift ===
${formData.fonts || 'Nicht angegeben'}

=== Ziele ===
${formData.goal?.join(', ') || 'Nicht angegeben'}

=== Zielgruppe ===
${formData.targetAudience || 'Nicht angegeben'}

=== Update-Häufigkeit ===
${formData.updateFrequency || 'Nicht angegeben'}

=== Zeitplan ===
${formData.timeline || 'Nicht angegeben'}

=== Paket ===
${formData.budget || 'Nicht angegeben'}

=== Was macht dich besonders? ===
${formData.usp || 'Nicht angegeben'}

=== Beispielseiten ===
${formData.exampleSites || 'Nicht angegeben'}

---
Gesendet über das Projektformular
`
    } else {
      // General contact format
      subject = `Neue Kontaktnachricht von ${formData.name}`
      emailBody = `
Neue Kontaktnachricht von ${formData.name} (${formData.email})

=== Nachricht ===
${formData.message || 'Nicht angegeben'}

---
Gesendet über das Kontaktformular
`
    }

    // Create transporter
    // You can configure this with SMTP credentials via environment variables
    // For example, using Gmail: Gmail App Password
    // Or use a service like Resend, SendGrid, etc.
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || process.env.EMAIL_USER,
        pass: process.env.SMTP_PASS || process.env.EMAIL_PASSWORD,
      },
    })

    // If no SMTP credentials are set, return an error or use a fallback
    if (!process.env.SMTP_USER && !process.env.EMAIL_USER) {
      console.error('SMTP credentials not configured')
      return NextResponse.json(
        { success: false, message: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.EMAIL_USER || formData.email,
      to: 'chris.hermann9397@gmail.com',
      replyTo: formData.email,
      subject: subject,
      text: emailBody,
      html: emailBody.replace(/\n/g, '<br>'),
    })

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send email', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
