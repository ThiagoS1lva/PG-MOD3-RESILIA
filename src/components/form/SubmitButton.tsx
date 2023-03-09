import styles from './SubmitButton.module.css'

type Select = {
    text: string

}

function SubmitButton({ text }: Select) {

    return (
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )

}

export default SubmitButton