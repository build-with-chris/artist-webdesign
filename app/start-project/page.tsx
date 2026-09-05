'use client'

import { useLanguage } from '@/components/LanguageProvider'
import ProjectForm from '@/components/ProjectForm'

export default function StartProjectPage() {
  const { language } = useLanguage()

  return (
    <div className="grain relative overflow-hidden bg-surface-sunk">
      <div className="relative">
        <ProjectForm language={language} />
      </div>
    </div>
  )
}
