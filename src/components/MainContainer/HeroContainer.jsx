import React from 'react'
import "./Hero.css"
import useNowPlayingMovies from "../../Hooks/useNowPlayingMovies"

const HeroContainer = () => {
    const {apiData} = useNowPlayingMovies()
    console.log("zzz-",apiData)
  return (
    <div>
       Video
    </div>
  )
}

export default HeroContainer
