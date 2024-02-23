import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Sidebar } from './components/sidebar.tsx'
import { items } from './constantes/sideBarItems.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> 
    <App />
    <Sidebar items={items}  />
  </React.StrictMode>,
)
