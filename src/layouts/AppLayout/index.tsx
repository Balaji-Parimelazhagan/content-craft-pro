import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout: React.FC = () => {
  return (
    <div>
      <p> App Layout Works!</p>
      <Outlet />
    </div>
  )
}

export default AppLayout
