import styles from "./Cards.module.css"
import { BsPencil, BsFillTrashFill } from "react-icons/bs"

export default function Cards({id, name, budget, category, handleRemove}){
    return(
        <div>
            <div>
                <h4>{name}</h4>
            </div>
            <div>
                <p>{budget}</p>
            </div>
        </div>
       
    )
}