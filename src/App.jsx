import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/footer';
import Service from './Components/Service/Service';
import About from './Components/About/About';
import Login from './Components/login/login'
import Collection from './Components/collection/collection'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Hero /><Collection/><Service /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
