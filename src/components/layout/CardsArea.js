import styles from "./CardsArea.module.css"

export default function CardsArea(props) {
    return <div className={styles.cardContainer}>{props.children}</div>
}