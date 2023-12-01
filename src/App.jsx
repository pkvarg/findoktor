import { lazy, Suspense } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Home,
  BlogPage,
  CreateBlog,
  EditBlog,
  Login,
  ServicesPage,
  Ebook,
  Meeting,
  About,
  Contact,
  Reconstruction,
  OurServices,
  CurrentOffer,
  //Calculator,
} from './pages';
import { SpinnerFullPage } from './components';
const Calculator = lazy(() => import('./pages/Calculator'));
import { Toaster } from 'react-hot-toast';
import { StateContext } from './context/StateContext';

function App() {
  return (
    <BrowserRouter>
      <StateContext>
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            <Route path="/" element={<Calculator />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reconstruction" element={<Reconstruction />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/current-offer" element={<CurrentOffer />} />
          </Routes>
        </Suspense>
        <Toaster />
      </StateContext>
    </BrowserRouter>
  );
}

export default App;
