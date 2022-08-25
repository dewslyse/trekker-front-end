import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Destinations from './pages/Destinations';
import { fetchDestinations } from './store/actions/destinationActions';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RequireAuth from './components/RequireAuth';
import Reservations from './pages/Reservation';
import Notification from './components/Notification';
import Destination from './pages/Destination';
import Reservation from './components/SingleReservations';

const App = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const [destinationID, setDestinationID] = useState(1);

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  const handleDestination = (id) => {
    setDestinationID(id);
  };

  return (
    <>
      {notification.isOpen && (
      <Notification
        message={notification.message}
        error={notification.isError}
      />
      )}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Public routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="destinations" element={<Destinations />} />
          {/* Protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="destinations/:id" element={<Destination handleDestination={handleDestination} />} />
            <Route path="reservations" element={<Reservations id={destinationID} />} />
            <Route path="reservations/delete" element={<Reservation />} />
            <Route path="/*" element={<Destination />} />
          </Route>
        </Routes>
      </Router>

    </>
  );
};

export default App;
