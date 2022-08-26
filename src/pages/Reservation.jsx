import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Sidebar from '../components/Sidebar';
import { addReservation } from '../store/actions/reservationActions';
import { fetchDestinations } from '../store/actions/destinationActions';
// import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './Reservation.scss';

const Reservations = ({ id }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  const createReservation = (e) => {
    e.preventDefault();
    const reservation = {
      startDate, endDate, id,
    };
    dispatch(addReservation(reservation));
  };

  return (
    <div className="page-container">
      <Sidebar />
      <div
        className="r-c"
        style={{
          backgroundImage: `linear-gradient(
        325deg,
        rgba(87, 111, 1, 0.777) 0%,
        rgba(150, 191, 2, 0.93) 100%
        ),url(https://i.ibb.co/jftG089/safari.jpg)`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="r-d">
          <div className="r-h">
            <h3>Book your dream vacation</h3>
          </div>
          <div>
            <form onSubmit={createReservation} method="post">
              <div className="r-b">
                <DatePicker
                  className="dp-1"
                  selected={startDate}
                  value={startDate}
                  onChange={(newValue) => {
                    setStartDate(newValue);
                  }}
                />

                <DatePicker
                  className="dp-1"
                  selected={endDate}
                  value={endDate}
                  onChange={(newValue) => {
                    setEndDate(newValue);
                  }}
                />

              </div>
              <button type="submit" className="btn-1">Book now</button>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

Reservations.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Reservations;
