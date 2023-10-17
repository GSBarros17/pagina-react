import {useEffect, useState} from "react"
import Input from "../form/Input"
import Select from "../form/Select"
import FormBtn from "../form/FormBtn"

export default function ProjectForm({handleSubmit, projectData}){
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(()=> {
        fetch('http://localhost:5000/categories', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value})
    }

    function handleSelect(e){
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }})
    }
    
    
    return(
        <div>
           <form onSubmit={submit}>
              <Input 
                type="text" 
                text="Nome do projeto:" 
                name="Name_project" 
                placeholder="Digite o nome do projeto"
                handleOnChange={handleChange}
              />
              <Input 
                type="number" 
                text="Valor total do projeto:" 
                name="Value-project" 
                placeholder="Digite o valor total do projeto"
                handleOnChange={handleChange}    
              />
              <Select 
                name="Category-id" 
                text="Selecione a categoria" 
                options={categories}
                handleOnChange={handleSelect}
                value={project.category ? project.category.id : ''}   
              />
              <FormBtn value="Criar projeto"/>
           </form>
        </div>
    )
}