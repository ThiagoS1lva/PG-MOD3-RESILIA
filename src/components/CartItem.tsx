// Importação dos componentes e funções necessárias
import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContex"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

// Define as props do componente
type CartItemProps = {
  id: number
  quantity: number
}

// Define o componente que recebe as props id e quantity
export function CartItem({ id, quantity }: CartItemProps) {
  // Usa o hook useShoppingCart para obter a função removeFromCart
  const { removeFromCart } = useShoppingCart()
  // Procura o item com o id fornecido no arquivo JSON de items
  const item = storeItems.find(i => i.id === id)
  // Se o item não existe, retorna null e encerra a execução do componente
  if (item == null) return null

  // Renderiza o item do carrinho
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      {/* Renderiza a imagem do item */}
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      {/* Define a div com o nome e quantidade do item */}
      <div className="me-auto">
        <div>
          {item.comida}{" "}
          {/* Se a quantidade do item é maior que 1, exibe a quantidade */}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        {/* Exibe o preço do item */}
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.preço)}
        </div>
      </div>
      {/* Exibe o subtotal do item */}
      <div> {formatCurrency(item.preço * quantity)}</div>
      {/* Define o botão para remover o item do carrinho */}
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  )
}