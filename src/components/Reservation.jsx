import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useSelector, useDispatch } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { addReservation } from '../store/actions/reservationActions';
import { fetchDestinations } from '../store/actions/destinationActions';
import 'react-datepicker/dist/react-datepicker.css';

const Reservations = () => {
  const destinations = useSelector((state) => state.destinations);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [data, setData] = useState({ id: 1, title: 'Serengeti' });

  const { id, title } = data;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDestinations());
  }, []);

  const createReservation = (e) => {
    e.preventDefault();
    const reservation = {
      startDate, endDate, id,
    };
    dispatch(addReservation(reservation));
  };

  const handledropdownChange = (id, title) => {
    setData({ id, title });
  };

  return (
    <>
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
            <h1>Book your dream vacation</h1>
          </div>
          <div>
            <p>Select your dream location to enjoy the best holiday ever!</p>
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
                  dateFormat = "yyyy-MM-dd"
                />

                <DropdownButton align="end" id="down" title={title}>
                  { destinations.map((destination) => (
                    <Dropdown.Item key={destination.id} eventKey="1" onClick={() => handledropdownChange(destination.id, destination.city_name)} selected={destination.city_name}>{destination.city_name}</Dropdown.Item>
                  ))}
                </DropdownButton>

                <button type="submit" className="btn-1">Book now</button>
              </div>

            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default Reservations;
