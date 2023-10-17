import styles from "./Message.module.css"
import { useState, useEffect } from "react"

export default function Message({type, textMsg}){
    
    const[visible, setViseble] = useState(false)

    useEffect(() => {
        if(!textMsg){
            setViseble(false)
            return
        }

        setViseble(true)

        const timer = setTimeout(() => {
         setViseble(false)},
         3000 )
        
        return () => clearTimeout(timer)
    }, [textMsg])
    
    return (
        <>
            {visible && (
                <div className={`${styles.message} ${styles[type]}`}>{textMsg}</div>
            )}
        </>
        
    )
}