import { Navbar } from '../layout/Navbar';
import { Card } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import antigas from '../../img/bandas/antigas.png'
import avenue from '../../img/bandas/avenue.png'
import jazz from '../../img/bandas/jazz.png'
import kara from '../../img/bandas/kara.png'
import system from '../../img/bandas/system.png'
import monkey from '../../img/bandas/monkey.png'
import Footer from '../layout/Footer'
import styles from './Musicas.module.css'


function Musicas() {
    return (
        <>
            <Navbar />
            <Card className={styles.card} style={{backgroundColor:'#004F52'}}>
                <Card.Title className={styles.card_title} >Cronograma semanal</Card.Title>
            </Card>



            <Container fluid>
                <Row className='mt-5 justify-content-center'>
                    <Col>
                        <Card >
                            <Card.Img variant="top" src={system} />
                            <Card.Body>
                                <Card.Title style={{ fontFamily: 'Raleway' }}>System of a Down (2ª Feira)</Card.Title>
                                <Card.Text style={{ fontFamily: 'Poppins' }}>
                                    Horário: 19:00 - 21:30
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Img variant="top" src={kara} />
                            <Card.Body>
                                <Card.Title style={{ fontFamily: 'Raleway' }}>Karaoke (3ª Feira)</Card.Title>
                                <Card.Text style={{ fontFamily: 'Poppins' }}>
                                    Horário: 17:00 - 22:00
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={jazz} />
                            <Card.Body>
                                <Card.Title style={{ fontFamily: 'Raleway' }}>Ella Fitzgerald - Jazz (4ª Feira)</Card.Title>
                                <Card.Text style={{ fontFamily: 'Poppins' }}>
                                    Horário: 18:00 - 21:00
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


                <Row className='mt-5 justify-content-center'>
                    <Col>
                        <Card >
                            <Card.Img variant="top" src={antigas} />
                            <Card.Body>
                                <Card.Title style={{ fontFamily: 'Raleway' }}>90's 2000's (5ª Feira)</Card.Title>
                                <Card.Text style={{ fontFamily: 'Poppins' }}>
                                    Horário: 19:00 - 20:30
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Img variant="top" src={avenue} />
                            <Card.Body>
                                <Card.Title style={{ fontFamily: 'Raleway' }}>Boyce Avenue (6ª Feira)</Card.Title>
                                <Card.Text style={{ fontFamily: 'Poppins' }}>
                                    Horário: 19:00 - 20:30
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Img variant="top" src={monkey} />
                            <Card.Body>
                                <Card.Title style={{ fontFamily: 'Raleway' }}>Karaokê (Sábado)</Card.Title>
                                <Card.Text style={{ fontFamily: 'Poppins' }}>
                                    Horário: 16:00 - 20:30
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>

    )
}

export default Musicas