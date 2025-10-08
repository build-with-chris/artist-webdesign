import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [language, setLanguage] = useState('de')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [darkMode])

  const translations = {
    de: {
      title: 'Ich code deinen Auftritt',
      tagline: 'schlank, schnell, mobil.',
      uspTitle: 'Dein React Code',
      uspSubtitle: 'React nutzen Facebook, Instagram & Co. – das stärkste Tool für moderne Websites.',
      usp1Title: 'Wirklich gecoded – kein Baukasten',
      usp1Text: 'Du bekommst eine individuelle Website, die genau auf deine Bedürfnisse zugeschnitten ist – keine Standard-Templates.',
      usp2Title: 'Extrem performant',
      usp2Text: 'Deine Besucher erleben blitzschnelle Ladezeiten und bleiben länger – das steigert deine Conversion.',
      usp3Title: 'Interaktiv',
      usp3Text: 'Animationen und Interaktionen schaffen ein einzigartiges Erlebnis, das deine Marke unvergesslich macht.',
      usp4Title: 'Aus einem Guss',
      usp4Text: 'Du erhältst eine professionelle Website, bei der Design und Technik perfekt harmonieren – ohne Kompromisse.',
      whyCodeTitle: 'Warum ich code',
      whyCodeText1: 'Seit November 2024 beschäftige ich mich täglich mindestens 6 Stunden mit Webentwicklung.',
      whyCodeText2: 'Coden ist für mich das beste und effizienteste Werkzeug für Ideen – es gibt mir die Power, Projekte eigenständig umzusetzen.',
      whyCodeText3: 'Ich liebe es, wenn aus einem Gedanken in kurzer Zeit etwas Reales, Klickbares entsteht und die Menschen es auch checken und nutzen',
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
      hostingPrice: '15€ / Monat',
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
      contactEmail: '📧 E-Mail schreiben',
      contactInstagram: '📱 Instagram Message',
      contactWhatsApp: '💬 WhatsApp Message',
      contactFooter: 'Oder schick mir einfach deine Idee per Mail oder DM – ich antworte schnell!',
      footerText: 'Artist Webdesign – schlank, schnell, mobil.'
    },
    en: {
      title: 'I code your presence',
      tagline: 'lean, fast, mobile.',
      uspTitle: 'Your React Code',
      uspSubtitle: 'React is used by Facebook, Instagram & Co. – the most powerful tool for modern websites.',
      usp1Title: 'Actually Coded – No Website Builder',
      usp1Text: 'You get a custom website tailored exactly to your needs – no standard templates.',
      usp2Title: 'Extremely Performant',
      usp2Text: 'Your visitors experience lightning-fast load times and stay longer – boosting your conversion rates.',
      usp3Title: 'Interactive',
      usp3Text: 'Animations and interactions create a unique experience that makes your brand unforgettable.',
      usp4Title: 'Unified Design',
      usp4Text: 'You receive a professional website where design and technology harmonize perfectly – without compromises.',
      whyCodeTitle: 'Why I Code',
      whyCodeText1: 'Since November 2024, I\'ve been dedicating at least 6 hours daily to web development.',
      whyCodeText2: 'Coding is the best and most efficient tool for my ideas – it gives me the power to implement projects independently.',
      whyCodeText3: 'I love it when a thought becomes something real and clickable in a short time, and people actually check it out and use it',
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
      hostingPrice: '€15 / Month',
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
      contactEmail: '📧 Send Email',
      contactInstagram: '📱 Instagram Message',
      contactWhatsApp: '💬 WhatsApp Message',
      contactFooter: 'Or simply send me your idea via email or DM – I respond fast!',
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
          <p className="usp-subtitle">{t.uspSubtitle}</p>
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

        {/* Why I Code Section */}
        <section className="section why-code">
          <h2>{t.whyCodeTitle}</h2>
          <div className="why-code-content">
            <p>{t.whyCodeText1}</p>
            <p>{t.whyCodeText2}</p>
            <p>{t.whyCodeText3}</p>
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
              <a href="mailto:chris.hermann9397@gmail.com?subject=Webdesign%20Anfrage&body=Hallo%20Chris%2C%0A%0Aich%20interessiere%20mich%20f%C3%BCr%20deine%20Webdesign-Services.%0A%0AMein%20Projekt%3A%20" className="contact-button">
                {t.contactEmail}
              </a>
              <a href="https://wa.me/4915904891419?text=Hallo%20Chris%2C%20ich%20interessiere%20mich%20f%C3%BCr%20deine%20Webdesign-Services!" target="_blank" rel="noopener noreferrer" className="contact-button">
                {t.contactWhatsApp}
              </a>
              <a href="https://instagram.com/chriiiiis_h" target="_blank" rel="noopener noreferrer" className="contact-button">
                {t.contactInstagram}
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
