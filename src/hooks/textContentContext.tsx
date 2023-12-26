import { createContext, useReducer } from 'react'

export const TextContentContext = createContext<any[]>([])

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_ALL':
      return [...action.data]
    case 'DELETE':
      return state.filter((content: any) => content.id !== action.data.id)
    case 'EDIT':
      return [...state.filter((content: any) => content.id !== action.data.id), action.data]
    default:
      break
  }
}

export const TextContentProvider = ({ children }: any) => {
  const [textContents, dispatchTextContents] = useReducer(reducer, [])

  return (
    <TextContentContext.Provider value={[textContents, dispatchTextContents]}>
      {children}
    </TextContentContext.Provider>
  )
}
