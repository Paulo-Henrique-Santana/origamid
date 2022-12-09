import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink className="link" to="/" end>
          Produtos
        </NavLink>
        <NavLink className="link" to="contato">
          Contato
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
