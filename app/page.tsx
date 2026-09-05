'use client'

import { useLanguage } from '@/components/LanguageProvider'
import Hero from '@/components/home/Hero'
import ClientStrip from '@/components/home/ClientStrip'
import Services from '@/components/home/Services'
import DraftOffer from '@/components/home/DraftOffer'
import WorkPreview from '@/components/home/WorkPreview'
import ProcessPreview from '@/components/home/ProcessPreview'
import PricingPreview from '@/components/home/PricingPreview'
import AboutTeaser from '@/components/home/AboutTeaser'
import Faq from '@/components/home/Faq'

/**
 * Die Startseite fuehrt in einer Linie vom ersten Eindruck bis zur
 * Anfrage: Was biete ich, warum kein Risiko, was habe ich gebaut, wie
 * laeuft es ab, was kostet es, wer bin ich, offene Fragen.
 */
export default function Home() {
  const { language } = useLanguage()

  return (
    <>
      <Hero language={language} />
      <ClientStrip language={language} />
      <Services language={language} />
      <DraftOffer language={language} />
      <WorkPreview language={language} />
      <ProcessPreview language={language} />
      <PricingPreview language={language} />
      <AboutTeaser language={language} />
      <Faq language={language} />
    </>
  )
}
