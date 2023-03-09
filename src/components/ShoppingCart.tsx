import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContex"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./CartItem"
import storeItems from "../data/items.json"

type ShoppingCartProps = {
  isOpen: boolean
}

// Componente que exibe o carrinho de compras
export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  // Busca a função de fechar o carrinho e os itens do carrinho do contexto compartilhado
  const { closeCart, cartItems } = useShoppingCart()

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      {/* Cabeçalho do carrinho */}
      <Offcanvas.Header closeButton>
        <Offcanvas.Title style={{fontFamily: 'Poppins'}}>Carrinho</Offcanvas.Title>
      </Offcanvas.Header>
      {/* Corpo do carrinho */}
      <Offcanvas.Body>
        <Stack gap={3}>
          {/* Exibe cada item do carrinho */}
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          {/* Exibe o total do carrinho */}
          <div style={{fontFamily: 'Raleway'}} className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                // Encontra o item correspondente ao item do carrinho
                const item = storeItems.find(i => i.id === cartItem.id)
                // Soma o preço do item multiplicado pela quantidade no carrinho ao total
                return total + (item?.preço || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}