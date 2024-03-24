import { useNavigate } from 'react-router-dom';
import React, {useContext } from 'react';
import { UserContext } from '../App';

const Logout = () => {
    const {dispatch} = useContext(UserContext);

    const navigate = useNavigate();
    const handleLogout = async () => {
    try {
      const response = await fetch('/logout', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include' 
      });

      if (response.ok) {
        // Clear user data from client-side storage (e.g., React state, local storage)
        // For example, reset user data stored in React state
        // setUserData(null);
        dispatch({type:"USER", payload:false}) // dispatchh 

        // Redirect to the login page
        navigate('/login', { replace: true });
      } else {
        // Handle error if logout fails
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      <h2>Logout Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
