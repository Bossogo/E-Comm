import Header from '@/components/shared/Header'
import React from 'react'

function layout({ children }) {
  return (
    <>
        <Header />
        {children}
    </>
  )
}

export default layout