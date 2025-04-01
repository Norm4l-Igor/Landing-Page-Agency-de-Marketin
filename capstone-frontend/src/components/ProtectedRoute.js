// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // Verifica se o usuário está logado (checando localStorage)
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    // Se não estiver logado, redireciona para "/"
    return <Navigate to="/" replace />;
  }

  // Se estiver logado, renderiza o children (a página de destino)
  return children;
}

export default ProtectedRoute;
