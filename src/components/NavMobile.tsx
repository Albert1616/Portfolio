import { Menu, Moon, Sun, X } from 'lucide-react'
import { motion } from 'motion/react'
import React, { useState } from 'react'
import Nav from './Nav'

interface navMobileProps {
  isDarkMode: boolean
  setIsDarkMode: (state: boolean) => void
}

const NavMobile = ({ isDarkMode, setIsDarkMode }: navMobileProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleViewMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className="flex lg:hidden">
      {isOpen ? (
        <motion.div
          className="z-50 flex flex-col  gap-5 fixed top-0 right-0 w-[14em] h-full bg-gray-400 px-5 pt-8"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '14em', opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.2, ease: 'linear' }}
        >
          <div className="flex gap-2 justify-end w-full">
          <motion.button
                onClick={() => handleViewMode()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5, ease: 'linear' }}
                className="hover:text-purple-500"
                >
                    <motion.div
                        whileHover={{ rotate: 360 }}  // Rotaciona o ícone em 180 graus ao passar o mouse
                        transition={{ duration: 0.3 }}  // Define a duração da rotação
                        >
                        {isDarkMode ? <Sun size={25} /> : <Moon size={25} />}
                    </motion.div>
                </motion.button>

            <motion.button
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5, ease: 'linear' }}
              className="hover:text-purple-500"
            >
              <X size={25} />
            </motion.button>
          </div>
          <div className="flex flex-col gap-8 items-end mt-4">
            <Nav isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          </div>
        </motion.div>
      ) : (
        <button onClick={() => setIsOpen(true)}>
          <Menu size={30} className="text-black dark:text-white" />
        </button>
      )}
    </div>
  )
}

export default NavMobile
