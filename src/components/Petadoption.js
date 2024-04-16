// import '../App.css'; // Import your CSS file for styling
// import React, { useState, useEffect } from 'react';

// const PetAdoption = () => {
//     const [userName, setUsername] = useState('');
//     // const [show, setShow] = useState(false);

//     useEffect(() => {
//         const userHomePage = async () => {
//             try {
//                 const res = await fetch('/adoption', {
//                     method: "GET",
//                     headers: {
//                         Accept: "application/json",
//                         "Content-Type": "application/json"
//                     },
//                     credentials: "include"
//                 });
//                 const data = await res.json();
//                 console.log(data);

//                 if (data.name) {
//                     setUsername(data.name); // Assuming the response is an array of data objects
//                     // setShow(true);
//                 } else {
//                     setUsername(''); // Clear user data
//                     // setShow(false);
//                 }
//             } catch (err) {
//                 console.log('Error fetching data:', err);
//             }
//         };
//         userHomePage();
//     }, []);

//     return (
//         <div className="home-page">
//             <div className="home-div">
//                 <h4 className="pt-5">HELLO!</h4>
//                 <h1>{userName}</h1>
//                 <h2> {'🐱WELCOME TO PAWFECT FINDS!🐶'} </h2>
//             </div>
//         </div>
//     );
// };

// export default PetAdoption;

// part 2 

import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';
// import logo from "./images/logo.png";

const PetAdoption = (props) => {
  const { sections, title } = props;
  const location = useLocation();

  return (
    <React.Fragment>
       <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          sx={{ flex: 1 }}
        >
          <Link to='/'>
            <img src="images/logo.png" width='300'/>
          </Link>
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            to={section.url}
            key={section.url}
            className={location.pathname === section.url ? 'activeNavLink' : ''}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

PetAdoption.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default PetAdoption;