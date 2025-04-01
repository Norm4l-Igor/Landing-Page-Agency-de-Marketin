import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
// Import o ProtectedRoute
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Página de Login/Registro */}
        <Route path="/" element={<Auth />} />

        {/* Rotas Protegidas */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/services"
          element={
            <ProtectedRoute>
              <Services />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />

        {/* Rota /notes mencionada no Auth.js */}
        <Route
          path="/notes"
          element={
            <ProtectedRoute>
              <h1 style={{ padding: "20px" }}>Notes Page (Protected)</h1>
            </ProtectedRoute>
          }
        />

        {/* Outras rotas ou 404, caso deseje */}
      </Routes>
    </Router>
  );
}

export default App;
