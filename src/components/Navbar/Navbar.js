import React from "react";
import "./Navbar.css";
import logo from "../images/icon.png";
const Navbar = () => {
  const changeVisibility = () => {
    if (document.getElementById("menuItems").style.display === "flex") {
      document.getElementById("menuItems").style.display = "none";
      document.getElementById("svg2").style.display = "none";
      document.getElementById("svg1").style.display = "flex";
    } else {
      document.getElementById("menuItems").style.display = "flex";
      document.getElementById("svg2").style.display = "flex";
      document.getElementById("svg1").style.display = "none";
    }
  };
  return (
    <div className="wrapper">
      <div className="banner1">
        <p>
          Our standard product delivery time is 7 business days from date of
          purchase
        </p>
      </div>
      <div className="banner2">
        <div className="logo">
          <img src={logo} className="logoImage" alt="Not Found" />
          <h1 className="logoText">
            LOW <br />
            PRINTERS
          </h1>
        </div>

        <div className="navItems">
          <a href="/" className="firstItem">
            Home
          </a>
          <a href="/about" className="secondItem">
            About Us
          </a>
          <a href="/shop" className="thirdItem">
            Shop
          </a>
          <a href="/contact" className="fourthItem">
            Contact
          </a>
          <a href="/account" className="fifthItem" >
            My Account
          </a>
        </div>
        <div className="burgerMenu" id="burgerMenu" onClick={changeVisibility}>
          <svg
            id="svg1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-menu"
            cursor="pointer"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg
            id="svg2"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-x"
            cursor="pointer"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </div>
      <div className="menuItems" id="menuItems">
        <a href="/" className="navItems1">
          Home
        </a>
        <a href="/about" className="navItems2">
          About Us
        </a>
        <a href="/shop" className="navItems3">
          Shop
        </a>
        <a href="/contact" className="navItems4">
          Contact
        </a>
        <a href="/Account" className="navItems4">
          My Account
        </a>
      </div>
    </div>
  );
};

export default Navbar;
