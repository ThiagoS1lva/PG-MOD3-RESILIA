import { Navbar } from "../layout/Navbar"
import styles from './NewProjects.module.css'
import ProjectForm from "../project/ProjectForm"
import { useNavigate } from 'react-router-dom'
import Footer from "../layout/Footer"
import Loading from '../layout/Loading';
import { useState, useEffect } from 'react'

function NewProjects() {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        //Simula tempo de carregamento
        setTimeout(() => setLoading(false), 500);
    }, []);

    const navigate = useNavigate()
    function createPost(project) {
        project.cost = 0
        project.services = []
        fetch("http://localhost:5000/novosProdutos", {
            method: 'POST',
            headers: {
                'Content-type': 'application/Json',
            },
            body: JSON.stringify(project),
        }).then(((resp) => resp.json()))
            .then((data) => {
                console.log(data)
                //redirect
                navigate('/Produtos', { state: { message: 'Produto criado com sucesso' } });
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Navbar />
            {loading ? <Loading /> :
                <>
                    <div className={styles.newproject_container}>
                        <h1>Adicionar</h1>
                        <p>Crie seu produto para depois adiciona-lo</p>
                        <ProjectForm handleSubmit={createPost} btnText="Criar Produto" />
                    </div>
                    <Footer />
                </>
            }
        </>
    )
}
export default NewProjects


