import React from 'react'
import "./Movie.css"
import { POSTER_CDN } from '../../utils/constants'

const MovieCard = ({posterPath,movieTitle}) => {
  return (
    <div className='movie-card'>
      <img src={POSTER_CDN+posterPath} alt="poster img" />
      <p>{movieTitle}</p>
    </div>
  )
}

export default MovieCard
