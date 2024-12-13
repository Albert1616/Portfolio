import React from 'react'
import { IconType } from 'react-icons'

type Props = {
  icon: IconType
  name: string
}

const SkillCard = ({ icon: Icon, name }: Props) => {
  return (
    <div
      className={`p-3 text-black dark:text-white flex items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-600 shadow-md
    hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-primaryColor dark:hover:text-primaryColor transition-colors
    `}
    >
      <Icon size={30} />
    </div>
  )
}

export default SkillCard
