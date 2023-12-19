import styles from "./Home.module.css"
import ImgBanner from "../../img/img1.png"
import LinkButton from "../../layout/LinkButton"

export default function Home(){
    return (
        <section className={styles.containerHome}>
            <h1>Bem vindo ao <span>FINANCE</span></h1>
            <p>Com a Finance, você consegue criar e gerir seu projetos na área de técnologia.</p>
            <p>Experimente, crie seu projeto agora mesmo!</p>
            <LinkButton to="/NewProjects" text="Criar projeto" />
            <img className={styles.imgHome} src={ImgBanner} alt="banner principal finance" />
        </section>
    )
}