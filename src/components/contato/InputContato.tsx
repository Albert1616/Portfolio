/* eslint-disable prettier/prettier */
import { Input } from '@/components/ui/input'
import React from 'react'

type Props = {
    placeholder: string
}

const InputContato = ({ placeholder }: Props) => {
    return (
        <Input
            placeholder={placeholder}
            className="border border-black dark:border-white focus:outline-none focus:border-none
                md:text-lg md:py-2"
        />
    )
}

export default InputContato
