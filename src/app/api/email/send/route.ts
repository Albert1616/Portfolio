/* eslint-disable prettier/prettier */
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
        user: 'matheus.albert2023@gmail.com',
        pass: 'poyd qusk nbni cgtd',
    },
})

export async function GET() {
    try {
        const info = await transporter.sendMail({
            from: 'matheus.albert2023@gmail.com',
            to: 'matheusal2018@outlook.com',
            subject: 'Teste',
            html: `<p>TESTE DE EMAIL</p>`,
        })

        return NextResponse.json({ message: info.response })
    } catch (error) {
        return NextResponse.json({ message: `Error to send email. ${error}` })
    }
}
