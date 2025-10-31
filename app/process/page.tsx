'use client'
import { useLanguage } from '@/components/LanguageProvider'

export default function ProcessPage() {
  const { language } = useLanguage()
  const t = {
    de: {
      title: "So läuft's ab",
      subtitle: 'Von der Idee bis zum Launch – ein klarer Prozess, der funktioniert.',
      stepLabel: 'Schritt',
      steps: [
        { title: 'Kennenlernen', desc: 'Wir sprechen kurz über dein Projekt – per Mail, WhatsApp oder Call. Ich höre zu, stelle Fragen und checke, ob ich der Richtige für dich bin.', icon: '💬' },
        { title: 'Fragebogen ausfüllen', desc: 'Du bekommst einen kurzen Fragebogen von mir. Damit kann ich deine Vorstellungen, Ziele und Style-Wünsche besser verstehen und direkt loslegen.', icon: '📝' },
        { title: 'Konzept + Angebot', desc: 'Ich schicke dir ein klares Konzept mit Struktur, Timeline und Preis. Du weißt genau, was dich erwartet – keine versteckten Kosten, keine Überraschungen.', icon: '📋' },
        { title: 'Design & Umsetzung', desc: 'Ich entwickle deine Website und halte dich auf dem Laufenden. Du bekommst Zwischenstände, kannst Feedback geben und siehst, wie alles Form annimmt.', icon: '⚡' },
        { title: 'Launch', desc: 'Deine Seite geht live. Ich zeige dir, wie du kleinere Updates selbst machen kannst, und bin auch danach für dich da, falls was ist.', icon: '🚀' },
      ],
    },
    en: {
      title: 'How it works',
      subtitle: 'From idea to launch – a clear process that works.',
      stepLabel: 'Step',
      steps: [
        { title: 'Get to know each other', desc: 'We talk briefly about your project – via email, WhatsApp, or call. I listen, ask questions, and check if I\'m the right fit for you.', icon: '💬' },
        { title: 'Fill out questionnaire', desc: 'You receive a short questionnaire from me. This helps me better understand your vision, goals, and style preferences so I can get started right away.', icon: '📝' },
        { title: 'Concept + Proposal', desc: 'I send you a clear concept with structure, timeline, and price. You know exactly what to expect – no hidden costs, no surprises.', icon: '📋' },
        { title: 'Design & Development', desc: 'I build your website and keep you updated. You get progress updates, can provide feedback, and see everything take shape.', icon: '⚡' },
        { title: 'Launch', desc: 'Your site goes live. I show you how to make small updates yourself, and I\'m there for you afterward if you need anything.', icon: '🚀' },
      ],
    }
  }[language]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-[40vh] md:min-h-[50vh] flex items-center justify-center px-6 py-20 md:py-24 mb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/ablauf-hero.webp"
            alt="Process Hero"
            className="w-full h-full object-cover object-center opacity-50"
          />
        </div>

        {/* Gradient overlay - lighter for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">{t.title}</h1>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto drop-shadow-md">{t.subtitle}</p>
        </div>
      </div>

      {/* Steps Section */}
      <div className="max-w-5xl mx-auto space-y-12 px-6 pb-32">
        {t.steps.map((step, idx) => (
          <div key={idx} className="group relative flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl group-hover:bg-zinc-800 group-hover:border-zinc-700 transition-all duration-300">
                {step.icon}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm text-zinc-600 font-medium">{t.stepLabel} {idx + 1}</span>
                <div className="h-px flex-1 bg-zinc-800"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-lg text-zinc-400 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
