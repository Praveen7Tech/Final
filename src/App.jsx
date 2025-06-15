import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './context/ProtectedRoute';
import GuestRoute from './context/PublicRoute';
import LoadingPage from './components/LoadingPage/LoadingPage';

const Guest = React.lazy(()=> import("./pages/Guest/Guest"))
const Login = React.lazy(()=> import("./pages/Login/Login"))
const Home = React.lazy(()=> import("./pages/Home/Home"))
const VideoPlayer = React.lazy(()=> import("./pages/VideoPlayer/VideoPlayer"))
const MovieDetails = React.lazy(()=> import("./pages/MovieDetails/MovieDetails"))
const WatchList = React.lazy(()=> import("./pages/WatchList/WatchList"))

const App = () => {
  return (
    <div>
      <Suspense fallback={<LoadingPage/>}>
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
              <WatchList/>
            </ProtectedRoute>
          }/>
      </Routes>
      </Suspense>
    </div>
  );
};

export default App;
