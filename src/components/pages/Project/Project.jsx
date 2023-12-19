import styles from "./Project.module.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { v4 as uuidv4} from "uuid"
import { BsFillArrowLeftSquareFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import Loading from "../../layout/Loading"
import ProjectForm from "../../project/ProjectForm"
import Message from "../../layout/Message"
import CardsArea from "../../layout/CardsArea"
import ServiceCard from "../../service/ServiceCard"
import ServiceForm from "../../service/ServiceForm"
import Numeral from "../../layout/Numeral"

export default function Project(){
    
    const {id} = useParams()
    const [project, setProject] = useState([])
    const [service, setService] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()
    

    useEffect(()=> {
        setTimeout(()=>{
            fetch(`http://localhost:5000/projects/${id}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
            }
            })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
                setService(data.service)
            })
            .catch((err) => console.log(err))
        }, 1000)
    }, [id])

    function createService(project){
        setMessage('')
        const lastService = project.service[project.service.length - 1]

        lastService.id = uuidv4()
        
        const lastServiceCost = lastService.cost
        
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)
        
        if(newCost > parseFloat(project.Value_project)){
            setMessage('Orçamento ultrapassado, verifique o valor do serviço!')
            setType('error')
            project.service.pop()
            return false
        }

        project.cost = newCost
        
        fetch(`http://localhost:5000/projects/${project.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
                setService(data.service)
                setShowServiceForm(false)
                setMessage("Serviço adicionado com sucesso!")
                setType("success")  
            })
            .catch((err) => console.log(err))

    }

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)
    }

    function editPost(project){
        setMessage('')
        if(project.Value_project < project.cost){
            setMessage("O orçamento do projeto não pode ser menor que o custo!")
            setType("error")
            return(false)
        }

        fetch(`http://localhost:5000/projects/${project.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
            })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
                setShowProjectForm(false)
                setMessage("Projeto alterado com sucesso!")
                setType("success")   
            })
            .catch((err) => console.log(err))    
    }

    function removeCard(id, cost){
        setMessage('')
        const serviceUpdated = project.service.filter(
            (service) => service.id !== id,    
        )
       
        const projectUpdated = project
        
        projectUpdated.service = serviceUpdated
        
        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)
        
        fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
            method:'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(projectUpdated),
            })
            .then((resp) => resp.json())
            .then(() => {
                setProject(projectUpdated)
                setService(serviceUpdated)
                setMessage('Serviço deletado com sucesso!')
                setType('success')
            })
            .catch((err) => console.log(err))
    }
    
    return(
        <div className={styles.pagecontainer}>
            <div className={styles.returnBtn}>
                <Link to="/projects">
                    <BsFillArrowLeftSquareFill/>
                </Link>
            </div>
            <div>
                {project && (project.Name_project) ? 
                <div className={styles.projectDetails}>
                    <div className={styles.projectContainer}>
                    {message && <Message type={type} textMsg={message}/>}
                        <div className={styles.detailsContainer}>
                            <h1>Projeto: {project.Name_project}</h1>
                            <button className={styles.btn} onClick={toggleProjectForm}>
                                {!showProjectForm ? "Editar projeto" : "Fechar"}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.projectInfo}>
                                    <p>
                                        <span>Categoria: </span>{project.category.name}
                                    </p>
                                    <p>
                                        <span>Total de Orçamento: </span>R$ <Numeral format="0,000.00">{project.Value_project}</Numeral>
                                    </p>
                                    <p>
                                        <span>Total utilizado: </span>R$ <Numeral format="0,000.00">{project.cost}</Numeral>
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.projectInfo}>
                                    <p>Detalhe do projeto</p>
                                    <ProjectForm 
                                        handleSubmit={editPost}
                                        projectData={project}
                                        btn="Concluir edição"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={styles.serviceFormContainer}>
                        <h2>Adicione serviços:</h2>
                        <button className={styles.btn} onClick={toggleServiceForm}>
                            {!showServiceForm ? "Criar serviços" : "Fechar"}
                        </button>
                        <div className={styles.projectInfo}>
                            {showServiceForm && 
                            <ServiceForm 
                                handleSubmit={createService}
                                btn="Adicionar serviço"
                                projectData={project}
                            />}
                        </div>
                    </div>
                    <h2>Serviços</h2>
                    <CardsArea>
                        {service.length > 0 &&
                            service.map((service) => (
                            <ServiceCard
                                id={service.id}
                                name={service.Name_service}
                                cost={service.cost}
                                description={service.Description}
                                key={service.id}
                                handleRemove={removeCard}
                            />)
                        )}
                        {service.length === 0 && <p>Não há serviços cadastrados</p>
                        }
                    </CardsArea>
                </div>
                : (<Loading />)}
            </div>  
        </div>
    )     
}