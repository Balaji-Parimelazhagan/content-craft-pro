import { createContext, useReducer } from 'react'

export const ContentContext = createContext<any[]>([])

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.data]
    case 'DELETE':
      return state.filter((content: any) => content.id !== action.data.id)
    case 'EDIT':
      return [...state.filter((content: any) => content.id !== action.data.id), action.data]
    default:
      break
  }
}

export const ContentProvider = ({ children }: any) => {
  const [contents, dispatchContent] = useReducer(reducer, [])

  return (
    <ContentContext.Provider value={[contents, dispatchContent]}>
      {children}
    </ContentContext.Provider>
  )
}
