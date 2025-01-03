/* eslint-disable prettier/prettier */
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

interface emailProps {
    name: string,
    emailFrom: string,
    subject: string,
    message: string
}

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_TO,
        pass: process.env.EMAIL_PASS,
    },
})

export async function POST(req: NextRequest) {
    try {
        if (req.method === 'POST') {

            const { emailFrom, subject, message, name }: emailProps = await req.json();
            const info = await transporter.sendMail({
                from: emailFrom,
                to: 'matheusal2018@outlook.com',
                subject,
                html: `<p>Ola meu nome é ${name}. ${message}</p>`,
            })

            return NextResponse.json({ message: info }, { status: 200 })
        } else {
            return NextResponse.json({ message: "Bad Request" }, { status: 400 })
        }
    } catch (error) {
        return NextResponse.json({ message: `Error to send email. ${error}` }, { status: 500 })
    }
}
