'use client'

import DashBoardWrapper from '@/components/DashBoardWrapper'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Projects from '@/components/projects/Projects'
import Resume from '@/components/resume/Resume'
import { useState } from 'react'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <DashBoardWrapper>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className="px-6 md:px-12 flex flex-col gap-12">
        <HeroSection />
        <Resume />
        <Projects />
      </div>
    </DashBoardWrapper>
  )
}
