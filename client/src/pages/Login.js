// src/pages/Login.js
import React, { useState, useEffect } from 'react';
import '../styles/Login.css';

function Login() {
  const [isLogin, setIsLogin] = useState(true); // true for login, false for register
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset messages
    setError('');
    setSuccess('');
    setIsSubmitting(true);
    
    // Simple validation
    if (!username || !password || (!isLogin && !email)) {
      setError('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }
    
    // For now, just simulate a successful login/registration
    // In a real app, you would connect to a backend API here
    try {
      if (isLogin) {
        // Simulate login
          const res = await fetch(`http://162.249.173.211:3001/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username,
              password
            }),
            credentials: 'include',
          });

          if (!res.ok) {
            throw new Error("Login failed!");
          }

          setSuccess('Login successful! Welcome back, ' + username);
          setIsLogin(true);
      } else {
        // Simulate registration
          const res = await fetch(`http://162.249.173.211:3001/register`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username,
              email,
              password
            }),
            credentials: 'include'
          });
          if (!res.ok) {
            throw new Error("Login failed!");
          }

          setSuccess('Registration successful! Welcome to Hungry Hawks, ' + username);
          setIsLogin(true);
      }
      // Clear form
      setUsername('');
      setPassword('');
      setEmail('');
      setShouldRedirect(true);
    } catch (e) {
      setError("Failed to login/register!");
    }
    
    setIsSubmitting(false);
  };

  // Redirects 1.25 seconds after successful login/register
  useEffect(() => {
    let timer;
    if (shouldRedirect) {
      timer = setTimeout(() => {
        window.location.href = '/';
      }, 1250);
    }
  });

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isLogin ? 'Login' : 'Create Account'}</h2>
        
        <div className="toggle-buttons">
          <button 
            className={`toggle-btn ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={`toggle-btn ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </div>
          
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>
          
          <button type="submit" className="submit-btn">
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>
        
        {isLogin && (
          <p className="form-footer">
            Don't have an account? 
            <button 
              className="text-button"
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </p>
        )}
        
        {!isLogin && (
          <p className="form-footer">
            Already have an account? 
            <button 
              className="text-button"
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;