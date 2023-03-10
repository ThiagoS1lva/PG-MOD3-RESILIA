import { Navbar } from '../layout/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { InputGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bebida from '../../img/bebidaPub.jpg'
import comida from '../../img/comidaPub.jpg'
import pub from '../../img/pub.jpg'
import Footer from '../layout/Footer'

import styles from './Sobre.module.css'



function Sobre() {
   


        return (
            <>
                <Navbar />
                <Container className={styles.container_sobre}>
                    <Row className={styles.row_sobre}>
                        <Col>
                            <h2 style={{fontFamily: 'Raleway'}}>Bem-vindos ao nosso pub!</h2>
                            <p style={{fontFamily: 'Poppins'}}>Este é o lugar perfeito para aqueles que procuram uma experiência única em um ambiente acolhedor. Nosso pub tem uma história de 27 anos e se tornou um ponto de encontro para pessoas de todas as idades e origens. Com paredes de tijolos expostos e mesas de madeira desgastadas pelo tempo, nosso pub tem um charme especial que torna a sua visita ainda mais agradável.</p>
                        </Col>
                        <Col>
                            <img src={pub} alt="" width='100%' />
                        </Col>
                    </Row>

                    <Row className={styles.row_sobre}>
                        <Col>
                            <img src={comida} alt="" width='100%' />
                        </Col>
                        <Col>
                            <h2 style={{fontFamily: 'Raleway'}}>Uma grande variedade de pratos de diferentes países</h2>
                            <p style={{fontFamily: 'Poppins'}}>Quando se trata de comida, temos uma seleção de pratos de diferentes países preparados por nossos talentosos chefs. De tacos mexicanos a sushi japonês, temos algo para todos os gostos. Além disso, temos opções vegetarianas e veganas, bem como sobremesas deliciosas para completar a sua refeição. (Opção vegana disponivel apenas no local)</p>
                        </Col>
                    </Row>

                    <Row className={styles.row_sobre}>
                        <Col>
                            <h2 style={{fontFamily: 'Raleway'}}>Um bar com uma grande variedade de bebidas</h2>
                            <p style={{fontFamily: 'Poppins'}}>
                                Além da nossa deliciosa comida, nosso bar também oferece uma grande variedade de bebidas, incluindo cervejas importadas e nacionais, vinhos e coquetéis. Nossos bartenders experientes estão sempre prontos para preparar uma bebida deliciosa para você. Venha nos visitar e experimente a nossa seleção de bebidas e pratos internacionais. Estamos ansiosos para recebê-lo em nosso pub!
                            </p>
                        </Col>
                        <Col>
                            <img src={bebida} alt="" width='100%' />
                        </Col>
                    </Row>
                </Container>

                <Card className={styles.card} style={{backgroundColor:'#004F52'}}>
                    <Card.Title  className={styles.card_title} >Contate-nos</Card.Title>
                </Card>
                <Container fluid="sm">
                    <Form.Label className='mt-5'>Nome de usuário</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <Form.Control
                            placeholder="Nome de usuário"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                            <Form.Text className="text-muted">
                                Digite seu email.
                            </Form.Text>
                        </Form.Group>

                        <InputGroup>
                            <Form.Control as="textarea" aria-label="With textarea" placeholder="Digite sua mensagem" />
                        </InputGroup>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Salvar senha?" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </Container>
                <Footer/>
            </>

        )
    }

export default Sobre