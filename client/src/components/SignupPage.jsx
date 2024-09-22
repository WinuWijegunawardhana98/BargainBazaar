import React, { useState } from 'react';
import axios from 'axios';

const SignupPage = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(''); 
  const [success, setSuccess] = useState(''); // State for success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setError(''); // Clear error message when user types
    setSuccess(''); // Clear success message when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Disable the button while loading
    try {
      const res = await axios.post('http://localhost:5000/api/signup', user);
      setSuccess('Signup successful!'); // Set success message
      console.log(res.data); // Log response data
      setUser({ name: '', email: '', password: '' }); // Clear form
    } catch (error) {
      console.error('Error during signup:', error.response?.data);
      setError(error.response?.data?.message || 'Signup failed. Please try again.');
    } finally {
      setLoading(false); // Enable the button after request is completed
    }
  };

  // Overall container styling
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    maxWidth: '400px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  };

  // Input fields styling
  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    margin: '0.5rem 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.05)',
    fontSize: '1rem',
  };

  // Button styling
  const buttonStyle = {
    padding: '0.75rem',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
    width: '100%',
    marginTop: '1rem',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Signup</h2>

      {/* Success message */}
      {success && <p style={{ color: 'green', textAlign: 'center' }}>{success}</p>}

      {/* Error message */}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>} 

      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <label htmlFor="name" style={{ display: 'none' }}>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        
        <label htmlFor="email" style={{ display: 'none' }}>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        
        <label htmlFor="password" style={{ display: 'none' }}>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <button
          type="submit"
          style={loading ? { ...buttonStyle, backgroundColor: '#ccc', cursor: 'not-allowed' } : buttonStyle}
          disabled={loading}
        >
          {loading ? 'Signing Up...' : 'Signup'}
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
