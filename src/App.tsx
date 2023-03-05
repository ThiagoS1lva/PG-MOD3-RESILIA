import {Navbar} from './components/layout/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContex'

export function App() {

  return (
    <ShoppingCartProvider>
      <Navbar />
    </ShoppingCartProvider>
  )
}

