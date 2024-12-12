import React from 'react'
import { IconType } from 'react-icons'

type Props = {
    icon:IconType
}

const SkillCard = ({icon:Icon}: Props) => {
  return (
    <div className='p-3 text-black dark:text-white text-center bg-gray-300 dark:bg-gray-700 shadow-md
    hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-primaryColor'>
        <Icon size={20}/>
    </div>
  )
}

export default SkillCard