import storeItems from "../../data/items.json"
import { Row, Col, Card } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from '../layout/Navbar'
import Footer from '../layout/Footer'
import styles from './Carrinho.module.css'
import Loading from '../layout/Loading';
import { useState, useEffect } from 'react'


import { StoreItem } from '../StoreItem';

export function Carrinho() {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        //Simula tempo de carregamento
        setTimeout(() => setLoading(false), 500);
    }, []);



    return (
        <>
            <Navbar />
            {loading ? <Loading /> :
                <>
                    <Card className={styles.card} style={{ backgroundColor: '#004F52' }}>
                        <Card.Title className={styles.card_title} >Cardápio</Card.Title>
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
            }
        </>
    )
}

