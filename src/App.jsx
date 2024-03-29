import { lazy, Suspense } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Meeting,
  About,
  Contact,
  Reconstruction,
  OurServices,
  CurrentOffer,
  Rules,
  Finances,
  Ebook,
  Admin,
  Tip,
} from './pages';
import { SpinnerFullPage } from './components';
const Calculator = lazy(() => import('./pages/Calculator'));
const CalculatorHouse = lazy(() => import('./pages/CalculatorHouse'));

import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/calculator-house" element={<CalculatorHouse />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reconstruction" element={<Reconstruction />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/current-offer" element={<CurrentOffer />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/finances" element={<Finances />} />
          <Route path="/e-book" element={<Ebook />} />
          <Route path="/tip" element={<Tip />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Suspense>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
