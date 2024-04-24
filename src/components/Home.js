import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';
import '../App.css'; // Import your CSS file for styling
import  { useState, useEffect } from 'react';
function Home(props) {
  const { sections , title } = props;
  const location = useLocation();
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

                if (data.name) {
                    setUsername(data.name); // Assuming the response is an array of data objects
                    setShow(true);
                } else {
                    setUsername(''); // Clear user data
                    setShow(false);
                }
            } catch (err) {
                console.log('Error fetching data:', err);
            }
        };
        userHomePage();
    }, []);

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
        <div className="home-page">
            <div className="home-div">
                 {/* <h4 className="pt-5">HELLO!</h4> */}
                 <h4> HELLO! {userName.toUpperCase()} {show ? '🐱HAPPY TO SEE YOU BACK🐶' : '🐱WELCOME TO PAWFECT FINDS!🐶'}</h4>
                 {/* <h4> {show ? '🐱HAPPY TO SEE YOU BACK🐶' : '🐱WELCOME TO PAWFECT FINDS!🐶'} </h4> */}
             </div>
         </div>
        <Link to='/'>
          <img src="images/logo.png" width='77'/>
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
};

Home.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

// Set default props for the Home component
Home.defaultProps = {
  sections: [], // Provide an empty array as default value
  title: 'Default Title',
};

export default Home;