import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'

const AppLayout: React.FC = () => {
  const handleHeaderSearch = () => {}
  return (
    <div className=" flex w-full h-full bg-transparent relative justify-center items-end">
      <Header
        onHeaderSearch={handleHeaderSearch}
        searchTag="Search..."
        headerTitle="Content-Craft Pro"
      />
      <div className="h-[90%] w-full bg-transparent">
        <Outlet />
      </div>
      {/* <Footer searchTag='Search draft...' /> */}
    </div>
  )
}

export default AppLayout
