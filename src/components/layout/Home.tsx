import style from './Home.module.css'
import imagem from '../../img/brinde.jpg'
import { animateScroll as scroll } from 'react-scroll';




function Home() {
    const scrollToSection = () => {
        scroll.scrollTo(1300);
    }


    return (
        <>
            <figure className={style.teste}>
                <img src={imagem} alt="" width='100%' />
                <figcaption>Pode entrar que a diversão está garantida.</figcaption>
                <button onClick={scrollToSection} className={style.button} role="button">VEJA NOSSO CARDÁPIO!</button>
            </figure>
        </>
    )
}

export default Home

