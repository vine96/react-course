import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <Link to="/">Home</Link>&nbsp;&nbsp;
      <Link to="/sobre">Sobre</Link>&nbsp;&nbsp;
      <Link to="/contato">Contato</Link>
    </div>
  );
}

export default Menu;
