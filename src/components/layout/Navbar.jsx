import { Link } from "react-router-dom";
import Container from "./Container";
import logo from "../../img/costs_logo.png";
import style from "./Navbar.module.css"

function Navbar() {
  return (
    <nav class = {style.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <ul class = {style.list}>
          <li class = {style.item}>
            <Link to="/">Home</Link>
          </li>
          <li class = {style.item}>
            <Link to="/Empresa">Empresa</Link>
          </li>
          <li class = {style.item}>
            <Link to="/Contato">Contato</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
