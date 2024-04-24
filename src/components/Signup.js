import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import signin from "../images/signin.jpg";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    cpassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password.length <= 5) {
      window.alert("Password should be greater than or equal to 6 characters");
      return;
    }
    try {
      const res = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (data.status === 422 || !data){
        window.alert("Invalid registration");
        console.log("Invalid registration");
      } else{
        window.alert("Registration Successful");
        console.log("Registration Successful");
        navigate('/login');
      }
      console.log(data); // Log the response from the server
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className='form-title'>Sign up</h2>
              <form className='register-form' id="register form" onSubmit={handleSubmit}>

                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input type="text" name="name" id="name" autoComplete="off"
                    placeholder="Your Name" value={formData.name} onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="text" name="email" id="email" autoComplete="off"
                    placeholder="Your Email" value={formData.email} onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone in talk material-icons-name"></i>
                  </label>
                  <input type="number" name="phone" id="phone" autoComplete="off"
                    placeholder="Your Phone no" value={formData.phone} onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="work">
                    <i className="zmdi zmdi-slideshow material-icons-name"></i>
                  </label>
                  <input type="text" name="work" id="work" autoComplete="off"
                    placeholder="Your Profession" value={formData.work} onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="password" id="password" autoComplete="off"
                    placeholder="Your Password" value={formData.password} onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                    placeholder="Confirm your password" value={formData.cpassword} onChange={handleChange}
                  />
                </div>

                <div className="form-group form-button">
                  <input type="submit" name="signup" id="signup" className="form-submit"
                    value="Register" />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src={signin} alt="registration pic" style={{ maxWidth: '400px', height: 'auto' }} />
              </figure>
              <NavLink to="/login" className="signup-image-link">I Have Already Registered</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup;
