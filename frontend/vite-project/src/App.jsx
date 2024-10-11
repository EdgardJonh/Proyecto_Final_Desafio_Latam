import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './views/Home';
import ProductList from './views/ProductList';
// import ProductDetail from './views/ProductDetail';
// import Cart from './views/Cart';
// import Checkout from './views/Checkout';
// import Login from './views/Login';
// import Register from './views/Register';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;