import { lazy, Suspense } from 'react'

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
  //Calculator,
} from './pages'
import { SpinnerFullPage } from './components'
const Calculator = lazy(() => import('./pages/Calculator'))
import { Toaster } from 'react-hot-toast'
import { StateContext } from './context/StateContext'

function App() {
  return (
    <BrowserRouter>
      <StateContext>
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            <Route path='/' element={<Calculator />} />
          </Routes>
        </Suspense>
        <Toaster />
      </StateContext>
    </BrowserRouter>
  )
}

export default App
