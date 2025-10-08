import { useState } from 'react'
import './App.css'

function App() {
  const [language, setLanguage] = useState('de')
  const [darkMode, setDarkMode] = useState(false)

  const translations = {
    de: {
      title: 'Artist Webdesign',
      tagline: 'schlank, schnell, mobil.',
      uspTitle: 'Warum handgemacht?',
      usp1Title: 'Wirklich gecoded – kein Baukasten',
      usp1Text: 'Jede Seite ist handgeschrieben und individuell aufgebaut.',
      usp2Title: 'Extrem performant',
      usp2Text: 'Beste Ladezeiten, selbst mit vielen Bildern und Videos.',
      usp3Title: 'Interaktiv',
      usp3Text: 'Kleine Animationen und Bewegung sorgen für Lebendigkeit.',
      usp4Title: 'Aus einem Guss',
      usp4Text: 'Design, Struktur und Technik passen perfekt zusammen.',
      servicesTitle: 'Angebot',
      basicTitle: 'Basic',
      basicPrice: '200€',
      basicOldPrice: 'statt 690€',
      basicIntro: 'Der solide Start: ein klarer Onepager, der alles Wichtige zeigt.',
      basicFeature1: 'Startseite, Angebot, Projekte & Kontakt',
      basicFeature2: 'Mobilfreundlich & suchmaschinenoptimiert',
      basicFeature3: 'Saubere Performance',
      basicFeature4: 'Einfacher Austausch von Texten und Bildern',
      advancedTitle: 'Advanced',
      advancedPrice: 'ab 450€',
      advancedOldPrice: 'statt 1400€',
      advancedIntro: 'Für mehr Spielraum und Wachstum.',
      advancedFeature1: 'Mehrseitige Website oder CMS-Anbindung',
      advancedFeature2: 'Blog, Galerie, Video- oder Buchungssektionen',
      advancedFeature3: 'Formulare mit Validierung',
      advancedFeature4: 'Extras wie Analytics, SEO-Finetuning & Hosting',
      hostingTitle: 'Hosting & Pflege',
      hostingPrice: '💶 15€ / Monat',
      hostingSubtitle: 'Darin enthalten:',
      hostingFeature1: 'Hosting auf einem schnellen, zuverlässigen Server',
      hostingFeature2: 'Contentpflege innerhalb von 24 Stunden: Wenn du neue Bilder, Texte oder Termine hast, werden sie blitzschnell aktualisiert',
      hostingFeature3: 'SSL-Zertifikat & regelmäßige Sicherheitsupdates inklusive',
      hostingFooter: 'Keine Sorge um Technik oder Änderungen – du sagst, was du brauchst, ich kümmere mich.',
      projectsTitle: 'Aktuelle Projekte',
      project1Desc: 'Agentur für Artists – klare Struktur, schnelle Buchungswege.',
      project2Desc: 'Portfolio-Auftritt mit Fokus auf Bildern & kurzen Texten.',
      project3Desc: 'Event-Location: kompakte Infos, Termine & Kontakt auf einen Blick.',
      project4Desc: 'Festivalseite mit Programm, Bildern und Call-to-Action.',
      contactTitle: 'Kontakt',
      contactIntro: 'Lust auf einen Auftritt im Web?\nSchreib mir kurz, was du brauchst – ich melde mich fix mit einem Vorschlag.',
      contactEmail: 'E-Mail: hello@dein-domain.de',
      contactInstagram: 'Instagram: @dein.handle',
      contactWhatsApp: 'WhatsApp: Nachricht senden',
      contactFooter: 'Oder schick mir einfach deine Idee per Mail oder DM.',
      footerText: 'Artist Webdesign – schlank, schnell, mobil.'
    },
    en: {
      title: 'Artist Web Design',
      tagline: 'lean, fast, mobile.',
      uspTitle: 'Why Handcrafted?',
      usp1Title: 'Actually Coded – No Website Builder',
      usp1Text: 'Every page is hand-written and individually built.',
      usp2Title: 'Extremely Performant',
      usp2Text: 'Best loading times, even with lots of images and videos.',
      usp3Title: 'Interactive',
      usp3Text: 'Small animations and movement create vibrancy.',
      usp4Title: 'Unified Design',
      usp4Text: 'Design, structure, and technology perfectly aligned.',
      servicesTitle: 'Services',
      basicTitle: 'Basic',
      basicPrice: '€200',
      basicOldPrice: 'instead of €690',
      basicIntro: 'The solid start: a clear one-pager showing all the essentials.',
      basicFeature1: 'Homepage, Services, Projects & Contact',
      basicFeature2: 'Mobile-friendly & SEO optimized',
      basicFeature3: 'Clean performance',
      basicFeature4: 'Easy text and image updates',
      advancedTitle: 'Advanced',
      advancedPrice: 'from €450',
      advancedOldPrice: 'instead of €1400',
      advancedIntro: 'For more flexibility and growth.',
      advancedFeature1: 'Multi-page website or CMS integration',
      advancedFeature2: 'Blog, gallery, video, or booking sections',
      advancedFeature3: 'Forms with validation',
      advancedFeature4: 'Extras like analytics, SEO fine-tuning & hosting',
      hostingTitle: 'Hosting & Maintenance',
      hostingPrice: '💶 €15 / Month',
      hostingSubtitle: 'Included:',
      hostingFeature1: 'Hosting on a fast, reliable server',
      hostingFeature2: 'Content updates within 24 hours: When you have new images, texts, or dates, they get updated lightning-fast',
      hostingFeature3: 'SSL certificate & regular security updates included',
      hostingFooter: 'No worries about tech or changes – you say what you need, I take care of it.',
      projectsTitle: 'Recent Projects',
      project1Desc: 'Artist agency – clear structure, fast booking processes.',
      project2Desc: 'Portfolio site focused on images & short texts.',
      project3Desc: 'Event location: compact info, dates & contact at a glance.',
      project4Desc: 'Festival site with program, images, and call-to-action.',
      contactTitle: 'Contact',
      contactIntro: 'Ready for your web presence?\nJust drop me a message with what you need – I\'ll get back to you quickly with a proposal.',
      contactEmail: 'Email: hello@dein-domain.de',
      contactInstagram: 'Instagram: @dein.handle',
      contactWhatsApp: 'WhatsApp: Send Message',
      contactFooter: 'Or simply send me your idea via email or DM.',
      footerText: 'Artist Web Design – lean, fast, mobile.'
    }
  }

  const t = translations[language]

  const projects = [
    {
      name: 'pepeshows.de',
      url: 'pepeshows.de',
      description: t.project1Desc
    },
    {
      name: 'pepearts.de',
      url: 'pepearts.de',
      description: t.project2Desc
    },
    {
      name: 'pepe-dome.de',
      url: 'pepe-dome.de',
      description: t.project3Desc
    },
    {
      name: 'freemanfestival.de',
      url: 'freemanfestival.de',
      description: t.project4Desc
    }
  ]

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de')
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <header className="header">
        <h1>{t.title}</h1>
        <p className="tagline">{t.tagline}</p>
      </header>

      <div className="controls-bar">
        <button className="control-button" onClick={toggleLanguage}>
          {language === 'de' ? '🇬🇧 EN' : '🇩🇪 DE'}
        </button>
        <button className="control-button" onClick={toggleDarkMode}>
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>

      <main className="main">
        {/* USP Section */}
        <section className="section usp">
          <h2>{t.uspTitle}</h2>
          <div className="usp-grid">
            <div className="usp-card">
              <div className="usp-icon">⚡</div>
              <h3>{t.usp1Title}</h3>
              <p>{t.usp1Text}</p>
            </div>
            <div className="usp-card">
              <div className="usp-icon">🚀</div>
              <h3>{t.usp2Title}</h3>
              <p>{t.usp2Text}</p>
            </div>
            <div className="usp-card">
              <div className="usp-icon">✨</div>
              <h3>{t.usp3Title}</h3>
              <p>{t.usp3Text}</p>
            </div>
            <div className="usp-card">
              <div className="usp-icon">🎨</div>
              <h3>{t.usp4Title}</h3>
              <p>{t.usp4Text}</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section services">
          <h2>{t.servicesTitle}</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>{t.basicTitle}</h3>
              <p className="price">{t.basicPrice} <span className="old-price">{t.basicOldPrice}</span></p>
              <p className="service-intro">{t.basicIntro}</p>
              <ul>
                <li>{t.basicFeature1}</li>
                <li>{t.basicFeature2}</li>
                <li>{t.basicFeature3}</li>
                <li>{t.basicFeature4}</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>{t.advancedTitle}</h3>
              <p className="price">{t.advancedPrice} <span className="old-price">{t.advancedOldPrice}</span></p>
              <p className="service-intro">{t.advancedIntro}</p>
              <ul>
                <li>{t.advancedFeature1}</li>
                <li>{t.advancedFeature2}</li>
                <li>{t.advancedFeature3}</li>
                <li>{t.advancedFeature4}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Hosting Section */}
        <section className="section hosting">
          <h2>{t.hostingTitle}</h2>
          <div className="hosting-card">
            <p className="hosting-price">{t.hostingPrice}</p>
            <p className="hosting-subtitle">{t.hostingSubtitle}</p>
            <ul className="hosting-list">
              <li>{t.hostingFeature1}</li>
              <li>{t.hostingFeature2}</li>
              <li>{t.hostingFeature3}</li>
            </ul>
            <p className="hosting-footer">{t.hostingFooter}</p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section projects">
          <h2>{t.projectsTitle}</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <a
                key={index}
                href={`https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="section contact">
          <h2>{t.contactTitle}</h2>
          <div className="contact-info">
            <p className="contact-intro">{t.contactIntro.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}</p>
            <div className="contact-links">
              <a href="mailto:hello@dein-domain.de" className="contact-button">
                {t.contactEmail}
              </a>
              <a href="https://instagram.com/dein.handle" target="_blank" rel="noopener noreferrer" className="contact-button">
                {t.contactInstagram}
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="contact-button">
                {t.contactWhatsApp}
              </a>
            </div>
            <p className="contact-footer">{t.contactFooter}</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {t.footerText}</p>
      </footer>
    </div>
  )
}

export default App
