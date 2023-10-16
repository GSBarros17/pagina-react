import  styles  from "./Home.module.css"
import { Link } from "react-router-dom"
import ImgBanner from "../img/img1.svg"

export default function Home(){
    return (
        <section className={styles.containerHome}>
            <h1>Bem vindo ao <span>FINANCE</span>.</h1>
            <p>Gerencie seus projetos com apenas um clique!</p>
            <a href="/">criar projeto</a>
            <img className={styles.imgHome} src={ImgBanner} alt="banner principal finance" />
        </section>
    )
}