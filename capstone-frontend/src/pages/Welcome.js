// src/pages/Welcome.js
import React from "react";
import "../styles/Welcome.css"; // arquivo CSS (vamos criar daqui a pouco)

function Welcome() {
  return (
    <div className="welcome-container">
      <h1>Welcome to Our Marketing Agency</h1>
      <p>Your gateway to successful digital marketing strategies.</p>
      <p>
        Please <a href="/login">Login</a> to access our full website.
      </p>
    </div>
  );
}

export default Welcome;
