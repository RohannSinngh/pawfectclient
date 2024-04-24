import React, { useState, useEffect } from 'react';
import contact from "../images/contact.png";
import { NavLink, useNavigate } from 'react-router-dom';

const Contact = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch('/getdata', {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          credentials: "include"
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        setUserData(data); // Assuming the response is an object with user data
      } catch (err) {
        console.log('Error fetching data:', err);
      }
    };
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const contactForm = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;
    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, phone, message })
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      alert('Message sent successfully!');
      setUserData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <div style={{ maxWidth: '600px' }}>
        <h2 style={{ marginBottom: '20px' }}>GET IN TOUCH WITH US</h2>
        <form>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={userData.name} onChange={handleChange} required />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} required />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" value={userData.phone} onChange={handleChange} required />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={userData.message} onChange={handleChange} required />
          </div>
          <button type="submit" onClick={contactForm} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Send</button>
        </form>
        <div style={{ marginTop: '20px' }}>
        <h5>Send us your query or Contact us through Social Media</h5>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <a href="https://www.instagram.com/pawfect.finds.pets" style={{ color: '#007bff', textDecoration: 'none' }}>Instagram</a>
          </li>
          <li>
            <a href="https://twitter.com/Ibiza2412" style={{ color: '#007bff', textDecoration: 'none' }}>Twitter</a>
          </li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
      </div>
      <div style={{ marginLeft: '20px' }}>
        <div className="signup-image">
          <figure>
            <img src={contact} alt="registration pic" style={{ maxWidth: '500px', height: 'auto' }} />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Contact;
