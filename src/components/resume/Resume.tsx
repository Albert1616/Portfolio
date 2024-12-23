import React, { useState } from 'react'
import { motion } from 'motion/react'
import TabButton from './TabButton'
import {
  FaBrain,
  FaBriefcase,
  FaBookOpen,
  FaGraduationCap,
} from 'react-icons/fa'
import TabScreen from './TabScreen'
import TitleSection from '../TitleSection'

const Resume = () => {
  const [tab, setTab] = useState('Sobre mim')
  return (
    <section className="pt-14 md:pt-28" id="resumo">
      <TitleSection title="Resumo" />
      <motion.div
        className="md:grid md:grid-cols-3 md:gap-8 mt-8 items-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="col-span-1 flex flex-col items-center md:justify-between md:h-[20em] gap-3 w-full">
          <TabButton
            tab="Sobre mim"
            icon={FaBookOpen}
            setTab={setTab}
            active={tab}
          />
          <TabButton
            tab="Experiencia"
            icon={FaBriefcase}
            setTab={setTab}
            active={tab}
          />
          <TabButton tab="Skills" icon={FaBrain} setTab={setTab} active={tab} />
          <TabButton
            tab="Escolaridade"
            icon={FaGraduationCap}
            setTab={setTab}
            active={tab}
          />
        </div>
        <TabScreen tab={tab} />
      </motion.div>
    </section>
  )
}

export default Resume
