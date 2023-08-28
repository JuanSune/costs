import styles from './NovoProjeto.module.css'
import ProjectForm from '../project/ProjectForm'

function NovoProjeto(){
    return (
        <div className={styles.novoProjeto_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
             <ProjectForm text='Criar Projeto'></ProjectForm>
        </div>
    )
}
export default NovoProjeto