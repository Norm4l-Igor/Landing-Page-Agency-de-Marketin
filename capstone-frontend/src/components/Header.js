import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Switch from './Switch';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="py-3" style={{ backgroundColor: "#000", color: "white" }}>
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h3 mb-0">Digital Agency</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <HashLink smooth className="nav-link" to="/#services">Services</HashLink>
            </li>
            <li className="nav-item">
              <HashLink smooth className="nav-link" to="/#testimonials">Testimonials</HashLink>
            </li>
            <li className="nav-item">
              <HashLink smooth className="nav-link" to="/#contact">Contact</HashLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Switch checked={darkMode} onToggle={toggleDarkMode} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
