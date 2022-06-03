/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Searchbar from './components/Navbar/Navbar';
import Map from './components/Map/Map';
import Carousel from './components/Carousel/Carousel';
import './App.css';

function App() {
  const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

  // eslint-disable-next-line consistent-return
  const getPlacesData = async (ne, sw) => {
    try {
      const { data: { data } } = await axios.get(URL, {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_RAPID,
        },
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  // Set a limit of how many restaus to render. Add a toggle for number of results.
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  // { lat: 43, lng: -80 }
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(
    () => {
      getPlacesData(bounds.ne, bounds.sw)
        .then((data) => setPlaces(data));
    },
    [coordinates, bounds],
  );
  return (
    <Container fluid className="p-0 m-0">
      <Searchbar />
      <Row className="w-100 m-0">
        <Col className="p-0"><Carousel places={places} /></Col>
        <Col className="p-0 vh-100" md={9}>
          <Map
            places={places}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
