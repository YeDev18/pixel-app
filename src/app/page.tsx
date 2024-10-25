'use client'
import Header from '@/core/components/organisms/Header';
import Contact from '@/core/components/pages/Contact';
import Home from '@/core/components/pages/Home';
import Services from '@/core/components/pages/Service';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div >
    {/* <Router >
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

      </Router> */}
      <Header />
<Home/>
      {/* <Contact/> */}
    </div>
   
  );
}

export default App;
