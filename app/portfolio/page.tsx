'use client'
import { useLanguage } from '@/components/LanguageProvider'

export default function PortfolioPage() {
  const { language } = useLanguage()
  
  const t = {
    de: {
      title: 'Projekte',
      subtitle: 'Websites, die ich entwickelt habe – für Artists und kleine Businesses.',
    },
    en: {
      title: 'Projects',
      subtitle: "Websites I've built – for artists and small businesses.",
    }
  }[language]

  const projects = [
    {
      name: 'Pepearts',
      url: 'https://pepearts.de',
      description: language === 'de' 
        ? 'Portfolio-Website für einen vielseitigen Artist – minimalistisch, bildstark, schnell.' 
        : 'Portfolio website for a versatile artist – minimalist, image-focused, fast.',
      tags: ['Portfolio', 'React', 'Vite'],
      image: '/PepeArts.webp',
    },
    {
      name: 'Pepe Dome',
      url: 'https://pepe-dome.de',
      description: language === 'de'
        ? 'Event-Location-Website mit Fokus auf Atmosphäre und Buchungsanfragen.'
        : 'Event location website focusing on atmosphere and booking inquiries.',
      tags: ['Event', 'Location', 'Booking'],
      image: '/PepeDome.webp',
    },
    {
      name: 'No Roots Truck',
      url: 'https://www.no-roots-truck.de/',
      description: language === 'de'
        ? 'Mobiles Showcase-Konzept, das Storytelling mit edlem Design und interaktiven React-Elementen verbindet.'
        : 'Mobile showcase concept that combines storytelling with elegant design and interactive React elements.',
      tags: ['Showcase', 'React', 'Storytelling'],
      image: '/NoRootsProject.webp',
    },
  ]

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text py-32 px-6">
      <div className="max-w-6xl mx-auto mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-dark-text mb-6">{t.title}</h1>
        <p className="text-xl text-dark-text/70 max-w-2xl mx-auto">{t.subtitle}</p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-dark-surface rounded-2xl overflow-hidden border border-dark-text/10 hover:border-dark-accent/50 transition-all duration-300 shadow-dark hover:shadow-dark-lg"
          >
            <div className="aspect-video bg-gradient-to-br from-dark-accent/20 to-dark-bg overflow-hidden border-b border-dark-text/10 relative">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-4xl opacity-50">🌐</span>
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-dark-text mb-2 group-hover:text-dark-accent transition-colors">
                {project.name}
              </h3>
              <p className="text-dark-text/60 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-dark-text/5 text-dark-text/60 rounded-full border border-dark-text/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-dark-accent text-sm font-medium">
                <span className="group-hover:translate-x-1 transition-transform">→</span>
                <span>Website ansehen</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
