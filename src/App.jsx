import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/footer';
import Service from './Components/Service/Service';
import About from './Components/About/About';
import Login from './Components/login/login';
import Signup from './Components/login/signup';
import Collection from './Components/collection/collection';
import Contact from './Components/contact/contact';
import ProductPage from './Components/Product/ProductPage';
import CartPage from './Components/Product/CartPage';
import AddProduct from './Components/Product/AddProject';
import ProductDetail from './Components/Product/ProductDetail'; 
import ProtectedRoute from './Components/ProtectedRoute';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Hero /><Collection /><Service /></>} />

        <Route path="/product" element={
          <ProtectedRoute>
            <ProductPage />
          </ProtectedRoute>
        } />

        <Route path="/cart" element={
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        } />

        <Route
          path="/add-product"
          element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Login />} />
        <Route path="/contact" element={<Contact />} />


        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
