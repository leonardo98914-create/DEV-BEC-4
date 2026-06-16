import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link> |{" "}
      <Link to="/doctors">Doctores</Link> |{" "}
      <Link to="/appointment">
        Agendar Cita
      </Link>{" "}
      |{" "}
      <Link to="/appointments">
        Ver Citas
      </Link>
    </nav>
  );
}

export default Navbar;