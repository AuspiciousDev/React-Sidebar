import React, { useState } from 'react'

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  const handleSidebar = () => {
    debugger
    setOpen(!open)
  }
  return (
    <div className={`flex ${open ? "w-[300px]" : "w-[50px]"} bg-gray-300  transition-all duration-400`}>
      <div className='h-[50px]'>
        <button className="border border-cyan-50 " onClick={handleSidebar}>=</button>
      </div>
      {
        open ? <span>Open</span> : <span>Closed</span>
      }
    </div>
  )
}

export default Sidebar