import { createContext, ReactNode, useContext, useState } from "react"
import { ShoppingCart } from "../components/ShoppingCart"
import { useLocalStorage } from "../hooks/useLocalStorage"

// Definindo o tipo de propriedades aceitas pelo componente ShoppingCartProvider
type ShoppingCartProviderProps = {
  children: ReactNode
}

// Definindo o tipo de um item no carrinho de compras
type CartItem = {
  id: number
  quantity: number
}

// Definindo o tipo do contexto do carrinho de compras
type ShoppingCartContext = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
}

// Criando o contexto do carrinho de compras
const ShoppingCartContext = createContext({} as ShoppingCartContext)

// Hook personalizado para acessar o contexto do carrinho de compras
export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

// Componente que provê o contexto do carrinho de compras
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  // Estado que controla se o carrinho de compras está aberto ou não
  const [isOpen, setIsOpen] = useState(false)

  // Estado que armazena os itens do carrinho de compras no local storage do navegador
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  )

  // Cálculo da quantidade total de itens no carrinho de compras
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  // Função que abre o carrinho de compras
  const openCart = () => setIsOpen(true)

  // Função que fecha o carrinho de compras
  const closeCart = () => setIsOpen(false)

  // Função que retorna a quantidade de um item específico no carrinho de compras
  function getItemQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  // Função que aumenta a quantidade de um item no carrinho de compras
  function increaseCartQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  // Função que diminui a quantidade de um item no carrinho de compras
  function decreaseCartQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  //Função que remove do carrinho
  function removeFromCart(id: number) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  //está retornando um elemento React que é responsável por prover o contexto da loja virtual. Esse contexto é acessível por todos os componentes filhos que são envolvidos pelo ShoppingCartProvider.
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
      }}
    >
      {/*O elemento ShoppingCart é renderizado e passa a receber a prop isOpen como true ou false, dependendo do estado atual do carrinho. O children é também renderizado como parte da árvore de elementos do React. */}
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  )
}