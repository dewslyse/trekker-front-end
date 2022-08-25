import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { removeReservation, fetchReservations } from '../store/actions/reservationActions';
import './SingleReservations.scss';
import Sidebar from './Sidebar';

const Reservation = () => {
  const reservations = useSelector((state) => state.reservations);
  const destinations = useSelector((state) => state.destinations);
  const [reservationns, setReservationn] = React.useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservations());
  }, []);


  useEffect(() => {
    setReservationn(reservations);
  }, [reservations]);

  const deleteRes = (e, id) => {
    e.preventDefault();
    setReservationn(reservationns.filter((reservation) => reservation.id !== id));
    dispatch(removeReservation(id));
  };

  if (!reservationns.length) {
    return (
      <>
        <Sidebar />
        <div className="noReservation">
          <h3>You have no reservations</h3>
        </div>
      </>
    );
  }

  return (
    <>
      <Sidebar />
      <h3 className="resrvation-title">Reservations</h3>
      <div className="wrp">

        {
       destinations.map((destination) => (
         reservationns.map((reservation) => (
           destination.id === reservation.destination_id && (
           <div id="m-1" key={reservation.id}>
             <Card className="card">
               <Card.Img variant="top" src={destination.image_url} />
               <Card.Body>
                 <Card.Title className="city-name">{destination.city_name}</Card.Title>
                 <Card.Text id="ct">
                   <div className="date">
                     <p className="p-r">Start Date</p>
                     <p className="p-b">{reservation.start_date}</p>
                   </div>
                   <div className="date">
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
    </>
  );
};

export default Reservation;
