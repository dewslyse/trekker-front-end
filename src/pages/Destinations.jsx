/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Carousel from 'react-multi-carousel';
// import Sidebar from '../components/Sidebar';
// import Item from './Item';
import 'react-multi-carousel/lib/styles.css';
// import '../styles/destinations.scss';
// import mobilemenu from '../images/mobilemenu.png';
import styles from './Destinations.module.scss';

// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

const Destinations = () => {
  const destinations = useSelector((state) => state.destinations);

  const { card, cardTop, cardBottom } = styles;
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {destinations.map((destination) => (
        <div className={card} key={destination.id}>
          <div className={cardTop}>
            <img src={destination.image_url} alt={destination.name} />
            <h2>{destination.city_name}</h2>
          </div>
          <div className={cardBottom}>
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Destinations;

/* <h5 className="dname">{destination.name}</h5>
<p className="sub1 btn">```````````````````````</p>
<p className="dabout">{destination.description}</p> */

/* <h1 className="heading title">LATEST SAFARIS</h1>
<p className="sub title">Have a funtastic experience</p>
<p className="sub1 title">```````````````````````</p>
<Carousel responsive={responsive} className="carousel" infinite>
  {destinations.map((destination) => (
    <div key={destination.id} className={carouselCard}>
      <Item className="img">
        <img
          className="dimage"
          src={destination.image_url}
          alt={destination.name}
        />
      </Item>
    </div>
  ))}
</Carousel> */
