import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import RouteDetails from './pages/RouteDetails';
import ScheduleRide from './pages/ScheduleRide';
import Help from './pages/Help';
import './App.css';

function App() {
  const { isLoggedIn } = useSelector(state => state.user);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={!isLoggedIn ? <Signup /> : <Navigate to="/" />} />
        <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/route/:id" element={<RouteDetails />} />
        <Route path="/schedule" element={isLoggedIn ? <ScheduleRide /> : <Navigate to="/login" />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
