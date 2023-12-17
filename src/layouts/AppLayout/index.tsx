import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout: React.FC = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Outlet />
    </div>
  )
}

export default AppLayout
