/* eslint-disable prettier/prettier */
import { LINKS } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

type props = {
    close: (isOpen: boolean) => void
}

const Nav = ({ close }: props) => {
    const path = usePathname();
    return (
        <div className="flex flex-col lg:flex-row items-end gap-8 w-full">
            {LINKS.map((link) => (
                <p
                    key={link.name}
                >
                    <Link
                        key={link.name}
                        href={link.path}
                        className={`w-full flex text-xl text-black dark:text-white hover:text-purple-500
                        dark:hover:text-purple-500 hover:scale-110 transition-colors duration-300 delay-75 after:absolute after:bottom-0 after:w-3/4 after:h-[1px]
                        hover:after:bg-primaryColor after:transition-opacity ${path === `#${link.path}` ? 'text-primaryColor after:bg-primaryColor' : ''}`}
                        onClick={() => close(false)}
                    >
                        {link.name}
                    </Link>
                </p>
            ))}
        </div>
    )
}

export default Nav
