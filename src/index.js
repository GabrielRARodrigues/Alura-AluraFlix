import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'

import Home from './pages/Home'
import CadastroVideo from './pages/CadastroVideo'
import CadastroCategoria from './pages/CadastroCategoria'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro/video" element={<CadastroVideo />} />
        <Route path="/cadastro/categoria" element={<CadastroCategoria />} />
        <Route path="*" element={<div>Página 404</div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
