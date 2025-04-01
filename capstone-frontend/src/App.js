// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Landing Page (Coming Soon)</h1>} />
        <Route path="/home" element={<h1>Home Page (Coming Soon)</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
