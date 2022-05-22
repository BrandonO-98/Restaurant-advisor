/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

export default function Card({
  place: {
    name, price_level, rating, photo, num_reviews,
  },
}) {
  const bgColor = 'bg-white';
  return (
    <div className={`grid h-[280px] w-60 mx-4 ${bgColor} drop-shadow-xl relative top-4 rounded-3xl overflow-hidden border-4 border-white`}>
      <img src={photo ? photo.images.large.url : 'https://d16jvv1mxapgw7.cloudfront.net/cover_demo_restaurant_2018.jpg'} alt="" className="h-40 w-60" />
      <div className="grid h-20 item-center justify-items-center">
        <p className={`${bgColor} font-bold text-center`}>{name}</p>
        <p className={`${bgColor}`}>{`Price Range: ${price_level}`}</p>
        <p className={`${bgColor}`}>
          {`Rating: ${rating} Total Reviews: ${num_reviews}`}
        </p>
      </div>

    </div>
  );
}

Card.propTypes = {
  place: {
    name: PropTypes.string,
    stars: PropTypes.number,
    reviewsNumber: PropTypes.string,
    priceLevel: PropTypes.string,
    ranking: PropTypes.string,
  },
};

Card.defaultProps = {
  place: {
    name: 'h',
    stars: 2,
    reviewsNumber: '1221',
    priceLevel: '$',
    ranking: 'Best',
    photo: { images: { large: { url: 'https://www.bradfordbuilt.com/uploads/8/6/9/0/86908622/al-ss-loading_orig.jpg' } } },
  },
};
