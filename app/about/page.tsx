'use client'
import { useLanguage } from '@/components/LanguageProvider'

export default function AboutPage() {
  const { language } = useLanguage()
  const t = {
    de: {
      heroTitle: 'Über mich',
      whyCodeTitle: 'Warum ich code',
      whyCodeText1: 'Seit November 2024 beschäftige ich mich täglich mindestens 6 Stunden mit Webentwicklung.',
      whyCodeText2: 'Coden ist für mich das beste und effizienteste Werkzeug für Ideen – es gibt mir die Power, Projekte eigenständig umzusetzen.',
      whyCodeText3: 'Ich liebe es, wenn aus einem Gedanken in kurzer Zeit etwas Reales, Klickbares entsteht und die Menschen es auch checken und nutzen.',
      aboutMeTitle: '⚡ Über mich',
      aboutMeText1: 'Ich bin ein leidenschaftlicher Macher, der Projekte liebt – von der Almhütte bis zur Web-App.',
      aboutMeText2: 'Eine meiner liebsten Erfahrungen: Ich habe eine alte Almhütte ab- und wiederaufgebaut – das Projekt kannst du dir auf Instagram unter @cabin.kingdom ansehen.',
      aboutMeText3: 'Diese Liebe zum Handwerk und zur Struktur fließt auch in meine Websites:',
      aboutMeText4: 'Als Artist weiß ich, wie wichtig ein starker erster Eindruck ist – deshalb baue ich Seiten, die schnell laden, gut aussehen und zeigen, was dich einzigartig macht.',
      whyWorkTitle: 'Warum mit mir arbeiten? ',
      points: [
        { title: 'Ich kenne die Bühne', text: 'Als Artist weiß ich, was zählt: ein Auftritt, der hängen bleibt. Deine Website ist deine digitale Bühne – ich sorge dafür, dass sie wirkt.' },
        { title: 'Schnelle Kommunikation', text: 'WhatsApp, Mail, Call – wie du willst. Ich antworte schnell und unkompliziert. Keine Warteschleifen, kein Agentur-Gedöns.' },
        { title: 'Design first', text: 'Bei mir steht Design an erster Stelle. Deine Seite soll nicht nur funktionieren, sondern richtig gut aussehen – auf allen Geräten.' },
      ],
    },
    en: {
      heroTitle: 'About me',
      whyCodeTitle: 'Why I code',
      whyCodeText1: "I've been dedicating at least 6 hours daily to web development since November 2024.",
      whyCodeText2: 'Coding is the best and most efficient tool for ideas – it gives me the power to implement projects independently.',
      whyCodeText3: 'I love it when a thought becomes something real and clickable in a short time, and people actually check it out and use it.',
      aboutMeTitle: '⚡ About me',
      aboutMeText1: "I'm a passionate maker who loves projects – from alpine cabins to web apps.",
      aboutMeText2: 'One of my favorite experiences: I dismantled and rebuilt an old alpine cabin – you can check out the project on Instagram at @cabin.kingdom.',
      aboutMeText3: 'This love for craftsmanship and structure also flows into my websites:',
      aboutMeText4: "As an artist, I know how important a strong first impression is – that's why I build sites that load fast, look good, and show what makes you unique.",
      whyWorkTitle: 'Why work with me?',
      points: [
        { title: 'I know the stage', text: 'As an artist, I know what counts: a performance that sticks. Your website is your digital stage – I make sure it delivers.' },
        { title: 'Fast communication', text: 'WhatsApp, email, call – however you prefer. I respond quickly and straightforwardly. No queues, no agency nonsense.' },
        { title: 'Design first', text: 'Design comes first for me. Your site should not only work but look really good – on all devices.' },
      ],
    }
  }[language]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-start justify-center px-6 pt-16 md:pt-20 pb-20 md:pb-24 mb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/About Hero.webp"
            alt="About Hero"
            className="w-full h-full object-cover object-center opacity-70"
          />
        </div>

        {/* Gradient overlay - lighter for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center -mt-[20%]">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">{t.heroTitle}</h1>
        </div>
      </section>

      {/* Why I Code Section - Side by Side with Professional Image */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Professional Image - Left */}
            <div className="order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-lg">
                <img
                  src="/professional.webp"
                  alt="Professional"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Text - Right */}
            <div className="order-1 md:order-2">
              <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{t.whyCodeTitle}</h2>
                <div className="space-y-5 text-base text-zinc-400 leading-relaxed">
                  <p>{t.whyCodeText1}</p>
                  <p>{t.whyCodeText2}</p>
                  <p className="font-medium text-zinc-300 pt-2">{t.whyCodeText3}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">{t.whyWorkTitle}</h2>

          <div className="space-y-12">
            {t.points.map((point, idx) => (
              <div key={idx} className="group">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <span className="text-zinc-600 group-hover:text-zinc-500 transition-colors">0{idx + 1}</span>
                  {point.title}
                </h3>
                <p className="text-lg text-zinc-400 leading-relaxed pl-12">{point.text}</p>
                {idx < t.points.length - 1 && <div className="h-px bg-zinc-900 mt-12"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section - Side by Side with Personal Image */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Personal Image - Left */}
            <div>
              <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-lg">
                <img
                  src="/personal.webp"
                  alt="Personal"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Text - Right */}
            <div>
              <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{t.aboutMeTitle}</h2>
                <div className="space-y-5 text-base text-zinc-400 leading-relaxed">
                  <p>{t.aboutMeText1}</p>
                  <p>
                    {t.aboutMeText2.split('@cabin.kingdom').map((part, idx) => (
                      idx === 0 ? (
                        <span key={idx}>{part}</span>
                      ) : (
                        <span key={idx}>
                          <a
                            href="https://instagram.com/cabin.kingdom"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-300 hover:text-white transition-colors underline decoration-zinc-600 hover:decoration-white"
                          >
                            @cabin.kingdom
                          </a>
                          {part}
                        </span>
                      )
                    ))}
                  </p>
                  <p>{t.aboutMeText3}</p>
                  <p className="font-medium text-zinc-300 pt-2">{t.aboutMeText4}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
