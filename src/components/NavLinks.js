import { useState } from "react";
import { NavLink } from "react-router-dom";
import openMenu from "../images/open.svg";
import closeMenu from "../images/close.svg";
import "./NavLinks.css"

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <button className="dropdown-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <img className="closeMenu" src={closeMenu} alt="Close" />
        ) : (
          <img className="openMenu" src={openMenu} alt="Open" />
        )}
      </button>
      <nav className={`links ${isMenuOpen ? "open" : "closed"}`}>
      <NavLink className="NavLink" to="/" onClick={() => setIsMenuOpen(false)}>
  My Home
</NavLink>
<NavLink className="NavLink" to="/about" onClick={() => setIsMenuOpen(false)}>
  About Me
</NavLink>
<NavLink className="NavLink" to="/portfolio" onClick={() => setIsMenuOpen(false)}>
  What I can Do
</NavLink>
<NavLink className="NavLink" to="/contact" onClick={() => setIsMenuOpen(false)}>
  Contact Me
</NavLink>
      </nav>
    </>
  );
};

export default NavLinks;
