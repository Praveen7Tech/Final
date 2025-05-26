import React from 'react'
import "./Hero.css"

const VideoTitle = ({title, overview}) => {
  return (
   <div className='video-container'> 
   <div className="overlay">
    <h1 className='MovieTitle'>{title}</h1>
    <p className='overview'>{overview}</p>
    
    {/* Button container should be inside overlay */}
    <div className='btn-container'>
      <button className='play-btn'>▶ Play</button>
      <button className='more-info'>ⓘ More Info</button>
    </div>
  </div>
</div>

  )
}

export default VideoTitle
