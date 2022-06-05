/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Autocomplete } from '@react-google-maps/api';

// 3 props {img, array of objs, }
export default function Searchbar({ setCoordinates }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [formData, setFormData] = useState({
    search: '',
  });
  // I'm guessing on load passes a argument automatically like when using onCLick,
  // the event is automatically the arguement
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = () => setAutocomplete(autocomplete);
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };

  return (
  // <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY_GOOGLE}>
    <Navbar bg="light" expand="lg" fixed="top" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand href="#">Foodie</Navbar.Brand>
        <Autocomplete
          onLoad={onLoad}
          onPlaceChanged={onPlaceChanged}
        >
          <div>hifds</div>

        </Autocomplete>
        {/* <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Container>
    </Navbar>
  // </LoadScript>
  );
}
