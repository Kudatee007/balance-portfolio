import React from "react";
import "./styles/NavLinks.css";

const NavLinks = ({ fontSize = "20px" }) => {
  return (
    <ul className="nav-links">
      <li style={{ fontSize }}>Home</li>
      <li style={{ fontSize }}>About</li>
      <li style={{ fontSize }}>Work</li>
      <li style={{ fontSize }}>Contact</li>
    </ul>
  );
};

export default NavLinks;