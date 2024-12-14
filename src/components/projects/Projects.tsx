/* eslint-disable prettier/prettier */
import { motion } from 'motion/react'
import React from 'react'
import CardProject from './CardProject'
import TitleSection from '../TitleSection'

const Projects = () => {
    return (
        <section className="relative pt-24" id="projetos">
            <TitleSection title='Projetos' />

            <div className='md:grid md:grid-cols-3 gap-32'>
                <CardProject title='Calculadora'
                    description='calculadora feita com html, css e javascript' src='/hero-removebg.png'
                    index={1} />
                <CardProject title='Calculadora'
                    description='calculadora feita com html, css e javascript' src='/hero-removebg.png'
                    index={2} />
                <CardProject title='Calculadora'
                    description='calculadora feita com html, css e javascript' src='/hero-removebg.png'
                    index={3} />
            </div>
        </section>
    )
}

export default Projects
