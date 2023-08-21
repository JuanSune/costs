
//Não precisa baixar o Link no react-router-dom
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Empresa</li>
        <li>Contato</li>
        <Routes>
          <Route element={#}></Route>
        </Routes>
      </ul>
      <p>Footer</p>
    </Router>
  );
}

export default App;
