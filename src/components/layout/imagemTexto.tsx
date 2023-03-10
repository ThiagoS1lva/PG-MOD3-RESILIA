import style from './Home.module.css'
import imagem from '../../img/brinde.jpg'


function imagemTexto() {
    return (
        <>
            <figure className={style.teste}>
                <img src={imagem} alt="" width='100%' />
                <figcaption>Pode entrar que a diversão está garantida.</figcaption>
            </figure>
        </>
    )
}

export default imagemTexto

