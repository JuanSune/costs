import { useState } from "react";

import styles from "./ProjectForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import Submit from "../form/Submit";
import { useEffect } from "react";

function ProjectForm({ handleSubmit, text, projetoData }) {
  const [categorias, setCategorias] = useState([]);
  const [projeto, setProjeto] = useState(projetoData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categorias", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategorias(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    console.log(projeto)
    handleSubmit(projeto);
  };

  function handleChange(e) {
    setProjeto({ ...projeto, [e.target.name]: e.target.value });
    
  }

  function handleCategory(e) {
    setProjeto({ ...projeto,  categoria: {
      id:e.target.value,
      name:e.target.options[e.target.selectedIndex].text
    }});
    
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        placeholder="Escreva seu nome"
        type="text"
        text="Digite seu nome:"
        handleOnChange={handleChange}
        value={projeto.name ? projeto.name : ""}
      />
      <Input
        placeholder="Escreva o orçamento"
        type="number"
        text="Digite o orçamento:"
        value={projeto.cost ? projeto.cost : ""}
        handleOnChange={handleChange}
      />
      <Input
        placeholder="Escreva o orçamento"
        type="number"
        text="Digite o orçamento:"
       
      />
      <Select name="category_id" text="Selecione o anao:" opcao={categorias} handleOnChange={handleCategory} value={projeto.categoria? projeto.categoria.id : ""}/>
      <Submit text="Test louco" />
    </form>
  );
}

export default ProjectForm;
