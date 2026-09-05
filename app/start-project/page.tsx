'use client'

import { useLanguage } from '@/components/LanguageProvider'
import ProjectForm from '@/components/ProjectForm'

export default function StartProjectPage() {
  const { language } = useLanguage()

  return (
    <div className="relative overflow-hidden">
      <div aria-hidden className="bg-grid absolute inset-0 h-96 opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brand/12 blur-[120px]"
      />
      <div className="relative">
        <ProjectForm language={language} />
      </div>
    </div>
  )
}
