import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router";

const header_Data = ["Home", "About", "Tech_Stack", "Skill", "Portfolio", "Contact"];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">

      {/* LOGO / NAME */}
      <h2 className="logo">Lakshay</h2>

      {/* HAMBURGER ICON */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* MENU */}
      <div className={`nav-links ${open ? "show" : ""}`}>
        {header_Data.map((value, index) => (
          <Link
            key={index}
            to={value === "Home" ? "/" : `/${value}`}
            onClick={() => setOpen(false)}
          >
            {value}
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Header;
