'use client'
import { useLanguage } from '@/components/LanguageProvider'
import ProjectForm from '@/components/ProjectForm'

export default function StartProjectPage() {
  const { language } = useLanguage()
  
  return (
    <div className="min-h-screen bg-black">
      <ProjectForm language={language} />
    </div>
  )
}

