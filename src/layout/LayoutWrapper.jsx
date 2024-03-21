import React from 'react'

const LayoutWrapper = ({ children }) => {
  return (
    <div className='flex w-screen h-screen'>{children}</div>
  )
}

export default LayoutWrapper