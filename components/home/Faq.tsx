'use client'

import { Section, SectionHeader } from '../ui/Section'
import Icon from '../ui/Icon'
import { ButtonLink } from '../ui/Button'

/**
 * Haeufige Fragen als details-Elemente. Die funktionieren ohne JavaScript,
 * sind mit der Tastatur bedienbar und werden von Screenreadern korrekt
 * angesagt. Die Antworten geben nur wieder, was auch sonst auf der Seite
 * steht: Preise, Dauer, Umfang.
 */
export default function Faq({ language }: { language: 'de' | 'en' }) {
  const t = {
    de: {
      eyebrow: 'Fragen',
      title: 'Was Kunden vorher wissen wollen',
      lead: 'Steht deine Frage nicht dabei, schreib mir einfach. Ich antworte in der Regel am selben Tag.',
      contact: 'Frage stellen',
      items: [
        {
          q: 'Was kostet eine Website bei dir?',
          a: 'Ein Onepager kostet 500 Euro, eine mehrseitige Website 900 Euro. Hosting und Pflege kommen mit 20 Euro im Monat dazu, die Domain ist darin enthalten. Der erste Design-Entwurf kostet 40 Euro und wird bei Buchung angerechnet.',
        },
        {
          q: 'Wie lange dauert es, bis meine Seite online ist?',
          a: 'In der Regel ein bis drei Wochen ab dem Zeitpunkt, an dem mir Texte und Bilder vorliegen. Den genauen Termin lege ich vorher fest, damit du planen kannst.',
        },
        {
          q: 'Was brauchst du von mir?',
          a: 'Texte, Bilder und eine Vorstellung davon, wen die Seite ansprechen soll. Dazu die Angaben für Impressum und Datenschutz. Beim Rest helfe ich, auch beim Formulieren.',
        },
        {
          q: 'Kann ich später selbst Inhalte ändern?',
          a: 'Kleine Änderungen zeige ich dir nach dem Launch. Wenn du magst, übernehme ich sie im Rahmen der Pflege: Du schickst mir das neue Bild oder den neuen Text, ich setze es innerhalb von 24 Stunden um. Ausgenommen sind Urlaubszeiten, die ich vorher ankündige.',
        },
        {
          q: 'Schreibst du jede Zeile selbst?',
          a: 'Ich nutze moderne Entwicklungswerkzeuge, deshalb bin ich schnell. Entscheidend ist etwas anderes: Ich verstehe, was ich baue, ich stehe dafür gerade und ich pflege es danach weiter. Die Zeit, die ich beim Tippen spare, steckt in der Abstimmung mit dir.',
        },
        {
          q: 'Nutzt du WordPress oder einen Baukasten?',
          a: 'Nein. Ich schreibe die Seiten mit React und Next.js. Das macht sie schneller, sicherer und unabhängig von Plugins, die irgendwann nicht mehr gepflegt werden. Wenn du Inhalte selbst pflegen willst, binde ich ein passendes CMS an.',
        },
        {
          q: 'Was ist, wenn mir der Entwurf nicht gefällt?',
          a: 'Dann gehst du ohne weitere Verpflichtung. Genau dafür gibt es den Entwurf für 40 Euro: Du siehst das Ergebnis, bevor du dich für ein Paket entscheidest.',
        },
      ],
    },
    en: {
      eyebrow: 'Questions',
      title: 'What clients want to know first',
      lead: 'If your question is not here, just write to me. I usually answer the same day.',
      contact: 'Ask a question',
      items: [
        {
          q: 'What does a website cost?',
          a: 'A one-pager costs 500 euros, a multi-page website 900 euros. Hosting and maintenance are 20 euros a month with the domain included. The first design draft costs 40 euros and is credited when you book.',
        },
        {
          q: 'How long until my site is online?',
          a: 'Usually one to three weeks from the point where I have your texts and images. I set the exact date beforehand so you can plan.',
        },
        {
          q: 'What do you need from me?',
          a: 'Texts, images and an idea of who the site should speak to. Plus the details for the imprint and privacy policy. I help with the rest, including the wording.',
        },
        {
          q: 'Can I change content myself later?',
          a: 'I show you the small edits after launch. If you prefer, I handle them as part of the maintenance: you send the new image or text and I put it live within 24 hours. Holidays are excluded and announced in advance.',
        },
        {
          q: 'Do you write every line yourself?',
          a: 'I use modern development tools, which is why I am fast. What matters is something else: I understand what I build, I stand behind it, and I keep it running afterwards. The time I save typing goes into working things out with you.',
        },
        {
          q: 'Do you use WordPress or a page builder?',
          a: 'No. I write the sites with React and Next.js. That makes them faster, safer and independent of plugins that stop being maintained. If you want to edit content yourself, I connect a suitable CMS.',
        },
        {
          q: 'What if I do not like the draft?',
          a: 'Then you walk away with no further obligation. That is exactly what the 40 euro draft is for: you see the result before you commit to a package.',
        },
      ],
    },
  }[language]

  // Strukturierte Daten, damit die Fragen auch in der Suche auftauchen koennen.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <Section id="faq" tone="sunk">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
          <ButtonLink href="/contact" variant="secondary" arrow className="mt-8">
            {t.contact}
          </ButtonLink>
        </div>

        <div className="divide-y divide-line-subtle border-y border-line-subtle">
          {t.items.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left font-medium tracking-tight transition-colors hover:text-brand [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="mt-0.5 shrink-0 text-ink-muted transition-transform duration-300 ease-out group-open:rotate-45 group-open:text-brand">
                  <Icon name="plus" size={20} />
                </span>
              </summary>
              <p className="max-w-prose pb-6 pr-10 leading-relaxed text-ink-secondary">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  )
}
