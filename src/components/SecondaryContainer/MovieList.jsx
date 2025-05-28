import React from 'react'
import "./Movie.css"
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    console.log("api data",movies[0].poster_path)
  return (
    <div>
      <div className="now-playing">
        <h2 className="movie-title">{title}</h2>
        <div className="movie-tray">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.backdrop_path} movieTitle={movie.title} id={movie.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList
