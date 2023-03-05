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

    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id)


    return (
        <Card className="h-100">
            <Card.Img variant="Top" src={imgUrl} height="400px" style={{ objectFit: "cover" }} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{comida}</span>
                    <span className="fs3">País: {pais}</span>
                    <span className="ms-2 text-muted">{formatCurrency(preço)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100" onClick={() => increaseCartQuantity(id)}>+ Adicionar ao carrinho</Button>
                    ) : <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                        <div className="d-flex align-item-center justify-content-center" style={{ gap: ".5rem" }}>

                            <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                            <div>
                                <span className="fs-3">{quantity}</span> no carrinho
                            </div>
                            <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                        </div>
                        <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>Remover</Button>
                    </div>}
                </div>
            </Card.Body>
        </Card>
    )

}

