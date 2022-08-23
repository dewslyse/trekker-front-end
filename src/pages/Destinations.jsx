import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-elastic-carousel';

const Destinations = () => {
  const destinations = useSelector((state) => state.destinations);
  return (
    <div className="destinations_container">
      <Carousel>
        {destinations.map((destination) => (
          <div key={destination.id}>
            <img className="dimage" src={destination.image_url} alt={destination.name} />
            <h2 className="dname">{destination.name}</h2>
            <p className="dabout">{destination.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Destinations;
