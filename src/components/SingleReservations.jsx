import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { removeReservation, fetchReservations } from '../store/actions/reservationActions';
import { fetchDestinations } from '../store/actions/destinationActions';
import './SingleReservations.scss';

const Reservation = () => {
  const reservations = useSelector((state) => state.reservations);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDestinations());
  }, []);
  useEffect(() => {
    dispatch(fetchReservations());
  }, [reservations]);
  const destinations = useSelector((state) => state.destinations);

  const deleteRes = (e, id) => {
    e.preventDefault();
    dispatch(removeReservation(id));
  };

  return (
    <div className="wrp">

      {
       destinations.map((destination) => (
         reservations.map((reservation) => (
           destination.id === reservation.destination_id && (
           <div id="m-1" key={reservation.id}>
             <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src={destination.image_url} />
               <Card.Body>
                 <Card.Title>{destination.city_name}</Card.Title>
                 <Card.Text id="ct">
                   <div>
                     <p className="p-r">Start Date</p>
                     <p className="p-b">{reservation.start_date}</p>
                   </div>
                   <div>
                     <p className="p-r">End Date</p>
                     <p className="p-b">{reservation.end_date}</p>
                   </div>

                   <button type="button" id="but-r" variant="danger" onClick={(e) => deleteRes(e, reservation.id)}> Delete</button>
                 </Card.Text>

               </Card.Body>
             </Card>

           </div>
           )
         ))

       ))

    }
    </div>

  );
};

export default Reservation;
