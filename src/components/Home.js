import '../App.css'; // Import your CSS file for styling
import React, { useState, useEffect } from 'react';
const Home = () => {

    const [userName, setUsername] = useState('');
    const [show, setShow] = useState(false);
  
    useEffect(() => {
      const userHomePage = async () => {
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
        
          setUsername(data.name); // Assuming the response is an array of data objects
          setShow(true);
        } catch (err) {
          console.log('Error fetching data:', err);
        }
      };userHomePage();
    }, []);
  return (
    <div className="home-page">
      <div className="home-div">
        <h4 className="pt-5">HELLO!</h4>
        <h1>{userName}</h1>
        <h2> { show ? '🐱HAPPY TO SEE YOU BACK🐶' : '🐱WELCOME TO PAWFECT FINDS!🐶'} </h2>
      </div>
    </div>
  );
  };

export default Home;
