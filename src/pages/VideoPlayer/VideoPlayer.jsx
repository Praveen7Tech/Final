import "./VideoPlayer.css"
import React, { useEffect, useState } from 'react'
import back_arrow from "../../assets/back_arrow_icon.png"
import { API_OPTIONS } from "../../utils/constants"
import { useNavigate, useParams } from "react-router-dom"

const VideoPlayer = () => {

    const navigate = useNavigate()

    const {id} = useParams()
    const [playerData, setPlayerData] =useState({
        name:"",
        key:"",
        published_at:"",
        type:""
    })
    console.log("player data",playerData)

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS)
        .then(res => res.json())
        .then(res => setPlayerData(res.results[0]))
        .catch(err => console.error(err));
    },[])
  return (
    <div className="player">
      <img src={back_arrow} alt="" onClick={()=> {navigate(-1)}}/>
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${playerData.key}`}
      title="trailer" frameborder="0" allowFullScreen ></iframe>
      <div className="player-info">
        <p>{playerData.published_at.slice(0, 10)}</p>
        <p>{playerData.name}</p>
        <p>{playerData.type}</p>
      </div>
    </div>
  )
}

export default VideoPlayer
