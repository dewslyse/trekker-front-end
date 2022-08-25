import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const Destination = () => {
  const destinations = useSelector((state) => state.destinations);
  const { id } = useParams();
  return (
    
    <div>Destination</div>

  )
  
 
};

export default Destination;
