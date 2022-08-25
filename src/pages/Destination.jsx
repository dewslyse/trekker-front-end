import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
// import Sidebar from '../components/Sidebar';
import { fetchDestinations } from '../store/actions/destinationActions';
// import './Destination.module.scss';
import styles from './Destination.module.scss';

const Destination = ({ handleDestination }) => {
  const destinations = useSelector((state) => state.destinations);
  const dispatch = useDispatch();

  const {
    destinationContainer, destinationInner, destinationDetails,
    destinationFee, destinationExtras,
  } = styles;

  useEffect(() => {
    dispatch(fetchDestinations());
  }, []);
  const params = useParams();
  return (
    <>
      {/* <Sidebar /> */}
      <div className={destinationContainer}>
        {destinations.map((destination) => (
          destination.id === parseInt(params.id, 10) && (
          <div key={destination.id} className={destinationInner}>
            <img src={destination.image_url} alt={destination.name} />
            <div className={destinationDetails}>
              <h2>{destination.name}</h2>
              <h3>{destination.city_name}</h3>
              <p >{destination.description}</p>
              <div className={destinationExtras}>
                <span>Adventure</span>
                <span>Family time</span>
                <span>Affordable</span>
              </div>
              <p className={destinationFee}>{destination.fee}</p>
              <Link to="/reservations">
                <button type="button" onClick={() => handleDestination(destination.id)}>Reserve</button>
              </Link>
            </div>
          </div>
          )
        ))}
      </div>
    </>
  );
};

Destination.propTypes = {
  handleDestination: PropTypes.func.isRequired,
};

export default Destination;
