import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../img/logoSvg.svg'
import style from './Navbar.module.css'
import { Button, Card } from 'react-bootstrap'
import { useShoppingCart } from '../../context/ShoppingCartContex';
import Home from './Home';
import { Carrinho } from '../pages/Carrinho';
import Sobre from '../pages/Sobre'
import Slider_M from './Slider_M'
import React, { useRef } from 'react';


export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()
    const sobre = useRef(null);
    const musica = useRef(null);
    const cardapio = useRef(null);

    const handleSobre = () => { window.scrollTo({ top: sobre.current.offsetTop - 113, behavior: "smooth" }) }
    const handleMusica = () => { window.scrollTo({ top: musica.current.offsetTop - 113, behavior: "smooth" }) }
    const handleCardapio = () => { window.scrollTo({ top: cardapio.current.offsetTop - 113, behavior: "smooth" }) }

    return (
        <>
            <ul className={style.ul}>
                <img src={logo} width="85px" />
                <li className={style.li}><a className={style.a} href="#" data-title="home">Home</a></li>
                <li className={style.li}><a className={style.a} onClick={handleSobre} data-title="Sobre">Sobre</a></li>
                <li className={style.li}><a className={style.a} onClick={handleMusica} data-title="Músicas">Músicas</a></li>
                <li className={style.li}><a className={style.a} onClick={handleCardapio} data-title="Cardapio">Cardápio</a></li>
                <Button onClick={openCart} style={{ width: '3rem', height: "3rem", position: "relative" }} variant="outline-primary" className='rounded-circle'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        fill="currentColor">
                        <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                    </svg>
                    <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center' style={{ color: 'white', width: "1.5em", height: "1.5rem", position: "absolute", bottom: 0, right: 0, transform: "translate(25%, 25%)", }}>
                        {cartQuantity}
                    </div>
                </Button>
            </ul>

            <Home />

            <Card ref={sobre} style={{ width: '115px', left: '2%', backgroundColor: '#004F52' }}>
                <Card.Title style={{ fontSize: '40px', color: 'white' }} >Sobre</Card.Title>
            </Card>
            <Sobre />

            <Card ref={musica} style={{ width: '170px', left: '2%', backgroundColor: '#004F52' }}>
                <Card.Title style={{ fontSize: '40px', color: 'white' }} >Músicas</Card.Title>
            </Card>
            <Slider_M />


            <Card ref={cardapio} style={{ width: '170px', left: '2%', backgroundColor: '#004F52' }}>
                <Card.Title style={{ fontSize: '40px', color: 'white' }} >Cardápio</Card.Title>
            </Card>

            <Carrinho />
        </>
    );
}
