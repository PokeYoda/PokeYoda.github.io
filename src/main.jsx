import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Gradient from './puzzles/Gradient.jsx'
import MainPage from './components/MainPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainPage/>
    <Gradient/>
  </StrictMode>
)
