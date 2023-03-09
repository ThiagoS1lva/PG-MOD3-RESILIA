import style from './Home.module.css'
import imagem from '../../img/brinde.jpg'
import { Navbar } from './Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider_M from './Slider_M';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Chef from '../../img/chef.png'
import Button from 'react-bootstrap/Button';
import Footer from './Footer';


function Home() {

    return (
        <>
            <Navbar />
            <figure className={style.teste}>
                <img src={imagem} alt="" width='100%' />
                <figcaption>O MUNDO É O LAR<p>DOS CORAJOSOS!</p></figcaption>
            </figure>
            <Container fluid="">
                <Row>
                    <Col className={style.texto}>
                        &nbsp;&nbsp;&nbsp;&nbsp;Seja bem-vindo(a) ao <b>Gira Mundo</b>! Com mais de 27 anos de existência, somos referência no meio. Nosso menu é uma verdadeira viagem gastronômica pelos quatro cantos do mundo. Com pratos inspirados em países como Estados Unidos, Itália, México, Japão, entre outros. Além disso, contamos com uma vasta seleção de bebidas, incluindo cervejas artesanais, vinhos importados e coquetéis exclusivos. Com um ambiente descontraído e acolhedor, nosso pub é o lugar ideal para se reunir com amigos e familiares, seja para um happy hour, um jantar descontraído ou para celebrar ocasiões especiais.

                        Nossa equipe é altamente treinada e está sempre pronta para oferecer um atendimento personalizado e garantir que sua experiência conosco seja única e inesquecível.
                    </Col>

                </Row>
            </Container>
            <Card style={{ width: '170px', left: '42%', backgroundColor: '#004F52', textAlign: 'center', marginTop: '2%' }}>
                <Card.Title style={{ fontSize: '40px', color: 'white', fontFamily: 'Poppins' }} >Músicas</Card.Title>
            </Card>
            <Slider_M />
            <Container style={{ width: '70%' }} >
                <p className={style.musicaTexto}>
                    &nbsp;&nbsp;&nbsp;&nbsp;Se você é um amante da música e adora um bom pub, temos uma excelente notícia para você! Nosso pub contém uma programação musical variada e de alta qualidade. Aqui, a música é uma das grandes atrações, e nosso objetivo é proporcionar aos nossos clientes uma experiência única, com o melhor da música ao vivo. <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;O nosso pub é o lugar perfeito para quem busca um ambiente animado, descontraído e com muita música boa. Então, não perca mais tempo e venha nos visitar! Nós garantimos que você não vai se arrepender e que a sua noite será inesquecível.
                </p>


                <Container style={{ textAlign: 'center' }}>
                    <Link to="/Musicas"><Button style={{fontFamily: 'Poppins'}} variant="info">VEJA MAIS</Button></Link>
                </Container>

            </Container>

            <img style={{ width: '100%', marginTop: '2%', marginBottom: '2%' }} src={Chef} />
            <Container style={{ width: '70%' }}>
                <p className={style.musicaTexto}>
                    &nbsp;&nbsp;&nbsp;&nbsp;Os nossos chefs são verdadeiros artistas culinários, apaixonados pelo que fazem e sempre em busca da excelência. Eles têm anos de experiência e conhecimento em diversas áreas da gastronomia. Além disso, trabalhamos com ingredientes de alta qualidade e frescos, garantindo a máxima satisfação de nossos clientes em cada refeição. Você vai se surpreender com a variedade e qualidade do nosso cardápio, preparado com muito carinho e dedicação pelos nossos chefs.<br></br>
                </p>

            </Container>
            <Container style={{ textAlign: 'center', marginBottom: '5%' }}>
                <Link to="/Cardapio"><Button style={{fontFamily: 'Poppins'}} variant="info">VEJA MAIS</Button></Link>
            </Container>

            <Footer />




        </>

    )
}

export default Home

