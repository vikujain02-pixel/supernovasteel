import { HelmetProvider } from 'react-helmet-async'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ReactDOM from 'react-dom/client'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)
