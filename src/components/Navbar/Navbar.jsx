/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

// 3 props {img, array of objs, }
export default function Searchbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [formData, setFormData] = React.useState({
    search: '',
  });

  return (
  // <nav className="">
  //   <form className="">
  //     <input
  //       type="text"
  //       placeholder="Location..."
  //       name="search"
  //       value={formData.search}
  //       onChange={(event) => setFormData(
  //         { ...FormData, search: event.target.value },
  //       )}
  //       className=""
  //     />
  //   </form>
  // </nav>

    <Navbar bg="light" expand="lg" fixed="top" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand href="#">Foodie</Navbar.Brand>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
}
