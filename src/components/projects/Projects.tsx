/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
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
import TabProject from './TabProject'

const Projects = () => {
    const [filtro, setFiltro] = useState("Todos");
    const projetos = PROJETOS.filter((projeto) => projeto.tags.includes(filtro));

    return (
        <section className="relative pt-8 md:pt-24" id="projetos">
            <TitleSection title='Projetos' />
            <div className='flex items-center justify-center gap-5 mt-8'>
                <TabProject filtro='Todos' active={filtro} setFiltro={setFiltro} />
                <TabProject filtro='Web' active={filtro} setFiltro={setFiltro} />
                <TabProject filtro='Back-end' active={filtro} setFiltro={setFiltro} />
            </div>
            <Carousel className='pt-6'
                opts={{
                    loop: true
                }}>
                <CarouselContent>
                    {projetos.map((projeto, index) => (
                        <CarouselItem key={index} className='md:basis-1/3 md:ml-12'>
                            <CardProject key={index} title={projeto.title}
                                description={projeto.description} src={projeto.image}
                                techs={projeto.techs} index={index} />
                        </CarouselItem>))}
                </CarouselContent>
                <CarouselPrevious className='text-black dark:text-white' />
                <CarouselNext className='text-black dark:text-white' />
            </Carousel>
        </section >
    )
}

export default Projects
