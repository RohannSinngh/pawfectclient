import { useNavigate } from 'react-router-dom';
import React, {useContext,useEffect } from 'react';
import { UserContext } from '../App';

const Logout = () => {

  const {dispatch1} = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('/logout', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch1({type:"USER",payload:false});

        if (data.message === 'User LogOut Successfully') {
          window.alert('Logout Successfully!');
        } else if (data.error === 'Login first') {
          window.alert('Login first!');
        }
        navigate('/login', { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [navigate,dispatch1]);

  return <div style={{ textAlign: 'center', marginTop: '20vh' }}></div>;
};

export default Logout;