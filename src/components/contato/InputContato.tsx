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
            className="border border-black focus:outline-none focus:border-black
                md:text-lg md:py-2"
        />
    )
}

export default InputContato
