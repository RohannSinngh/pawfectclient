import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';
// import logo from "./images/logo.png";

const Header = () => {


// function Header(props) {
//   const { sections } = props;
//   const location = useLocation();

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          sx={{ flex: 1 }} >
          <Link to='/'>
            {/* <img src="images/logo.png" width='300'/> */}
          </Link>
        </Typography>
      </Toolbar>

      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        <a href ='#'>option 1</a>
        <a href ='#'>option 2</a>
        <a href ='#'>option 3</a>
        <a href ='#'>option 4</a>
      </Toolbar>
    </>
  );
        }

// Header.propTypes = {
//   sections: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   title: PropTypes.string.isRequired,
// };

export default Header;