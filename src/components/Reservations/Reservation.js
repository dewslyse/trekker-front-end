import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useSelector, useDispatch } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useParams } from 'react-router-dom';
import { addNewReservation } from '../../store/actions/reservationActions';
import { fetchDestinations } from '../../store/actions/destinationActions';
import 'react-datepicker/dist/react-datepicker.css';

const Reservations = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [title, setTitle] = useState('Location');
  const destinations = useSelector((state) => state.destinations);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDestinations());
  }, []);

  const { user_id: userId, destination_id: destinationId } = useParams();
  const [roomId, setRoomId] = useState(destinationId);
  const createReservation = () => {
    const postData = [
      {
        user_id: parseInt(userId, 10),
        destination_id: parseInt(roomId, 10),
        start_date: startDate.toLocaleDateString(),
      },
    ];

    dispatch(addNewReservation(postData));
  };

  let image = '';
  let location = '';

  destinations.map((element) => {
    if (element.id === parseInt(destinationId, 10)) {
      image = element.image_url;
      location = element.address;
    }
    return image;
  });

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
            <form>

              <select onChange={(e) => setRoomId(e.target.value)}>
                { destinations.map((destination) => (
                  <option key={destination.id} value={destination.id}>
                    {destination.city_name}
                  </option>
                ))}
              </select>
              <div className="r-b">
                <DatePicker className="dp-1" selected={startDate} onChange={(date) => setStartDate(date)} />
                <DropdownButton align="end" title={title} id="down">
                  <Dropdown.Item eventKey="1" onClick={() => setTitle(location)}>{location}</Dropdown.Item>
                </DropdownButton>
                <button type="submit" className="btn-1" onClick={createReservation}>Book now</button>
              </div>

            </form>
            { addNewReservation.payload && addNewReservation.payload.status === 201
            && <p>Reservation was successful!</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservations;
