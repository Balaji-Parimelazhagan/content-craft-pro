import { useRoutes } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Login from './pages/Login'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Validate from './pages/Validate'

const AppRouter = () => {
  const isAuthenticated = false
  const routes = useRoutes([
    {
      path: '/',
      element: isAuthenticated ? <AppLayout /> : <SignUp />,
      children: [
        {
          path: '/about-you',
          element: <About />,
        },
      ],
    },
    {
      path: '/sign-up',
      element: <SignUp />,
    },
    {
      path: '/validate/:id',
      element: <Validate />,
    },
    {
      path: '/about-you',
      element: <About />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ])

  return routes
}

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  )
}

export default App
