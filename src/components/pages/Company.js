import {Link} from "react-router-dom"
import styles from "./Company.module.css"
import LinkButton from "../layout/LinkButton"

export default function Company(){
    return (
        <div>
            <div>
                <h1>Historia da Finance</h1>
            </div>
            <LinkButton to="/NewProjects" text="Criar projeto"/>
        </div>
    )
}