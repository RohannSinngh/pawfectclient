import React, { useState } from 'react';
import signin from "../images/signin.jpg";
import { useNavigate } from 'react-router-dom';
const Signup = () => {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    cpassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (data.status === 422 || !data){
        window.alert("Invalid registration");
        console.log("Invalid registration");
      } else{
        window.alert("Registration Successfull");
        console.log("Registration Successfull");

        navigate('/login');

      }
      console.log(data); // Log the response from the server
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <img src={signin} alt="Signup" style={{ maxWidth: '200px', maxHeight: '100px' }}/> {/* Image */}
        </div>
        <div>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="phone">Mobile Number:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="work">Work:</label>
          <input type="text" id="work" name="work" value={formData.work} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} minLength="6" required />
        </div>
        <div>
          <label htmlFor="cpassword">Confirm Password:</label>
          <input type="password" id="cpassword" name="cpassword" value={formData.cpassword} onChange={handleChange} minLength="6" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;
 