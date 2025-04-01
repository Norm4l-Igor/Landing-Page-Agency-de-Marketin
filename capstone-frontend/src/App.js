import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import About from './components/About';
import Login from './components/Login';
import PageLayout from './components/PageLayout';

function LandingPage({ darkMode, toggleDarkMode }) {
  return (
    <PageLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <Hero />
      <Services />
      <Testimonials />
      <ContactForm />
    </PageLayout>
  );
}

function App() {
  // Start in light mode by default
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <Routes>
          <Route path="/" element={<LandingPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route 
            path="/about" 
            element={
              <PageLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
                <About />
              </PageLayout>
            } 
          />
          <Route 
            path="/login" 
            element={
              <PageLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
                <Login />
              </PageLayout>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
