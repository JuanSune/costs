import { Link } from "react-router-dom"


function Navbar(){
    return (
        <div>
        <Link to="/">Home</Link>
          <Link to="/NovoProjeto">Novo Projeto</Link>
          <Link to="/Empresa">Empresa</Link>
          <Link to="/Contato">Contato</Link>
        </div>
    )
}

export default Navbar