import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage';
import ProductSpotlightPage from './pages/ProductSpotlightPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<AllProductsPage />} />
          <Route path="/product/:id" element={<ProductSpotlightPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
