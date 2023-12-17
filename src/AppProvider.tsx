import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PrimeReactProvider } from 'primereact/api'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

type Props = {
  children: React.ReactNode
}

const AppProvider: React.FC<Props> = (props: Props) => {
  const queryClient = new QueryClient()
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <PrimeReactProvider>{props.children}</PrimeReactProvider>
      </QueryClientProvider>
    </Router>
  )
}

export default AppProvider
