import style from './Home.module.css'
import imagem from '../../img/brinde.jpg'

function Home() {
    return (
        <>
            <figure className={style.teste}>
                <img src={imagem} alt="" width='100%' />
                <figcaption>Pode entrar que a diversão está garantida.</figcaption>
                <button className={style.button} role="button">VEJA NOSSO CARDÁPIO!</button>
            </figure>
        </>
    )
}

export default Home

