/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ReactComponent as Location } from './icons/location.svg';
import { ReactComponent as Phone } from './icons/phone.svg';

export default function CardComponent({
  place: {
    name, price_level, ranking, rating, num_reviews,
    photo, cuisine, address, phone, website, web_url,
  }, refprop, selected,
}) {
  if (selected) refprop.current.scrollIntoView({ behavior: 'smooth' });
  return (
    <Card style={{ width: '90%' }} className="shadow m-2" ref={refprop}>
      <Card.Img
        variant="top"
        src={photo ? photo.images.large.url : 'https://d16jvv1mxapgw7.cloudfront.net/cover_demo_restaurant_2018.jpg'}
        alt="Restaurant"
      />
      <Card.Body>
        <Card.Title className="font-md">{name}</Card.Title>
        <Card.Text className="text-muted font-sm">
          <div className="d-flex justify-content-between">
            <p className="m-0">Price</p>
            <p className="m-0">{price_level}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="m-0">Rating</p>
            <p className="m-0">
              {`${rating} (${num_reviews})`}
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="m-0">Ranking</p>
            <p className="m-0">
              {ranking}
            </p>
          </div>
          <div className="d-flex flex-wrap pt-1">
            {cuisine?.map((elm) => (<h6><span className="badge badge-pill bg-secondary m-1 p-1">{elm.name}</span></h6>))}
          </div>
          <div className="d-flex justify-content-start pb-1">
            <p className="m-0"><Location /></p>
            <p className="mx-1">
              {address}
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="m-0"><Phone /></p>
            <p className="m-0">
              {phone}
            </p>
          </div>
        </Card.Text>
        <Button href={website} target="_blanck" variant="success" size="sm" className="px-2 mx-1">Website</Button>
        <Button href={web_url} target="_blanck" variant="success" size="sm" className="px-2 mx-1">Trip Advisor </Button>
      </Card.Body>
    </Card>
  );
}

CardComponent.propTypes = {
  place: {
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
  }.isRequired,
};
