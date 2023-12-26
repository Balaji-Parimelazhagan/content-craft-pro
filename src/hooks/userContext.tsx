import { createContext, useReducer } from 'react'

export const UserContext = createContext<any[]>([])

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_ALL':
      return [...action.data]
  }
}

export const UserProvider = ({ children }: any) => {
  const [users, dispatchUsers] = useReducer(reducer, [])

  return <UserContext.Provider value={[users, dispatchUsers]}>{children}</UserContext.Provider>
}
