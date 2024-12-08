/* eslint-disable prettier/prettier */
import React from 'react'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'
import { TextGenerateEffect } from './ui/text-generate-effect'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <BackgroundBeamsWithCollision>
            <TextGenerateEffect words='Olá, eu sou Matheus Albert, desenvolvedor web' />
            <Image src='/hero-removebg.png'
                alt='personal hero image'
                width={400}
                height={500}
                className='w-[20rem] h-[18rem] md:w-[40rem] md:h-[30rem] mt-20 md:mt-32' />
        </BackgroundBeamsWithCollision>
    )
}

export default HeroSection
