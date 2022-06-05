/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Autocomplete } from '@react-google-maps/api';
import { ReactComponent as Search } from '../../icons/search.svg';

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

  const onLoad = (autoC) => setAutocomplete(autoC);
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand href="#">Foodie</Navbar.Brand>
        <Autocomplete
          onLoad={onLoad}
          onPlaceChanged={onPlaceChanged}
        >
          <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Search className="d-flex align-self-center" height={25} width={25} />
          </Form>
        </Autocomplete>
      </Container>
    </Navbar>

  );
}
