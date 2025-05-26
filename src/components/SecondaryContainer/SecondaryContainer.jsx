import React from 'react'
import MovieList from './MovieList'
import useNowPlayingMovies from '../../Hooks/useNowPlayingMovies'
import usePopularMovies from '../../Hooks/usePopularMovies'
import useTopRatedMovies from '../../Hooks/useTopRatedMovies'
import useUpComingMovies from '../../Hooks/useUpcomingMovies'

const SecondaryContainer = () => {
  const {apiData} = useNowPlayingMovies()
  const {popularMovie} = usePopularMovies()
  const {topRatedMovie} = useTopRatedMovies()
  const {upcomingMovies} = useUpComingMovies()

  if(apiData.length === 0 || !apiData) return
  if(popularMovie.length === 0 || !popularMovie) return
  if(topRatedMovie.length === 0 || !topRatedMovie) return
  if(upcomingMovies.length === 0 || !upcomingMovies) return;
  
  return (
    <div className='secondary-portion'>
      <MovieList title={"Now Playing"} movies={apiData}/>
      <MovieList title={"Popular"} movies={popularMovie}/>
      <MovieList title={"Top Rated"} movies={topRatedMovie}/>
      <MovieList title={"Up Coming"} movies={upcomingMovies}/>
    </div>
  )
}

export default SecondaryContainer
