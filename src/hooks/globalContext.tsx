import { createContext, useState } from 'react'

export const GlobalContext = createContext<any>({})
export const GlobalContextProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState(null)
  const contextValue = {
    currentUser,
    setCurrentUser,
  }
  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>
}
