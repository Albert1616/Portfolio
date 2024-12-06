import { LINKS } from '@/lib/utils';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import React, { useState } from 'react'


const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <div className='flex lg:hidden'>
        {isOpen ? (
            <motion.div className='flex flex-col  gap-5 fixed top-0 right-0 w-[14em] h-full bg-gray-400 px-5 py-8'
            initial={{width: 0, opacity: 0}} 
            animate={{width: "14em", opacity: 1}}
            exit={{width: 0, opacity: 0, }}
            transition={{duration: 0.3, delay: 0.2, ease: "linear"}}>
                <div className='flex gap-2 justify-end w-full'>
                    <button onClick={() => handleViewMode()}>
                        {isDarkMode ? (
                            <Sun size={25}/>
                        ) : (
                            <Moon size={25}/>
                        )}
                    </button>

                    <button onClick={() => setIsOpen(false)}>
                        <X size={25} />
                    </button>
                </div>
                <div className='flex flex-col gap-8 items-end mt-4'>
                    {LINKS.map((link) => (
                        <Link key={link.name} href={link.path} className='flex text-xl font-semibold text-white hover:text-purple-400
                        hover:scale-x-110'>
                            {link.name}
                        </Link>
                    ))}
                </div>
            </motion.div>
        ) : (
            <button onClick={() => setIsOpen(true)}>
                <Menu size={25} className='text-black dark:text-white'/>
            </button>
        )}
    </div>
  )
}

export default NavMobile