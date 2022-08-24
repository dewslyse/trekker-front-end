import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from '../store/actions/reservationActions';

const Reservation = () => {
  const reservations = useSelector((state) => state.reservations);
  console.log(reservations)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReservations());
  }, []);
  return (
    <div>
      {reservations.map((reservation) => (
        <div key={reservation.id}>
          <h2>{reservation.start_date}</h2>
          <p>{reservation.end_date}</p>
        </div>
      ))}
    </div>
  );
};

export default Reservation;
