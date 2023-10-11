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
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Company">Empresa</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contato</Link>
                    </li>
                    <li>
                        <Link to="/NewProject">Novo Projeto</Link>
                    </li>                  
                </ul>
            </Container>
        </nav>
    )
}