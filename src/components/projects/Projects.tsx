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

const Projects = () => {
    const [filtro, setFiltro] = useState("Todos");
    const projetos = PROJETOS.filter((projeto) => projeto.tags.includes(filtro));

    return (
        <section className="relative pt-8 md:pt-24" id="projetos">
            <TitleSection title='Projetos' />
            <div className='flex items-center justify-center gap-5 mt-8'>
                <button className={`text-primaryColor text-lg font-semibold border 
                border-primaryColor hover:bg-primaryColor 
                hover:text-white rounded-lg py-1 px-2 ${filtro === 'Todos' ? 'bg-primaryColor text-white' : 'bg-transparent'}`}
                    onClick={() => setFiltro("Todos")}>Todos</button>

                <button className={`text-primaryColor text-lg font-semibold border 
                border-primaryColor hover:bg-primaryColor 
                hover:text-white rounded-lg py-1 px-2 ${filtro === 'Web' ? 'bg-primaryColor text-white' : 'bg-transparent'}`}
                    onClick={() => setFiltro("Web")}>Web</button>

                <button className={`text-primaryColor text-lg font-semibold border 
                border-primaryColor hover:bg-primaryColor 
                hover:text-white rounded-lg py-1 px-2 ${filtro === 'Back-end' ? 'bg-primaryColor text-white' : 'bg-transparent'}`}
                    onClick={() => setFiltro("Back-end")}>Back-end</button>
            </div>
            <Carousel className='pt-6'
                opts={{
                    loop: true
                }}>
                <CarouselContent>
                    {projetos.map((projeto, index) => (
                        <CarouselItem key={index} className='md:basis-1/3 md:ml-6'>
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
