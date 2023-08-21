
//Não precisa baixar o Link no react-router-dom
//Estranho, parece que o router so consegue importar algo caso estiver na pasta src somente
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./components/Home"
import Empresa from "./components/Empresa"

function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Empresa</li>
        <li>Contato</li>
        <Routes>
          <Route element={<Home/>}></Route>
          <Route element={<Empresa/>}></Route>
        </Routes>
        
      </ul>
      <p>Footer</p>
    </Router>
  );
}

export default App;
