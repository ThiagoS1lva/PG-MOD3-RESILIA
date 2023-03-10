import { Link } from "react-router-dom";
import styles from './LinkButton.module.css'



type LinkButton = {
    to : string
    text : string
}

function LinkButton ({to, text}:LinkButton) {
    return (
        <Link className={styles.button} to={to}>
            {text}
        </Link>
    )
}

export default LinkButton