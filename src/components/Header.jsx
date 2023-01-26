import React from "react";
import "../styles/Header.css";
import socialBookLogo from "../assets/socialBook_logo.png"
import hamMenu from "../assets/icons/ham_menu.png"

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <img src={socialBookLogo} alt="socialbooks logo" className="main-logo"/>
        <ul>
          <li>
            <a href="/">Inicio</a>
            <a href="/">Nosotros</a>
            <a href="/">Servicios</a>
            <a href="/login">Login</a>
          </li>
        </ul>
        <img src={hamMenu} alt="Menu" className="ham-menu"/>
      </nav>
    </header>
  );
};

export default Header;
