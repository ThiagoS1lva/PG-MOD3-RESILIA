import styles from './Select.module.css'

type Select = {
    text: string
    value: string
    name: string
    options : any
    handleOnChange : any
}

function Select({ text, name,options, value, handleOnChange}: Select) {

    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
        <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
            <option>Selecione uma opção</option>
            {options.map((option) => (
                <option value={option.id} key={option.id}>{option.name}</option>
            ))}
        </select>
        </div>
    )

}

export default Select