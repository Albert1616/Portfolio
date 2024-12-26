import { clsx, type ClassValue } from 'clsx'
import { BiLogoTypescript } from 'react-icons/bi'
import { RiCss3Fill, RiGithubFill, RiHtml5Fill, RiNextjsFill, RiNodejsFill, RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri'
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

export const PROJETOS = [
  {
    title: 'Calculadora',
    image: '/projetos/calculadora.png',
    repository: 'https://github.com/Albert1616/Projetos-React/tree/main/calculator',
    description:
      'Calculadora simples e funcional com Todos as operações básicas. Desenvolvida por meio do React.js em conjunto com o framework Vite.js e com a biblioteca de estilos Styled-components',
    tags: ['Todos', 'Web'],
    techs: ['Typescript', 'React.js', 'Vite.js', 'Styled-components'],
  },
  {
    title: 'Jogo da memória',
    image: '/projetos/jogo_da_memoria.png',
    repository:'https://github.com/Albert1616/Projetos-React/tree/main/Memory_game',
    description:
      'Clássico e divertido jogo da memória com 20 cards para virar e encontrar os seus pares.',
    tags: ['Todos', 'Web'],
    techs: ['Typescript', 'React.js', 'Vite.js'],
  },
  {
    title: 'Pomodoro',
    image: '/projetos/pomodoro.png',
    repository:'https://github.com/Albert1616/Projetos-React/tree/main/pomodoro',
    description:
      'Relógio pomodoro, em que o usuário pode configurar o tempo de trabalho e o tempo de descando. Muito útil para gerenciamento de tempo e produtividade.',
    tags: ['Todos', 'Web'],
    techs: ['Typescript', 'React.js', 'Vite.js'],
  },
  {
    title: 'Controle de estoque',
    description:
      'Controle de estoque de produtos e pedidos dos clientes. Feito com Java em conjunto com o Spring Boot framework',
    repository:'https://github.com/Albert1616/Desenvolvimento-WEB-II/tree/projeto-III',
    image: '/projetos/java-backend.webp',
    tags: ['Todos', 'Back-end'],
    techs: ['Java', 'SpringBoot', 'Postgres'],
  },
  {
    title: 'Gereciador de tarefas',
    description:
      'Gerenciador de tarefas interativo com dashboard e gerenciamento de times e tarefas.',
    repository:'https://github.com/Albert1616/Management-tasks',
    image: '/projetos/java-backend.webp',
    tags: ['Todos', 'Back-end', 'Web'],
    techs: ['Typescript', 'React.js','Next.js','Node.js', 'Postgres'],
  },
]

export const SKILLS = [
  {
    tech:"HTML5",
    icon:RiHtml5Fill,
  },
  {
    tech:"CSS3",
    icon:RiCss3Fill,
  },
  {
    tech:"Typescript",
    icon:BiLogoTypescript,
  },
  {
    tech:"React.js",
    icon:RiReactjsFill,
  },
  {
    tech:"Next.js",
    icon:RiNextjsFill,
  },
  {
    tech:"Tailwindcss",
    icon:RiTailwindCssFill,
  },
  {
    tech:"Node.js",
    icon:RiNodejsFill,
  },
  {
    tech:"GitHub",
    icon:RiGithubFill,
  },
  
]
