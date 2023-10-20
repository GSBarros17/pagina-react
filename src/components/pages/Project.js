import styles from "./Project.module.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Loading from "../layout/Loading"

export default function Project(){
    
    const {id} = useParams()
    const [project, setProject] = useState()
    const [showProjectForm, setShowProjectForm] = useState(false)
    

    useEffect(()=> {
        setTimeout(()=>{
            fetch(`http://localhost:5000/projects/${id}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
            }
            })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
            })
            .catch((err) => console.log(err))
        }, 1000)
    }, [id])

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }
    
    
    return(
        <>
            {project && (project.Name_project) ? 
            <div className={styles.projectDetails}>
                <div className={styles.projectContainer}>
                    <div className={styles.detailsContainer}>
                        <h1>Projeto: {project.Name_project}</h1>
                        <button className={styles.btn} onClick={toggleProjectForm}>
                            {!showProjectForm ? "Editar projeto" : "Fechar"}
                        </button>
                        {!showProjectForm ? (
                            <div className={styles.projectInfo}>
                                <p>
                                    <span>Categoria: </span>{project.category.name}
                                </p>
                                <p>
                                    <span>Total de Orçamento: </span>{project.Value_project}
                                </p>
                                <p>
                                    <span>Total utilizado: </span>{project.cost}
                                </p>
                            </div>
                        ) : (
                            <div className={styles.projectInfo}>
                                <p>Detalhe do projeto</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            : (<Loading />)}
        </>
    
    )     
}