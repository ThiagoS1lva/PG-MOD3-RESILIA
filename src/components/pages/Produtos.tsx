import { Navbar } from "../layout/Navbar"
import Footer from "../layout/Footer"
import Message from "../layout/Message"
import { useLocation } from 'react-router-dom'
import styles from './Produtos.module.css'
import LinkButton from "../layout/LinkButton"
import ProjectCard from "../project/ProjectCard"
import { useState, useEffect } from 'react'
import { Container } from "react-bootstrap"

function Produtos() {


    const [projects, setProjects] = useState([])


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






    return (
        <>
            <Navbar />
            <div className={styles.project_container}>
                <div className={styles.title_container}>
                    <h1>Meus Produtos</h1>
                    <LinkButton to='/novo' text='Novo Produto' />
                </div>
                {message && <Message type="success" msg={message} />}


                <Container className={styles.Container_produto}>
                    {projects.length > 0 &&
                        projects.map((projects) => (
                            <ProjectCard name={projects.name} />
                        ))
                    }
                </Container>
            </div>
            <Footer />
        </>
    )
}

export default Produtos