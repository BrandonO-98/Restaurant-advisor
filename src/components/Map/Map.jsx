import React from 'react';
import GoogleMapReact from 'google-map-react';
// add markers

export default function Map() {
  const coordinates = { lat: 43, lng: -80 };
  return (
    <div className="h-screen">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY_GOOGLE }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={7}
        margin={[50, 50, 50, 50]}
        options=""
        onChange=""
        onChildClick=""
      />
    </div>
  );
}
