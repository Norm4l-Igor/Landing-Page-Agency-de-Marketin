import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-4 bg-dark text-white">
      <div className="container d-flex justify-content-between align-items-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} Digital Agency. All rights reserved.</p>
        <div>
          <a href="https://facebook.com" className="me-3 text-white"><FaFacebook size={20} /></a>
          <a href="https://twitter.com" className="me-3 text-white"><FaTwitter size={20} /></a>
          <a href="https://instagram.com" className="text-white"><FaInstagram size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
