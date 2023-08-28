import styles from "./ProjectForm.module.css";
import Input from "../form/Input";

function ProjectForm() {
  return (
    <form className={styles.form}>
      <Input placeholder='Escreva seu nome' type='text' text='Digite seu nome:'/>
      <Input placeholder='Escreva o orçamento' type='number' text='Digite o orçamento:'/>
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
