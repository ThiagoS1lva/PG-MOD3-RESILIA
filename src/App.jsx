import { Navbar } from './components/layout/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContex'
import Home from './components/layout/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';




export function App() {

  return (

    <Routes>
      <Route exact path="/" element={
        <ShoppingCartProvider>
          <Navbar />
        </ShoppingCartProvider>}></Route>
      <Route exact path="/Home" element={
        <Home />
      }>

      </Route>
    </Routes>



  )
}

