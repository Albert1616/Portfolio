/* eslint-disable prettier/prettier */
import React from 'react'
import TitleSection from '../TitleSection'
import Image from 'next/image';
import { Textarea } from '../ui/textarea'
import { MdEmail, MdWhatsapp } from "react-icons/md";
import CardContato from './CardContato';
import InputContato from './InputContato';

const Contato = () => {

    return (
        <section className="pt-8 md:pt-24" id='contato'>
            <TitleSection title="Contato" />
            <div className='mt-8'>
                <div className='grid grid-cols-1 md:grid-cols-5 md:gap-12'>
                    <div className='md:col-span-3'>
                        <div className='flex flex-col items-center justify-center'>
                            <h2 className='text-black font-bold text-2xl'>Vamos trabalhar juntos!</h2>
                            <p className='text-black text-lg'>Envie-me um email</p>
                        </div>

                        <form action="" className='flex flex-col gap-y-4 mt-5'>
                            <InputContato placeholder='Seu email' />
                            <InputContato placeholder='Seu nome' />
                            <InputContato placeholder='Assunto' />
                            <Textarea placeholder='Messagem...' className='border border-black md:text-lg' />
                            <button type='submit' className='p-2 text-2xl font-extrabold rounded-lg bg-gradient-to-r from-red-400 to-violet-500'>Enviar</button>
                        </form>
                    </div>
                    <div className='md:col-span-2 flex flex-col justify-between'>
                        <Image
                            src='/contato-imagem.png'
                            width={200}
                            height={250}
                            alt='Imagem animada que ilustra a sessão de contato'
                            className='place-self-center h-full hidden md:block' />
                        <div>
                            <CardContato contato='Matheusal2018@outlook.com' icon={MdEmail} />
                            <CardContato contato='+55 (84) 98754-8540' icon={MdWhatsapp} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contato
