import styles from "./SectionContainer.module.css"

export default function SectionContainer({img , altText, text}){
    return (
        <div className={styles.containerSection}>
            <div>
                <p>{text}</p>
            </div>
            <div>
                <img src={img} alt={altText} />
            </div>
        </div>   
    )
}