import styles from "./NewProjects.module.css"
import ProjectForm from "../project/ProjectForm"

export default function NewProjects(){
    return (
        <div className={styles.newprojectContainer}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto e gerencie-o</p>
            <ProjectForm />
        </div>
    )
}