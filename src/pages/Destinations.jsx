import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../components/Sidebar';

const Destinations = () => {
  const destinations = useSelector((state) => state.destinations);
  return (
    <>
      <Sidebar />
      <div>
        {destinations.map((destination) => (
          <div key={destination.id}>
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
            <img src={destination.image_url} alt={destination.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Destinations;
