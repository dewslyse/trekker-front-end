import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { fetchDestinations } from '../store/actions/destinationActions';

const Destination = () => {
  const destinations = useSelector((state) => state.destinations);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDestinations());
  }, []);
  const params = useParams();
  return (
    <>
      <Sidebar />
      <div>
        {destinations.map((destination) => (
          destination.id === parseInt(params.id, 10) && (
          <div key={destination.id}>
            <h2>{destination.name}</h2>
            <p>{destination.city_name}</p>
            <p>{destination.description}</p>
            <p>{destination.fee}</p>
            <img src={destination.image_url} alt={destination.name} />
            <Link to="/reservations">
              <button type="button">Reserve</button>
            </Link>
          </div>

          )
        ))}
      </div>
    </>
  );
};

export default Destination;
