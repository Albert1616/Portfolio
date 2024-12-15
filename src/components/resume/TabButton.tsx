import React from 'react'
import { IconType } from 'react-icons'
import { motion } from 'motion/react'

type Props = {
  active: string
  tab: string
  setTab: (tab: string) => void
  icon: IconType
}

const TabButton = ({ tab, setTab, icon: Icon, active }: Props) => {
  return (
    <button
      className={`flex items-center justify-center gap-3 w-full p-2 rounded-lg bg-clip-padding
      bg-transparent border border-primaryColor hover:bg-gradient-to-r hover:from-rose-300 hover:to-violet-500 hover:text-white ${active === tab ? 'bg-gradient-to-r from-rose-300 to-violet-500 text-white' : ''} 
      transition-colors duration-500 delay-150 text-xl font-semibold text-black dark:text-white`}
      onClick={() => setTab(tab)}
    >
      <motion.span whileHover={{ y: -15 }}>{tab}</motion.span>
      <motion.span whileHover={{ y: -15 }}>
        <Icon size={20} />
      </motion.span>
    </button>
  )
}

export default TabButton
