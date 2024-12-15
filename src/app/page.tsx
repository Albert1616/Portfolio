'use client'

import Contato from '@/components/contato/Contato'
import DashBoardWrapper from '@/components/DashBoardWrapper'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import HeroSection from '@/components/Hero section/HeroSection'
import Projects from '@/components/projects/Projects'
import Resume from '@/components/resume/Resume'
import { useState } from 'react'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <DashBoardWrapper>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className="px-6 md:px-20 flex flex-col gap-12">
        <HeroSection />
        <Resume />
        <Projects />
        <Contato />
      </div>
      <Footer />
    </DashBoardWrapper>
  )
}
