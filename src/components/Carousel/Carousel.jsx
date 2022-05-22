import React from 'react';
// eslint-disable-next-line import/no-absolute-path
import Cards from '../../Cards';

// eslint-disable-next-line react/prop-types
export default function Carousel({ places }) {
  return (
    <div className="grid grid-rows-1 absolute h-80 bottom-5 item-center justify-items-center">
      <Cards places={places} />
    </div>
  );
}
