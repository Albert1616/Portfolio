/* eslint-disable prettier/prettier */
import { Input } from '@/components/ui/input'
import { UseFormRegister } from 'react-hook-form'
import React from 'react'
import { TypeSchema } from './ZodValidate'

type NameTypes = 'name' | 'email' | 'messagem' | 'assunto'

type Props = {
    placeholder: string,
    name: NameTypes,
    register: UseFormRegister<TypeSchema>
}

const InputContato = ({ placeholder, name, register }: Props) => {
    return (
        <Input
            placeholder={placeholder}
            className="text-black dark:text-white border border-black dark:border-white focus:outline-none focus:border-none
                md:text-lg md:py-2"
            {...register(name)}
        />
    )
}

export default InputContato
