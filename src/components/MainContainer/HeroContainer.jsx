import React from 'react'
import "./Hero.css"
import useNowPlayingMovies from "../../Hooks/useNowPlayingMovies"
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const HeroContainer = () => {
    const {apiData} = useNowPlayingMovies()
    if(!apiData || apiData.length === 0) return <h1>Loading...</h1>
    const mainMovie = apiData[0]
    const {original_title, overview, id} = mainMovie
  return (
    <div className="hero-wrapper">
      <VideoBackground movieId={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  )
}

export default HeroContainer
