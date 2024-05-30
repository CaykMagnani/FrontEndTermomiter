import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">DashBoard</Link>
        </li>
        <li>
          <Link to="/page1">Page 1</Link>
        </li>
        <li>
          <Link to="/page2">Page 2</Link>
        </li>
        <li>
          <Link to="/page3">Page 3</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;