import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import Map from './components/Map/Map';

function App() {
  const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

  // eslint-disable-next-line consistent-return
  const getPlacesData = async (ne, sw) => {
    try {
      const { data: { data } } = await axios.get(URL, {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_RAPID,
        },
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  // { lat: 43, lng: -80 }
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(
    () => {
      getPlacesData(bounds.ne, bounds.sw)
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
      <Map
        setCoordinates={setCoordinates}
        setBounds={setBounds}
        coordinates={coordinates}
      />
    </div>
  );
}

export default App;
