import Numeral from "../layout/Numeral"
import { BsFillTrashFill } from "react-icons/bs"
import styles from "../project/Cards.module.css"



export default function ServiceCard({id, name, cost, handleRemove, description}){
    
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
      }
    
    return(
        <div className={styles.projectCard}>
          <div className={styles.tittleCard}>
            <h4>{name}</h4>
          </div>
          <p>
            <span>Custo do Serviço: R$</span><Numeral format="0,000.00">{cost}</Numeral>
          </p>
          <p>{description}</p>
          <div className={styles.cardActions}>
            <button onClick={remove}>
                <BsFillTrashFill/>Excluir
            </button>
          </div>
        </div>
    )
}