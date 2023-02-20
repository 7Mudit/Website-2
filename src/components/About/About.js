import React from "react";
import "./About.css";
import first from "../images/img1.jpeg";
import second from "../images/img-2.jpeg";
const About = () => {
  return (
    <div>
      <div className="aboutUsSection">
        <div className="aboutUsBanner">
          <h1>About Us</h1>
          <h4>
            <a href="/">Home</a> &gt; About Us
          </h4>
        </div>
        <div className="whoWeAre">
          <img src={first} alt="Not Found" className="whoWeAreImage" />
          <div className="whoWeAreText">
            <h1 className="whoWeAreHeading">Who We Are</h1>
            <p>
              Low Printers is owned & managed by “LOW PRINTERS”. Low Printers is
              a online store to provide a wide range of printers through the
              website www.lowprinters.com every season, We bring customers
              to the latest trends along with thousands of items from brands
              across USA & Canada . Low Printers now represents the best
              platform for brands in USA & Canada.
            </p>
          </div>
        </div>
        <div className="whoWeAre">
          <div className="whoWeAreText">
            <h1 className="whoWeAreHeading">We are Low Printers</h1>
            <p>
              The www.lowprinters.com website leverages the success of proven
              e-commerce platform and technology to deliver customers an
              exciting and unique destination Home & Business printer..
              <br />
              <br />
              <br />
              1. We conduct business honestly and treat our consumers ethically.
              <br />
              2. We provide world class service to our customers.
              <br />
              3. Custome relationship is a very important part of our business.
              <br />
              4. Your satisfaction is important to us, and we thank you for your
              business.
            </p>
          </div>
          <img src={second} alt="Not Found" className="whoWeAreImage" />
        </div>
      </div>
    </div>
  );
};

export default About;
