import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, BlogPage, CreateBlog, EditBlog, Login, Png } from './pages'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/create-blog' element={<CreateBlog />} />
        <Route path='/edit-blog' element={<EditBlog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/style' element={<Png />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
