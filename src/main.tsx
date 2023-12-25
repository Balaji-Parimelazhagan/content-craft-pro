import 'primeicons/primeicons.css'
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import AppProvider from './AppProvider.tsx'
import Gradient from './components/backdrop/Gradient.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <Gradient />
      <App />
    </AppProvider>
  </React.StrictMode>
)
