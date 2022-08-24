import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Item from './Item';

// const responsive = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Destinations = () => {
  const destinations = useSelector((state) => state.destinations);
  return (
    <div className="destinations_container">
      <h1 className="heading title">LATEST SAFARIS</h1>
      <p className="sub title">Have a funtastic experience</p>
      <p className="sub1 title">```````````````````````</p>
      <Carousel responsive={responsive} className="carousel" containerClass="carousel-container">
        {destinations.map((destination) => (
          <div key={destination.id} className="carousel-data">
            <Item className="img">
              <div>
                <img
                  className="dimage"
                  src={destination.image_url}
                  alt={destination.name}
                />
              </div>
            </Item>
            <h5 className="dname">{destination.name}</h5>
            <p className="sub1 btn">```````````````````````</p>
            <p className="sub dabout">{destination.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Destinations;
