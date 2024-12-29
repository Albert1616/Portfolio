'use client'

import Contato from '@/components/contato/Contato'
import DashBoardWrapper from '@/components/DashBoardWrapper'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import HeroSection from '@/components/Hero section/HeroSection'
import Resume from '@/components/resume/Resume'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const Projects = dynamic(() => import('@/components/projects/Projects'), {
  ssr: false,
})

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
