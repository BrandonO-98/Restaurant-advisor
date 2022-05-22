import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

// eslint-disable-next-line react/prop-types
export default function Cards({ places }) {
  console.log(places);
  const filteredPlaces = places.filter((place) => place.name);
  return (
    <div className="grid w-11/12 grid-flow-col overflow-x-scroll bg-indigo-200 rounded-2xl">
      {filteredPlaces.map((place) => (<Card place={place} />))}
    </div>
  );
}

Cards.propTypes = {
  places: PropTypes.arrayOf({
    name: PropTypes.string,
    price_level: PropTypes.string,
    rating: PropTypes.number,
    num_reviews: PropTypes.number,
  }),
};

Cards.defaultProps = {
  places: [
    {
      name: PropTypes.string,
      price_level: PropTypes.string,
      rating: PropTypes.number,
      num_reviews: PropTypes.number,
      photo: { images: { large: { url: 'https://www.bradfordbuilt.com/uploads/8/6/9/0/86908622/al-ss-loading_orig.jpg' } } },
    },
  ],
};
