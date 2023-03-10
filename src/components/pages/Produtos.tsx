import { Navbar } from "../layout/Navbar"
import Footer from "../layout/Footer"
import Message from "../layout/Message"
import { useLocation } from 'react-router-dom'
import styles from './Produtos.module.css'
import LinkButton from "../layout/LinkButton"
import ProjectCard from "../project/ProjectCard"
import { useState, useEffect } from 'react'
import { Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';


function Produtos() {


    const [projects, setProjects] = useState([])
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }


    useEffect(() => {
        fetch("http://localhost:5000/novosProdutos", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
            .then(data => {
                console.log(data)
                setProjects(data)
            })
            .catch((err) => console.log(err))

    }, [])


    function removeProject(id) {
        fetch(`http://localhost:5000/novosProdutos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            },
        }).then(resp => resp.json())
        .then(() => {
            setProjects(projects.filter((project) => project.id !== id  ))
            setProjectMessage('Projeto removido com sucesso!')
        })
        .catch((err) => console.log(err))
    }



    return (
        <>
            <Navbar />
            <div className={styles.project_container}>
                <div className={styles.title_container}>
                    <h1>Meus Produtos</h1>
                    <LinkButton to='/novo' text='Novo Produto' />
                </div>
                {message && <Message type="success" msg={message} />}
                {projectMessage && <Message type="success" msg={projectMessage} />}


                <Container className={styles.Container_produto}>
                    {projects.length > 0 &&
                        projects.map((project) => (
                            <ProjectCard
                                id={project.id}
                                name={project.name}
                                preço={project.preço}
                                category={project.category.name}
                                key={project.id}
                                handleRemove={removeProject} />
                        ))
                    }
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default Produtos