import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { fetchReservations } from '../store/actions/reservationActions';
import { fetchDestinations } from '../store/actions/destinationActions';

const Reservation = () => {
  const reservations = useSelector((state) => state.reservations);
  console.log(reservations);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReservations());
  }, []);
  const destinations = useSelector((state) => state.destinations);
  useEffect(() => {
    dispatch(fetchDestinations());
  }, []);

  return (
    <div>
      {

      destinations.map((destination) => (
        reservations.map((reservation) => (
          destination.id === reservation.destination_id && (
            <div key={reservation.id}>
              <Card.Title>{destination.city_name}</Card.Title>
              <p>{destination.city_name}</p>
              <h2>{reservation.start_date}</h2>
              <p>{reservation.end_date}</p>

            </div>
          )
        ))

      ))

    }
    </div>

  );
};

export default Reservation;
