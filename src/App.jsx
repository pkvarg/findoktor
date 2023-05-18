import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Png } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/style' element={<Png />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
