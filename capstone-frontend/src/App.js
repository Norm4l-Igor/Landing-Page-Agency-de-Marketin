// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <ContactForm /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;
