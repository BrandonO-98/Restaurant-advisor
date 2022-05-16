import React from 'react';
import GoogleMapReact from 'google-map-react';
// add markers

export default function Map() {
  const coordinates = { lat: 43, lng: -80 };
  return (
    <div className="h-screen">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAAzkVyFzH8PUk4V-kHmD2p_ecfH2BzR5M' }}
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
