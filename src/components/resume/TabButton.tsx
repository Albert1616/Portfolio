import React from 'react'
import { IconType } from 'react-icons'
import { motion } from 'motion/react'

type Props = {
  tab: string
  setTab: (tab: string) => void
  icon: IconType
}

const TabButton = ({ tab, setTab, icon: Icon }: Props) => {
  return (
    <button
      className="flex items-center justify-center gap-3 w-full p-2 rounded-lg bg-clip-padding
      bg-gradient-to-t to-primaryColor from-pink-400 transition-colors duration-500
    text-xl font-semibold text-white"
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
