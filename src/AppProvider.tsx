import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

type Props = {
  children: React.ReactNode
}

const AppProvider: React.FC<Props> = (props: Props) => {
  return (
      <Router>{props.children}</Router>
  )
}

export default AppProvider
