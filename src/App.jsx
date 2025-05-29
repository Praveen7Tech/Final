import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Guest from './pages/Guest/Guest';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './context/ProtectedRoute';
import GuestRoute from './context/PublicRoute';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Watchlist from './pages/WatchList/WatchList';

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
          <Route path='/player/:id' element={
            <ProtectedRoute>
              <VideoPlayer/>
            </ProtectedRoute>
          }/>
          <Route path='/movieDetails/:id' element={
            <ProtectedRoute>
              <MovieDetails/>
            </ProtectedRoute>
          }/>
          <Route path='/watchList' element={
            <ProtectedRoute>
              <Watchlist/>
            </ProtectedRoute>
          }/>
      </Routes>
    </div>
  );
};

export default App;
