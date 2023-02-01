import styles from './Frase.module.css'

function Pessoa ({nome, idade, profissao, foto}) {
    return(<div>
        <img src={foto} alt={nome} />
        <h2 className={styles.fraseContainer} >Nome: {nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>
    </div>
    )
}
export default Pessoa