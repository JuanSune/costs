import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkBtn from '../layout/LinkBtn'

function Home(){
    return (
        <section className={styles.home_cont}>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo</p>
            <LinkBtn to={'/NovoProjeto'} text='Criar'></LinkBtn>
            <img src={savings} alt="Costs" />
        </section>
    )
}
export default Home