import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Biografia from './pages/Biografia.tsx'
import Home from './Home.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/catedrabienestaranimal/' element={<App/> }/>
      <Route path='/catedrabienestaranimal/biografia' element={<Biografia/> }/>
      <Route path='catedrabienestaranimal/home' element={<Home/> }/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
