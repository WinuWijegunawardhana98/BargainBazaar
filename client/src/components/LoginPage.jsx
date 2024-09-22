import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', { email, password });
      console.log(res.data); 
      alert('Login successful!');
     
      localStorage.setItem('token', res.data.token);
    } catch (error) {
      console.error(error.response.data);
      alert('Login failed. Please try again.');
    }
  };

  const containerStyle = {
    padding: '2rem',
    maxWidth: '400px',
    margin: '2rem auto',
    backgroundColor: '#f9f9f9',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '1.5rem',
  };

  const inputStyle = {
    display: 'block',
    marginBottom: '1rem',
    padding: '0.75rem',
    width: '100%',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.05)',
  };

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
    width: '100%',
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#0056b3',
  };

  const [hover, setHover] = useState(false);

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />
        <button
          type="submit"
          style={hover ? buttonHoverStyle : buttonStyle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
