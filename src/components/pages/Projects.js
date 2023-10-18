import { useState, useEffect} from "react"
import { useLocation } from "react-router-dom"
import styles from "./Projects.module.css"
import Message from "../layout/Message"
import LinkButton from "../layout/LinkButton"
import Cards from "../project/Cards"


export default function Projects(){

    const [projects, setProjects] = useState([])

    const location = useLocation()
    let text = ''
    if (location.state){
        text = location.state.text
    }

    useEffect(()=> {
        fetch('http://localhost:5000/projects', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((resp) => resp.json())
        .then((data) => {
            setProjects(data)
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <div className={styles.projectsContainer}>
            <div className={styles.tittleProjects}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/NewProjects" text="Criar projeto" />
            </div>
            {text && <Message type="success" textMsg={text} />}     
            <div className={styles.cardContainer}>
                {projects.length > 0 &&
                    projects.map((project) => 
                    <Cards 
                        name={project.Name_project}
                        budget={project.Value_project}

                    />
                )}
            </div>
        </div>  
    )
}