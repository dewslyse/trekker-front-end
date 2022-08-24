/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './HomeCarousel.module.scss';

const HomeCarousel = () => {
  const destinations = useSelector((state) => state.destinations);
  const [sliderIndex, setSliderIndex] = useState(1);

  const {
    containerSlider, slide, activeAnim, containerDots,
    dot, active, carouselInner, slideContent,
  } = styles;

  const nextSlide = () => {
    if (sliderIndex === destinations.length) {
      setSliderIndex(1);
    } else {
      setSliderIndex(sliderIndex + 1);
    }
  };

  const handleReservation = (destination) => {
    console.log(destination);
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
              <h2>{destination.name}</h2>
              <p>
                From:
                {' '}
                <span>{destination.fee}</span>
              </p>
              <button type="button" onClick={() => handleReservation}>Book now</button>
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

export default HomeCarousel;
