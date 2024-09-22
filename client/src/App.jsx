import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/context/cartContext'; 
import { WishlistProvider } from './components/context/wishlistContext'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProductDetailPage from './components/ProductDetailPage';
import AddProductPage from './components/AddProductPage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import Cart from './components/cart'; 
import WishlistPage from './components/wishlistPage'; 

const App = () => {
  return (
    <WishlistProvider> 
      <CartProvider> 
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/add-product" element={<AddProductPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<WishlistPage />} /> 
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </WishlistProvider>
  );
};

export default App;
