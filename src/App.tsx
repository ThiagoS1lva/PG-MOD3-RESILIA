import {Navbar} from './components/layout/Navbar'
import {Carrinho} from './components/pages/Carrinho'
import Home from './components/layout/Home'
import { ShoppingCartProvider } from './context/ShoppingCartContex'

export function App() {

  return (
    <ShoppingCartProvider>
      <Navbar />
      <Home/>
      <Carrinho />
    </ShoppingCartProvider>
  )
}

