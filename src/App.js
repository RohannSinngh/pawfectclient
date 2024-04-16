import React, { createContext, useReducer, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout' ;
import PetAdoption from './components/Petadoption';
import Petacc from './components/Petacc';
import { initialState, reducer } from '../src/reducer/UseReducer';
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "./redux/actions/categories";
import SnackBarComponent from "./components/SnackbarComponent";
import Router from "./router";

export const UserContext = createContext();

const sections = [{ title: "All Pets", url: "/" }];

const theme = createTheme({
  typography: {
    fontFamily: `"Trebuchet MS", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

const App = () => {
  const [state, dispatch1] = useReducer(reducer, initialState);
  // const dispatch  = useDispatch();
  // const allCategories = useSelector((state) => state.categories.allCategories);
  // // Call fetchAllCategories and pass dispatch

  // useEffect(() => {
  //   dispatch (fetchAllCategories());
  // }, [dispatch ]);
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories.allCategories);

  useEffect(() => {
    fetchAllCategories({ dispatch });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserContext.Provider value={{state ,dispatch1}}>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home sections={sections} title="Pet Adoption Center"/>} />  */}
          <Route
            path="/"
            element={
              <Home
                title="Pet Adoption Center"
                sections={[
                  ...sections,
                  ...(allCategories &&
                  allCategories.map((category) => ({
                    title: category.name,
                    url: `/${category?._id}`,
            }))),
        ]}
      />
    }
  />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/adopt" element={<PetAdoption sections={sections} title="Pet Adoption Center" />} /> */}
          <Route path="/accessories" element={<Petacc />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>

        <Container maxWidth="lg">
          {/* <Header /> */}
          {/* <PetAdoption
            title="Pet Adoption Center"
            sections={[
              ...sections,
              ...(allCategories && allCategories.map((category) => ({
                title: category.name,
                url: `/${category?._id}`,
              }))),
            ]}
          /> */}
          <main>
            <SnackBarComponent />
            <Router />
          </main>
        </Container>
      </UserContext.Provider>
      <Footer title="PET ADOPTION CENTER" description="Every Pet Deserves A Good Home" />
    </ThemeProvider>
  );
}

export default App;
