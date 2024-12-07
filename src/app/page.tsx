'use client'

import DashBoardWrapper from '@/components/DashBoardWrapper'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import { useState } from 'react'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <DashBoardWrapper>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <HeroSection />
    </DashBoardWrapper>
  )
}
