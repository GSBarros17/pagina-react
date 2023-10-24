import { useState } from "react"
import Input from "../form/Input"
import FormBtn from "../form/FormBtn"

export default function ServiceForm({handleSubmit, projectData, btn}){
    const [service, setService] = useState({})
     

    const submit = (e) => {
        e.preventDefault()
        projectData.service.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e){
        setService({...service, [e.target.name]: e.target.value})
    }
    
    
    return(
        <div>
           <form onSubmit={submit}>
              <Input 
                type="text" 
                text="Nome do Serviço:" 
                name="Name_service" 
                placeholder="Digite o nome do serviço"
                handleOnChange={handleChange}
              />
              <Input 
                type="number" 
                text="Valor do serviço:" 
                name="cost" 
                placeholder="Digite o valor do serviço"
                handleOnChange={handleChange}   
              />
              <Input 
                type="text" 
                text="Descrição do serviço:" 
                name="Description" 
                placeholder="Digite a descrição do serviço"
                handleOnChange={handleChange}
              />
              <FormBtn value={btn}/>
           </form>
        </div>
    )
}