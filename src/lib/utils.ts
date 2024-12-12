import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const LINKS = [
  {
    name: 'Sobre mim',
    path: '#sobremim',
  },
  {
    name: 'Skils',
    path: '#skils',
  },
  {
    name: 'Projetos',
    path: '#projetos',
  },
  {
    name: 'Contato',
    path: '#contato',
  },
]
