import React from 'react'

type Props = {
    data:string,
    title:string,
    key_word:string
}

const ResumeCard = ({data, title, key_word}: Props) => {
  return (
    <div className='flex flex-col p-3 gap-2'>
        <p className='text-sm text-primaryColor font-semibold'>{data}</p>
        <h3 className='text-lg font-bold'>{title}</h3>
        <p className='flex items-center gap-2 font-sm font-light italic'>
            <div className='rounded-full w-1 h-1 bg-primaryColor' />
            {key_word}
        </p>
    </div>
  )
}

export default ResumeCard