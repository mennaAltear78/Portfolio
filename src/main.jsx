import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './Hooks/Auth-context.jsx'
import { ThemeProvider } from './Hooks/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
      <App />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
)
