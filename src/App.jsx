import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Guest from './pages/Guest/Guest';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './context/ProtectedRoute';
import GuestRoute from './context/PublicRoute';

const App = () => {
  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={
            <GuestRoute>
              <Guest />
            </GuestRoute>
          }/>
        <Route path="/login" element={
            <GuestRoute>
              <Login />
            </GuestRoute>
          }/>
        <Route path="/home" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
      </Routes>
    </div>
  );
};

export default App;
