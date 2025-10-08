import './App.css'

function App() {
  const projects = [
    {
      name: 'pepeshows.de',
      url: 'pepeshows.de',
      description: 'Agentur für Artists – klare Struktur, schnelle Buchungswege.'
    },
    {
      name: 'pepearts.de',
      url: 'pepearts.de',
      description: 'Portfolio-Auftritt mit Fokus auf Bildern & kurzen Texten.'
    },
    {
      name: 'pepe-dome.de',
      url: 'pepe-dome.de',
      description: 'Event-Location: kompakte Infos, Termine & Kontakt auf einen Blick.'
    },
    {
      name: 'freemanfestival.de',
      url: 'freemanfestival.de',
      description: 'Festivalseite mit Programm, Bildern und Call-to-Action.'
    }
  ]

  return (
    <div className="app">
      <header className="header">
        <h1>Artist Webdesign</h1>
        <p className="tagline">schlank, schnell, mobil.</p>
      </header>

      <main className="main">
        {/* Services Section */}
        <section className="section services">
          <h2>Angebot</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Basic</h3>
              <p className="price">200€ <span className="old-price">statt 690€</span></p>
              <p className="service-intro">Der solide Start: ein klarer Onepager, der alles Wichtige zeigt.</p>
              <ul>
                <li>Startseite, Angebot, Projekte & Kontakt</li>
                <li>Mobilfreundlich & suchmaschinenoptimiert</li>
                <li>Saubere Performance</li>
                <li>Einfacher Austausch von Texten und Bildern</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Advanced</h3>
              <p className="price">ab 450€ <span className="old-price">statt 1400€</span></p>
              <p className="service-intro">Für mehr Spielraum und Wachstum.</p>
              <ul>
                <li>Mehrseitige Website oder CMS-Anbindung</li>
                <li>Blog, Galerie, Video- oder Buchungssektionen</li>
                <li>Formulare mit Validierung</li>
                <li>Extras wie Analytics, SEO-Finetuning & Hosting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section projects">
          <h2>Aktuelle Projekte</h2>
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
          <h2>Kontakt</h2>
          <div className="contact-info">
            <p className="contact-intro">Lust auf einen Auftritt im Web?<br />
            Schreib mir kurz, was du brauchst – ich melde mich fix mit einem Vorschlag.</p>
            <div className="contact-links">
              <a href="mailto:hello@dein-domain.de" className="contact-button">
                E-Mail: hello@dein-domain.de
              </a>
              <a href="https://instagram.com/dein.handle" target="_blank" rel="noopener noreferrer" className="contact-button">
                Instagram: @dein.handle
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="contact-button">
                WhatsApp: Nachricht senden
              </a>
            </div>
            <p className="contact-footer">Oder schick mir einfach deine Idee per Mail oder DM.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Artist Webdesign – schlank, schnell, mobil.</p>
      </footer>
    </div>
  )
}

export default App
