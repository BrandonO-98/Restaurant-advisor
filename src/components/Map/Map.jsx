import React from 'react';
import GoogleMapReact from 'google-map-react';
// add markers

// eslint-disable-next-line react/prop-types
export default function Map({ setCoordinates, setBounds, coordinates }) {
  // const coordinates = { lat: 43, lng: -80 };
  return (
    <div className="h-screen">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY_GOOGLE }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={7}
        margin={[50, 50, 50, 50]}
        options=""
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({
            ne: e.marginBounds.ne,
            nw: e.marginBounds.nw,
            se: e.marginBounds.se,
            sw: e.marginBounds.sw,
          });
        }}
        onChildClick=""
      />
    </div>
  );
}
