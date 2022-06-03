import React from 'react';
import Container from 'react-bootstrap/Container';
// eslint-disable-next-line import/no-absolute-path
import Cards from '../../Cards';

// eslint-disable-next-line react/prop-types
export default function Carousel({ places, childClicked }) {
  return (
    <Container fluid className="d-flex p-0 pt-custom vh-100">
      <Cards places={places} childClicked={childClicked} />
    </Container>
  );
}
