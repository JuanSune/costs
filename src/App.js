//Não precisa baixar o Link no react-router-dom
//Estranho, parece que o router so consegue importar algo caso estiver na pasta src somente
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Empresa from "./components/pages/Empresa";
import Contato from "./components/pages/Contato";
import NovoProjeto from "./components/pages/NovoProjeto";

function App() {
  return (
    <Router>
      <ul>
        <div>
          <Link to="/">Home</Link>
          <Link to="/NovoProjeto">Novo Projeto</Link>
          <Link to="/Empresa">Empresa</Link>
          <Link to="/Contato">Contato</Link>
        </div>
       
        <Routes>

          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Empresa" element={<Empresa />}></Route>
          <Route exact path="/NovoProjeto" element={<NovoProjeto />}></Route>
          <Route exact path="/Contato" element={<Contato />}></Route>

        </Routes>
      </ul>
      <p>Footer</p>
    </Router>
  );
}

export default App;
