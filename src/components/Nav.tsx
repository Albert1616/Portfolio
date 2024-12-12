/* eslint-disable prettier/prettier */
import { LINKS } from '@/lib/utils'
import Link from 'next/link'
import { motion } from 'motion/react'
import React from 'react'
import { usePathname } from 'next/navigation'

type Props = {
    isDarkMode: boolean
    setIsDarkMode: (state: boolean) => void
}

const Nav = ({ isDarkMode, setIsDarkMode }: Props) => {
    const path = usePathname();
    return (
        <div className="flex flex-col lg:flex-row items-end gap-8 w-full">
            {LINKS.map((link) => (
                <motion.p
                    key={link.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5, ease: 'linear' }}
                >
                    <Link
                        key={link.name}
                        href={link.path}
                        className={`w-full flex text-xl text-black dark:text-white hover:text-purple-500
                        dark:hover:text-purple-500 hover:scale-110 transition-colors duration-300 delay-150 after:absolute after:bottom-0 after:w-3/4 after:h-[1px]
                        hover:after:bg-primaryColor after:transition-opacity ${path === link.path ? 'text-primaryColor after:bg-primaryColor':''}`}
                    >
                        {link.name}
                    </Link>
                </motion.p>
            ))}
        </div>
    )
}

export default Nav
