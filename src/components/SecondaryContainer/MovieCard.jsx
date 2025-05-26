import React from 'react'
import "./Movie.css"
import { POSTER_CDN } from '../../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='movie-card'>
      <img src={POSTER_CDN+posterPath} alt="poster img" />
    </div>
  )
}

export default MovieCard
