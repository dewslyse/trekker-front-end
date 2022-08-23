import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Destinations from './pages/Destinations';
import { fetchDestinations } from './store/actions/destinationActions';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RequireAuth from './components/RequireAuth';
import Reservations from './components/Reservation';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDestinations());
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* Public routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="destinations" element={<Destinations />} />
          {/* Protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="destinations/:id" element={<div>Destination</div>} />
            <Route path="reservations" element={<Reservations />} />
            <Route path="/*" element={<Destinations />} />
          </Route>
        </Route>

      </Routes>
    </Router>
  );
};

export default App;
