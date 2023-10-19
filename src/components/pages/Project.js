import styles from "./Project.module.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Project(){
    
    const {id} = useParams()
    const [project, setProject] = useState()

    useEffect(()=> {
        fetch(`http://localhost:5000/projects/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data)
        })
        .catch((err) => console.log(err))
    }, [id])
    
    
    return(
        <div>
        {project &&(
             <p>{project.Name_project}</p>
         )}
    </div>
    )
}