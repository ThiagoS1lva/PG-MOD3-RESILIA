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

function Musicas() {
    return (
        <>
            <Navbar />
            <Card style={{ width: '250px', left: '42%', backgroundColor: '#004F52', textAlign: 'center', marginTop: '2%', paddingRight: '0' }}>
                <Card.Title style={{ fontSize: '40px', color: 'white' }} >Cronograma semanal</Card.Title>
            </Card>
            <Container fluid>
                <Row className='mt-5'>
                    <Col>
                        <Card >
                            <Card.Img variant="top" src={system} />
                            <Card.Body>
                                <Card.Title>System of a Down (2º Feira)</Card.Title>
                                <Card.Text>
                                    Horário: 19:00 - 21:30
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Img variant="top" src={kara} />
                            <Card.Body>
                                <Card.Title>Karaoke (3º Feira)</Card.Title>
                                <Card.Text>
                                    Horário: 17:00 - 22:00
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={jazz} />
                            <Card.Body>
                                <Card.Title>Ella Fitzgerald - Jazz (4º Feira)</Card.Title>
                                <Card.Text>
                                    Horário: 18:00 - 21:00
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


                <Row className='mt-5 justify-content-center'>
                    <Col>
                        <Card style={{ width: '30' }} >
                            <Card.Img variant="top" src={antigas} />
                            <Card.Body>
                                <Card.Title>90's 2000's (5º Feira)</Card.Title>
                                <Card.Text>
                                    Horario: 19:00 - 20:30
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Img variant="top" src={avenue} />
                            <Card.Body>
                                <Card.Title>Boyce Avenue (6º Feira)</Card.Title>
                                <Card.Text>
                                    Horario: 19:00 - 20:30
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Img variant="top" src={monkey} />
                            <Card.Body>
                                <Card.Title>Karaoke (Sabado)</Card.Title>
                                <Card.Text>
                                    Horario: 16:00 - 20:30
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>

    )
}

export default Musicas