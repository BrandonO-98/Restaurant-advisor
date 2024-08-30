/* eslint-disable comma-dangle */
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
  // eslint-disable-next-line consistent-return
  const getPlacesData = async (ne, sw) => {
    try {
      const { data } = await axios.get('/.netlify/functions/getPlaces', {
        params: { ne, sw },
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
  const [childClicked, setChildClicked] = useState();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);
      getPlacesData(bounds.ne, bounds.sw).then((data) => {
        // filter places before setting to state
        setPlaces(data?.filter((place) => place.name));
        setIsLoading(false);
      });
    }
  }, [bounds]);

  return (
    <Container fluid className="p-0 m-0">
      <Searchbar setCoordinates={setCoordinates} />
      <Row className="w-100 m-0">
        <Col className="p-0 vh-100" sm={6} md={7} lg={8} xl={9}>
          <Map
            places={places}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            setChildClicked={setChildClicked}
          />
        </Col>
        <Col className="p-0">
          <Carousel
            places={places}
            childClicked={childClicked}
            isLoading={isLoading}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
