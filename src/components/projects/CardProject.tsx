/* eslint-disable prettier/prettier */
import React, { useRef } from 'react'
import { CardContainer, CardBody, CardItem } from '../ui/3d-card'
import { FiEye } from "react-icons/fi";
import { IoCodeSlash } from "react-icons/io5";
import { motion, useInView } from 'motion/react';
import Image from 'next/image'
import Link from 'next/link';

type Props = {
    title: string
    description: string
    src: string
    index: number
}

const CardProject = ({ title, description, src, index }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    const CardVariants = {
        "initial": { y: 100, opacity: 0 },
        "animate": { y: 0, opacity: 1 }
    }
    return (
        <motion.div
            ref={ref}
            variants={CardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.7, delay: index * 0.4 }}>
            <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                        {title}
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                        {description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4 h-[25em] group">
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
                    {/* <div className='mt-8'>
                        <CardItem translateZ="100" className='w-full mt-4 flex items-end gap-2 cursor-pointe5 text-black dark:text-white'>
                            <Link href="www.youtube.com">
                                <IoOpenOutline size={25} className='cursor-pointer' />
                            </Link>
                            <IoLogoGithub size={25} className='cursor-pointer' />
                        </CardItem>
                    </div> */}

                </CardBody>
            </CardContainer>
        </motion.div>
    )
}

export default CardProject
