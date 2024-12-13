import React, { useState } from 'react'
import { motion } from 'motion/react'
import TabButton from './TabButton'
import { MdOutlineWork, MdBook, MdSchool } from 'react-icons/md'
import { GiBrain } from 'react-icons/gi'
import TabScreen from './TabScreen'

const Resume = () => {
  const [tab, setTab] = useState('Experiencia')
  return (
    <section className="relative mt-16 md:mt-36 xl:mt-28 py-20" id="resumo">
      <motion.h2
        className="absolute top-0 left-1/2 translate-x-[-50%] text-black dark:text-white text-center text-2xl lg:text-3xl
        font-semibold after:absolute after:-bottom-1 after:left-0 after:right-0 after:w-full after:h-[3px] after:bg-primaryColor "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Resumo
      </motion.h2>
      <motion.div
        className="md:grid md:grid-cols-3 md:gap-8 items-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="col-span-1 flex flex-col items-center md:justify-between md:h-[20em] gap-3 w-full">
          <TabButton tab="Sobre mim" icon={MdBook} setTab={setTab} />
          <TabButton tab="Experiencia" icon={MdOutlineWork} setTab={setTab} />
          <TabButton tab="Skills" icon={GiBrain} setTab={setTab} />
          <TabButton tab="Escolaridade" icon={MdSchool} setTab={setTab} />
        </div>
        <TabScreen tab={tab} />
      </motion.div>
    </section>
  )
}

export default Resume
