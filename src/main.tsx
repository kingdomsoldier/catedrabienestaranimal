
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Biografia from './pages/Biografia.tsx'
import Fundamentacion from './pages/Fundamentacion.tsx'
import Historia from './pages/Historia.tsx'
import Gallery from './pages/Gallery.tsx'
import Miembros from './pages/Miembros.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/catedrabienestaranimal/' element={<App/> }/>
      <Route path='/catedrabienestaranimal/biografia' element={<Biografia/> }/>
      <Route path='/catedrabienestaranimal/fundamentacion' element={<Fundamentacion/> }/>
      <Route path='/catedrabienestaranimal/historia' element={<Historia/> }/>
      <Route path='/catedrabienestaranimal/galeria' element={<Gallery/> }/>
      <Route path='/catedrabienestaranimal/miembros' element={<Miembros/> }/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
