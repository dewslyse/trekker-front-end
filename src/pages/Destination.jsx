import React from 'react';
import Sidebar from '../components/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const Destination = () => {
  const destinations = useSelector((state) => state.destinations);
  const { id } = useParams();
  return (
    
  <>
    <Sidebar />
      <div>Destination</div>
  </>

  )
  
 
};

export default Destination;
