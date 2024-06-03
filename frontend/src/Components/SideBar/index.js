import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Logo from "../../Midias/Logo.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="DivLogo">
        <img src={Logo} alt="Logo" className="Logo" />
      </div>
      <ul>
        <li>
          <Link to="/dashboard" className="sidebar-link">
            DashBoard
          </Link>
        </li>
        <li>
          <Link to="/HumidityHistory" className="sidebar-link">
            Historico humidade
          </Link>
        </li>
        <li>
          <Link to="/TemperatureHistory" className="sidebar-link">
            Historico temperatura
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
