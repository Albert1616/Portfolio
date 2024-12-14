/* eslint-disable prettier/prettier */
import { motion } from 'motion/react'
import React from 'react'
import CardProject from './CardProject'

const Projects = () => {
    return (
        <section className="relative" id="resumo">
            <motion.h2
                className="absolute top-0 left-1/2 translate-x-[-50%] text-black dark:text-white text-center text-2xl lg:text-3xl
        font-semibold after:absolute after:-bottom-1 after:left-0 after:right-0 after:w-full after:h-[3px] after:bg-primaryColor "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                Projetos
            </motion.h2>

            <div>
                <CardProject title='Calculadora'
                    description='calculadora feita com html, css e javascript' src='/hero-removebg.png' />
            </div>
        </section>
    )
}

export default Projects
