import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const LINKS = [
  {
    name: 'Sobre mim',
    path: '/aboutme',
  },
  {
    name: 'Skils',
    path: '/skils',
  },
  {
    name: 'Projetos',
    path: '/projects',
  },
  {
    name: 'Contato',
    path: '/contact',
  },
]
