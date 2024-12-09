/* eslint-disable prettier/prettier */
import React from 'react'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'
import { TextGenerateEffect } from './ui/text-generate-effect'
import Image from 'next/image'
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import Link from 'next/link';
import {motion} from 'motion/react'

const HeroSection = () => {
    return (
        <BackgroundBeamsWithCollision>
            <div>
                <TextGenerateEffect words='Olá, eu sou Matheus Albert, desenvolvedor web' />
                <div className='flex flex-col md:flex-row items-center justify-center gap-10 mt-4'>
                    <motion.div className='flex items-center gap-4'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1.6}}>
                        <Link href=''>
                            <FaLinkedin className='text-primaryColor hover:scale-125 ease-in-out duration-200' size={35}/>
                        </Link>
                        <Link href=''>
                            <FaGithub className='text-primaryColor hover:scale-125 ease-in-out duration-200' size={35}/>
                        </Link>
                    </motion.div>
                    <motion.button className='w-64 text-lg font-semibold flex items-center 
                    justify-center gap-3 bg-primaryColor text-white rounded-lg p-4
                    hover:bg-[#8B2EE2] transition-colors duration-75'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1.8}}
                    >
                        Baixar  CV <FaDownload size={15}/>
                    </motion.button>
                </div>
            </div>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}>
                <Image src='/hero-removebg.png'
                    alt='personal hero image'
                    width={400}
                    height={500}
                    className='w-[20rem] h-[18rem] md:w-[40rem] md:h-[30rem] mt-20 md:mt-32' />
            </motion.div>
        </BackgroundBeamsWithCollision>
    )
}

export default HeroSection
