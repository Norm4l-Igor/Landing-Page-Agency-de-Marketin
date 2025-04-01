// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom"; 
import "../styles/Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <h2>Marketing Agency</h2>
      </div>
      <nav>
        <ul>
          {/* Se quiser rotear para a Landing page */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          {/* <li><Link to="/login">Login</Link></li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
