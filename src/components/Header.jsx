import React from "react";
import "../styles/Header.css";
import logo_positive from "../assets/bilongo_logo_positive.png";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <img src={logo_positive} alt="bilongo logo" />
        <ul>
          <li>
            <a href="/">Inicio</a>
            <a href="/">Nosotros</a>
            <a href="/">Servicios</a>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
