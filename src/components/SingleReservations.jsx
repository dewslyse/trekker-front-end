import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { removeReservation, fetchReservations} from '../store/actions/reservationActions';
import { fetchDestinations } from '../store/actions/destinationActions';


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
   }

 
  return (
    <>

      {
       destinations.map((destination) => (
         reservations.map((reservation) => (
           destination.id === reservation.destination_id && (
           <div key={reservation.id}>
             <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src={destination.image_url} />
               <Card.Body>
                 <Card.Title>{destination.city_name}</Card.Title>
                 <Card.Text>
                   <p>{reservation.start_date}</p>
                   <p>{reservation.end_date}</p>
                 </Card.Text>
                 <Button variant="danger" onClick={(e) => deleteRes(e, reservation.id)}> Delete</Button>
               </Card.Body>
             </Card>

           </div>
           )
         ))

       ))

    }
    </>

  );
};

export default Reservation;
