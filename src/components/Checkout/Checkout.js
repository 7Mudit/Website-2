import React from "react";
import "./Checkout.css";
import mastercard from "../images/Unknown10.png";
import american from "../images/american.png";
import disover from "../images/Discover.png";
import ScrollToTop from "../ScrollToTop/ScrollToTop"
const Checkout = ({ paragraph, prize }) => {
  return (
    <ScrollToTop>
      <div className="checkoutSection">
        <div className="aboutUsBanner">
          <h1>Checkout</h1>
          <h4>
            <a href="/">Home</a> &gt; Checkout
          </h4>
        </div>

        <div className="checkoutSecondSection">
          <div className="billingDetails">
            <h1>Billing Details</h1>
            <label htmlFor="Name"> First Name</label>
            <input type="text" />
            <label htmlFor="Name"> Last Name</label>
            <input type="text" />
            <label htmlFor="Name"> Company Name</label>
            <input type="text" />
            <label htmlFor="Name"> Street Address</label>
            <input type="text" />
            <input type="text" />
            <label htmlFor="Name"> Town / City</label>
            <input type="text" />
            <label htmlFor="Name"> State </label>
            <input type="text" />
            <label htmlFor="Name"> Zip Code </label>
            <input type="text" />
            <label htmlFor="Name"> Phone </label>
            <input type="text" />
            <label htmlFor="Name"> Email Address </label>
            <input type="text" />

            <h3>Additional Information</h3>
            <h3>
              Order Notes <i>(Optional)</i>
            </h3>
            <textarea
              name="orderNotes"
              id="orderNotes"
              cols="30"
              rows="10"
              placeholder="Notes about your order  eg. special notes for delivery"
            ></textarea>
          </div>
          <div className="orderDetails">
            <h1>Your Order</h1>
            <div className="productDetails">
              <h4>
                <b>Product</b>
              </h4>
              <h4>
                <b>SubTotal</b>
              </h4>
            </div>
            <div className="productDetails">
              <h4>{paragraph}</h4>
              <h4>{prize}</h4>
            </div>
            <div className="productDetails">
              <h4>
                <b>TOTAL</b>
              </h4>
              <h4>{prize}</h4>
            </div>
            <h1>Payment</h1>
            <div className="creditCardPaymentDetails">
              <div className="creditCard">
                <input type="radio" name="CreditCard" id="CreditCard" />
                Credit Card
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="svg1"
                  viewBox="0 0 128 80"
                >
                  <path
                    d="M128 75.734c0 2.356-1.91 4.266-4.266 4.266H4.268C1.91 80 0 78.09 0 75.734V4.268C0 1.91 1.91 0 4.268 0h119.467C126.09 0 128 1.91 128 4.268v71.466z"
                    fill="#F9F9FA"
                  />
                  <g fill="#0A67B2">
                    <path d="M58.903 52.018h-6.25L56.56 28h6.253M47.39 28l-5.96 16.52-.705-3.558-2.105-10.8S38.367 28 35.654 28H25.8l-.115.407s3.014.626 6.542 2.745l5.432 20.865h6.513L54.12 28h-6.73zM96.574 52.018h5.74L97.31 28h-5.027c-2.32 0-2.887 1.79-2.887 1.79l-9.324 22.228h6.517l1.303-3.567h7.948l.734 3.568zm-6.88-8.496l3.284-8.99 1.85 8.99h-5.135zM80.56 33.775l.893-5.158s-2.755-1.046-5.624-1.046c-3.105 0-10.474 1.357-10.474 7.95 0 6.206 8.65 6.284 8.65 9.54 0 3.26-7.757 2.678-10.32.622l-.93 5.392s2.793 1.356 7.06 1.356c4.266 0 10.705-2.21 10.705-8.222 0-6.244-8.725-6.826-8.725-9.54 0-2.716 6.09-2.367 8.764-.893z" />
                  </g>
                  <path
                    d="M40.725 40.963l-2.105-10.8S38.367 28 35.654 28H25.8l-.115.407s4.737.982 9.28 4.66c4.345 3.515 5.76 7.896 5.76 7.896z"
                    fill="#FAA634"
                  />
                </svg>
                <img src={mastercard} width="50px" alt="Not Found" />
                <img src={american} width="50px" alt="Not Found" />
                <img src={disover} width="50px" alt="Not Found" />
              </div>
              <h4>Pay securely using your credit card.</h4>
              <label htmlFor="">Card Number</label>
              <input
                type="password"
                className="creditCardPaymentDetailsInput"
                placeholder="Enter your card details"
              />
              <label htmlFor="">Expiration (MM/YY)</label>
              <input
                type="number"
                className="creditCardPaymentDetailsInput"
                placeholder="MM/YY"
              />
              <label htmlFor="">Card Security Code</label>
              <input
                type="number"
                className="creditCardPaymentDetailsInput"
                placeholder="Enter your card Security Code"
              />
            </div>
            <p>
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>
            <p>
              {" "}
              <input type="checkbox" /> I have read and agree to the website
              privacy policy *
            </p>
            <button className="placeOrder">Place Order</button>
          </div>
        </div>
      </div>
    </ScrollToTop>
  );
};

export default Checkout;
