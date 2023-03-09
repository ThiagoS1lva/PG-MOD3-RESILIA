import storeItems from "../../data/items.json"
import { Row, Col, Card } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from '../layout/Navbar'
import Footer from '../layout/Footer'



import { StoreItem } from '../StoreItem';

export function Carrinho() {
    return (
        <>
            <Navbar />
            <Card style={{ width: '250px', left: '42%', backgroundColor: '#004F52', textAlign: 'center', marginTop: '2%', paddingRight: '0' }}>
                <Card.Title style={{ fontSize: '40px', color: 'white', fontFamily: 'Poppins'}} >Cardápio</Card.Title>
            </Card >
            <Row md={2} xs={1} lg={3} className="g-3 mt-5 me-3 ms-3">

                {storeItems.map(item => (
                    <Col key={item.id} className="mb-5">
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
            <Footer />
        </>
    )
}

