import { useLocation } from "react-router-dom"
import styles from "./Projects.module.css"
import Message from "../layout/Message"
import LinkButton from "../layout/LinkButton"
import Container from "../layout/Container"


export default function Projects(){

    const location = useLocation()
    let text = ''
    if (location.state){
        text = location.state.text
    }

    return (
        <div className={styles.projectsContainer}>
            <div className={styles.tittleProjects}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/NewProjects" text="Criar projeto" />
            </div>
            {text && <Message type="success" textMsg={text} />}     
            <Container customClass="start">
                <p>...projetos</p>
            </Container>
        </div>  
    )
}