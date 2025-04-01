// src/components/Testimonials.js
import React from "react";
import "../styles/Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-list">
        <div className="testimonial-item">
          <p>"They helped us grow our brand significantly!"</p>
          <h4>- Jane Doe, CEO of XYZ Corp</h4>
        </div>
        <div className="testimonial-item">
          <p>"Amazing SEO results in just a few months."</p>
          <h4>- John Smith, Founder of ABC Startup</h4>
        </div>
        <div className="testimonial-item">
          <p>"Creative campaigns that really engage our audience."</p>
          <h4>- Sarah Johnson, Marketing Manager</h4>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
