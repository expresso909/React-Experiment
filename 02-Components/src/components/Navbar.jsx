import React from "react";
import  "../index.css";
import Drlogo from "../assets/Dr.logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <div className="logo-section">
          <img src={Drlogo} alt="Logo" className="logo" />
          <h2 className="brand-name">Dank Rishu</h2>
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <button className="nav-btn">Login</button>

      </div>
    </nav>
  );
};

export default Navbar;