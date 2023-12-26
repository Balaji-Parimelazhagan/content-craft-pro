import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'
import { TextContentContext } from '../../hooks/textContentContext'
import { UserContext } from '../../hooks/userContext'
import { getAllTextContents } from '../../services/api/contentService'
import { getAllUsers } from '../../services/api/userService'

const AppLayout: React.FC = () => {
  const [users, dispatchUsers] = useContext(UserContext)
  const [textContents, dispatchTextContents] = useContext(TextContentContext)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchUsers = async () => {
      const userList = await getAllUsers()
      dispatchUsers({ type: 'ADD_ALL', data: userList })
    }

    const fetchTextContents = async () => {
      const contentList = await getAllTextContents()
      dispatchTextContents({ type: 'ADD_ALL', data: contentList })
    }

    fetchUsers()
    fetchTextContents()
    setIsLoading(false)
  }, [dispatchUsers, dispatchTextContents])

  const handleHeaderSearch = () => {}
  return isLoading ? (
    <h1>Loading ...</h1>
  ) : (
    <div className=" flex w-full h-full bg-transparent relative justify-center items-end">
      {/* <Gradient /> */}
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
