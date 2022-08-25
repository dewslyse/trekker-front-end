import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-multi-carousel';
import Sidebar from '../components/Sidebar';
// import { useNavigate } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import Item from './Item';
import '../styles/destinations.scss';
// import mobilemenu from '../images/mobilemenu.png';

const responsive = {
  desktop: {
    breakpoint: { max: 1200, min: 600 },
    items: 3,
    // slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 600, min: 464 },
    items: 2,
    // slidesToSlide: 9, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 300 },
    items: 1,
    // slidesToSlide: 1, // optional, default to 1.
  },
};

const Destinations = () => {
  const destinations = useSelector((state) => state.destinations);
  // const navigate = useNavigate();
  // const handleMenu = () => {
  //   navigate('/login');
  // };

  return (
    <div className="destinations_container">
      <h1 className="heading title">LATEST SAFARIS</h1>
      <p className="sub title">Have a funtastic experience</p>
      <p className="sub1 title">```````````````````````</p>
      <Carousel responsive={responsive} className="carousel" infinite>
        {destinations.map((destination) => (
          <div key={destination.id} className="carousel-data">
            <Item className="img">
              <div>
                <img
                  className="dimage"
                  src={destination.image_url}
                  alt={destination.name} />
              </div>
            </Item>
            <h5 className="dname">{destination.name}</h5>
            <p className="sub1 btn">```````````````````````</p>
            <p className="dabout">{destination.description}</p>
          </div>
        ))}
      </Carousel>
    </div>      
  );
};

export default Destinations;
