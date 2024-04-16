import React, { useContext } from 'react'
import { useState } from 'react';  // Remove React import since it's already declared automatically
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Login = () => {

  const {dispatch} = useContext(UserContext);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch('/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const data = await res.json();
      if (data.status === 400 || !data) {
        window.alert("Invalid credentials");
      } else {
        // dispatch({ type: "USER", payload: true }); // Dispatch action to update user state
        window.alert("Login successful");
        navigate('/');
      }
  
      const token = data.token;
      localStorage.setItem('jwtToken', token);
  
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;