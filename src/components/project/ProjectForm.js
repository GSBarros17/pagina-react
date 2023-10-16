export default function ProjectForm(){
    return(
        <div>
           <form>
              <div>
                <input type="text" placeholder="Insira o nome do projeto" />
              </div>
              <div>
                <input type="number" placeholder="Insira o valor do projeto" />
              </div>
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