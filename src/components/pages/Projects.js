import { useState, useEffect} from "react"
import { useLocation } from "react-router-dom"
import styles from "./Projects.module.css"
import Message from "../layout/Message"
import Loading from "../layout/Loading"
import LinkButton from "../layout/LinkButton"
import Cards from "../project/Cards"
import CardsArea from "../layout/CardsArea"


export default function Projects(){

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [removeMessage, setRemoveMessage] = useState("")

    const location = useLocation()
    let text = ''
    if (location.state){
        text = location.state.text
    }

    useEffect(()=> {
        setTimeout(() => {
            fetch('http://localhost:5000/projects', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then((resp) => resp.json())
            .then((data) => {
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))
        }, 1000)
    }, [])

    function removeCard(id){
        setRemoveMessage('')
        fetch(`http://localhost:5000/projects/${id}`, {
            method:'DELETE',
            headers: {
                'Content-type': 'application/json',
            }
        })
        .then((resp) => resp.json())
        .then(() => {
            setProjects(projects.filter((project) => project.id !== id))
            setRemoveMessage("Projeto excluido com sucesso!")  
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={styles.projectsContainer}>
            <div className={styles.tittleProjects}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/NewProjects" text="Criar projeto" />
            </div>
            {text && <Message type="success" textMsg={text} />}
            {removeMessage && <Message type="success" textMsg={removeMessage} />}   
            <CardsArea>
                {projects.length > 0 &&
                    projects.map((project) => 
                    <Cards 
                        id={project.id}
                        name={project.Name_project}
                        budget={project.Value_project}
                        cost={project.cost}
                        category={project.category.name}
                        key={project.id}
                        handleRemove={removeCard}
                    />
                )}
            </CardsArea>
            {!removeLoading && <Loading/>}
            {removeLoading && projects.length === 0 && (
                <p className={styles.noneCard}>Não há projetos cadastrados!</p>
            )}
        </div>  
    )
}