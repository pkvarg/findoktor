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
} from './pages';
import { SpinnerFullPage } from './components';
const Calculator = lazy(() => import('./pages/Calculator'));
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reconstruction" element={<Reconstruction />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/current-offer" element={<CurrentOffer />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/finances" element={<Finances />} />
        </Routes>
      </Suspense>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
