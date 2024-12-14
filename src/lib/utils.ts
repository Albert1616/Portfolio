import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const LINKS = [
  {
    name: 'Resumo',
    path: '#resumo',
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

export const ESCOLARIDADE = [
  {
    data: '2018-2022',
    title: 'Técnico em Informática para Internet',
    key: 'IFRN',
  },
  {
    data: '2022 - atual',
    title: 'Bacharelado em Tecnologia da Informação',
    key: 'IMD - UFRN',
  },
]

export const EXPERIENCIA = [
  {
    data: '2020-2022',
    title: 'Volutário em desenvolvimento de software',
    key: 'IFRN',
  },
  {
    data: '2023-2024',
    title: 'Bolsista de pesquisa e iniciação científica',
    key: 'Instituto Nacional de Pesquisas Espaciais',
  },
  {
    data: '2024 - atual',
    title: 'Estagiário T.I',
    key: 'Polícia Federal',
  },
]

// export const PROJECTS = [
//   {
//     title:'Calculadora'
//   }
// ]
