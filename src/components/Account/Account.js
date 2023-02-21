import React from "react";
import "./Account.css";
const Account = () => {
  return (
    <>
      <div className="accountSection">
        <div className="accountBanner">
          <h1>My Account</h1>
          <h4>
            <a href="/">Home -</a> &gt; My Account
          </h4>
        </div>


        <div className="accountContent">
          <div className="accountLogin">
            <h2>Login</h2>
            <h4>Username or Email Address <span style={{"color":"red"}}>*</span></h4>
            <input
              type="text"
              placeholder="Enter your Username or Email address"
            />
            <h4>Password</h4>
            <input type="password" placeholder="Enter your Password" />
            <div className="accountLoginButtons">
              <button className="myButton">Log In</button>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember Me</label>
            </div>
          </div>
          <div className="accountRegister">
            <h2>Register</h2>
            <h4>Email Address <span style={{"color":"red"}}>*</span></h4>
            <input
              type="email"
              placeholder="Enter your Email address"
            />
            <p>A link to set a new password will be sent to your email address.</p>
            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our 
            <a href="/privacy"> privacy policy</a> 
            </p>
            <button className="myButton"> Register</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
