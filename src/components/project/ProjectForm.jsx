import styles from "./ProjectForm.module.css";
function ProjectForm() {
  return (
    <form>
      <div>
        <input type="text" placeholder="Diga o nome do projeto" />
      </div>
      <div>
        <input type="number" placeholder="Digite o numero" />
      </div>
      <div>
        <select name="categoria_id">
          <option disabled selected>
            Selecione a categoria
          </option>
        </select>
      </div>
      <div>
        <input type="submit" value="Cadastro" />
      </div>
    </form>
  );
}

export default ProjectForm;
