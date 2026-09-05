import React, { useState } from "react";
import "./Header.css";

const navItems = [
  { name: "Home", target: "home_page" },
  { name: "About", target: "about" },
  { name: "Experience", target: "tech_main" },
  { name: "Skills", target: "skill" },
  { name: "Projects", target: "portfolio" },
  { name: "Contact", target: "contact" }
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = `/${id}`;
    }
  };

  return (
    <header className="header">
      <div className="header_container">
        <span className="logo" onClick={() => scrollTo("home_page")}>
          <span className="logo_bracket">&lt;</span>
          Lakshay
          <span className="logo_dot">.</span>
          <span className="logo_bracket">/&gt;</span>
        </span>

        <button className="menu_toggle" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          <span className={`bar ${open ? "bar_top" : ""}`}></span>
          <span className={`bar ${open ? "bar_mid" : ""}`}></span>
          <span className={`bar ${open ? "bar_bot" : ""}`}></span>
        </button>

        <nav className={`nav_menu ${open ? "nav_open" : ""}`}>
          {navItems.map((item, index) => (
            <button
              key={index}
              className="nav_item"
              onClick={() => scrollTo(item.target)}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
