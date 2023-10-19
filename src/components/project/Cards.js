import { Link } from "react-router-dom"
import styles from "./Cards.module.css"
import { BsPencil, BsFillTrashFill } from "react-icons/bs"
import Numeral from "../layout/Numeral"

export default function Cards({id, name, budget, category, handleRemove}){
  
  const remove = (e) => {
    e.preventDefault()
    handleRemove(id)
  }
  
  return(
        <div className={styles.projectCard}>
          <h4>{name}</h4>
          <p>
            <span>Orçamento: R$</span><Numeral format="0,000.00">{budget}</Numeral>
          </p>
          <p className={styles.categoryText}>
            <span className={`${styles[category.toLowerCase()]}`}></span>{category}
          </p>
          <div className={styles.cardActions}>
            <Link to={`/project/${id}`}>
                <BsPencil/>Editar     
            </Link>
            <button onClick={remove}>
                <BsFillTrashFill/>Excluir
            </button>
          </div>
        </div>
       
    )
}