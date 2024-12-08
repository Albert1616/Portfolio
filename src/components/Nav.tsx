import { LINKS } from '@/lib/utils'
import Link from 'next/link'
import { motion } from 'motion/react'
import React from 'react'

type Props = {
    isDarkMode: boolean
    setIsDarkMode: (state: boolean) => void
}

const Nav = ({ isDarkMode, setIsDarkMode }: Props) => {
    return (
        <div className='flex flex-col md:flex-row items-end gap-8 w-full'>
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
                        className="w-full flex text-2xl font-semibold text-black dark:text-white hover:text-purple-500
                        hover:scale-110"
                    >
                        {link.name}
                    </Link>
                </motion.p>
            ))}
        </div>
    )
}

export default Nav
