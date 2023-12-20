import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { useState, useEffect, useRef } from "react"
import styles from "./Navbar.module.css"
import logo from "../img/logo.svg"

export default function Navbar(){
    
    const [hideNavbar, setHideNavbar] = useState("false")

    const toggleClasse = () => {
      setHideNavbar(!hideNavbar)
    }
  
    const handleLinkClick = () =>{
      setHideNavbar(true)
    }
  
    const handleClickOutside = (e) =>{
      const navbarRef = navbarContainerRef.current
      if (navbarRef && !navbarRef.contains(e.target)) {
          setHideNavbar(true)
      }
    }
  
    useEffect(()=> {
      document.addEventListener("click", handleClickOutside)
      return () => {
          document.removeEventListener("click", handleClickOutside)
      }
    }, [])
  
    const navbarContainerRef = useRef(null)

    return (
        <div className={styles.navbar}>
            <section>
                <Link to="/" onClick={handleLinkClick}>
                    <img className={styles.logoNavbar} src={logo} alt="logo Finance Project" />
                </Link>
                <button onClick={toggleClasse} className={styles.menuBtn}>
                    <FaBars/>
                </button>
            </section>   
            <nav>
                <ul className={styles.list}>
                    <li className={styles.item} onClick={handleLinkClick}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item} onClick={handleLinkClick}>
                        <Link to="/Company">Empresa</Link>
                    </li>
                    <li className={styles.item} onClick={handleLinkClick}>
                        <Link to="/Projects">Projetos</Link>
                    </li>
                    <li className={styles.item} onClick={handleLinkClick}>
                        <Link to="/Contact">Contato</Link>
                    </li>                
                </ul>
            </nav>
        </div>
    )
}