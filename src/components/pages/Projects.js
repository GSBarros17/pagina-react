import { useLocation } from "react-router-dom"
import styles from "./Projects.module.css"
import Message from "../layout/Message"


export default function Projects(){

    const location = useLocation()
    let text = ''
    if (location.state){
        text = location.state.text
    }

    return (
        <div>
            <h1>Meus Projetos</h1>
            {text && <Message type="success" textMsg={text} />}     
        </div>
    )
}