import React from 'react';
import Container from 'react-bootstrap/Container';
// eslint-disable-next-line import/no-absolute-path
import Cards from '../../Cards';

// eslint-disable-next-line react/prop-types
export default function Carousel({ places, childClicked, isLoading }) {
  return (
    <Container
      fluid
      className="d-flex pt-custom vh-100 justify-content-center align-items-center"
    >
      {isLoading ? (
        <div
          className="spinner-border mb-5"
          role="status"
          style={{ width: '8rem', height: '8rem' }}
        >
          <span className="sr-only" />
        </div>
      ) : (
        <Cards places={places} childClicked={childClicked} />
      )}
    </Container>
  );
}
