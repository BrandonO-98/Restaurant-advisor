/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import GoogleMapReact from 'google-map-react';
import Container from 'react-bootstrap/Container';
import { ReactComponent as Location } from '../../icons/location.svg';

export default function Map({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
}) {
  // const coordinates = { lat: 43, lng: -80 };
  return (
    <Container fluid className="h-100 p-0 pt-custom m-0">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={{ lat: 42, lng: -80 }}
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
        onChildClick={(child) => {
          setChildClicked(child);
        }}
      >
        {places?.map((place) => (
          <div
            className="marker"
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
          >
            <Location stroke="#ff0000" fill="#f75757" width="30" height="30" />
            <div className="marker-info">
              <div className="d-flex justify-content-center pt-2 pb-0">
                <p className="font-sm px-2 py-0">{place.name}</p>
                <p className="font-sm px-2 py-0">{`${place.rating} (${place.num_reviews})`}</p>
              </div>
              <img
                className="img-marker-info"
                src={
                  place.photo
                    ? place.photo.images.large.url
                    : 'https://d16jvv1mxapgw7.cloudfront.net/cover_demo_restaurant_2018.jpg'
                }
                alt="place"
              />
            </div>
          </div>
        ))}
      </GoogleMapReact>
    </Container>
  );
}
