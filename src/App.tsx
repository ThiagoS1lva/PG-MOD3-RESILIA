import { ShoppingCartProvider } from './context/ShoppingCartContex'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from './components/layout/Home'
import Sobre from './components/pages/Sobre'
import Musicas from './components/pages/Musicas'
import {Carrinho} from './components/pages/Carrinho'

export function App() {

  return (

    <Routes>
      <Route path="/" element={<ShoppingCartProvider><Home/></ShoppingCartProvider>}></Route>

      <Route path='/Sobre' element={<ShoppingCartProvider><Sobre/></ShoppingCartProvider>}></Route>

      <Route path='/Musicas' element={<ShoppingCartProvider><Musicas/></ShoppingCartProvider>}></Route>

      <Route path='/Cardapio' element={<ShoppingCartProvider><Carrinho/></ShoppingCartProvider>}></Route>
    </Routes>

  )
}

