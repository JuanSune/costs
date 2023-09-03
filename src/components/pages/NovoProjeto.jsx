import styles from "./NovoProjeto.module.css";
import ProjectForm from "../project/ProjectForm";
import { useNavigate } from "react-router-dom";

function NovoProjeto() {
  const navigate = useNavigate();

  function createPost(projeto) {
    //inicialiando cost e services
    projeto.cost = 0;
    projeto.services = [];

    fetch('http://localhost:5000/projetos',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(projeto) 
    }).then((resp) => resp.json()).then((data) => {
        console.log(data)
        navigate("/")
    }).catch((err) => console.log(err))

    
  }

  return (
    <div className={styles.novoProjeto_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm text="Criar Projeto" handleSubmit={createPost}></ProjectForm>
    </div>
  );
}
export default NovoProjeto;
