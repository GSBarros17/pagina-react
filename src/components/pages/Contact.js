import styles from "./Contact.module.css"
import Devimg from "../img/devimg.jpg"

export default function Contact(){
    return (
        <div className={styles.containerContact}>
            <h1>Contatos</h1>
            <div className={styles.sectionContact}>
                <img src={Devimg} alt="imagem do desenvolvedor"/>
                <div className={styles.sectionTexts}>
                    <h2>Olá, me chamo <span>Guilherme Barros.</span></h2>
                    <p>Sou o responsável por desenvolver esta página!</p>
                    <h3>Caso você tenha interesse no meu trabalho entre em contato comigo pelas minhas redes sociais</h3>
                </div> 
            </div>
        </div>
    )

}