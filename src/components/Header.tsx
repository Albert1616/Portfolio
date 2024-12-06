'use client'

import { LINKS } from '@/lib/utils'
import { Moon, Sun } from 'lucide-react';
import Link from 'next/link'
import React, { useState } from 'react'
import NavMobile from './NavMobile';

const Header = () => {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleViewMode = () =>{
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode){
        document.documentElement.classList.add("dark");
    }else {
        document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className='flex items-center justify-between py-8 md:py-12'>
        {/* LOGO */}

        <Link href='/' className='text-black dark:text-white text-[2.5em] md:text-[3em] font-semibold'>
            ALBERT
            <span className='text-purple-400 ml-2'>.</span>
        </Link>

        <NavMobile />
        <div className='items-center gap-5 hidden lg:flex'>
            {LINKS.map((link) => (
                <Link key={link.name} href={link.path} className='text-black dark:text-white text-xl md:text-2xl hover:text-purple-400 
                hover:scale-110'>
                    {link.name}
                </Link>
            ))}

            <div className='flex items-center justify-center text-black dark:text-white'>
                <button onClick={() => handleViewMode()}>
                    {isDarkMode ? (
                        <Sun size={25}/>
                    ) : (
                        <Moon size={25}/>
                    )}
                </button>
            </div>
        </div>

    </div>
  )
}

export default Header