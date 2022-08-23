import React from 'react';
import { useSelector } from 'react-redux';
// import Carousel from 'react-elastic-carousel';
// import Item from './Item';

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ];

const Destinations = () => {
  const destinations = useSelector((state) => state.destinations);
  return (
    <div className="destinations_container">
      <h1 className="heading">LATEST DESTINATIONS</h1>
      {/* <Carousel breakPoints={breakPoints} className="carousel"> */}
      {destinations.map((destination) => (
        <div key={destination.id}>
          <img className="dimage" src={destination.image_url} alt={destination.name} />
          <h2 className="dname">{destination.name}</h2>
          <p className="dabout">{destination.description}</p>
        </div>
      ))}
      {/* </Carousel> */}
    </div>
  );
};

export default Destinations;
