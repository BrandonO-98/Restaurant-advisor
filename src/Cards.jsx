import React, { useState, useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import CardComponent from './Card';

// eslint-disable-next-line react/prop-types
export default function Cards({ places, childClicked }) {
  const [refs, setRefs] = useState([]);
  useEffect(() => {
    setRefs(Array(places.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);
  console.log(refs);
  return (
    <Container
      className="d-flex flex-column align-items-center
      p-0 h-100 overflow-auto"
    >
      {places.map((place, index) => (
        <CardComponent
          place={place}
          refprop={refs[index]}
          selected={Number(childClicked) === index}
        />
      ))}
    </Container>
  );
}

Cards.propTypes = {
  places: PropTypes.arrayOf({
    name: PropTypes.string,
    price_level: PropTypes.string,
    ranking: PropTypes.string,
    rating: PropTypes.string,
    num_reviews: PropTypes.string,
    photo: { images: { large: { url: PropTypes.string } } },
    cuisine: PropTypes.arrayOf({ key: PropTypes.string, name: PropTypes.string }),
    address: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
    web_url: PropTypes.string,
  }),
};

Cards.defaultProps = {
  places: [
    {
      name: 'Yolo Man Restaurant',
      price_level: '$$ - $$$',
      ranking: '#1 of 1 Restaurants in Dien Dien',
      rating: '5.0',
      num_reviews: '64',
      photo: { images: { large: { url: 'https://media-cdn.tripadvisor.com/media/photo-s/0a/35/c6/91/getlstd-property-photo.jpg' } } },
      cuisine: [{ key: '121', name: 'vietnamese' }],
      address: '24 Dong Khoi, Dien Dien 650000 Vietnam',
      phone: '+84 58 3772 279',
      website: 'https://www.facebook.com/YOLO-Man-Restaurant-1569064976708000/',
      web_url: 'https://www.tripadvisor.com/Restaurant_Review-g15296278-d9982902-Reviews-Yolo_Man_Restaurant-Dien_Dien_Khanh_Hoa_Province.html',
    },
  ],
};
