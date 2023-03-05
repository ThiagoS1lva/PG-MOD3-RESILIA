import storeItems from "../../data/items.json"
import { Row, Col, Card, Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';
import { StoreItem } from '../StoreItem';

export function Carrinho() {
    return (
        <>
            <Card style={{width: '150px', left: '2%',backgroundColor:'#004F52'}}>
                <Card.Title style={{ fontSize: '40px' , width: '150px', color: 'white'}} >Comida</Card.Title>
            </Card>
            <Row md={2} xs={1} lg={3} className="g-3 mt-5 me-3 ms-3">

                {storeItems.map(item => (
                    <Col key={item.id} className="mb-5">
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

