'use client'
import { useLanguage } from '@/components/LanguageProvider'

export default function PrivacyPage() {
  const { language } = useLanguage()

  const content = {
    de: {
      title: 'Datenschutzerklärung',
      section1: {
        title: '1. Verantwortlicher',
        content: 'Christoph Hermann\nKiebitzweg 12a\n85464 Finsing\nE-Mail: chris.hermann9397@gmail.com',
      },
      section2: {
        title: '2. Zweck dieser Website',
        content: 'Diese Website dient rein informatorischen Zwecken. Es werden keine geschäftlichen Leistungen angeboten. Eine Verarbeitung personenbezogener Daten findet nur im technisch notwendigen Umfang statt (z. B. Server-Logs und Kontaktformular).',
      },
      section3: {
        title: '3. Hosting durch Vercel',
        content: 'Die Website wird von Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA gehostet. Beim Aufruf der Seite werden technisch notwendige Daten (z. B. IP-Adresse, Browsertyp, Datum / Uhrzeit des Zugriffs) temporär gespeichert, um den sicheren Betrieb zu gewährleisten. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an technischer Stabilität).\n\nVercel kann Daten in die USA übertragen. Vercel ist nach dem EU-US Data Privacy Framework zertifiziert, wodurch ein angemessenes Datenschutzniveau sichergestellt ist. Weitere Informationen findest du in der Datenschutzerklärung von Vercel.',
      },
      section4: {
        title: '4. Kontaktformular',
        content: 'Wenn du mich über das Kontaktformular kontaktierst, werden die von dir eingegebenen Daten (z. B. Name, E-Mail, Nachricht) ausschließlich zur Bearbeitung deiner Anfrage genutzt und nicht weitergegeben.\nRechtsgrundlage: Art. 6 Abs. 1 lit. a und b DSGVO.\nDeine Daten werden gelöscht, sobald deine Anfrage abgeschlossen ist und keine gesetzlichen Aufbewahrungspflichten bestehen.',
      },
      section5: {
        title: '5. Keine Analyse- oder Trackingtools',
        content: 'Diese Website verwendet keine Cookies zu Analysezwecken und keine Tools wie Google Analytics. Es erfolgt keine Weitergabe personenbezogener Daten an Dritte zu Werbezwecken.',
      },
      section6: {
        title: '6. Rechte der betroffenen Personen',
        content: 'Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Widerspruch nach den Artikeln 15–21 DSGVO.\nAnfragen bitte an: chris.hermann9397@gmail.com',
      },
      section7: {
        title: '7. Hinweis zum rechtlichen Status',
        content: 'Da diese Website kein kommerzielles Angebot darstellt und kein Gewerbebetrieb geführt wird, erfolgt der Betrieb ausschließlich auf privater, nicht-geschäftlicher Basis. Eine Haftung für etwaige Schäden oder Rechtsfolgen aus der Nutzung der Seite ist ausgeschlossen, soweit gesetzlich zulässig.',
      },
      lastUpdated: '(Stand: Oktober 2025)',
    },
    en: {
      title: 'Privacy Policy',
      section1: {
        title: '1. Responsible Party',
        content: 'Christoph Hermann\nKiebitzweg 12a\n85464 Finsing\nEmail: chris.hermann9397@gmail.com',
      },
      section2: {
        title: '2. Purpose of this Website',
        content: 'This website serves purely informational purposes. No commercial services are offered. Processing of personal data only takes place to the technically necessary extent (e.g., server logs and contact form).',
      },
      section3: {
        title: '3. Hosting by Vercel',
        content: 'The website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. When accessing the site, technically necessary data (e.g., IP address, browser type, date/time of access) is temporarily stored to ensure secure operation. Processing is based on Art. 6 Para. 1 lit. f GDPR (legitimate interest in technical stability).\n\nVercel may transfer data to the USA. Vercel is certified under the EU-US Data Privacy Framework, ensuring an adequate level of data protection. For more information, see Vercel\'s privacy policy.',
      },
      section4: {
        title: '4. Contact Form',
        content: 'If you contact me via the contact form, the data you enter (e.g., name, email, message) will be used exclusively to process your inquiry and will not be shared.\nLegal basis: Art. 6 Para. 1 lit. a and b GDPR.\nYour data will be deleted as soon as your inquiry is completed and there are no legal retention obligations.',
      },
      section5: {
        title: '5. No Analysis or Tracking Tools',
        content: 'This website does not use cookies for analysis purposes and no tools like Google Analytics. There is no sharing of personal data with third parties for advertising purposes.',
      },
      section6: {
        title: '6. Rights of Data Subjects',
        content: 'You have the right to information, correction, deletion, restriction of processing, and objection according to Articles 15-21 GDPR.\nPlease send inquiries to: chris.hermann9397@gmail.com',
      },
      section7: {
        title: '7. Note on Legal Status',
        content: 'Since this website does not represent a commercial offering and no business is conducted, the operation takes place exclusively on a private, non-commercial basis. Liability for any damages or legal consequences arising from the use of the site is excluded to the extent legally permissible.',
      },
      lastUpdated: '(As of: October 2025)',
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

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {content.section4.title}
            </h2>
            <div className="whitespace-pre-line leading-relaxed">
              {content.section4.content}
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {content.section5.title}
            </h2>
            <div className="whitespace-pre-line leading-relaxed">
              {content.section5.content}
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {content.section6.title}
            </h2>
            <div className="whitespace-pre-line leading-relaxed">
              {content.section6.content}
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              {content.section7.title}
            </h2>
            <div className="whitespace-pre-line leading-relaxed">
              {content.section7.content}
            </div>
          </section>

          {/* Last Updated */}
          <div className="mt-12 pt-8 border-t border-zinc-800 text-zinc-500 text-sm">
            {content.lastUpdated}
          </div>
        </div>
      </div>
    </div>
  )
}

