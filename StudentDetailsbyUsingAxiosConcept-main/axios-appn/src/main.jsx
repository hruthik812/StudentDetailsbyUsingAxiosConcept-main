import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import GetOne from './GetOne'
// import DeleteOperation from './DeleteOperation'
// import GetEx2 from './GetEx2'
// import Insert from './insert'
// import Update from './Update'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
