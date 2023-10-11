import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import Container from "./Container"
import logo from "../img/logo.svg"

export default function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img className={styles.logoNavbar} src={logo} alt="logo Finance Project" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Company">Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Projects">Projetos</Link>
                    </li>   
                    <li className={styles.item}>
                        <Link to="/NewProjects">Novo Projeto</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Contact">Contato</Link>
                    </li>                
                </ul>
            </Container>
        </nav>
    )
}