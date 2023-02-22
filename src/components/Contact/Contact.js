import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "./Contact.css";
const Contact = () => {
  const center = useMemo(() => ({ lat: 44.15477, lng: -81.02596 }), []);

  const { isLoaded } = useLoadScript({
    // googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    googleMapsApiKey: "AIzaSyB26VJ7ADx-JHalAdf8mkl0H5Z_xOGjRwM",
  });
  if (!isLoaded) return <div className="loading">Loading...</div>;
  else
    return (
      <div className="contactUsSection">
        <h1 className="contactUsHeading">Contact Us</h1>
        <h1 className="contactUsAddress">
          LOW PRINTERS 
          <br />
          info@lowprinters.com 
          <br />
          548 11th AVE Hanover, ON N4N 2S4
          <br />
          Contact Number : 800-840-1731
        </h1>
        <GoogleMap
          zoom={12}
          center={center}
          mapContainerClassName="map-container"
        >
          <MarkerF position={{ lat: 44.15477, lng: -81.02596 }}></MarkerF>
        </GoogleMap>
      </div>
    );
};

export default Contact;
