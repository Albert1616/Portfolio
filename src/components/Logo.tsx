/* eslint-disable prettier/prettier */
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link
            href="/"
            className="text-black dark:text-white select-none text-[2.5em] md:text-[3em] font-semibold"
        >
            ALBERT
            <span className="text-purple-500 ml-2">.</span>
        </Link>
    )
}

export default Logo
