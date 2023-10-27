import { useNavigate } from "react-router-dom"
import styles from "./NewProjects.module.css"
import ProjectForm from "../project/ProjectForm"

export default function NewProjects(){
    
    const navigate = useNavigate()

    function createPost(project){
        project.cost = 0
        project.service = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                navigate('/projects', {state: {text: 'Projeto criado com sucesso!'}})
            })
            .catch((err) => console.log(err))
    }
    
    return (
        <div className={styles.newprojectContainer}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto e gerencie-o</p>
            <ProjectForm handleSubmit={createPost} btn="Criar projeto"/>
        </div>
    )
}