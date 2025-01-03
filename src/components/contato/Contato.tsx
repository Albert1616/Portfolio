/* eslint-disable prettier/prettier */
import React from 'react'
import TitleSection from '../TitleSection'
import Image from 'next/image';
import { Textarea } from '../ui/textarea'
import { FaEnvelopeOpen, FaWhatsapp } from 'react-icons/fa'
import CardContato from './CardContato';
import InputContato from './InputContato';
import { useForm } from 'react-hook-form'
import { formSchema, TypeSchema } from './ZodValidate'
import { zodResolver } from '@hookform/resolvers/zod'
const Contato = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<TypeSchema>({
        resolver: zodResolver(formSchema)
    })

    const SendEmail = async (data: { name: string, emailFrom: string, subject: string, message: string }) => {
        try {
            const response = await fetch("/api/email/send", {
                method: 'POST',
                headers: {
                    "Content-type": "Application/json"
                },
                body: JSON.stringify(data)
            })
            if (response.ok) {
                return {
                    status: "Sucess",
                    message: "Email enviado com sucesso"
                };
            } else {
                return {
                    status: "Fail",
                    message: "Erro ao enviar email"
                };
            }
        } catch (error) {
            return {
                status: "Sucess",
                message: error
            };
        }
    }

    const sendEmail = async (data: TypeSchema) => {
        const response = await SendEmail({
            name: data.name,
            emailFrom: data.email,
            subject: data.assunto,
            message: data.messagem
        })

        if (response.status === 'Sucess') {
            alert("Email enviado com sucesso!");
            reset();
        }
    }
    return (
        <section className="pt-8 md:pt-24" id='contato'>
            <TitleSection title="Contato" />
            <div className='mt-8'>
                <div className='grid grid-cols-1 lg:grid-cols-5 lg:gap-12'>
                    <div className='md:col-span-3'>
                        <div className='flex flex-col items-center justify-center text-black dark:text-white'>
                            <h2 className='font-bold text-2xl'>Vamos trabalhar juntos!</h2>
                            <p className='text-lg'>Envie-me um email</p>
                        </div>

                        <form onSubmit={handleSubmit(sendEmail)} className='flex flex-col gap-y-4 mt-5'>
                            <InputContato placeholder='Seu email' name='email' register={register} />
                            {errors.email && <p className='text-xs text-red-500'>{errors.email.message}</p>}
                            <InputContato placeholder='Seu nome' name='name' register={register} />
                            {errors.name && <p className='text-xs text-red-500'>{errors.name.message}</p>}
                            <InputContato placeholder='Assunto' name='assunto' register={register} />
                            {errors.assunto && <p className='text-xs text-red-500'>{errors.assunto.message}</p>}
                            <Textarea placeholder='Messagem...'
                                className='h-[80px] min-h-[80px] max-h-[80px] text-black 
                            dark:text-white border border-black dark:border-white 
                            focus:outline-none focus:border-none md:text-lg'
                                {...register("messagem")} />
                            {errors.messagem && <p className='text-xs text-red-500'>{errors.messagem.message}</p>}
                            <button type='submit' className='p-2 text-2xl font-extrabold rounded-lg bg-gradient-to-r from-red-400 to-violet-500'>Enviar</button>
                        </form>
                    </div>
                    <div className='lg:col-span-2 w-full flex flex-col justify-between'>
                        <Image
                            src='/contato-imagem.webp'
                            width={200}
                            height={250}
                            loading='lazy'
                            alt='Imagem animada que ilustra a sessão de contato'
                            className='select-none place-self-center h-full hidden lg:block' />
                        <div>
                            <CardContato contato='Matheusal2018@outlook.com' icon={FaEnvelopeOpen} />
                            <CardContato contato='+55 (84) 98754-8540' icon={FaWhatsapp} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contato
