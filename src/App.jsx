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
      'X-RapidAPI-Key': 'bc1607b9b9msh959724a4ed88a42p117142jsnf2423bc5be4d',
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

  useEffect(
    () => {
      getPlacesData()
        .then((data) => setPlaces(data));
    },
    [],
  );

  console.log(places);
  return (
    <div className="grid">
      <Navbar />
      <Map />
    </div>
  );
}

export default App;
