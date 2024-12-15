/* eslint-disable prettier/prettier */
import { ESCOLARIDADE, EXPERIENCIA } from '@/lib/utils'
import React from 'react'
import ResumeCard from './ResumeCard'
import {
    RiNextjsFill,
    RiReactjsFill,
    RiNodejsFill,
    RiHtml5Fill,
    RiCss3Fill,
    RiGithubFill,
    RiTailwindCssFill
} from 'react-icons/ri'
import { TbBrandTypescript } from "react-icons/tb";
import SkillCard from './SkillCard'
import { AnimatePresence, motion } from 'motion/react'

type Props = {
    tab: string
}

const TabScreen = ({ tab }: Props) => {
    return (
        <div className="col-span-2 p-3 md:p-5 mt-12 md:mt-0 bg-gray-300 dark:bg-slate-700 rounded-lg 
        h-[25em] shadow-lg overflow-y-auto overflow-x-hidden">
            <h2 className="md:mb-8 text-2xl text-center 
            font-semibold text-black dark:text-white"
            >
                {tab}
            </h2>
            <AnimatePresence key={tab}>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    {tab === 'Sobre mim' ? (
                        <div className="flex flex-col gap-4 mt-4 px-2">
                            <p className="text-xl font-medium text-justify text-black dark:text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Incidunt consequuntur, veniam impedit numquam rem praesentium
                                soluta dolor eaque atque amet nesciunt nulla. Libero dolores
                                porro excepturi accusantium praesentium ea iste.
                            </p>
                        </div>
                    ) : tab === 'Experiencia' ? (
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5">
                            {EXPERIENCIA.map((xp, index) => (
                                <ResumeCard
                                    data={xp.data}
                                    title={xp.title}
                                    keyWord={xp.key}
                                    key={index}
                                />
                            ))}
                        </div>
                    ) : tab === 'Escolaridade' ? (
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5">
                            {ESCOLARIDADE.map((xp, index) => (
                                <ResumeCard
                                    data={xp.data}
                                    title={xp.title}
                                    keyWord={xp.key}
                                    key={index}
                                />
                            ))}
                        </div>
                    ) : tab === 'Skills' ? (
                        <div className="mt-2 px-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                            <SkillCard icon={RiHtml5Fill} name="HTML5" />
                            <SkillCard icon={RiCss3Fill} name="CSS3" />
                            <SkillCard icon={TbBrandTypescript} name="Typescript" />
                            <SkillCard icon={RiReactjsFill} name="React.js" />
                            <SkillCard icon={RiNextjsFill} name="Next.js" />
                            <SkillCard icon={RiTailwindCssFill} name="Tailwindcss" />
                            <SkillCard icon={RiNodejsFill} name="Node.js" />
                            <SkillCard icon={RiGithubFill} name="Github" />
                        </div>
                    ) : null}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default TabScreen
