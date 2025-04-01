// src/components/Hero.js
import React from "react";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Grow Your Business with Our Digital Marketing Solutions</h1>
        <p>We help you reach new customers and expand your online presence.</p>
        <button className="cta-button">Request a Quote</button>
      </div>
    </section>
  );
}

export default Hero;
