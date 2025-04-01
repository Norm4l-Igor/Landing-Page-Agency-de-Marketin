// src/components/Services.js
import React from "react";
import "../styles/Services.css";

function Services() {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service-item">
          <h3>Social Media Management</h3>
          <p>We handle your social channels to increase engagement.</p>
        </div>
        <div className="service-item">
          <h3>SEO Optimization</h3>
          <p>Boost your site's ranking on search engines.</p>
        </div>
        <div className="service-item">
          <h3>Content Creation</h3>
          <p>Engaging content that resonates with your audience.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
