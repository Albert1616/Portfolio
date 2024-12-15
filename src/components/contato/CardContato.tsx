/* eslint-disable prettier/prettier */
import {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from '@radix-ui/react-tooltip'
import React from 'react'
import { IconType } from 'react-icons'
import { MdContentCopy } from 'react-icons/md'

type Props = {
    contato: string
    icon: IconType
}

const CardContato = ({ contato, icon: Icon }: Props) => {
    const copyEmail = (contato: string) => {
        navigator.clipboard.writeText(contato);
    }
    return (
        <div className="flex flex-col mt-3">
            <div
                className="bg-[#eec7c7] p-2 text-black text-lg 
                        rounded-lg flex items-center gap-3 justify-center md:justify-between flex-wrap bg-gradient-to-t"
            >
                <p className="flex items-center justify-center gap-3 flex-wrap max-w-full">
                    <Icon className='text-lg md:text-xl' /> <span className='text-lg'>{contato}</span>
                </p>
                <TooltipProvider delayDuration={100}>
                    <Tooltip>
                        <TooltipTrigger onClick={() => copyEmail(contato)}>
                            <MdContentCopy className='text-lg md:text-xl' />
                        </TooltipTrigger>
                        <TooltipContent className="">
                            <p>Copiar</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    )
}

export default CardContato
