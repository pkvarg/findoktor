import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, BlogPage, CreateBlog, EditBlog, Login } from './pages'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/:id' element={<BlogPage />} />
        <Route path='/create-blog' element={<CreateBlog />} />
        <Route path='/edit-blog' element={<EditBlog />} />
        <Route path='/edit-blog/:id' element={<EditBlog />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
