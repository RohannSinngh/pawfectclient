import React , { createContext, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout' ;
import { initialState,reducer } from '../src/reducer/UseReducer';

// 1: contextAPI 
export const UserContext = createContext();

// export reducer;
const Routing = () => {
  return(
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
    </>
  )
}

const App = () => {
  const [state, dispatch] = useReducer( reducer , initialState)

  return (
    <>
    <UserContext.Provider value={{state, dispatch}}>

      <Navbar />
      <Routing / >
      
      </UserContext.Provider>
    </>
  );
}

export default App;
