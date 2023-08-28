import styles from "./ProjectForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import Submit from "../form/Submit";

function ProjectForm({text}) {
  return (
    <form className={styles.form}>
      <Input placeholder='Escreva seu nome' type='text' text='Digite seu nome:'/>
      <Input placeholder='Escreva o orçamento' type='number' text='Digite o orçamento:'/>
      <Input placeholder='Escreva o orçamento' type='number' text='Digite o orçamento:'/>
      <Select name='category_id' text='Selecione o anao:'/>
      <Submit text='Test louco'/>
    </form>
  );
}

export default ProjectForm;
