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
    <div>
      <h2>About Page</h2>
      {userData && (
        <div>
          <h3>User Signup Details</h3>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
          <p>Work: {userData.work}</p>
          {/* Add more user details as needed */}

          {/*  social media links */}
          <div>
            <h3>Social Media Profiles</h3>
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
        )}
    </div>
      
  );

};

export default About;
