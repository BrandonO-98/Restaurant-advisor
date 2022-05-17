import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import Map from './components/Map/Map';

function App() {
  const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
  const options = {
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    },
    headers: {
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_RAPID,
    },
  };

  // eslint-disable-next-line consistent-return
  const getPlacesData = async () => {
    try {
      const { data: { data } } = await axios.get(URL, options);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat: 43, lng: -80 });
  const [bounds, setBounds] = useState({});

  useEffect(
    () => {
      getPlacesData()
        .then((data) => setPlaces(data));
    },
    [coordinates, bounds],
  );

  console.log(places);
  console.log(coordinates);
  console.log(bounds);
  return (
    <div className="grid">
      <Navbar />
      <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} />
    </div>
  );
}

export default App;
