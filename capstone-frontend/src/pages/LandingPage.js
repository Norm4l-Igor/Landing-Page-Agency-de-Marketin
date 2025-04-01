// src/pages/LandingPage.js
import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <Hero />
      <Services />
      <Testimonials />
      <ContactForm />
    </div>
  );
}

export default LandingPage;
