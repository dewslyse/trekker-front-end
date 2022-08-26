/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import trekker from '../trekker.png';

const Home = () => {
  const destinations = useSelector((state) => state.destinations);
  const [sliderIndex, setSliderIndex] = useState(1);

  const {
    containerSlider, slide, activeAnim, containerDots,
    dot, active, carouselInner, slideContent, slideContentMain, slideContentSide,
    slideContentSideMain, slideContentSideContent, contentWrapper, slideContentImg, logo,
  } = styles;

  const nextSlide = () => {
    if (sliderIndex === destinations.length) {
      setSliderIndex(1);
    } else {
      setSliderIndex(sliderIndex + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3750);
    return () => clearInterval(interval);
  });

  return (
    <div className={containerSlider}>
      <div className={carouselInner}>
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className={sliderIndex === destination.id ? `${slide} ${activeAnim}` : slide}
            style={{ backgroundImage: `linear-gradient(to top, #ffb400ba, #ffc642cc), url(${destination.image_url})`, backgroundSize: 'cover' }}
          >
            <div className={slideContent}>
              <div
                className={slideContentImg}
                style={{ backgroundImage: `url(${destination.image_url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                alt="destination"
              >
                <img className={logo} src={trekker} alt="Logo" />

              </div>
              <div className={slideContentMain}>
                <h2>{destination.name}</h2>
                <div className={contentWrapper}>
                  <div className={slideContentSide}>
                    <p className={slideContentSideMain}>From </p>
                    <p className={slideContentSideContent}>{destination.fee}</p>
                  </div>
                  <Link to="login">Book now</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={containerDots}>
        {destinations.map((destination) => (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            type="button"
            key={destination.id}
            className={sliderIndex === destination.id ? `${dot} ${active}` : dot}
            onClick={() => setSliderIndex(destination.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
