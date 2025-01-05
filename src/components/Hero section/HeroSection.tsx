/* eslint-disable prettier/prettier */
import React from 'react'
import Image from 'next/image'
import { FaDownload } from 'react-icons/fa'
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import Link from 'next/link'
import { domMin, LazyMotion, motion } from 'motion/react'
import { TextGenerateEffect } from '../ui/text-generate-effect'

const HeroSection = () => {
    return (
        <section className='min-h-[350px]'>
            <div className='grid grid-cols-1 lg:grid-cols-12 pt-24 lg:py-32'>
                <div className="flex flex-col lg:items-start col-span-7 place-self-center">
                    <TextGenerateEffect words="Olá, eu sou Albert, desenvolvedor web" />
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 mt-4 md:mt-10">
                        <LazyMotion features={domMin}>
                            <motion.div
                                className="flex items-center gap-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <Link href="https://www.linkedin.com/in/matheus-ara%C3%BAjotec/" target='_blank' className='rounded-full p-3 border border-primaryColor
                                        hover:scale-125 ease-in-out duration-200 hover:bg-primaryColor group'
                                    aria-label="Botão para navegar até o Linkedin.">
                                    <SlSocialLinkedin
                                        className="text-2xl md:text-3xl text-primaryColor group-hover:text-white"
                                    />
                                </Link>
                                <Link href="https://github.com/Albert1616" target='_blank' className='rounded-full p-3 border border-primaryColor
                                        hover:scale-125 ease-in-out duration-200 hover:bg-primaryColor group'
                                    aria-label="Botão para navegar até o GitHub.">
                                    <FiGithub
                                        className="text-2xl md:text-3xl text-primaryColor group-hover:text-white"
                                    />
                                </Link>
                            </motion.div>
                            <motion.button
                                className="w-3/4 md:w-64 bg-primaryColor rounded-lg py-2 md:p-4
                            hover:bg-[#8B2EE2] transition-colors duration-75"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <Link href="https://drive.google.com/file/d/126XOESfHYfn9nVxO5uKb6wNY39zjcZaQ/view?usp=drive_link"
                                    className='flex items-center justify-center gap-2 text-xl font-semibold text-black'>
                                    Baixar CV <FaDownload size={15} />
                                </Link>
                            </motion.button>
                        </LazyMotion>
                    </div>
                </div>
                <div className="col-span-5 place-self-center pb-12 md:pb-0">
                    <div className='w-[300px] h-[300px] lg:w-[400px] lg:h-[350px] mt-6 lg:mt-0'>
                        <Image
                            src="/hero-removebg.webp"
                            alt="personal hero image"
                            width={1200}
                            height={800}
                            sizes='(max-width:768px) 100vw, 50vw'
                            priority
                            className='select-none'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HeroSection
