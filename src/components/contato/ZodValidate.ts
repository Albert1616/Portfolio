/* eslint-disable prettier/prettier */
import { z } from 'zod'

export const formSchema = z.object({
    name: z.string().nonempty({ message: 'Por favor informe o seu nome' }),
    email: z
        .string()
        .email({ message: 'Email inválido' })
        .nonempty({ message: 'Por favor informe o seu email' }),
    assunto: z
        .string()
        .nonempty({ message: 'Por favor informe o seu assunto' }),
    messagem: z
        .string()
        .min(10, { message: 'A mensagem deve ter pelo menos 10 letras.' })
        .nonempty({ message: 'Por favor digite sua mensagem' }),
})

export type TypeSchema = z.infer<typeof formSchema>
