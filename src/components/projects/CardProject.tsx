/* eslint-disable prettier/prettier */
import React, { useRef } from 'react'
import { CardContainer, CardBody, CardItem } from '../ui/3d-card'
import { FiEye } from "react-icons/fi";
import { IoCodeSlash } from "react-icons/io5";
import { motion, useInView } from 'motion/react';
import Image from 'next/image'
import Link from 'next/link';
import { TbBrandTypescript, TbBrandVite } from "react-icons/tb";
import { SiStyledcomponents, SiSpring, SiPostgresql } from "react-icons/si";
import { FaJava, FaReact } from "react-icons/fa";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

type Props = {
    title: string
    description: string
    src: string
    index: number,
    techs: string[]
}

const CardProject = ({ title, src, index, techs }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    const CardVariants = {
        "initial": { y: 100, opacity: 0 },
        "animate": { y: 0, opacity: 1 }
    }

    const IconTech = (tech: string, index: number) => {
        const style = "p-1 size={35} text-black dark:text-white hover:text-primaryColor dark:hover:text-primaryColor"
        switch (tech) {
            case "Typescript":
                return <TbBrandTypescript className={`${style} text-black`} key={index} size={35} />;
            case "React.js":
                return <FaReact className={`${style}`} key={index} size={35} />;
            case "Vite.js":
                return <TbBrandVite className={`${style}`} key={index} size={35} />;
            case "Styled-components":
                return <SiStyledcomponents className={`${style}`} key={index} size={35} />;
            case "Java":
                return <FaJava className={`${style}`} key={index} size={35} />;
            case "SpringBoot":
                return <SiSpring className={`${style}`} key={index} size={35} />;
            case "Postgres":
                return <SiPostgresql className={`${style}`} key={index} size={35} />;
            default:
                return null;
        }
    }
    return (
        <motion.div
            ref={ref}
            variants={CardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.7, delay: index * 0.4 }}>
            <CardContainer className="inter-var ">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
                dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] 
                h-auto rounded-xl p-6 border  ">
                    <CardItem
                        translateZ="50"
                        className="text-2xl font-extrabold text-neutral-600 dark:text-white flex items-center justify-center w-full"
                    >
                        {title}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-6 h-[25em] group">
                        <div className='absolute items-center justify-center gap-5 w-full h-full inset-0 bg-black opacity-0 hidden group-hover:opacity-70
                        group-hover:flex transition-opacity duration-500'>
                            <Link href="/">
                                <FiEye size={40} className='cursor-pointer rounded-full border border-gray-500 p-2 
                                hover:border-white text-gray-500 hover:text-white' />
                            </Link>
                            <Link href='/'>
                                <IoCodeSlash size={40} className='cursor-pointer rounded-full border border-gray-500 p-2 
                                hover:border-white text-gray-500 hover:text-white' />
                            </Link>
                        </div>

                        <Image
                            src={src}
                            height={1000}
                            width={1000}
                            className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="mt-2 w-full flex items-end justify-end gap-4"
                    >
                        {techs.map((tech, index) => (
                            <TooltipProvider key={index} delayDuration={100}>
                                <Tooltip>
                                    <TooltipTrigger>
                                        {IconTech(tech, index)}
                                    </TooltipTrigger>
                                    <TooltipContent className='font-bold'>
                                        {tech}
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        ))}
                    </CardItem>
                </CardBody>
            </CardContainer>
        </motion.div>
    )
}

export default CardProject
