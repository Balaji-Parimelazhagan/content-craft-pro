import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PrimeReactProvider } from 'primereact/api'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { TextContentProvider } from './hooks/textContentContext'
import { GlobalContextProvider } from './hooks/globalContext'
import { UserProvider } from './hooks/userContext'

type Props = {
  children: React.ReactNode
}

const AppProvider: React.FC<Props> = (props: Props) => {
  const queryClient = new QueryClient()
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <GlobalContextProvider>
          <UserProvider>
            <TextContentProvider>
              <PrimeReactProvider>{props.children}</PrimeReactProvider>
            </TextContentProvider>
          </UserProvider>
        </GlobalContextProvider>
      </QueryClientProvider>
    </Router>
  )
}

export default AppProvider
