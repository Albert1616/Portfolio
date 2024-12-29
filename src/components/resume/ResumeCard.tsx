import React from 'react'

type Props = {
  data: string
  title: string
  keyWord: string
}

const ResumeCard = ({ data, title, keyWord }: Props) => {
  return (
    <div className="flex flex-col p-3 gap-2">
      <p className="text-lg text-primaryColor font-semibold">{data}</p>
      <h3 className="text-2xl font-bold text-black dark:text-white ">
        {title}
      </h3>
      <p
        className="flex items-center gap-2 text-black 
      dark:text-white text-xl font-light italic"
      >
        <span className="rounded-full w-[5px] h-[5px] bg-primaryColor" />
        {keyWord}
      </p>
    </div>
  )
}

export default ResumeCard
