/* eslint-disable prettier/prettier */
import { ESCOLARIDADE, EXPERIENCIA, SKILLS } from '@/lib/utils'
import React from 'react'
import ResumeCard from './ResumeCard'
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
                            <p className="text-2xl font-medium text-justify text-black dark:text-white">
                                Meu nome é Matheus, tenho 22 anos, sou desenvolvedor e estudante de TI.
                                Meu primeiro contato com a área aconteceu em 2018, quando iniciei meus estudos
                                no curso técnico em Informática para Internet no IFRN. Após finalizar o ensino médio,
                                decidi continuar estudando tecnologia e desenvolvimento. Logo, em 2022,
                                ingressei na UFRN para cursar Bacharelado em Tecnologia da Informação,
                                no qual estou no 6º período, com previsão de conclusão para 2026.
                                Durante meus estudos, tive a oportunidade de conhecer muitas linguagens de desenvolvimento,
                                tanto para web quanto para mobile, abrangendo as áreas de front-end e back-end.
                                Atualmente, estou focando meus estudos no desenvolvimento de aplicações com Next.js,
                                TypeScript, Node.js e PostgreSQL.
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
                            {SKILLS.map((skill) => (
                                <SkillCard name={skill.tech} icon={skill.icon} key={skill.tech} />
                            ))}
                        </div>
                    ) : null}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
export default TabScreen
