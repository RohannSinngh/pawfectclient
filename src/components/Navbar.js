import React, { useContext } from 'react';import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import { UserContext } from '../App';
const Navbar = () => {
  const {state} = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return(
        <>
            <li className="nav-item active">
            <a className="nav-link" href="/"> Home <span className="sr-only"></span></a>
          </li>

          <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink> 
          </li>

          <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink> 
          </li>
        
          <li className="nav-item">
          <NavLink className="nav-link" to="/logout">Logout</NavLink> 
          </li>
        </>
      )
    } else {
        return(
          <>
            <li className="nav-item active">
            <a className="nav-link" href="/"> Home <span className="sr-only"></span></a>
            </li>

            <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink> 
            </li>

            <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink> 
            </li>

            <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink> 
            </li>

            <li className="nav-item">
            <NavLink className="nav-link" to="/signup">Signup</NavLink> 
            </li>
          </>
        )
      }
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'darkblue'}}>
      <a className="navbar-brand" href="/">PAWFECT FINDS</a>
        <img src={logo}alt="logo" style={{ maxWidth: '100px', maxHeight: '50px' }}/>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav style={{ marginLeft: 'auto' }}"> */}

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
          
          <RenderMenu />

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
