import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <footer class="footer">
        {/* <!--section-1--> */}
        <div class="footer-container">
          {/* <!--col-1--> */}
          <div class="foo-column">
            <h1 class="footer-heading">Get In touch</h1>
            <p class="footer-p">Reach us for any sale & product query</p>
            <p class="footer-p">
              <span class="footer-span">Email:</span> info@lowprinters.com
            </p>
            <p class="footer-p">
              <span class="footer-span">Phone:</span>+91 8008401731
            </p>
            <p class="footer-p">
              <span class="footer-span">Address:</span> 548 11th Av Hanover
              <br />
          On N4N 2S4 CANADA
            </p>
          </div>

          {/* <!--col-2--> */}
          <div class="foo-column">
            <h3 class="footer-subheading">Quick Links</h3>
            <ul class="footer-list">
            <a href="/"><li class="footer-hover-item">Home</li></a>
              {/* <li>
                <span class="current">About Us</span>
              </li> */}
              <a href="/about"><li class="footer-hover-item">About Us</li></a>
              <a href="/shop"> <li class="footer-hover-item">Shop</li></a>
              <a href="/contact"><li class="footer-hover-item">Contact Us</li></a>
            </ul>
          </div>

          {/* <!--col-3--> */}
          <div class="foo-column">
            <h3 class="footer-subheading">My Account</h3>
            <div class="footer-list">
              <li class="footer-hover-item">My Account</li>
              <li class="footer-hover-item">Privacy Policy</li>
              <li class="footer-hover-item">Refund and Return Policy</li>
              <li class="footer-hover-item">Terms & Condition</li>
              <li class="footer-hover-item">Checkout</li>
            </div>
          </div>

          {/* <!--col-4--> */}
          <div class="foo-column">
            <p class="footer-p">Search</p>
            <form class="form-footer">
              <input type="text" class="form-input" />
              <button class="footer-button">Search</button>
            </form>

            <h3 class="footer-heading">We Accept</h3>
            <div class="footer-line">
              <div class="footer-underline"></div>
              <div class="footer-underline"></div>
            </div>
          </div>
        </div>

        {/* <!--section-2--> */}
        <div class="footer-copyright">
          <div class="footer-content">
            <p class="footer-p">
              Copyright© 2023. All Right Reserved. Owned & Managed by LOW PRINTERS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
