import styles from "./FormBtn.module.css"

export default function FormBtn({ value }){
    return(
        <div className={styles.formBtn}>
            <input
                type="submit"
                value={value}
            />
        </div>
    )
}