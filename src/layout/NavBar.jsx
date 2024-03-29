import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex w-full h-[50px] bg-red-100'>
      <div className='flex w-full flex-row gap-4 p-2 items-center justify-center'>
        <Link to='/'>Home</Link>
        <div className='h-[40%] border-l border-black' />
        <Link to='/profile'>Profile</Link>
      </div>
    </div>
  )
}

export default NavBar