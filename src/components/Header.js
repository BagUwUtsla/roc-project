import logo from "../data/Golfluent.png";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo"></img>
      <span className="item">Menu </span>
      <span className="item">Paramètres </span>
    </header>
  );
}

export default Header;
