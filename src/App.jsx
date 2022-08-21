import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Destinations from './pages/Destinations';
import Reservation from './components/Reservations/Reservation';
import { fetchDestinations } from './store/actions/destinationActions';
import RequireAuth from './components/RequireAuth';
import Home from './pages/Home';

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
          <Route path="destinations" element={<Destinations />} />
          {/* Protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="destinations/:id" element={<div>Destination</div>} />
            <Route path="destinations/:id/reservations" element={<Reservation />} />
            <Route path="/*" element={<Destinations />} />
          </Route>

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
