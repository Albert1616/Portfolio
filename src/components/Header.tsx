'use client'

import { LINKS } from '@/lib/utils'
import { Moon, Sun } from 'lucide-react';
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {

  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className='flex items-center justify-between py-8 md:py-12'>
        {/* LOGO */}

        <Link href='/' className='text-[2.5em] font-semibold'>
            ALBERT
            <span className='text-purple-400 ml-2'>.</span>
        </Link>

        <div className='flex items-center gap-5'>
            {LINKS.map((link) => (
                <Link href={link.path} className='text-lg'>
                    {link.name}
                </Link>
            ))}

            <div className='flex items-center justify-center'>
                <button onClick={() => setIsDarkMode(!isDarkMode)}>
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