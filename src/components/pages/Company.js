import {Link} from "react-router-dom"
import styles from "./Company.module.css"
import img2 from "../img/img2.png"
import LinkButton from "../layout/LinkButton"
import SectionContainer from "../layout/SectionContainer"

export default function Company(){
    return (
        <div>
            <div>
                <h1>Historia da Finance</h1>
            </div>
            <LinkButton to="/NewProjects" text="Criar projeto"/>
            <SectionContainer text="Esse é um texte muito legal de se fazer, você não saber a 
            minha felicidade de estar aqui, contanto um pouco da minha história, trabalhei 7 
            anos em um banco, mais em um belo dia me dei conta de que aquilo não era para mim
            então, resolvi mudar todo o rumo da minha vida e comecei a estudar programação
            e sai do banco para tentar seguir este novo desafio, e estou aqui crianco este
            projeto, a Finance e um projeto criado em paralelo a um curso de React do prof.
            Matheus Battisti. A Finance é um site de gestão de processos da área de Ti
            em que o usuário cadastra o seu projeto e acompanha o quando já utilizou do
            orçamento em serviços e após o termino o projeto pode ser encerrado." 
            img={img2} altText={"banner2 Finance"} />
        </div>   
    )
}