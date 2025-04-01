// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login"; 
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Header /> {/* Aparece em todas as páginas */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        {/* Outras rotas */}
      </Routes>
      <Footer /> {/* Aparece em todas as páginas */}
    </Router>
  );
}

export default App;
