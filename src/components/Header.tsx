/* eslint-disable prettier/prettier */
'use client'

import { LINKS } from '@/lib/utils'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import React from 'react'
import NavMobile from './NavMobile'
import Nav from './Nav'

interface headerProps {
    isDarkMode: boolean
    setIsDarkMode: (state: boolean) => void
}

const Header = ({ isDarkMode, setIsDarkMode }: headerProps) => {
    const handleViewMode = () => {
        setIsDarkMode(!isDarkMode)
        if (!isDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    return (
        <div className="flex items-center justify-between py-8 md:py-12">
            {/* LOGO */}

            <Link
                href="/"
                className="text-black dark:text-white text-[2.5em] md:text-[3em] font-semibold"
            >
                ALBERT
                <span className="text-purple-500 ml-2">.</span>
            </Link>

            <NavMobile isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <div className="items-center gap-5 hidden lg:flex">
                <Nav isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

                <div className="flex items-center justify-center text-black dark:text-white">
                    <motion.button onClick={() => handleViewMode()}
                        whileTap={{ rotate: 3 }}>
                        {isDarkMode ? <Sun size={25} /> : <Moon size={25} />}
                    </motion.button>
                </div>
            </div>
        </div >
    )
}

export default Header
