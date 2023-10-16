import styles from "./Home.module.css"
import ImgBanner from "../img/img1.png"
import LinkButton from "../layout/LinkButton"

export default function Home(){
    return (
        <section className={styles.containerHome}>
            <h1>Bem vindo ao <span>FINANCE</span></h1>
            <p>Gerencie seus projetos com apenas um clique!</p>
            <LinkButton to="/NewProjects" text="Criar projeto" />
            <img className={styles.imgHome} src={ImgBanner} alt="banner principal finance" />
        </section>
    )
}