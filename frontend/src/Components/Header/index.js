import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import IconPefil from "../../Midias/IconPefil.svg";

function Header() {
  return (
    <div className="Header">
      <div className="Logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="NavLinks">
        <img src={IconPefil} alt="Perfil" />
      </div>
    </div>
  );
}

export default Header;
