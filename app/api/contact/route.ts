import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Simple in-memory rate limiting (in production, use Redis or similar)
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 3 // Max 3 requests per minute per IP

function getRateLimitKey(request: NextRequest): string {
  // Get IP address from request
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'
  return ip
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const requests = rateLimitMap.get(ip) || []
  
  // Remove old requests outside the window
  const recentRequests = requests.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW)
  
  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false // Rate limit exceeded
  }
  
  // Add current request
  recentRequests.push(now)
  rateLimitMap.set(ip, recentRequests)
  
  // Clean up old entries periodically (every 100 requests)
  if (rateLimitMap.size > 1000) {
    for (const [key, timestamps] of rateLimitMap.entries()) {
      const filtered = timestamps.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW)
      if (filtered.length === 0) {
        rateLimitMap.delete(key)
      } else {
        rateLimitMap.set(key, filtered)
      }
    }
  }
  
  return true // Rate limit OK
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    
    // Spam protection: Check honeypot field
    if (formData.website && formData.website.trim() !== '') {
      // Bot detected - silently reject
      return NextResponse.json(
        { success: true, message: 'Email sent successfully' }, // Don't reveal it's spam
        { status: 200 }
      )
    }
    
    // Spam protection: Check minimum time (3 seconds) since form load
    if (formData.formStartTime) {
      const timeSpent = Date.now() - formData.formStartTime
      if (timeSpent < 3000) {
        // Submitted too quickly - likely a bot
        return NextResponse.json(
          { success: true, message: 'Email sent successfully' },
          { status: 200 }
        )
      }
    }
    
    // Spam protection: Rate limiting
    const ip = getRateLimitKey(request)
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }
    
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
