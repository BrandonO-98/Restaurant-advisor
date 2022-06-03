import React from 'react';
import Container from 'react-bootstrap/Container';
// eslint-disable-next-line import/no-absolute-path
import Cards from '../../Cards';

// eslint-disable-next-line react/prop-types
export default function Carousel({ places }) {
  return (
    <Container fluid className="p-0 pt-custom">
      <Cards places={places} />
    </Container>
  );
}
