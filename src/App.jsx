import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Map from './components/Map/Map';
import ScrollMenu from './components/ScrollMenu/ScrollMenu';

function App() {
  return (
    <div className="grid">
      <Navbar />
      <Map />
      <ScrollMenu />
    </div>
  );
}

export default App;
