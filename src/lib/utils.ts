import { clsx, type ClassValue } from "clsx"
import path from "path"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const LINKS = [
  {
    name:"About me",
    path:"/aboutme"
  },
  {
    name:"projects",
    path:"/projects"
  },
  {
    name:"contact",
    path:"/contact"
  }
]
