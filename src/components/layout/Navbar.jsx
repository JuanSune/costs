import { Link } from "react-router-dom";
import Container from "./Container";
import logo from "../../img/costs_logo.png";

function Navbar() {
  return (
    <nav>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Empresa">Empresa</Link>
          </li>
          <li>
            <Link to="/Contato">Contato</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
