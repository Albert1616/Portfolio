/* eslint-disable prettier/prettier */
import React from 'react'
import CardProject from './CardProject'
import TitleSection from '../TitleSection'
import { PROJETOS } from '@/lib/utils'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Projects = () => {
    return (
        <section className="relative pt-8 md:pt-24" id="projetos">
            <TitleSection title='Projetos' />
            <Carousel className='py-12'
                opts={{
                    loop: true
                }}>
                <CarouselContent>
                    {PROJETOS.map((projeto, index) => (
                        <CarouselItem key={index} className='md:basis-1/3 md:ml-6'>
                            <CardProject key={index} title={projeto.title}
                                description={projeto.description} src={projeto.image}
                                techs={projeto.techs} index={index} />
                        </CarouselItem>))}
                </CarouselContent>
                <CarouselPrevious className='text-black dark:text-white' />
                <CarouselNext className='text-black dark:text-white' />
            </Carousel>
            {/* <div className='md:grid md:grid-cols-3 gap-28 mt-12'>

                {PROJETOS.map((projeto, index) => <CardProject key={index} title={projeto.title}
                    description={projeto.description} src={projeto.image} index={index} />)}
            </div> */}
        </section >
    )
}

export default Projects
