import styles from "./Company.module.css"
import img2 from "../img/img2.png"
import LinkButton from "../layout/LinkButton"
import SectionContainer from "../layout/SectionContainer"

export default function Company(){
    return (
        <div className={styles.companyContainer}>
            <div>
                <h1>Sobre a <span>FINANCE</span></h1>
            </div>
            <LinkButton to="/NewProjects" text="Criar projeto"/>
            <SectionContainer text1="Finance nasceu de um projeto criado em paralelo a um curso de React do prof.
            Matheus Battisti." text2="A Finance é um site de gestão de processos da área de TI
            em que o usuário cadastra o seu projeto e acompanha o quanto já utilizou do
            orçamento em serviços." 
            img={img2} altText={"banner2 Finance"} />
        </div>   
    )
}