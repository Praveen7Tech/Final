import React from 'react'
import "./Movie.css"
import { POSTER_CDN } from '../../utils/constants'
import { Link } from 'react-router-dom'

const MovieCard = ({posterPath,movieTitle, id}) => {
  return (
    <Link className='videoDiv' to={`/player/${id}`}>
    <div className='movie-card'>
      <img src={POSTER_CDN+posterPath} alt="poster img" />
      <p>{movieTitle}</p>
    </div>
    </Link> 
  )
}

export default MovieCard
