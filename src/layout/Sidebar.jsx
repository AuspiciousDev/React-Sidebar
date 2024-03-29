import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  const handleSidebar = () => {
    debugger
    setOpen(!open)
  }
  return (
    <div className={`flex flex-col ${open ? "w-[300px]" : "w-[50px]"} bg-gray-300  transition-all duration-400`}>
      <div className='h-[50px]'>
        <button className="border border-cyan-50 " onClick={handleSidebar}>=</button>
      </div>
      <div className='flex flex-col gap-2 p-2'>
        <Link to='/'>Home</Link>
        <div className='w[50%] border-b border-gray-400' />
        <Link to='/profile'>Profile</Link>
      </div>
    </div>
  )
}

export default Sidebar