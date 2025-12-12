import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' /*se importa el componente para visualizarse en el navegador*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>, 
)
