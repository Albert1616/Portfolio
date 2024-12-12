import React from 'react'
import { IconType } from 'react-icons'

type Props = {
    tab:string,
    setTab: (tab:string) => void,
    icon: IconType
}

const TabButton = ({tab, setTab, icon:Icon}: Props) => {
  return (
    <button className='flex items-center justify-center gap-3 w-full p-2 rounded-lg bg-gradient-to-t to-primaryColor from-pink-400
    text-lg font-semibold text-white' onClick={() => setTab(tab)}>
        {tab}
        <Icon size={20}/>
    </button>
  )
}

export default TabButton