import React, { useEffect } from 'react';
import PageLayout from './PageLayout';
import Hero from './Hero';
import Services from './Services';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';

const LandingPage = ({ darkMode, toggleDarkMode }) => {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1); // remove o '#'
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <PageLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <Hero />
      <Services />
      <Testimonials />
      <ContactForm />
    </PageLayout>
  );
};

export default LandingPage;
