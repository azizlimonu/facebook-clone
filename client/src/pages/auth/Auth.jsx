import React, { useState } from 'react';
import './Auth.css';
import Logo from '../../img/logo.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, signUp } from '../../app/actions/AuthActions'

const Auth = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  }
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const [isSignUp, setIsSignUp] = useState(false);
  const [data, setData] = useState(initialState);
  const [confirmPass, setConfirmPass] = useState(true);
  const navigate = useNavigate();

  // Reset the form
  const resetForm = () => {
    setData(initialState);
  }

  // Handle Form Change
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Handle Form input
  const handleSubmit = (e) => {
    e.preventDefault();
    // validation pass
    if (isSignUp) {
      if (data.password === data.confirmpass) {
        dispatch(signUp(data))
      } else {
        setConfirmPass(false)
      }
    }
    console.log(data);
    dispatch(logIn(data));
    resetForm();
  }

  return (
    <div className='Auth'>
      {/* Section Left */}
      <div className='authleft'>
        <img src={Logo} alt='logo' />

        <div className='Webname'>
          <h1>Social Media</h1>
          <h6>Explore The World and Share with your friend</h6>
        </div>
      </div>

      {/* Section Right */}
      <div className='authright'>
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Register" : "Login"}</h3>
          {isSignUp && (
            <div>
              <input
                required
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                value={data.firstname}
                onChange={handleChange}
              />
              <input
                required
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                value={data.lastname}
                onChange={handleChange}
              />
            </div>
          )}

          <div>
            <input
              required
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              required
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
              autoComplete='on'
            />
            {isSignUp && (
              <input
                required
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
                autoComplete='on'
              />
            )}
          </div>

          <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
            *Confirm password is not same
          </span>
          <div>
            <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                setIsSignUp(!isSignUp);
              }}
            >
              {isSignUp
                ? "Already have an account?  Login"
                : "Don't have an account?  Sign up"}
            </span>
            <button
              className="button infoButton"
              type="Submit"
              disabled={loading}
            >
              {loading ? "Loading..."
                : isSignUp
                  ? "SignUp"
                  : "Login"
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Auth