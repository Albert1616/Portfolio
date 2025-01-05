/* eslint-disable prettier/prettier */
import React from 'react'
import Logo from '../Logo'
import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { BiCopyright } from 'react-icons/bi'

const Footer = () => {
    return (
        <section className="relative mt-8 bg-gray-200 dark:bg-gray-800 border border-t-gray-300">
            <div className="flex items-center justify-between py-7">
                <Logo />
                <div className='flex items-center justify-center gap-1'>
                    <Link href="" aria-label="Botão para navegar até o Linkedin">
                        <FaLinkedin
                            className="text-primaryColor hover:scale-125 ease-in-out duration-200"
                            size={35}
                        />
                    </Link>
                    <Link href="" aria-label="Botão para navegar até o GitHub">
                        <FaGithub
                            className="text-primaryColor hover:scale-125 ease-in-out duration-200"
                            size={35}
                        />
                    </Link>
                </div>
            </div>
            <div className='absolute bottom-0 w-full text-black dark:text-white flex items-center justify-center'>
                <p className='flex items-center justify-center gap-1'><BiCopyright size={12} /> Feito por Matheus Albert.</p>
            </div>
        </section>
    )
}

export default Footer
