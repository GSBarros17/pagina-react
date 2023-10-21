import styles from "./SectionContainer.module.css"

export default function SectionContainer({img , altText, text1, text2}){
    return (
        <div className={styles.containerSection}>
            <div>
                <p>{text1}</p>
                <p>{text2}</p>
            </div>
            <div>
                <img src={img} alt={altText} />
            </div>
        </div>   
    )
}