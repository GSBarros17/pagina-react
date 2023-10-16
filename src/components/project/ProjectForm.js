import Input from "../form/Input"
import Select from "../form/Select"
import FormBtn from "../form/FormBtn"

export default function ProjectForm(){
    return(
        <div>
           <form>
              <Input type="text" text="Nome do projeto:" name="Name_project" placeholder="Digite o nome do projeto"/>
              <Input type="number" text="Valor total do projeto:" name="Value-project" placeholder="Digite o valor total do projeto"/>
              <Select name="Category-id" text="Selecione a categoria"/>
              <FormBtn value="Criar projeto"/>
           </form>
        </div>
    )
}