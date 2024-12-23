/* eslint-disable prettier/prettier */
import {
    TooltipProvider,
    Tooltip,
    TooltipTrigger,
    TooltipContent,
} from '@radix-ui/react-tooltip'
import React from 'react'
import { IconType } from 'react-icons'
import { IoCopyOutline } from "react-icons/io5";

type Props = {
    contato: string
    icon: IconType
}

const CardContato = ({ contato, icon: Icon }: Props) => {
    const copyEmail = (contato: string) => {
        navigator.clipboard.writeText(contato);
    }
    return (
        <div className="mt-3">
            <div
                className="bg-roseBackground p-2 text-black 
                        rounded-lg flex items-center gap-3 justify-center md:justify-between flex-wrap bg-gradient-to-t"
            >
                <p className="flex items-center justify-center gap-3 flex-wrap max-w-full">
                    <Icon className='text-lg md:text-xl' /> <span className='text-lg'>{contato}</span>
                </p>
                <TooltipProvider delayDuration={100}>
                    <Tooltip>
                        <TooltipTrigger onClick={() => copyEmail(contato)} aria-label="Texto que informa a finalizade do botão, que seria copiar um texto.">
                            <IoCopyOutline className='text-lg md:text-xl' />
                        </TooltipTrigger>
                        <TooltipContent className="text-black dark:text-white font-bold" aria-label="Botão para copiar o contato informado no card.">
                            <p>Copiar</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    )
}

export default CardContato
