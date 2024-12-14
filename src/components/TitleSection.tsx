/* eslint-disable prettier/prettier */
import React from 'react'

type Props = {
    title: string
}

const TitleSection = ({ title }: Props) => {
    return (
        <h2
            className="relative max-w-fit left-1/2 -translate-x-[50%] text-black dark:text-white text-center text-2xl lg:text-3xl
        font-semibold after:absolute after:-bottom-1 after:left-0 after:right-0 after:w-full after:h-[3px] after:bg-primaryColor
        "
        >
            {title}
        </h2>
    )
}

export default TitleSection
