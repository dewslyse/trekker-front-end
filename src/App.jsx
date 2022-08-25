import React, { useEffect } from 'react';
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

const App = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

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
            <Route path="destinations/:id" element={<Destination />} />
            <Route path="destinations/:id/reservations" element={<Reservations />} />
            <Route path="/*" element={<Reservations />} />
          </Route>
        </Routes>
      </Router>

    </>
  );
};

export default App;
