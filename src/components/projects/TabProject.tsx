/* eslint-disable prettier/prettier */
import React from 'react'

type Props = {
    filtro: string
    active: string
    setFiltro: (filtro: string) => void
}

const TabProject = ({ filtro, setFiltro, active }: Props) => {
    return (
        <button
            className={`text-lg font-semibold border 
        border-violetColor dark:border-lightVioletColor hover:bg-violetColor dark:hover:bg-lightVioletColor
        hover:text-white dark:hover:text-black rounded-lg py-1 px-2 ${filtro === active ? 'bg-violetColor dark:bg-lightVioletColor text-white dark:text-black border-none' : 'bg-transparent text-violetColor dark:text-white'}`}
            onClick={() => setFiltro(filtro)}
        >
            {filtro}
        </button>
    )
}

export default TabProject
