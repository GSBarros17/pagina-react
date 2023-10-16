import Input from "../form/Input"

export default function ProjectForm(){
    return(
        <div>
           <form>
              <Input type="text" text="Nome do projeto:" name="Nome do projeto" placeholder="Digite o nome do projeto"/>
              <Input type="number" text="Valor total do projeto:" name="Valor total projeto" placeholder="Digite o valor total do projeto"/>
              <div>
                <select name="category-id">
                  <option disabled>Selecione a categoria</option>
                </select>
              </div>
              <div>
                <input type="submit" value="Adicionar projeto" />
              </div>
           </form>
        </div>
    )
}