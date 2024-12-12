import { ESCOLARIDADE, EXPERIENCIA } from '@/lib/utils'
import React from 'react'
import ResumeCard from './ResumeCard'

type Props = {
    tab:string
}

const TabScreen = ({tab}: Props) => {
  return (
    <div className=''>
        <h2 className='text-xl font-semibold'>{tab}</h2>
        {tab === 'sobre mim' ? (
            <div className='flex flex-col gap-4 mt-4'>
                <p className='text-sm font-normal'>Minhas skills</p>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt consequuntur, veniam impedit numquam rem praesentium soluta dolor eaque atque amet nesciunt nulla. Libero dolores porro excepturi accusantium praesentium ea iste.</p>
            </div>
        ) : tab === 'experiencia' ? (
            <div className='grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5'>
                {EXPERIENCIA.map((xp, index) => <ResumeCard data={xp.data} title={xp.title} 
                key_word={xp.key} key={index}/>)}
            </div>
        ):tab === 'escolaridade' ? (
            <div className='grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-5'>
                {ESCOLARIDADE.map((xp, index) => <ResumeCard data={xp.data} title={xp.title} 
                key_word={xp.key} key={index}/>)}
            </div>
        ) : tab === 'skills' ? (
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                
            </div>
        ) : null}
    </div>
  )
}

export default TabScreen