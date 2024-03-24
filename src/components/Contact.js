import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [userData, setAboutData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const userContact = async () => {
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
        console.log(data);

         if (!res.status === 200) {
          throw new Error('Failed to fetch data');
        }
      
        setAboutData(data); // Assuming the response is an array of data objects
      } catch (err) {
        console.log('Error fetching data:', err);
      }
    };userContact();
  }, []);

  //storing data in states
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAboutData(prevState => ({
      ...prevState, // spread operator
      [name]: value
    }));
  };

  // send user data to backend 
    
    const contactForm = async (e) => {
      e.preventDefault();
      const { name , email, phone , message} = userData;
      try {
        const response = await fetch('/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name, email, phone, message})
        });
  
        if (!response.ok) {
          throw new Error('Failed to send message');
        }
  
        alert('Message sent successfully!');
        setAboutData({
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
    <div>
      <h2>GET IN TOUCH WITH US</h2>
      
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={userData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" value={userData.phone} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={userData.message} onChange={handleChange}required />
        </div>
        <button type="submit" onClick = {contactForm}>Send </button>
        <div>
            <h5>Send us your query or Contact us through Social Media</h5>  
            <ul>
              <li>
                <a href="https://www.instagram.com/rohann_singh24">Instagram</a>
              </li>
              <li>
                <a href="https://twitter.com/Ibiza2412">Twitter</a>
              </li>
              {/* Add more social media links as needed */}
            </ul>
          </div>

      
    </div>
  )
}

export default Contact