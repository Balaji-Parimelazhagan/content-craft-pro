import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PrimeReactProvider } from 'primereact/api'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ContentProvider } from './hooks/contentContext'
import { GlobalContextProvider } from './hooks/globalContext'

type Props = {
  children: React.ReactNode
}

const AppProvider: React.FC<Props> = (props: Props) => {
  const queryClient = new QueryClient()
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <GlobalContextProvider>
          <ContentProvider>
            <PrimeReactProvider>{props.children}</PrimeReactProvider>
          </ContentProvider>
        </GlobalContextProvider>
      </QueryClientProvider>
    </Router>
  )
}

export default AppProvider
