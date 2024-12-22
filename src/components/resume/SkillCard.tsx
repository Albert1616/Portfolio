import React from 'react'
import { IconType } from 'react-icons'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

type Props = {
  icon: IconType
  name: string
}

const SkillCard = ({ icon: Icon, name }: Props) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <div
            className={`py-4 text-black dark:text-white flex items-center justify-center border border-white rounded-xl bg-gray-200 dark:bg-gray-800 shadow-lg
          hover:text-primaryColor dark:hover:text-primaryColor transition-colors
          `}
          >
            <Icon className="text-5xl md:text-7xl" />
          </div>
        </TooltipTrigger>
        <TooltipContent
          className="text-[15px] font-bold"
          aria-label="Botão para ilustrar uma skill."
        >
          {name}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default SkillCard

// hover:after:content-[]
// after:relative after:bottom-8 after:right-7 hover:after:bg-white after:text-black after:rounded-lg after:p-3
