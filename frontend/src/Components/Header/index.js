import React from "react";
import "./index.css";
import IconPefil from "../../Midias/IconPefil.svg";
import Logo from "../../Midias/Logo.svg";

function Header() {
  return (
    <div className="Header">
      <div className="Logo">
        <img src={Logo} alt="Logo" className="ImageLogin" />
      </div>
      <div className="NavLinks">
        <img src={IconPefil} alt="Perfil" className="ProfileIcon" />
      </div>
    </div>
  );
}

export default Header;
