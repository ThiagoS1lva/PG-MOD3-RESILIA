import styles from './ProjectCard.module.css'
import { BsPencil, BsFillTrashFill} from 'react-icons/bs'


type ProjectCard = {
    id : number
    name : string
    preço : number
    category : any
    handleRemove : any
}


function ProjectCard({id, name, preço, category, handleRemove}: ProjectCard) {
    return (
        <p>{name}</p>
    )
}

export default ProjectCard