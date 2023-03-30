import NavLinks from "./NavLinks";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <a href="https://github.com/alemord">
        <img className="logo" src={logo} alt="logo" />
      </a>
      <NavLinks />
    </header>
  );
};

export default Header;
