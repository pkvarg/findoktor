import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Home,
  BlogPage,
  CreateBlog,
  EditBlog,
  Login,
  ServicesPage,
  Ebook,
  Meeting,
  Calculator,
} from './pages'
import { Footer } from './components'
import { Toaster } from 'react-hot-toast'
import { StateContext } from './context/StateContext'

function App() {
  return (
    <BrowserRouter>
      <StateContext>
        <Routes>
          <Route path='/' element={<Calculator />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/blog/:id' element={<BlogPage />} />
          <Route path='/create-blog' element={<CreateBlog />} />
          <Route path='/edit-blog' element={<EditBlog />} />
          <Route path='/edit-blog/:id' element={<EditBlog />} />
          <Route path='/login' element={<Login />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/ebook' element={<Ebook />} />
          <Route path='/meeting' element={<Meeting />} />
          <Route path='/calculator' element={<Calculator />} />
        </Routes>
        <Footer />
        <Toaster />
      </StateContext>
    </BrowserRouter>
  )
}

export default App
