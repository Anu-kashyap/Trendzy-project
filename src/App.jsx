import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/footer';
import Service from './Components/Service/Service';
import About from './Components/About/About';
import Login from './Components/login/login';
import Signup from './Components/login/signup';
import Collection from './Components/collection/collection'
import Contact from './Components/contact/contact'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Hero /><Collection/><Service /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Login />} /> {/* Default route */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
