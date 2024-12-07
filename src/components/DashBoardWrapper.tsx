'use client'

import React, { useEffect, useState } from 'react'

type Props = {
  children: React.ReactNode
}

const DashBoardWrapper = ({ children }: Props) => {
  return <div className="container mx-auto px-16 md:px-32">{children}</div>
}

export default DashBoardWrapper
