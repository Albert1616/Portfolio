'use client'

import DashBoardWrapper from '@/components/DashBoardWrapper'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import SobreMim from '@/components/SobreMim'
import { useState } from 'react'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <DashBoardWrapper>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className="px-6 md:px-12">
        <HeroSection />
        <SobreMim />
      </div>
    </DashBoardWrapper>
  )
}
