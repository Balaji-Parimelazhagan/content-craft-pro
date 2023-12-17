import { useRoutes } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import SignUp from './pages/SignUp'
import Contents from './modules/contents/Contents'

const AppRouter = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: 'contents',
          element: <Contents />,
        },
      ],
    },
    {
      path: '/login',
      element: <SignUp />,
    },
  ])

  return routes
}

const App = () => {
  return <AppRouter />
}

export default App
