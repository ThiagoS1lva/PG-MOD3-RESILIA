import styles from './Produto.module.css'
import { Navbar } from '../layout/Navbar'
import Footer from '../layout/Footer'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import ProjectForm from '../project/ProjectForm'
import Message from '../layout/Message'


function Produto() {


    const { id } = useParams()

    const [project, setProject] = useState<any[]>([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()


    useEffect(() => {

        fetch(`http://localhost:5000/novosProdutos/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((resp) => resp.json())
            .then((data) => {
                setProject(data)
            })
            .catch(err => console.log)


    }, [id])

    function editPost(project) {
        //budget validation
        if (project.preço < project.cost) {
            setMessage('O Valor não pode ser menor que o preço do produto!')
            setType('error')
            return false
        }
        fetch(`http://localhost:5000/novosProdutos/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project),
        })
            .then(resp => resp.json())
            .then((data) => {

                setProject(data)
                setShowProjectForm(!showProjectForm)
                setMessage('Produto atualizado')
                setType('success')

            })
            .catch(err => console.log(err))


    }





    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }


    return (
        <>
            <Navbar />
            <div className={styles.project_details}>
                <Container className={styles.column}>
                    {message && <Message type={type} msg={message} />}


                    <div className={styles.details_Container}>
                        <h1>Produto: {project.name}</h1>
                        <button className={styles.button} onClick={toggleProjectForm}>
                            {!showProjectForm ? "Editar produto" : "Fechar"}
                        </button>
                        {!showProjectForm ? (
                            <div className={styles.project_info}>

                                <p>
                                    <span>Categoria: </span> {project.category?.name}
                                </p>
                                <p>
                                    <span>Preço: </span> R${project.preço}
                                </p>
                            </div>


                        ) : (
                            <div className={styles.project_info}>
                                <ProjectForm handleSubmit={editPost} btnText="Concluir edição" projectData={project} />
                            </div>
                        )}
                    </div>
                </Container>

            </div>
            <Footer />
        </>
    )
}

export default Produto