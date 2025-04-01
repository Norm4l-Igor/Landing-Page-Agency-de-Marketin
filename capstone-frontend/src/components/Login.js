import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  // Define your "very cool code" here
  const validCode = 'veryCoolCode123';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code === validCode) {
      alert('Code validated successfully!');
      // Redirect to the landing page or any desired route
      navigate('/');
    } else {
      setError('Invalid code. Please try again.');
    }
  };

  return (
    <div className="container my-5">
      <h2>Login</h2>
      <p>Enter your code to access:</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="code" className="form-label">Code</label>
          <input
            type="text"
            className="form-control"
            id="code"
            value={code}
            onChange={(e) => { setCode(e.target.value); setError(''); }}
            required
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary">Enter</button>
      </form>
    </div>
  );
};

export default Login;
