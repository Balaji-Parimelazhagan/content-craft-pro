import { createContext, useReducer } from 'react'

export const UserContext = createContext<any[]>([])

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_ALL':
      return [...state, action.data]
  }
}

export const UserProvider = ({ children }: any) => {
  const [users, dispatchUser] = useReducer(reducer, [])

  return <UserContext.Provider value={[users, dispatchUser]}>{children}</UserContext.Provider>
}
