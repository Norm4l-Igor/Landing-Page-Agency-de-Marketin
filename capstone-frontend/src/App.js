// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Auth from "./pages/Auth"; // ou Login.js, se tiver renomeado

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        {/* Exemplo de rota para o /notes (que o código do Auth menciona) */}
        <Route path="/notes" element={<h1>Notes Page (Coming Soon)</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
