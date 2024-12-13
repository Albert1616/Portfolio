import React from 'react'
import { IconType } from 'react-icons'

type Props = {
  icon: IconType
  name: string
}

const SkillCard = ({ icon: Icon, name }: Props) => {
  return (
    <div
      className={`p-3 text-black dark:text-white flex items-center justify-center border border-white rounded-s-xl bg-gray-200 dark:bg-gray-800 shadow-lg
    hover:text-primaryColor dark:hover:text-primaryColor transition-colors 
    `}
    >
      <Icon size={30} />
    </div>
  )
}

export default SkillCard

// hover:after:content-[]
// after:relative after:bottom-8 after:right-7 hover:after:bg-white after:text-black after:rounded-lg after:p-3
