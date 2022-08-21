import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useSelector, useDispatch } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useParams } from 'react-router-dom';
import { addNewReservation } from '../../store/actions/reservationActions';

import 'react-datepicker/dist/react-datepicker.css';

const Reservations = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [title, setTitle] = useState();
  const destinations = useSelector((state) => state.destinations);

  const dispatch = useDispatch();

  const { id } = useParams();
  const createReservation = (e) => {
    e.preventDefault();
    const reservation = {
      destination_id: title,
      start_date: startDate.toLocaleDateString(),
      end_date: startDate.toLocaleDateString(),
      fee: 20.21,
    };
    dispatch(addNewReservation(JSON.stringify(reservation), reservation.destination_id));
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
            <form onSubmit={createReservation}>
              <div className="r-b">
                <DatePicker
                  className="dp-1"
                  selected={startDate}
                  value={startDate}
                  onChange={(newValue) => {
                    setStartDate(newValue);
                    console.log(startDate.toLocaleString())
                  }}
                />

                <DropdownButton align="end" title={title} id="down">
                  {destinations.map((destination) => {
                    if (destination.id == parseInt(id, 10)) {
                      return (<Dropdown.Item eventKey="1" onClick={() => setTitle(destination.id)}>{destination.city_name}</Dropdown.Item>);
                    }
                    return '';
                  })}
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
