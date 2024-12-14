/* eslint-disable prettier/prettier */
import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import Image from 'next/image'
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa'
import Link from 'next/link'
import { motion } from 'motion/react'

const HeroSection = () => {
    return (
        <section className='min-h-[350px]'>
            <div className='grid grid-cols-1 md:grid-cols-12 pt-24 lg:py-32'>
                <div className="flex flex-col md:items-start col-span-7 place-self-center">
                    <TextGenerateEffect words="Olá, eu sou Albert, desenvolvedor web" />
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 mt-4 md:mt-10">
                        <motion.div
                            className="flex items-center gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.6 }}
                        >
                            <Link href="">
                                <FaLinkedin
                                    className="text-primaryColor hover:scale-125 ease-in-out duration-200"
                                    size={35}
                                />
                            </Link>
                            <Link href="">
                                <FaGithub
                                    className="text-primaryColor hover:scale-125 ease-in-out duration-200"
                                    size={35}
                                />
                            </Link>
                        </motion.div>
                        <motion.button
                            className="w-3/4 md:w-64 text-lg font-semibold flex items-center 
                        justify-center gap-3 bg-primaryColor text-white rounded-lg py-2 md:p-4
                        hover:bg-[#8B2EE2] transition-colors duration-75"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.8 }}
                        >
                            Baixar CV <FaDownload size={15} />
                        </motion.button>
                    </div>
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="col-span-5 place-self-center pb-12 md:pb-0">
                    <div className='w-[300px] h-[300px] lg:w-[400px] lg:h-[350px] mt-6 lg:mt-0'>
                        <Image
                            src="/hero-removebg.png"
                            alt="personal hero image"
                            width={600}
                            height={500}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection
