'use client'
import { useLanguage } from '@/components/LanguageProvider'

export default function ImprintPage() {
  const { language } = useLanguage()

  const content = {
    de: {
      title: 'Impressum',
      section1: {
        title: 'Angaben gemäß § 5 TMG',
        content: 'Christoph Hermann\nKiebitzweg 12a\n85464 Finsing\nE-Mail: chris.hermann9397@gmail.com',
      },
      section2: {
        title: 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:',
        content: 'Christoph Hermann (Anschrift wie oben)',
      },
      section3: {
        title: 'Hinweis:',
        content: 'Diese Website ist kein gewerbliches Angebot, sondern ein privates, informatives Online-Projekt. Sie dient ausschließlich zur Darstellung meiner bisherigen Arbeiten, Projekte und Interessen im Bereich Webdesign und Kreativwirtschaft. Es werden keine kostenpflichtigen Leistungen angeboten und kein Vertragsverhältnis begründet.\n\nAlle Inhalte dieser Website sind unverbindlich. Trotz sorgfältiger Pflege übernehme ich keine Gewähr für Vollständigkeit, Richtigkeit oder Aktualität der bereitgestellten Informationen. Jegliche Haftung für materielle oder immaterielle Schäden, die durch Nutzung oder Nichtnutzung der Inhalte entstehen, ist ausgeschlossen, soweit gesetzlich zulässig.',
      },
    },
    en: {
      title: 'Imprint',
      section1: {
        title: 'Information according to § 5 TMG',
        content: 'Christoph Hermann\nKiebitzweg 12a\n85464 Finsing\nEmail: chris.hermann9397@gmail.com',
      },
      section2: {
        title: 'Responsible for content according to § 18 Abs. 2 MStV:',
        content: 'Christoph Hermann (address as above)',
      },
      section3: {
        title: 'Note:',
        content: 'This website is not a commercial offering, but a private, informative online project. It serves solely to present my previous work, projects, and interests in the field of web design and creative industries. No paid services are offered and no contractual relationship is established.\n\nAll contents of this website are non-binding. Despite careful maintenance, I assume no guarantee for completeness, correctness, or timeliness of the provided information. Any liability for material or immaterial damages arising from use or non-use of the contents is excluded, to the extent legally permissible.',
      },
    },
  }[language]

  return (
    <div className="min-h-screen bg-black text-white py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">
          {content.title}
        </h1>

        <div className="space-y-10 text-zinc-300">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {content.section1.title}
            </h2>
            <div className="whitespace-pre-line leading-relaxed">
              {content.section1.content}
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {content.section2.title}
            </h2>
            <div className="whitespace-pre-line leading-relaxed">
              {content.section2.content}
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {content.section3.title}
            </h2>
            <div className="whitespace-pre-line leading-relaxed">
              {content.section3.content}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

