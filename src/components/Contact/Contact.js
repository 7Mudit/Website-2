import React , {useMemo} from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import './Contact.css'
const Contact = () => {
  const center = useMemo(() => ({ lat: 32.95091, lng: -117.05985 }), []);

  const { isLoaded } = useLoadScript({
    // googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    googleMapsApiKey: "AIzaSyB26VJ7ADx-JHalAdf8mkl0H5Z_xOGjRwM",
  });
  if (!isLoaded) return <div>Loading...</div>;
  else
    return (
      <div className="contactUsSection">
        <h1 className="contactUsHeading">Contact Us</h1>
        <h1 className="contactUsAddress">
          548 11th Av Hanover
          On N4N 2S4 CANADA
          <br />
          Contact Number : +1 909 907 9935 
        </h1>
        <GoogleMap
          zoom={12}
          center={center}
          mapContainerClassName="map-container"
        >
          <MarkerF position={{ lat: 32.95091, lng: -117.05985 }}></MarkerF>
        </GoogleMap>
      </div>
    );
};

export default Contact;
