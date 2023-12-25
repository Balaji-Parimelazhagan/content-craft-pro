import { useRoutes } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import Contents from './pages/contentList/Contents'
import Content from './pages/content/Content'
import Login from './pages/login/Login'

const AppRouter = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '',
          element: <Contents />,
        },
        {
          path: 'contents',
          element: <Contents />,
        },
        {
          path: 'content',
          children: [
            { path: '', element: <Content /> },
            { path: ':contentId', element: <Content /> },
          ],
        },
      ],
    },
    {
      path: '',
      element: <Login />,
    },
    {
      path: 'login',
      element: <Login />,
    },
  ])

  return routes
}

const App = () => {
  return <AppRouter />
}

export default App
