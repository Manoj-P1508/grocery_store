import React, { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => (
  <div style={{
    color: 'black', 
    background: 'red',
    padding: '1px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

export default function Maps() {
  const [center, setCenter] = useState({ lat: 10.99835602, lng: 77.01502627 });
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setZoom(15);
      });
    }
  }, []);

  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "Enter_your_Google_API_Key_Here" }}
        center={center}
        zoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => console.log(map, maps)}
        onError={() => console.error("Google Maps API failed to load")}
      >
        <Marker
          lat={center.lat}
          lng={center.lng}
          text="You"
        />
      </GoogleMapReact>
    </div>
  );
}
