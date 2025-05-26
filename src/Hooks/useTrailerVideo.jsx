import { useEffect, useState } from "react"
import { API_OPTIONS } from "../utils/constants"


const useTrailerVideo = (movieId)=>{
    const [trailerKey, setTailerKey] = useState(null)

    const getMovieVideo = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS)
        const json = await data.json()
        const videos = json.results.filter(video => video.type === "Trailer")
        const Trailer = videos[0]
        setTailerKey(Trailer.key)
    }

    useEffect(()=>{
        getMovieVideo()
    },[])

    return {
        trailerKey
    }
}

export default useTrailerVideo;