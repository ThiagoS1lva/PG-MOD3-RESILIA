import styles from './Input.module.css'

type Input = {
    type: string
    text: string
    placeholder: string
    value: string
    name:string
    handleOnChange : any
}

function Input ({type, text, name, placeholder, value, handleOnChange}:Input) {

    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input type={type} name={name} id={name} placeholder={placeholder} value={value} onChange={handleOnChange}/>
        </div>
    )

}

export default Input