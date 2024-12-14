/* eslint-disable prettier/prettier */
import React from 'react'
import { CardContainer, CardBody, CardItem } from '../ui/3d-card'
import { IoOpenOutline, IoLogoGithub } from "react-icons/io5";
import Image from 'next/image'
import Link from 'next/link';

type Props = {
    title: string
    description: string
    src: string
}

const CardProject = ({ title, description, src }: Props) => {
    return (
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
                <CardItem translateZ="100" className="w-full mt-4 h-[25em]">
                    <Image
                        src={src}
                        height={1000}
                        width={1000}
                        className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className='mt-8'>
                    <CardItem translateZ="100" className='w-full mt-4 flex items-end gap-2 cursor-pointe5 text-black dark:text-white'>
                        <Link href="www.youtube.com">
                            <IoOpenOutline size={25} className='cursor-pointer' />
                        </Link>
                        <IoLogoGithub size={25} className='cursor-pointer' />
                    </CardItem>
                </div>

            </CardBody>
        </CardContainer>
    )
}

export default CardProject
