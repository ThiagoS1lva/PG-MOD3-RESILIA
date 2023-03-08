import { Card, Button } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import 'bootstrap/dist/css/bootstrap.css';
import { useShoppingCart } from "../context/ShoppingCartContex";

type StoreItemProps = {
    id: number
    comida: string
    preço: number
    pais: string
    imgUrl: string
}

export function StoreItem({ id, comida, preço, pais, imgUrl }: StoreItemProps) {

    // Importa as funções do context para manipular o carrinho de compras
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()

    // Obtém a quantidade atual do item no carrinho de compras
    const quantity = getItemQuantity(id)

    // Renderiza um cartão com as informações do item
    return (
        <Card className="h-100">
            <Card.Img variant="Top" src={imgUrl} height="400px" style={{ objectFit: "cover" }} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    {/* Renderiza o nome da comida, o país e o preço */}
                    <span className="fs-2">{comida}</span>
                    <span className="fs3">{pais}</span>
                    <span className="ms-2 text-muted">{formatCurrency(preço)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {/* Verifica se o item não está no carrinho */}
                    {quantity === 0 ? (
                        // Renderiza um botão para adicionar o item ao carrinho
                        <Button className="w-100" onClick={() => increaseCartQuantity(id)}>+ Adicionar ao carrinho</Button>
                    ) : (
                        // Caso contrário, renderiza a quantidade atual do item no carrinho e botões para aumentar e diminuir a quantidade
                        <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                            <div className="d-flex align-item-center justify-content-center" style={{ gap: ".5rem" }}>
                                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                                <div>
                                    <span className="fs-3">{quantity}</span> no carrinho
                                </div>
                                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                            {/* Renderiza um botão para remover o item do carrinho */}
                            <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>Remover</Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}