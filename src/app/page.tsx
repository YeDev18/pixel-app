'use client'
import Header from '@/core/components/organisms/Header';
import Contact from '@/core/components/pages/Contact';
import Home from '@/core/components/pages/Home';
import Services from '@/core/components/pages/Service';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Home/>
    </div>
   
  );
}

export default App;
