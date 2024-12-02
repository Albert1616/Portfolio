'use client'

import React, { useEffect, useState } from 'react'

type Props = {
    children:React.ReactNode,
}

const DashBoardWrapper = ({children}: Props) => {

  const [isDarkMode, setIdDarkMode] = useState(true);
  
  useEffect(() => {
    if (isDarkMode) {
        document.documentElement.classList.add('white')
    }else {
        document.documentElement.classList.remove('white')
    }
  },[])

  return (
    <div className='container mx-auto px-16 md:px-48'>
        {children}
    </div>
  )
}

export default DashBoardWrapper