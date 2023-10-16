import styles from "./FormBtn.module.css"

export default function FormBtn({ type, value}){
    return(
        <div>
            <input
                type={type}
                value={value}
            />
        </div>
    )
}