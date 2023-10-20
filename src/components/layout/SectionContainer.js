export default function SectionContainer({img , altText, text}){
    return (
        <div>
            <div>
                <p>{text}</p>
            </div>
            <div>
                <img src={img} alt={altText} />
            </div>
        </div>   
    )
}