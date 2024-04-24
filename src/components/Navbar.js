// import React, { useContext } from 'react'; import 'bootstrap/dist/css/bootstrap.css';
// import { NavLink } from "react-router-dom";
// import logo from "../images/logo.png";
// import { UserContext } from '../App';
// const Navbar = () => {
//   const { state } = useContext(UserContext);

//   const RenderMenu = () => {
//     if (state) {
//       return (
//         <>
//           <li className="nav-item active">
//             <a className="nav-link" href="/"> Home <span className="sr-only"></span></a>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/contact">Shop</NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/about">About</NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink className="nav-link" to="/contact">Contact</NavLink>
//           </li>

//           {/* <li className="nav-item dropdown">
//             <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//               Pets
//             </a>
//             <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor: 'darkblue'}}>
//               <NavLink className="dropdown-item" to="/adopt">Pet Adopt</NavLink>
//               <NavLink className="dropdown-item" to="/accessories">Pet Accessories</NavLink>
//             </div>
//           </li> */}

//           <li className="nav-item">
//             <NavLink className="nav-link" to="/logout">Logout</NavLink>
//           </li>
//         </>
//       )
//     } else {
//       return (
//         <>
//           <li className="nav-item active">
//             <a className="nav-link" href="/"> Home <span className="sr-only"></span></a>
//           </li>
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/contact">Shop</NavLink>
//           </li>
//           {/* //pets coloumn  */}
//           {/* <li className="nav-item dropdown">
//             <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//               Pets
//             </a>
//             <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor: 'darkblue'}}>
//               <NavLink className="dropdown-item" to="/adopt">Pet Adopt</NavLink>
//               <NavLink className="dropdown-item" to="/accessories">Pet Accessories</NavLink>
//             </div>
//           </li> */}

//           <li className="nav-item">
//             <NavLink className="nav-link" to="/about">About</NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink className="nav-link" to="/contact">Contact</NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink className="nav-link" to="/login">Login</NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink className="nav-link" to="/signup">Signup</NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink className="nav-link" to="/logout">Logout</NavLink>
//           </li>
//         </>
//       )
//     }
//   }
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'darkblue' }}>
//       <a className="navbar-brand" href="/">PAWFECT FINDS</a>
//       <img src={logo} alt="logo" style={{ maxWidth: '100px', maxHeight: '50px' }} />
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
//         <ul className="navbar-nav">

//           <RenderMenu />

//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


///////////// the new nav bar on 21st night 
import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
import { UserContext } from '../App';

const Navbar = () => {
  const { state } = useContext(UserContext);
  const location = useLocation();

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <NavLink className="nav-link" exact to="/">Home</NavLink>
          </li>
          <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            <NavLink className="nav-link" to="/contact">Shop</NavLink>
          </li>
          <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
          <li className={`nav-item ${location.pathname === '/logout' ? 'active' : ''}`}>
            <NavLink className="nav-link" to="/logout">Logout</NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <NavLink className="nav-link" exact to="/">Home</NavLink>
          </li>
          <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            <NavLink className="nav-link" to="/contact">Shop</NavLink>
          </li>
          <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
          <li className={`nav-item ${location.pathname === '/login' ? 'active' : ''}`}>
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </li>
          <li className={`nav-item ${location.pathname === '/signup' ? 'active' : ''}`}>
            <NavLink className="nav-link" to="/signup">Signup</NavLink>
          </li>
          <li className={`nav-item ${location.pathname === '/logout' ? 'active' : ''}`}>
            <NavLink className="nav-link" to="/logout">Logout</NavLink>
          </li>
        </>
      );
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#007bff' }}>
      <a className="navbar-brand" href="/">PAWFECT FINDS</a>
      <img src={logo} alt="logo" style={{ maxWidth: '100px', maxHeight: '50px' }} />
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <RenderMenu />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
