// src/pages/Home.js
import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Our Marketing Agency!</h1>
      <p>
        We specialize in digital marketing solutions to help your business
        thrive online. Explore our services, learn about our team, and see how
        we can boost your brand's visibility.
      </p>
      <p>
        This is the main page you see after logging in. You can also check out 
        other sections like <strong>Services</strong> and <strong>About</strong>.
      </p>
    </div>
  );
}

export default Home;
