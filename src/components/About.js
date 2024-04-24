import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const [userData, setAboutData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const callAboutPage = async () => {
      try {
        const res = await fetch('/about', {
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
        navigate('/login');
      }
    };

    callAboutPage();

  }, [navigate]);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '20px' }}>About Page</h2>
      {userData && (
        <div>
          <h3>User Signup Details</h3>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Phone:</strong> {userData.phone}</p>
          <p><strong>Work:</strong> {userData.work}</p>
          {/* Add more user details as needed */}

          {/* Social media links */}
          <div>
            <h3>Social Media Profiles</h3>
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
      )}
    </div>
  );

};

export default About;
