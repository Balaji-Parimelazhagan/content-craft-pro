import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const AppLayout: React.FC = () => {
  const handleHeaderSearch = () => {

  }
  return (
    <div className=' flex w-full h-full relative justify-center items-center'>
      <Header onHeaderSearch={handleHeaderSearch} headerSubTitle='Information is wealth...' searchTag='Search...' headerTitle='Content-Craft Pro'/>
      <div className="h-[70%]">
        <Outlet />
      </div>
      <Footer searchTag='Search draft...' />
    </div>
  )
}

export default AppLayout
